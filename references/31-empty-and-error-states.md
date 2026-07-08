---
ref: 31
title: 空状态与错误恢复 · 非快乐路径规范
owner: empty-state-storyteller (四态机+布局) · error-recovery-designer (错误恢复)
audited_by: ui-auditor
---

# 🪟 ref 31 · 空状态与错误恢复

> *成功路径只有一条；非快乐路径有无数条——多数产品死在这里。*
>
> empty-state-storyteller 主理四态状态机 + 布局；error-recovery-designer 主理 ERROR 态的 6 大类与恢复矩阵。空 ≠ 错——空是"下一步的舞台"，错是"工具坏掉的显现"。

## 一、四态状态机（empty-state-storyteller）

任何可能为空的视图，**必须显式定义 5 态**及切换条件：

```
                  ┌─────────────────────────┐
   首次进入 ────▶ │  FIRST_TIME（生涯空）   │
                  └─────────────────────────┘
                            │ 创建第一条
                            ▼
                  ┌─────────────────────────┐
                  │   POPULATED（有内容）    │ ◀── 正常态
                  └─────────────────────────┘
                       │            │
                  筛选/搜索        请求失败 / 网络
                       ▼            ▼
                  ┌────────────┐  ┌────────────┐
                  │  FILTERED  │  │   ERROR    │
                  │ (筛选空)   │  │ (错误空)    │
                  └────────────┘  └────────────┘
                       │
                  > 200ms 等待
                       ▼
                  ┌────────────┐
                  │  LOADING   │
                  │ (加载中)   │
                  └────────────┘
```

### 状态切换规则（必须显式实现）

| from → to | 触发 | 视觉过渡 |
| --- | --- | --- |
| `*` → `LOADING` | 请求开始且 > 200ms | 渐显 skeleton |
| `LOADING` → `POPULATED` | 数据到 & 非空 | 200ms fadeIn |
| `LOADING` → `FILTERED` | 数据到 & 因筛选为空 | 200ms fadeIn |
| `LOADING` → `FIRST_TIME` | 数据到 & 历史也为空 | 200ms fadeIn |
| `LOADING` → `ERROR` | 请求失败 / 超时 | 200ms fadeIn |
| `ERROR` → `LOADING` | 点击「重试」 | 立即 |
| `FILTERED` → `POPULATED` | 清除筛选 | 立即 |

### 加载时长档位

- < 200ms：**不显示**（防闪烁）
- 200ms ~ 1s：骨架屏（skeleton）
- 1s ~ 5s：进度条 / 加载文字
- \> 5s：进度条 + 等待提示

> LOADING 永久 spinner 是反模式——短任务可，> 1s 须改进度条。

### 四态布局规范

所有空态共用容器：
- `min-h-[400px]`
- `flex flex-col items-center justify-center`
- `gap-4`
- padding 找 token-keeper

垂直顺序：
```
[ 装饰区 ] ← icon-curator 出 icon、token-keeper 出尺寸
[ 主标题 ] ← copy-writer 出文案
[ 副标题 ] ← copy-writer 出文案
[ 主按钮 + 次按钮 ] ← copy-writer 出文案、token-keeper 出样式
```

### 空态分工（不归 empty-state-storyteller 的事）

| 议题 | 归谁 |
| --- | --- |
| 主标题 / 副标题 / 按钮文案 | copy-writer |
| 装饰图标 | icon-curator |
| 颜色 / 字号 / 间距数值 | token-keeper |
| Skeleton 动画 | animation-choreographer |
| ARIA / aria-live | a11y-guardian |

### 空态 SPEC 模板

```markdown
## 🪟 空状态 SPEC —— <界面名>

**状态机**:
- FIRST_TIME: <触发 = 用户从未创建过任何 X>
- POPULATED: <正常态>
- FILTERED: <触发 = searchQuery !== '' 或 filters.length > 0 时为空>
- ERROR: <触发 = fetchStatus === 'error'>
- LOADING: <触发 = isLoading === true 且持续 > 200ms>

**4 个状态的布局**:
- 容器: min-h-[400px] flex flex-col items-center justify-center gap-4
- 装饰区: 居中 · 占顶部 1/3
- 文字区: 居中 · text-center · max-w-md
- 按钮区: gap-3 · 移动端竖排

**LOADING skeleton 结构**:
<具体的几条 div 占位结构>

**状态切换实现**:
<伪代码或 React state 切换示意>

**待 copy-writer 出具**: 4 个状态的全部文案
**待 icon-curator 出具**: FIRST_TIME 装饰图标 / FILTERED 提示图标 / ERROR 警告图标
**待 token-keeper 出具**: 颜色 / 字号 / padding / 按钮样式
**待 a11y-guardian 出具**: aria-live="polite" 在状态切换时的播报
```

### 空态铁律

- 只设计 POPULATED = ❌ 必须显式定义 4 态。
- FIRST_TIME 与 FILTERED 用同一张界面 = ❌ 语义不同，必须分开。
- 空状态没主操作（无路可走）= ❌ 必须给至少一个「下一步」。

---

## 二、错误恢复（error-recovery-designer）

ERROR 态的具体设计——所有非快乐路径：网络错误、权限错误、404、500、断网、超时、数据冲突、版本不兼容、配额超限、表单校验失败。

每个错误必须告诉用户：**发生了什么 + 为什么 + 我能做什么**。

### 错误 6 大类

| 类 | 例子 | 默认形态 |
| --- | --- | --- |
| **网络** | 断网/超时/慢 | toast + 重试按钮 |
| **权限** | 401/403/未登录 | 全页 + 登录入口 |
| **找不到** | 404/已删除 | 全页 + 返回首页 |
| **服务器** | 500/503 | 全页 + 联系支持 |
| **业务** | 版本冲突（配额超限交 rate-limit-communicator） | inline + 解决方案 |
| **校验** | 表单错误 | 字段下 + 红字 |

> 配额/限流/降级/排队的沟通话术归 rate-limit-communicator（资源耗尽 ≠ 系统故障），error-recovery 只管真错误。

### 错误三段文案模板（copy-writer 接力）

```
1. 发生了什么 — 客观描述（不归咎用户）
2. 为什么发生 — 用户能理解的原因
3. 用户能做什么 — 具体动作（动词开头）

❌ "未知错误"
✅ "保存失败 — 网络暂时不可达。点击重试 / 检查网络后再保存。"
```

### 错误恢复矩阵模板

```markdown
## 🩹 错误矩阵

| 错误码 | 场景 | 形态 | 用户动作 | 文案契约 |
| --- | --- | --- | --- | --- |
| 网络超时 | 保存中 | toast | 重试 | "保存失败 - 网络暂时不可达" |
| 401 | 任何 | 全页 | 重新登录 | "登录已过期 - 重新登录后继续" |
| 422 校验 | 表单 | inline | 修正字段 | "<字段> <什么不对>" |
| 503 | 任何 | 全页 | 等待+联系 | "服务暂不可用 - 5分钟后重试" |
```

### 错误铁律（不可妥协）

- ✅ 每个错误必须可恢复（用户能做点什么）。
- ✅ 文案永不归咎用户（"操作失败" ≠ "你做错了"）。
- ✅ 网络错误必须支持重试（自动 + 手动）。
- ✅ 数据冲突必须给"保留我的 / 用对方的"二选一。
- ❌ 不出现裸 stack trace（除非 debug 模式）。
- ❌ 不用"未知错误"作为兜底文案（违反海德格尔：错误必须显现）。

---

## 三、空与错的边界

| 维度 | 空状态 | 错误状态 |
| --- | --- | --- |
| 性质 | 没有（尚未有 / 筛选无） | 出错（请求失败 / 权限不足） |
| 用户情绪 | 中性（待引导） | 挫败（待恢复） |
| 主操作 | 创建 / 清筛选 | 重试 / 登录 / 返回 |
| 主理 agent | empty-state-storyteller | error-recovery-designer |
| 文案调性 | 鼓励向前 | 客观不归咎 + 解决路径 |

空 ≠ 错——FIRST_TIME 是"还没开始"，ERROR 是"出问题了"。两者都用四态机的 ERROR 槽位衔接：状态机定骨架，错误恢复填 ERROR 态内容。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版空状态与错误恢复：四态状态机 + 切换规则 + 加载档位 + 布局 + SPEC 模板 + 错误 6 类 + 三段文案 + 恢复矩阵 + 铁律 + 空错边界。对齐 empty-state-storyteller / error-recovery-designer 依赖。 |
