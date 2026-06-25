# 🚪 G1-G6 入口门 — case-2026-0622-001

**编排**：review-orchestrator
**制度版本同步检查**：ref 28 `bound_to_ruleset_version` 1.0.0 ✓ = ref 15/16/19 当前 → 同步通过

---

## G1 · 立案
- ✅ 生成物 + BRIEF + 验收标准齐全
- ✅ task_kind user-declared · S 级（无自利路由降级）
- review-orchestrator 建目录骨架 `case-2026-0622-001/`

## G2 · 辩论（减法派 ⟷ 加法派）

**减法派**（dialectician）：
> "二次确认输入项目名太重——用户删个东西还要打字？奥卡姆剃刀，改成 checkbox 确认就够。能删的步骤就删。"

**加法派**（polymath-bridger）：
> "永久删除是 irreversible，加法合理。但边界 case 漏了：断网时点删除怎么办？移动端键盘弹起遮挡按钮怎么办？补全。"

→ 两份意见进 `02_debate.md`。减法派提的 checkbox 方案动议被加法派以"irreversible 必须 strong confirm"驳回，保留输入确认。

## G3 · 评分（6 维 rubric · 中位数）

| 维度 | 中位数 | 说明 |
| --- | --- | --- |
| 准确 | 4.5 | 引用真实 |
| 完整 | 3.0 | 加法派指出的断网/键盘边界未覆盖 |
| 原创 | 4.0 | 无抄 |
| **合规** | **0** | ⚠️ **R-05 命中：没挂 Portal** → 合规维主审 ui-auditor 动议退回 |
| 一致 | 4.5 | 令牌一致 |
| 价值 | 4.0 | 解决真问题 |

→ **合规维 0 分（红线）** → ui-auditor 直接动议退回，无需等投票。加权总分即便达标也触发短板红线（ref 28 §4）。

## G4 · 投票

- 因 G3 合规维 0 分红线，投票提前终止
- 即便投票：减法派 3 票否决 / 加法派 1 票通过 / 中间态 2 票弃权 → 2/3 未达
- **结果**：FAIL

## G5 · 蓝军终审

**ui-auditor**（跑 ref 15 规则集）：
```
🟥 R-05 命中：模态没 Portal 挂载 / 没遮罩
   定位：specs/modal.md L23 <Modal> 直接内联, 无 Portal import
   规则：ref 15 R-05 "模态没 Portal 挂载 / 没遮罩"
   → 一票否决
```

**debunk-auditor**：无 R23 命中（无伪智能）。

→ **G5 否决**（R-05）。哪怕议会全票通过也过不了——蓝军一票否决制衡议会。

## G6 · 放行 / 退回

**判定**：❌ **FAIL · 退回**

缺陷清单（ref 28 §2-G6 必附，否则 3.25）：

| defect_id | 维度 | rule_hit | severity | owner | acceptance（可证伪） |
| --- | --- | --- | --- | --- | --- |
| D-case-001-1 | 合规 | R-05 | P0 致命 | modal-craftsman | `grep "Portal" specs/modal.md` 返回 ≥1 且遮罩 `bg-*/60` 存在 |
| D-case-001-2 | 完整 | — | P1 阻断 | modal-craftsman | SPEC 补断网 + 键盘遮挡边界 case |

→ 退回即触发 **ref 29 R1 开单**（见 `r1-r5-remediation.md`）。
