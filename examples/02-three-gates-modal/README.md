# 📜 02 · Three-Gates Modal — 三道门端到端 demo

> *证明 ref 28-30 不是 PDF，是能跑通的流水线。*
> 一个故意触发退回 + 事后复审的模态设计 case，完整走完三道门。

## demo 目标

用 `modal-craftsman` 产出一个「危险删除二次确认」模态，**故意埋一个 R-05 违规**（没挂 Portal），演示：

- **入口门 ref 28**：G1 立案 → G2 辩论 → G3 评分（合规维 0 分）→ G4 投票 FAIL → G5 蓝军 R-05 否决 → G6 退回
- **退回门 ref 29**：R1 开单 → R2 认领 → R3 修复 → R4 复审 → R5 销项 → 回 G3 复审 PASS
- **事后门 ref 30**：归档后 K1 抽样 → K2 复审 → K3 存活（续用）/ 演示衰弱分支

## 主 agent

`modal-craftsman`（修复）+ `ui-auditor`（G5 蓝军）+ `review-orchestrator`（编排）+ `meta-auditor`（M 轨观察）

## 复杂度

⭐⭐⭐⭐（三道门全流程）

## 状态

✅ 完成

## 阅读顺序

1. `brief.md` — moment-strategist 派单（含故意埋的违规点说明）
2. `g1-g6-entry.md` — 入口门六步（含退回判定 + 缺陷清单）
3. `r1-r5-remediation.md` — 退回门五步整改闭环
4. `k1-k4-posthoc.md` — 事后门 K 轨归档复审
5. `case-verdict.md` — review-orchestrator 终态 case 状态

## 这证明什么

| 制度 | demo 证据 |
| --- | --- |
| ref 28 入口门能拦住违规 | G5 蓝军 R-05 否决，议会全票也过不了 |
| ref 29 退回门能闭环整改 | R1-R5 五步走完，工单销项回 G3 复审 PASS |
| ref 30 事后门能查衰弱 | K 轨复审判定存活/衰弱分支 |
| review-orchestrator 能编排 | case_id 状态机全程可追溯 |
| bound_to_ruleset_version 生效 | 流转前同步检查通过 |
