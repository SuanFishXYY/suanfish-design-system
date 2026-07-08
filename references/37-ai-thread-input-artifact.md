---
ref: 37
title: AI 对话线程 · 输入与产物画布
owner: agent-thread-architect (线程图模型) · prompt-input-craftsman (提示输入) · artifact-architect (产物画布)
audited_by: ui-auditor
---

# 🌳 ref 37 · AI 对话线程与输入

> *多轮对话不是一条直线，而是一座花园——每次重新生成都是一次小径分叉。*
>
> Path G AI-native 结构三件套：agent-thread-architect 管对话图模型（fork/regenerate/edit-resubmit/checkpoint）、prompt-input-craftsman 管输入范式（@ / / 命令/附件/IME）、artifact-architect 管长产物画布。哲学锚：博尔赫斯·小径分岔的花园 + 奥斯汀·言语施为性 + 海德格尔·作品世界性。

## 一、对话线程（agent-thread-architect）

### ① 线程结构模型（tree，不是 list）

```
Thread
├─ Message N (user)
│   ├─ Response A (assistant)   ← 当前活跃
│   │   ├─ Message N+1 (user)
│   │   └─ Response B (assistant)
│   ├─ Response A' (regenerate 1)
│   └─ Response A'' (regenerate 2)
└─ Message N (user, edited)     ← 编辑后产生新分支
    └─ Response X (assistant)
```

- 每个消息节点带 `id, parent_id, branch_id, created_at, model, tokens`。
- UI 默认渲染"当前活跃路径"，其他分支折叠。

### ② Regenerate 视觉

- 助手消息卡片底部：`◀ 1/3 ▶`（当前是 3 个版本的第 1 个）。
- 切换时**保留消息位置不滚动**，仅替换气泡内容。
- 切换动画：crossfade 200ms。

### ③ Edit-Resubmit

- 用户消息 hover → ✏️ 编辑入口。
- 编辑后弹确认「重新提交后，之后的对话会进入新分支（旧分支可在 ⋮ 菜单回到）」。
- 编辑提交 → 旧分支折叠到右侧细栏 + 提示 `从此处分叉过 1 次`。

### ④ Checkpoint / 回溯

- 长对话（> 20 轮）自动每 5 轮打 checkpoint。
- 右侧栏目录：`第 1 段 · 标题（AI 总结） · 第 5 段 · ...`。
- 点击 checkpoint → 折叠之后内容 + 「从此处重新开始」入口。

### ⑤ 跨分支对比（实验性）

选两条分支 → "对比模式" → 并排显示，默认 hover 一条另一条同步滚动。

### 线程 SPEC

```yaml
thread:
  data_model: tree
  active_path_default: latest-branch
  regenerate:
    versions_visible: 3
    crossfade_ms: 200
  edit_resubmit:
    creates_new_branch: true
    preserve_old: true
    old_branch_position: right-sidebar
  checkpoint:
    auto_every_n_turns: 5
    show_at_turns_gte: 20
    summary_by: ai
  compare_branches:
    enabled: true
    max_branches: 2
```

### 线程铁律

- regenerate 后旧版本直接消失 → REJECT（违反小径分岔）。
- 编辑用户消息直接覆盖旧分支 → 反提案新建分支（覆盖丢失历史）。
- 100 轮对话都在一个滚动列表 → 强制 checkpoint，否则 REJECT。
- 回溯需明确点击，不能误触（保留"摩擦"，防轻率发言）。

> 边界：agent-thread 管**对话图模型**（几条枝、怎么走回）；气泡/输入区/滚动视觉归 ref 36 chat-ui-craftsman。

---

## 二、提示输入（prompt-input-craftsman）

输入不是打字，是**召唤行为**——意图如何最少摩擦到达 AI。

### ① 容器与增高

| 状态 | 高度 | 视觉 |
| --- | --- | --- |
| 空闲（无内容） | 单行 + 占位符 | 浅边框 · 半透明背景 |
| 输入中 | 自动增高 · 最大 50% 视口高 | 边框深化 · cursor 闪烁 |
| 超出最大 | 内部滚动 | 顶部「↑ 滚动查看」浮标 |
| 禁用（AI 生成中） | 保留高度 · 半透明 + 等待图标 | 不允许输入 · Stop 替代 send |

### ② 键盘行为

| 按键 | 行为 |
| --- | --- |
| `Enter` | 发送（除非 Shift / IME 选词中 / 命令面板打开） |
| `Shift+Enter` | 换行 |
| `Ctrl/Cmd+Enter` | 强制发送（即使命令面板打开） |
| `Esc` | 关闭命令面板 / 取消上传 / 退出多选 |
| `↑`（空输入框） | 编辑上一条用户消息 |
| `Tab`（命令面板） | 接受高亮项 |

**IME（中文输入法）选词时 Enter 必须不发送**——中国用户最大的痛。

### ③ @ 提及系统

- 触发：`@` 后 + 任意可打字字符。
- 弹出面板：知识库 / 历史对话 / 文件 / 团队成员（可配置 source）。
- 选中插入：`@[显示名](id)` 内部结构 · 渲染为彩色 chip。
- 删除：光标在 chip 后退一格 → 整个 chip 删除（不是字符删除）。

### ④ / 命令系统

- 触发：行首 `/`。
- 弹出面板：命令列表（图标 + 名称 + 描述 + 快捷键）。
- 两类行为：
  - **立即命令**（`/clear`, `/new`）→ 直接执行，不进输入。
  - **填充命令**（`/translate`, `/summarize`）→ 填模板 + 光标移到下个 placeholder。

### ⑤ 附件

- **图片**：粘贴（Ctrl+V）/ 拖拽 / 点击 → 缩略图卡片，可删除。
- **文件**：拖拽 / 点击 → 文件卡片（icon + 文件名 + 大小 + 类型徽标）。
- 限制：单次 ≤ 10 个 · 单文件 ≤ 服务端限制（明示）。
- 上传中：卡片进度条 + 取消按钮。

### ⑥ Send 按钮状态机

| 状态 | 视觉 | 触发 |
| --- | --- | --- |
| 空 | 半透明 · 不可点 | 输入为空且无附件 |
| 可发 | 主色实心 + ↑ 图标 | 有内容 |
| 发送中 | 旋转 spinner | 已点击但 AI 未首 token |
| 流式中 | ⏹ Stop · 警示色 | AI 输出中 |

### ⑦ 草稿持久化

- 切换路由 / 刷新页面 → 草稿保留 localStorage。
- 进入页面若有草稿 → 输入框上方「📝 上次未发送的内容（X 分钟前）」+ 「恢复 / 丢弃」。

### 输入 SPEC

```yaml
prompt_input:
  textarea:
    auto_grow: true
    max_height_vh: 50
    placeholder_examples_rotate: true
  keyboard:
    enter_sends: true
    shift_enter_newlines: true
    ime_safe: true
    up_edits_last: true
  mentions:
    trigger: "@"
    panel_sources: [knowledge, history, files, members]
    chip_render: colored
  commands:
    trigger: "/"
    panel_position: above-input
    types: [immediate, fillable]
  attachments:
    image_paste: true
    file_drag: true
    max_count: 10
    show_progress: true
  send_button:
    states: [empty, ready, sending, streaming-stop]
  draft:
    persist: localStorage
    restore_prompt: true
```

### 输入铁律

- IME 选词时 Enter 发送 → REJECT（中文用户灾难）。
- 上传文件不显示进度 → REJECT（用户不知发没发出去）。
- 草稿不保留刷新就丢 → REJECT（违反 owner 意识）。

---

## 三、产物画布（artifact-architect）

> 200 行代码不该躲在气泡里——它是一件作品，值得一块画布。

### ① 脱出阈值（何时启用 Artifact 视图）

| 内容类型 | 阈值 |
| --- | --- |
| 代码 | 行数 ≥ 30 或 包含完整模块 import |
| Markdown 文档 | 字符数 ≥ 1500 或 包含目录结构 |
| SVG/图表 | 任何完整可渲染产物 |
| HTML/JSX 组件 | 任何可独立预览的组件 |
| Diff/Patch | 任何 ≥ 5 行的变更 |

不达阈值 → 留在对话气泡（ref 36 chat-ui-craftsman）。

### ② 布局模式

| 模式 | 触发 | 描述 |
| --- | --- | --- |
| 侧抽屉（默认） | 单产物 · 屏幕宽 ≥ 1024 | 对话左 50% + 画布右 50% |
| 底抽屉 | 移动端 / 屏幕宽 < 768 | 对话 60% + 画布从底部弹 40% |
| 全屏 | 用户手动展开 / 多产物对比 | 对话隐藏 · 画布占满 · 顶部返回 |

切换有动画，画布内容不重新渲染（保留滚动位置和编辑光标）。

### ③ 画布工具栏

- 左：标题（可编辑）+ 类型徽标（code/md/svg/...）。
- 中：视图切换（源码 / 预览 / 分屏）· 仅可预览类型。
- 右：复制 · 下载 · 在新窗口打开 · 关闭。

### ④ 版本与 diff

- AI 对同一 artifact 修改 → 新版本。
- 顶部切换 `◀ v3/5 ▶`。
- diff 视图：默认 unified，可切 side-by-side。
- 「应用此版本」按钮：用户在 vN 上操作时。

### ⑤ 用户编辑

- 画布内直接编辑（代码 → CodeMirror · md → 富文本 + 源码双视图）。
- 编辑后：右上角 `已修改` + 「请 AI 基于我的修改继续」入口。
- 不强制保存 · 编辑只存浏览器 session，关闭警告。

### ⑥ 与对话的双向桥接

- 对话中代码片段可点击 → 跳画布对应位置高亮。
- 画布选中某段 → 「问 AI 关于这段」浮动按钮 → 回对话发问。

### Artifact SPEC

```yaml
artifact:
  threshold:
    code_lines: 30
    markdown_chars: 1500
    any_renderable_svg_html: true
  layout:
    default: side-drawer
    mobile: bottom-drawer
    fullscreen: user-toggleable
    width_split: 50_50
    transition_ms: 300
    preserve_state_on_switch: true
  toolbar:
    title_editable: true
    view_modes: [source, preview, split]
    actions: [copy, download, open-new, close]
  versioning:
    enabled: true
    diff_modes: [unified, side-by-side]
    apply_version_button: true
  user_edit:
    enabled: true
    autosave: session-only
    rerequest_button: true
  bridge:
    chat_to_canvas: click-jump
    canvas_to_chat: selection-ask
```

### Artifact 铁律

- 画布不允许编辑 → REJECT（剥夺用户主权）。
- 关闭画布直接丢弃用户编辑不警告 → REJECT（数据丢失隐患）。
- 默认开还是收：第一次自动开（带「下次自动收」选项），之后尊重用户偏好——强势引导一次，长期尊重选择。
- 画布需 `dialog` role 或 `region` role（a11y-guardian）。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版 AI 对话线程与输入：线程树（regenerate/edit-resubmit/checkpoint/对比）+ 提示输入（容器/键盘 IME/@ / / 命令/附件/send 状态机/草稿）+ 产物画布（脱出阈值/布局/工具栏/版本 diff/编辑/桥接）。对齐 agent-thread-architect / prompt-input-craftsman / artifact-architect 依赖。 |
