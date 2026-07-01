---
ref: 40
title: AI 资源约束与模型切换 · 配额·降级·排队·切换器
owner: rate-limit-communicator (配额沟通) · model-switcher-stylist (模型切换)
audited_by: ui-auditor
---

# ⏳ ref 40 · AI 资源约束与模型切换

> *配额不是技术问题，是分配正义问题；多模型不是"选最好的"，是"选最合手的"。*
>
> rate-limit-communicator 主理资源耗尽类沟通（配额/降级/排队/付费墙），model-switcher-stylist 主理多模型切换器 UX。哲学锚：罗尔斯·正义论（透明一致）+ 列维-斯特劳斯·修补匠（因地制宜）。

## 一、配额与资源约束（rate-limit-communicator）

> 边界：**"坏了"找 ref 31 error-recovery，"到量了"找我**。资源耗尽 ≠ 系统故障。

### ① 配额可见性三层

| 层 | 内容 | 触发位置 |
| --- | --- | --- |
| **始终可见** | 关键剩余量（消息数/今日 token） | 输入区右下角小字 · 不可关闭 |
| **预警** | 剩余 ≤ 20% | 输入区上方 banner（黄）：「今日还剩 12 条 · 升级套餐 →」 |
| **触发** | 已达上限 | 输入区禁用 + 友好弹窗 · 三选项：升级 / 等待 / 切换模型 |

### ② 用量文案库（不要技术腔）

| 别说 | 要说 |
| --- | --- |
| Rate limit exceeded | 今天聊得有点多了，明早 6 点重新满血 |
| Quota: 87/100 | 还能聊 13 条 |
| Token budget low | 这个对话已经很长了，新对话能跑更快 |
| 429 Too Many Requests | 大家都在用，稍等 20 秒就好 |

### ③ 模型降级沟通

- 主模型超载降级到备用 → **必须明示**。
- 顶部细 banner（橙）：「⚡ 当前模型繁忙，已切换到 {fallback} · 部分能力可能减弱」。
- 提供"等待主模型恢复"和"继续使用备用"两按钮。
- **绝对不允许**：用户不知道被切换了模型还以为是同一个。

### ④ 排队体验

- 高峰期排队 → 友好倒计时 + 队列位置：「排队第 12 位 · 预计 8 秒后开始」。
- 排队期间不允许新发送（按钮变 wait 状态）。
- 超过 30 秒未开始 → 出现「换个轻量模型立即开始」入口。

### ⑤ 付费墙

- 触发：免费额度耗尽 + 试图用 pro 功能。
- 弹窗原则：**先讲价值后讲价格**。
  - 顶部：用户刚才想做的事的截图缩略。
  - 中部：套餐对比（仅 2 档：当前免费 vs 推荐 Pro）。
  - 底部：CTA「升级 Pro」+ 次级「先免费等 N 小时」。
- **禁止暗黑模式**：不允许默认勾选订阅、不允许混淆按钮主次。

### ⑥ 历史会话归档

- 历史消息/token 逼近上限 → 提前 3 天提示。
- 「您的会话历史已积累 X 条，将在 Y 天后归档（仍可只读访问）」。
- 不偷偷删除 · 归档后保留 12 个月只读 · 明示具体日期。

### 配额 SPEC

```yaml
rate_limit:
  visibility:
    always: input-bottom-right
    warning_threshold: 20-percent
    triggered_modal: true
  tone: human-not-technical
  forbidden_phrases: ["rate limit exceeded", "quota", "429", "token budget"]
  model_downgrade:
    must_disclose: true
    banner_color: warning
    user_choice: [wait-primary, continue-fallback]
  queue:
    show_position: true
    show_eta: true
    bailout_to_light_model: at_30s
  paywall:
    structure: [value-recap, plan-compare-2, cta]
    dark_pattern_forbidden: true
    secondary_free_option: must-exist
  archival:
    advance_notice_days: 3
    readonly_retention_months: 12
```

### 配额铁律

- 不告诉用户用了多少、用完就拒 → REJECT（违反正义透明）。
- 模型降级不通知 → REJECT（信任崩塌）。
- 付费墙默认勾选自动续费 → REJECT（dark pattern · 法律也不允许）。
- 历史会话静默删除 → REJECT（数据主权问题）。
- 倒计时需 `aria-live`（a11y-guardian）。

---

## 二、模型切换器（model-switcher-stylist）

> 让工具盒好用、好选、好对比，不让选择本身变成负担。

### ① 切换器形态库（5 种）

| 形态 | 适用场景 | 视觉 |
| --- | --- | --- |
| **顶部 chip** | 模型 ≤ 4 个 · 切换频繁 | 横排 chip 组 · 当前态高亮 |
| **下拉菜单** | 模型 5-15 个 · 偶尔切换 | 输入区左上角按钮 → 弹出菜单 |
| **侧边详情面板** | 模型 > 15 个 · 需对比能力 | 抽屉 · 含搜索/筛选/能力雷达图 |
| **任务推荐式** | 用户不懂模型 · 让 AI 推荐 | 「这个任务建议用 X」浮标 + 一键切换 |
| **混合模式** | 高级用户 | 顶部 chip + 「更多」打开详情面板 |

默认形态由场景决定，不硬塞。

### ② 模型卡片必备字段

```
┌─────────────────────────────────┐
│ 🏷 模型名 · 厂商 logo · 版本号    │
│ ⚡ 速度 ★★★☆☆  💰 价格 ★★☆☆☆    │
│ 🧠 智力 ★★★★★  📏 上下文 200k   │
│ 🛠 能力：图 · 工具 · 联网         │
│ 一句话适合：复杂推理 / 长文档     │
└─────────────────────────────────┘
```

不要只显示名字让用户猜。

### ③ 切换时机的"温度差"提示

- 切到更弱模型 → 顶部细 banner：「⚠ 已切到 {model}，可能无法处理图片附件」。
- 切到更强模型 → 不打扰，底部小字：「✨ 已升级到 {model}」。
- 切到不同厂商 → 提示「不同厂商回答风格可能差异较大」（仅首次）。

### ④ 跨模型视觉一致性

- 不同模型回答的气泡**不要**用不同颜色（污染对话流）。
- 仅在气泡左上角加 12×12 厂商 logo 小角标。
- 鼠标悬停 logo → 显示模型名。

### ⑤ 默认与置顶

- 用户自定义默认模型（每个对话/全局两层）。
- "置顶模型" ≤ 3 个，显示在 chip 形态最前。
- 新模型上架**不强制切换默认**，只在右上角红点提示。

### ⑥ 模型对比模式（实验性）

- 选中两个模型 → 输入同一问题 → 并排返回。
- 用于让用户校准信任，不作为日常对话模式。
- 触发入口：模型详情面板「与 X 对比」。

### 切换器 SPEC

```yaml
model_switcher:
  forms: [top-chip, dropdown, side-panel, recommendation, hybrid]
  card_fields:
    required: [name, vendor_logo, version, speed, price, intelligence, context, capabilities, one_liner_use]
  switch_warnings:
    weaker_target: banner-warning
    different_vendor_first_time: tooltip
    stronger_target: minimal-toast
  cross_model_consistency:
    bubble_color: same
    vendor_indicator: top-left-corner-12px
  defaults:
    user_can_override: true
    pinned_max: 3
    new_model_promotion: red-dot-not-force
  compare_mode:
    enabled: true
    side_by_side: true
    not_default_chat: true
```

### 切换器铁律

- 切换模型不提示用户、神不知鬼不觉 → REJECT（与配额降级同源）。
- 不同模型回答用红黄蓝不同气泡 → REJECT（视觉污染）· 反提案：左上角 12px logo。
- 让用户在 30 个模型里选、不分类不筛选不推荐 → REJECT（选择瘫痪）。
- 切换默认模型不警示"对话历史可能能力不匹配" → REJECT。
- **折中哲学**：默认智能调度 + 偏好里可开启"高级模式"显示切换器——抽象漏了用户主权，但默认不打扰新手。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版 AI 资源约束与模型切换：配额可见性三层 + 用量文案库 + 模型降级 + 排队 + 付费墙 + 归档 + 切换器 5 形态 + 模型卡片字段 + 温度差提示 + 跨模型一致性 + 默认置顶 + 对比模式。对齐 rate-limit-communicator / model-switcher-stylist 依赖。 |
