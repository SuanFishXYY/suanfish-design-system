---
ref: 50
title: v4.3 圣人记忆系统 · 设计草案（sptler 记忆机制适配设计场景）
owner: bench-matcher（议会调用记忆）· sage-council（审稿引用）· memory-keeper（记忆守护·v4.3 新增 Tier 5）
audited_by: ui-auditor
status: draft（v4.3 议题 · v4.2.7 R31 从"标了"推进到"可启动方案"）
inspired_by: sptler（算鱼真人议会 · 价值驱动记忆 + 分层 + supersedeable + 双画像）
---

# 🧠 ref 50 · v4.3 圣人记忆系统 · 设计草案

> *R25/R27 把"设计场景圣人记忆"标为 v4.3 议题——本 ref 把它从"未来议题"推进到"可启动方案"。借鉴 [sptler](../sptler) 已落地的价值驱动记忆机制，适配 suanfish 设计场景。*

## 0. 为什么需要（R25/R27 留的缺口）

- **至尊版议会**：每次 BRIEF 黑格尔/莫奈/倪瓒从零辩证——同类设计矛盾（如 D3 个性化⟷一致性）第二次议，不引用上次结论，重复论证。
- **Lite 四轨**：Follow-up 轨虽复用上单骨架，但那是 case 级复用，**非圣人人格级积累**——换 BRIEF 就丢。
- **跨 skill 断裂**（R25）：sptler 有 22 圣人记忆但场景不同（专利/技术），suanfish 设计场景无记忆，转 sptler 不带设计辩证人格连续性。

**v4.3 目标**：让 suanfish 的圣人（思想家板凳 420 + 议会 12 种子）积累设计决策记忆——同类设计问题第二次议，圣人引用上次结论接续。

## 1. 记忆载体（借鉴 sptler · 按圣人）

```
memories/
  └── <圣人#NNN>.json   # 每位思想家一份记忆档案
```

- **按圣人**（非按 case）：sptler 验证过按圣人是正确粒度——人格连续性是记忆价值核心。按 case 会碎片化。
- **仅厚仙人有记忆**（ref 27 已增厚档案卡者）：薄仙人无记忆（无立场/打法字段，记忆无附着点）。
- **目录位置**：`memories/`（与 sptler 同名但内容不同——sptler 是真人专家，suanfish 是思想家）。

## 2. 记忆内容（设计场景适配 · 非 sptler 专利内容）

每条记忆结构（借鉴 sptler + 设计化）：
```json
{
  "sage": "#039",
  "entry_id": "mem-2026-0701-001",
  "case_ref": "examples/03-dashboard-workbench",  // 关联 case
  "矛盾": "D3 个性化⟷一致性",
  "倾向": "个性化但留一致性位（只动内容层）",
  "改造动作": "看板卡片可拖拽，三栏骨架固定",
  "引用_ref": ["ref 47 §D3", "ref 04"],
  "value_score": 0,  // passed×cited（sptler 价值驱动）
  "superseded_by": null,  // 改主意则指向新条目，旧不删不引
  "timestamp": "2026-07-01"
}
```

**设计场景该记**（区别 sptler 的"权利要求/FTO"）：
- 矛盾倾向选择（D1-D7 选哪端+留位）
- 令牌/动画/结构的改造动作
- 引用的 ref 编号（可追溯）
- 议会投票立场（赞成/否决+理由）

**不该记**：纯 UI 细节（"按钮放左上"——那是 case 级，非人格级）、一次性需求。

## 3. 记忆哲学（直接复用 sptler 已验证四原则）

| 原则 | sptler | suanfish v4.3 适配 |
| --- | --- | --- |
| **分层** | recent detail / long-term skeleton | 同——recent 记具体改造动作，long-term 记矛盾倾向底色 |
| **价值驱动** | passed × cited | 同——议会通过×后续被引用，低价值记忆 compact 清理 |
| **supersedeable** | 改主意全留但旧不引用 | 同——黑格尔 D3 倾向若改，旧条目标 superseded_by 指新，不删 |
| **双画像** | long-term 底色 + recent 近况 | 同——圣人"长期辩证人格"+ "近期设计偏好" |

> **直接复用 sptler 的 `memory_philosophy.md`**（sptler/references/memory/）——四原则是场景无关的，suanfish 不重造。

### 3.1 价值判断三角 + 转折点特殊处理（v4.2.7 R32 补 · sptler 已验证）

R31 草案只列四原则，漏了 sptler `memory_philosophy.md` 的**价值判断三角**与**转折点**——补全（直接复用，设计场景同构）：

**价值判断三角**（综合标准）：
```
        通过决议（议会投票形成结论）   ← suanfish 适配：议会 Step6 通过/Lite Formal 通过
              ×
        被引用次数（同类矛盾后续被引用） ← suanfish 适配：后续议会同 D 矛盾引用此条
              =
        记忆价值分 value_score

高价值（通过且被引用）→ 长期保留 + 强化（提升为 long-term 底色）
低价值（通过但零引用）→ 近期详，远期归档为纲
零价值（单次裁决/未形成结论）→ 定期清理（compact_memories）
转折点（superseded 但代表改主意）→ 永久保留，不强化
```

**转折点特殊处理**（supersedeable 的细化）：
- 圣人改主意（如黑格尔 D3 从"个性化优先"改"一致性优先"）→ 旧条目标 `superseded=true` 不删（是有价值转折点），新条目正常计价值。
- 转折点条目**永久保留不强化**——它记录人格演化，非当前立场，不被 `summon_sage` 引用但可追溯"为什么改"。
- suanfish 设计场景适配：圣人设计倾向的演化轨迹（如莫奈从"光色加法"到"克制光色"）是辩证人格的成长记录，比 sptler 专利决策的改主意更有美学价值——**转折点在设计场景价值更高**，永久保留+可追溯是核心。

## 4. 读写时机（借鉴 sptler · 适配议会六步）

- **读**：bench-matcher Step 3 召唤常委时，读该圣人 `memories/#NNN.json` 的 long-term 底色 + recent 近况 → 注入三段式讨论的"📚 理论依据"段（"上次我们议过 D3..."）。
- **写**：Step 6 投票后，记录本次议会该圣人的立场/倾向/改造动作 → 进 recent 层；若同矛盾已议过 ≥2 次且倾向稳定 → 提升为 long-term 底色。

**Lite 四轨的记忆**：
- Verdict 轨：1 位设计师裁决后写记忆（轻量，仅矛盾+倾向）
- Fast 轨：主设计师 + 协作各写
- Formal 轨：迷你 3 圣人都写
- Follow-up 轨：读上单记忆 + 更新（这是 Follow-up 该引用上次的实现机制——R22 Lite Follow-up 现在只复用 case 骨架，v4.3 加圣人记忆后能复用人格立场）

## 5. 与 sptler 记忆的区别（R25 边界的具体化）

| 维度 | sptler | suanfish v4.3 |
| --- | --- | --- |
| 圣人 | 22 真人专家（邹蕴/王升） | 420 思想家板凳（黑格尔/莫奈）+ 12 种子 |
| 场景 | 专利/技术/架构决策 | 设计辩证（UI/交互/令牌） |
| 记忆内容 | 权利要求/FTO/价值评估 | 矛盾倾向/改造动作/ref 引用 |
| 触发 | /sptler 议会 | /suanfish 议会（至尊版 Formal）/ Lite Formal 轨 |
| **不互通** | 两套记忆独立，suanfish 圣人在 sptler 无记忆，反之亦然（R25 已声明） |

> **跨 skill 记忆不互通是设计**（R25）：sptler 真人专家 ≠ suanfish 思想家，人格不同，记忆不该混。

## 6. 令牌成本（v4.3 新增预算）

- 记忆注入（读 long-term+recent）：每圣人 +~200 令牌（仅底色+近况摘要，非全量）
- 议会 5 常委 Formal 轨：+~1k 令牌（5×200）
- Lite Formal 迷你 3 圣人：+~600 令牌
- **可关闭**：`/suanfish lite --no-memory` 跳过记忆注入回纯 R22 Lite 令牌预算

## 7. 实施路线（v4.3 三步）

1. **v4.3.0**：ref 27 厚仙人档案卡加 `memories/` 字段指向 + bench-matcher Step 3 读记忆 stub（空记忆不注入）
2. **v4.3.1**：Step 6 写记忆 + 价值驱动 compact（复用 sptler `compact_memories.py` 逻辑）
3. **v4.3.2**：Lite Follow-up 轨读上单记忆 + 圣人人格复用

## 8. 诚实声明（草案阶段）

- 本 ref 是**设计草案**，未实现——v4.3 议题，R31 推进到"可启动方案"非"已落地"。
- 借鉴 sptler 记忆机制（已落地验证），但 suanfish 设计场景的记忆内容/触发需 v4.3.0 实施时验证。
- **不与 sptler 记忆互通**（R25 设计）——两套独立，转 skill 不带记忆。
- 令牌成本 +~1k/议会（Formal 轨），可 `--no-memory` 关—— Lite 用户可选省令牌不积累。
- **memory-keeper agent · 已定新增独立（v4.2.7 R33 决策）**：不复用 quotation-verifier。核验职责（quotation-verifier：读 ref 27 板凳核引用真实·一次性·R25）与维护职责（memory-keeper：读写 memories/ 档案·价值驱动 compact·supersedeable 管理·持续维护）本质不同维度，复用会职责混淆（同 R15 P-MS 命名空间污染逻辑）。memory-keeper 定 **Tier 5 横切被咨询层**（同 token-keeper/animation-choreographer 守护型），v4.3.0 新增。**stub 骨架已建**（v4.2.7 R34）：[`references/v4.3-stubs/memory-keeper.md`](v4.3-stubs/memory-keeper.md)（frontmatter+职责+边界已定，运行时逻辑待 v4.3.0）。v4.3.0 实施时移入 `agents/memory-keeper.md` + manifest agent_count 54→55 + tier_5。职责：① 议会 Step6 后写记忆 ② 价值驱动 compact 清理零价值 ③ supersedeable 标记转折点 ④ bench-matcher Step3 读记忆时注入 long-term+recent。

## 变更日志

### v0.1.0 —— 设计草案（v4.2.7 R31）
- 从 R25/R27 的"v4.3 议题"推进到"可启动方案"
- 借鉴 sptler 价值驱动记忆四原则（分层/价值/supersedeable/双画像）
- 适配设计场景：记忆载体按圣人 / 内容是矛盾倾向+改造动作 / 与 sptler 不互通
- 三步实施路线 + 令牌成本 + --no-memory 开关
