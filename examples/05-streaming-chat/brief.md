# 📝 BRIEF — AI 流式聊天界面

**派单**：moment-strategist
**case_id**：`case-2026-0701-005`（review-orchestrator 挂号）
**task_kind / 等级**：user-declared · mixed（AI-native 全栈）· S 级

## 需求

业务方要一个「AI 流式聊天」界面：
- 用户输入 → AI 流式回复（token 逐块渲染）
- 支持工具调用（联网搜索 / 代码执行）可视化
- AI 回答带引用来源标注
- 可见思维链（reasoning）但默认折叠
- 配额/模型切换可见
- 支持多轮 regenerate / edit-resubmit

## 主矛盾声明（ref 24 · ref 47 映射）

**双主矛盾**：

1. **D2 自动化 ⟷ 掌控**——AI 流式自动生成（自动化）+ 用户可中断/重生成（掌控留位）
2. **D7 透明 ⟷ 神秘**——思维链/工具调用/引用透明可见（透明）+ 不压倒最终答案（神秘留位）

> 这是 ref 47 §D2 + §D7 的直接演示：自动化倾向（流式）+ 掌控留位（Stop/重生成）；透明倾向（可见性三律）+ 神秘留位（折叠默认不压倒答案）。

## 验收标准（可证伪）

1. 首 token ≤ 400ms 可见，否则补骨架（ref 36 §二）
2. cursor 三态：blink 生成中 / breathe thinking / dots 等待（ref 36）
3. 工具调用四态卡：pending/running/success/error（ref 36 §三）
4. Stop 按钮 ≤ 100ms 响应，已生成内容保留（ref 36 §二 ④）
5. 思维链默认折叠，`💭 已思考 N 秒 · Nk tokens ▼`（ref 39）
6. 引用角标 hover ≥ 200ms 弹预览（ref 41）
7. 配额始终可见（输入区右下），≤20% 预警（ref 40）
8. regenerate 保留旧版本，`◀ 1/3 ▶`（ref 37）
9. IME 选词时 Enter 不发送（ref 37 §二 ②）
10. 错误归因到具体环节，不"未知错误"（ref 31/47）

## ⚠️ 议会强制入场（ref 48 Step 1）

- task_kind=mixed → 三大类全开
- AI-native → stream-craftsman/tool-call-presenter/citation-keeper/reasoning-visualizer 强制
- 关键节点（回答完成）→ tension-composer 审 R-Cross3
- 持续陪伴（流式）→ ambient-architect 审 R-Cross4
- D7 透明 → debunk-auditor 审虚妄（防假装秒回）
