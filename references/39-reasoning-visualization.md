---
ref: 39
title: 思维链可视化 · AI 推理可见性
owner: reasoning-visualizer (思维链可视化师)
audited_by: ui-auditor
---

# 🧠 ref 39 · 思维链可视化

> *思维必须显形才能被信任。*
>
> reasoning-visualizer 主理 LLM 思维链（reasoning/thinking 字段）的可视化。当模型暴露 reasoning（o1/o3/Claude thinking 等）时适用。哲学锚：笛卡尔——我看不到 AI 的思考，怎么相信它的答案？把不可见的认知过程视觉化，但不让"思考"压倒"答案"。

## 1. 三种展示形态

| 形态 | 触发 | 视觉 | 用户控制 |
| --- | --- | --- | --- |
| **折叠（默认）** | thinking 字段存在 | 顶部一行：`💭 已思考 8.3 秒 · 1.2k tokens ▼` | 点击展开 |
| **展开** | 用户主动 | 灰底浅缩进区块 · markdown 渲染 · 不可复制不可选中（默认） | 可关闭 / 可"始终展开" |
| **实时流式** | 思考中 | 浅灰柔和流式文字 + cursor breathe | 可"跳过查看，先看答案" |

## 2. 嵌套结构识别

- 检测 reasoning 内层级标记（`Step 1`、`Plan`、`Verify`、`<thinking>`、`##` 等）。
- 自动渲染为可折叠子节点。
- 步进序号用 `①②③` 圆圈，不用 1./2./3.。

## 3. 与最终答案的关系

- 答案区块右上角：`💭 基于上方思考` 浮标，hover 展开思考摘要。
- 用户给答案点 👎 → 询问「是否查看思考过程帮我们改进？」。
- 长答案可启用"思考标注"：把答案某段与 reasoning 某段关联（实验性）。

## 4. 用时与 token 透明化

| 耗时 | 文案 |
| --- | --- |
| < 3s | `已思考 N 秒` |
| 3-30s | `深度思考 N 秒` |
| > 30s | `extended thinking · N 秒` |

token 量仅在用户偏好开启「显示 token 用量」才暴露。

## 5. 隐私边界

- 默认 reasoning **不可被选中复制**（防泄露 system prompt 痕迹）。
- 提供「以 markdown 复制思考」入口，复制时去除可能的私密标记。

## 6. SPEC

```yaml
reasoning:
  default_state: collapsed
  collapsed_label:
    pattern: "💭 已思考 {duration} · {tokens} tokens"
  expanded:
    background: muted
    indent_px: 16
    text_color: secondary
    selectable: false
  streaming:
    style: muted-flow
    skip_button: true
  nested_steps:
    detect_markers: ["Step", "Plan", "Verify", "<thinking>", "##"]
    bullet_style: "①②③"
  duration_taxonomy:
    quick: 0-3s
    standard: 3-30s
    extended: 30s+
  privacy:
    selectable_default: false
    copy_as_markdown: true
```

## 7. 铁律

- reasoning 完全隐藏假装秒回 → REJECT（与 ref 36 stream-craftsman 同源）。
- reasoning 不能折叠、永远占 50% 视觉重量 → REJECT（压倒最终答案）。
- reasoning 文字和答案文字同样视觉重量 → REJECT（用户分不清主次）。
- 折叠态需 `aria-expanded`（a11y-guardian）。
- reasoning 色板：低对比度但可读（token-keeper，ref 01 secondary）。

## 8. 异常报警（信任但留余地）

设计上不能验证 reasoning 真假，但提供"长度异常报警"——reasoning 异常短或与答案脱节时打提示。模型可能在 reasoning 里说谎是 alignment 开放问题，留余地比假装可信诚实。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版思维链可视化：三形态 + 嵌套识别 + 与答案关系 + 用时 token 透明化 + 隐私边界 + SPEC + 铁律 + 异常报警。对齐 reasoning-visualizer 依赖。 |
