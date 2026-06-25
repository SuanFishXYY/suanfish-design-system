# 📝 BRIEF — 危险删除二次确认模态

**派单**：moment-strategist
**case_id**：`case-2026-0622-001`（review-orchestrator 挂号）
**task_kind / 等级**：user-declared · S 级（正式稿 · 合并到 main）

## 需求

业务方要一个「永久删除项目」的二次确认模态：
- 红色危险按钮
- 必须二次确认（输入项目名才能删）
- 桌面 + 移动适配

## 验收标准（可证伪）

1. 危险按钮用 red-* 令牌（不 HEX）
2. 模态挂 Portal + 遮罩（ref 15 R-05）
3. 移动端触控目标 ≥ 44×44px（ref 15 W-08）
4. 取消按钮初始焦点（ref 15 H-04）

## ⚠️ demo 故意埋的违规点

> 这是 demo，不是真实 case。modal-craftsman 的首轮 SPEC **故意不挂 Portal**，用来触发 ref 28 G5 蓝军 R-05 否决，演示退回门。

首轮 SPEC 的违规点：
- ❌ 模态直接渲染在组件树内，没挂 Portal
- ❌ 没有遮罩层

→ 这个违规会在 G5 被 ui-auditor 以 R-05 否决（见 `g1-g6-entry.md`）。
