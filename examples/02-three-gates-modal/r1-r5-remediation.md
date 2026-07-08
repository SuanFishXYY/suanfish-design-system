# 🔧 R1-R5 退回门整改闭环 — case-2026-0622-001
> ⚠️ 本 demo 演示制度规定的流转·非运行时执行证据（review-orchestrator v4.2.7 `tools:[view,grep,glob]` 无 write·运行时自动化待 v4.3·详见 case-verdict.md 收官声明与 review-orchestrator §v4.2.7 运行时边界诚实声明）

**编排**：review-orchestrator
**SLA**：S 级 P0 = 24h / P1 = 72h（ref 29 §3）

---

## R1 · 开单

review-orchestrator 把 G6 缺陷清单拆成工单，写入 `remediation/`：

| ticket | defect_id | severity | owner | SLA | acceptance |
| --- | --- | --- | --- | --- | --- |
| ticket-1 | D-case-001-1 | P0 | modal-craftsman | 24h | `grep Portal specs/modal.md` ≥1 + 遮罩 bg-*/60 |
| ticket-2 | D-case-001-2 | P1 | modal-craftsman | 72h | SPEC 补断网+键盘边界 |

P0 工单（R 规则命中）抄送 sage_congress 进入升级预备态。

## R2 · 认领

- modal-craftsman 抢认领两张工单
- `claimed_at`: 2026-06-22 10:30
- `eta`: 2026-06-22 22:00（P0 24h 内）
- SLA 计时开始

## R3 · 修复

**ticket-1 修复**（modal-craftsman）：
```diff
- <Modal> ...直接内联
+ <Portal> <Modal> ... + <div className="bg-black/60 fixed inset-0" /> </Portal>
```
证据：`grep "Portal" specs/modal.md` → 返回 1 ✓ / 遮罩 `bg-black/60` 存在 ✓

**ticket-2 修复**（modal-craftsman）：
- 补断网边界：点删除后断网 → 显示"删除请求排队，恢复网络后执行"+ 撤销入口
- 补键盘边界：移动端键盘弹起 → 模态上移 `viewport units` + 按钮常驻可见

→ 两张工单均贴证据，无空口销项。

## R4 · 复审（只验缺陷项 · 不重审整件）

**ticket-1 复审**（ui-auditor · P0 强制换人防自打脸 → 由 debunk-auditor 交叉复审）：
- ✅ PASS：Portal 挂载 + 遮罩 ✓（`grep` 证据通过）
- status → CLOSED

**ticket-2 复审**（modal-craftsman 原审组 · P1 允许原审 + 抽检 10%）：
- ✅ PASS：断网边界 + 键盘边界 SPEC 补全
- status → CLOSED

两复审均带可证伪判定，无放水。

## R5 · 销项

- 该 case 所有 OPEN 工单 CLOSED ✓
- review-orchestrator 重开 `case-2026-0622-001`，状态 `REMEDIATION → IN_REVIEW`
- 回 ref 28 **G3 复审**（不重跑 G1/G2，BRIEF 没变）

## G3 复审（整改后）

| 维度 | 中位数 | 变化 |
| --- | --- | --- |
| 准确 | 4.5 | — |
| 完整 | 4.5 | ↑（边界补全） |
| 原创 | 4.0 | — |
| **合规** | **5** | ↑（R-05 销项 · 零命中） |
| 一致 | 4.5 | — |
| 价值 | 4.0 | — |

加权总分 = 0.25×4.5 + 0.2×5 + 0.15×4.5 + 0.15×4.5 + 0.15×4 + 0.1×4 = **4.475 ≥ 4.0 门槛** ✓
无短板红线 ✓ / G4 投票 2/3 通过 ✓ / G5 蓝军零否决 ✓

→ **G6 判定：✅ PASS · 放行** → 进归档，成为 ref 30 K 轨抽样池。
