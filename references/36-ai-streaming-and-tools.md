---
ref: 36
title: AI 流式与工具调用 · Path G 可见性规范
owner: stream-craftsman (token 流式) · tool-call-presenter (工具调用展示) · chat-ui-craftsman (聊天容器)
audited_by: ui-auditor
---

# 🌊 ref 36 · AI 流式与工具调用

> *AI 一边想一边说——每一个 token 到达时界面都是新的，但用户的视觉锚点不能跳。*
>
> Path G AI-native 可见性三件套：stream-craftsman 管 token 流式渲染、tool-call-presenter 管工具调用展示、chat-ui-craftsman 管聊天容器。哲学锚：赫拉克利特·万物流变 + 奥斯汀·言语行为——工具调用是施为（在做，不只在做）。

## 一、聊天容器（chat-ui-craftsman）

### 消息气泡 4 形态

| 角色 | 对齐 | 背景 | 头像 |
| --- | --- | --- | --- |
| user | 右 | `bg-blue-500 text-white` | 可选 |
| assistant | 左 | `bg-gray-100 text-gray-900` | ✅ AI logo |
| tool | 左 | `bg-amber-50 border-l-4 border-amber-400` | 🔧 |
| system | 居中 | `bg-transparent text-gray-500 text-xs` | 无 |

### 输入区 3 形态

| 形态 | 触发 | 高度 |
| --- | --- | --- |
| 静默 | 默认 | 单行 48px |
| 展开 | 用户输入或 focus | 自适应 max 240px |
| 工具栏 | 上传/快捷指令 | 输入区下方 32px |

### 容器铁律

- 滚动到底部时新消息 auto-stick，向上滚动后停止 stick。
- 流式中可打断（与 conversation-director 协议）。
- 长消息可折叠（> 1000 字默认折叠）。
- 单条气泡 max-width 70% / 600px；长代码块横向滚动或折叠。
- ❌ 不用 modal 包聊天（聊天是主流，不是次流）。

> 边界：chat-ui 管**视觉容器渲染**（气泡/输入区/滚动/流式光标）；多轮对话的 fork/regenerate/edit-resubmit/checkpoint 归 ref 37 agent-thread-architect。

---

## 二、Token 流式（stream-craftsman）

### 三层命题

1. **流的节奏** — 首 token 必须 ≤ 400ms 内可见，否则补占位骨架。
2. **流的形态** — 增量 markdown 不能每 token 重排。建"稳态边界"：未闭合块用伪闭合渲染，避免抖动。
3. **流的终结** — 用户中断（Stop）必须 ≤ 100ms 响应，已生成内容保留不闪烁回滚。

### ① Cursor 形态系统

三种 cursor，不绑死 CSS animation，必须能被父组件随时停止：

| cursor | 形态 | 用途 |
| --- | --- | --- |
| `▍` | 生成中 · 闪烁 530ms | token 流入 |
| `█` | thinking · 实心呼吸 | 模型思考（> 1500ms） |
| `·` | 等待网络 · 三连点 | 首 token 前 > 800ms |

### ② 增量 markdown 渲染策略

- **稳态边界**：每完成一个 markdown 块（段落/列表项/代码块）才提交 DOM，不 per-token。
- **进行中代码块**：`monospace + 灰底 + 无语法高亮` 渲染未闭合段；闭合后才上 syntax highlight。
- **表格**：仅当 `|---|` 分隔行出现才开始 table 渲染；之前保持纯文本。

### ③ 长输出渐进披露

- 输出 > 30 行：最早内容上方出现「⬆ 回到顶部」浮标。
- 输出 > 500 行：自动折叠中间段，保留首/尾 + 折叠提示 + 「展开全文」。

### ④ 中断与重生

- Stop 按钮位置：**固定在输入区右上角**，不在流末尾（流末尾会跳）。
- Stop 后状态：已生成内容保留 + 灰色尾注「（已停止）」+ 重新生成入口。

### 流式 SPEC

```yaml
stream:
  cursor: blink|breathe|dots
  first_token_target_ms: 400
  chunk_commit: per-markdown-block
  pseudo_close: [code-block, table, list]
intermediate_states:
  thinking: {cursor: breathe, duration_threshold_ms: 1500, show_thinking_label: true}
  network_wait: {cursor: dots, after_ms: 800}
interruption:
  button_position: input-toolbar-right
  response_time_ms: 100
  preserve_partial: true
  show_resume: true
```

### 流式铁律

- per-token 跳字（打字机）仅用于前 3 个字的仪式感，> 200 字必须切块提交（per-token 卡 90% 设备）。
- 输出过程中必须允许用户停止（违反用户主权 → REJECT）。
- 思考过程不得完全隐藏假装秒回（欺骗性 UX → REJECT）。
- aria-live="polite" + 屏幕阅读器节流（a11y-guardian）。

---

## 三、工具调用展示（tool-call-presenter）

工具调用是 agent 的"言语行为"——可见、可信、可撤回。

### ① 工具调用卡片四态

| 状态 | 视觉 | 文案 | 交互 |
| --- | --- | --- | --- |
| pending | 灰色边框 + 等待图标 | `已规划：调用 {tool}` | 可取消（若 agent 支持） |
| running | 蓝色脉动边框 + 旋转图标 | `执行中：{tool}` | 可强制中断 |
| success | 绿色细边 + ✓ | `完成：{tool}` | 可展开看输入/输出 |
| error | 红色细边 + ⚠ | `失败：{reason}` | 可展开看错误 + 重试入口 |

### ② 输入输出展示规则

- **默认折叠**：只显示 `tool name + 一行摘要`。
- **展开**：左 input（JSON pretty / yaml 切换）· 右 output（按 MIME 渲染：表格/图片/代码/markdown/纯文本）。
- **大体积**：input > 200 行或 output > 1MB 时，默认前 50 行 + 「查看完整数据」入口。

### ③ 循环调用合并

同一工具连续调用 ≥ 3 次 → 折叠为"批量卡片"：`已调用 N 次 · 用时 X.Xs · 成功 N/失败 M`，内部条目可逐个展开。

### ④ 敏感工具的"二阶段"

副作用工具（write_file / send_email / execute_sql / deploy_* / delete / modify）：
- **第一阶段**：「即将调用」+ 完整参数预览 + 「确认 / 修改 / 取消」。
- 用户确认 → **第二阶段**：变 running，开始执行。
- 默认开启，可在偏好里关闭"信任名单"。

### 工具调用 SPEC

```yaml
tool_call_card:
  states: [pending, running, success, error]
  default_collapsed: true
  io_display:
    input_format: json-pretty
    output_renderers: [markdown, table, image, code, text]
  batch_threshold: 3
  large_io:
    input_lines_limit: 200
    output_bytes_limit: 1048576
  sensitive_tools_two_stage:
    enabled: true
    triggers: [write, send, execute, deploy, delete, modify]
    user_override: trust-list
```

### 工具调用铁律

- 隐藏工具调用让用户觉得 AI 自己干完 → REJECT（违反可见性）。
- 敏感工具不二次确认直接执行 → REJECT（违反可撤回）。
- 调用 100 次每次都显示一张卡 → 反提案批量卡（视觉过载 = 失信）。
- 错误归因到具体环节（agent 判断错 / 工具执行错 / 用户参数错），不笼统"出错了"。
- status 用 `aria-live="polite"` / `role="status"`（a11y-guardian）。

---

## 四、流式与工具调用的衔接

- 工具调用卡在流式过程中嵌入（tool 卡片是流中的一段，stream-craftsman 与 tool-call-presenter 同层协作）。
- 工具输出大产物（> 30 行代码 / 完整文档）→ 移交 artifact-architect（ref 37 §三）进画布，不挤气泡。
- 不达 artifact 阈值的代码留在气泡（chat-ui-craftsman 处理）。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版 AI 流式与工具调用：聊天容器（气泡 4 形态/输入区 3 形态/铁律）+ token 流式（cursor 三态/增量 markdown/渐进披露/中断）+ 工具调用（四态卡/IO/批量/敏感二阶段）+ 衔接。对齐 stream-craftsman / tool-call-presenter / chat-ui-craftsman 依赖。 |
