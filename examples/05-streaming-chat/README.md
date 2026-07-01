# 💬 05 · Streaming Chat — AI-native 内核可视化 demo

> *证明 ref 36-41 AI-native 内核不是悬空规范——能落成一个真实可看的流式聊天界面。*

## demo 目标

用 `conversation-director` 产出一个「AI 流式聊天」界面，**显式演示** AI-native 五件套内核：

- **ref 36 流式与工具调用**：cursor 三态 + 增量 markdown 稳态边界 + 工具调用四态卡 + 中断重生
- **ref 37 对话线程与输入**：线程树 regenerate + @ / / 命令输入 + 产物画布脱出
- **ref 39 思维链可视化**：折叠/展开/流式三态 + 嵌套步进
- **ref 40 配额与模型切换**：配额可见性三层 + 模型切换温度差提示
- **ref 41 引用与来源标注**：inline 角标 + hover 预览 + 可信度三档
- **ref 48 议会推演**：六步协议在这个 BRIEF 实跑

## 主 agent

`conversation-director`（Path G 主理）+ `stream-craftsman`（流式）+ `prompt-input-craftsman`（输入）+ `tool-call-presenter`（工具卡）+ `citation-keeper`（引用）+ `reasoning-visualizer`（思维链）

## 复杂度

⭐⭐⭐⭐⭐（AI-native 全内核 + 多 agent 协作 + 哲学辩证）

## 状态

✅ 完成

## 阅读顺序

1. `brief.md` — moment-strategist 派单（含主矛盾 D2/D7 声明）
2. `plan.md` — conversation-director 组件树 + 议会推演（ref 48 六步）
3. `specs/` — 各 agent SPEC（streaming / thread-input / reasoning / token）
4. `report.md` — ui-auditor 终审 + AI-native 内核体检 + 哲学映射追溯

## 这证明什么

| 内核层 | ref | demo 证据 |
| --- | --- | --- |
| 流式可见性 | 36 | cursor 三态 + 工具卡四态 + 中断 ≤100ms |
| 对话结构 | 37 | regenerate 分支 + @ / 命令 + 产物画布 |
| 推理透明 | 39 | 思维链折叠默认 + 用时 token 透明 |
| 资源约束 | 40 | 配额三层 + 模型降级明示 |
| 引用可信 | 41 | inline 角标 + hover 预览 + 可信度档 |
| 议会推演 | 48 | 六步实跑，常委含 AI-native 专家 |
| 哲学映射 | 47 | D2 自动化⟷掌控 + D7 透明⟷神秘 落地 |
