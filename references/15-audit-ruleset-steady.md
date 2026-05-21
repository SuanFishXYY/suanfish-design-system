---
ref: 15
title: 稳态模式审计规则集
ruleset_version: 1.0.0
bound_to_token_version: 1.0.0
owner: token-keeper（颜色 / 间距相关）、animation-choreographer（动画相关）、ui-architect（结构相关）
audited_by: ui-auditor
---

# 📋 ref 15 · 稳态模式审计规则集 v1.0.0

> *本规则集独立于 ui-auditor。规则的新增 / 修改 / 删除必须由对应 owner 提 PR，并同步更新 `bound_to_token_version` 字段。*

## 版本同步契约

| 字段 | 说明 |
| --- | --- |
| `ruleset_version` | 本规则集的 semver |
| `bound_to_token_version` | 对应 `references/01-design-tokens.md` 的版本号 |

**ui-auditor 在加载本文件时会检查两者是否同步**。如果 `bound_to_token_version` 落后于 ref 01 当前版本，审计直接拒绝执行（`RULESET_OUT_OF_SYNC`），强制 owner 先同步规则集。

---

## 🟥 严重规则（命中必拦 · 拒绝合并）

| 编号 | 规则 | Owner | 检测建议 |
| --- | --- | --- | --- |
| R-01 | 引用了仪式 keyframes（`onbEureka*` / `onboardingPolaroid*`） | animation-choreographer | `grep "onbEureka\|onboardingPolaroid"` |
| R-02 | 主视觉使用了暖色谱（amber / rose 渐变） | token-keeper | `grep "from-amber\|from-rose\|to-amber\|to-rose"` |
| R-03 | 出现了令牌表之外的 HEX 颜色 | token-keeper | `grep "#[0-9a-fA-F]\{6\}"` |
| R-04 | 自创了新的步进器形态 | wizard-designer | 强制内联面包屑模式 |
| R-05 | 模态没 Portal 挂载 / 没遮罩 | modal-craftsman | 检查 `Portal` import + `bg-*/60` 遮罩 |
| R-06 | 空状态视图未定义 4 态状态机（仅有 POPULATED） | empty-state-storyteller | 检查是否处理 FILTERED / ERROR / LOADING |

## 🟧 警告规则（应改 · 带警告可放行）

| 编号 | 规则 | Owner |
| --- | --- | --- |
| W-01 | 动画时长 > 400ms | animation-choreographer |
| W-02 | 动了 `width` / `height` / `top` / `left`（应用 transform） | animation-choreographer |
| W-03 | 新模态尺寸不在 8 种规范内 | modal-craftsman |
| W-04 | 装饰性循环动画（仅 `pulseSubtle` 允许用于 Loading） | animation-choreographer |
| W-05 | 错误状态用了红色（red-* 留给「危险操作」） | token-keeper / empty-state-storyteller |
| W-06 | 加载 > 1s 仍用 spinner 而非进度条 | empty-state-storyteller |
| W-07 | 模态没有 `role="dialog"` 或 `role="alertdialog"` | a11y-guardian |
| W-08 | 触控目标小于 44×44px（移动端） | responsive-strategist |

## 🟨 提示规则（观察 · 不阻断）

| 编号 | 规则 | Owner |
| --- | --- | --- |
| H-01 | 组件缺少 ARIA / 键盘处理 | a11y-guardian |
| H-02 | 同一屏 outline / solid 图标混用（无语义对比） | icon-curator |
| H-03 | 「暂无数据」文案（应具体化） | copy-writer |
| H-04 | 危险按钮初始焦点（应给「取消」） | a11y-guardian |

## 变更日志

### v1.0.0 —— 从 ui-auditor 中拆出
- 19 条规则全部从 v2.0 的 ui-auditor.md 迁移过来
- 新增 R-06（空状态 4 态强制）
- 新增 W-05（错误色与危险色语义分离）
- 新增 W-06（长加载必须进度条）
- 新增 W-08（触控目标）
- 新增 H-04（危险按钮焦点）
