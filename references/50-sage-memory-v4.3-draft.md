---
ref: 50
title: v4.3 圣人记忆系统 · 设计草案（sptler 记忆机制适配设计场景）
owner: bench-matcher（议会调用记忆）· sage-council（审稿引用）· memory-keeper（记忆守护·v4.3 新增 Tier 5）
audited_by: ui-auditor
status: draft（v4.3 议题 · R31 推进到可启动方案 · R38 语义审计 · R40 修 §4 matched retrieval 适配）
inspired_by: sptler（算鱼真人议会 · 价值驱动记忆 + 分层 + supersedeable + 双画像）
---

# 🧠 ref 50 · v4.3 圣人记忆系统 · 设计草案

> *v4.2.7 R25/R27 把"设计场景圣人记忆"标为 v4.3 议题——本 ref 把它从"未来议题"推进到"可启动方案"。借鉴 sptler（孪生项目·见 README §孪生项目） 已落地的价值驱动记忆机制，适配 suanfish 设计场景。*

## 0. 为什么需要（v4.2.7 R25/R27 留的缺口）

- **至尊版议会**：每次 BRIEF 黑格尔/莫奈/倪瓒从零辩证——同类设计矛盾（如 D3 个性化⟷一致性）第二次议，不引用上次结论，重复论证。
- **Lite 四轨**：Follow-up 轨虽复用上单骨架，但那是 case 级复用，**非圣人人格级积累**——换 BRIEF 就丢。
- **跨 skill 断裂**（v4.2.7 R25）：sptler 有 22 圣人记忆但场景不同（专利/技术），suanfish 设计场景无记忆，转 sptler 不带设计辩证人格连续性。

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

每条记忆结构分**文件级**与**条目级**两层（R38 补文件级 · ref50 原只有条目级）：

### 2.1 文件级 `memories/<圣人#NNN>.json`（R38 补 · ref50 原漏文件层）

借鉴 sptler `summon_sage.memory_summary` / `compact_memories.compact_file` 实际读写的结构——记忆档案不是裸 experience 列表，是四件套：
```json
{
  "sage": "#039",
  "profile": { "total_meetings": N, "risk_tendency": "...", "specialty_focus": [...], "stances": {...}, "frequent_views": [{"text": "...", "count": N}] },
  "profile_recent": { /* 同结构 · 最近 30 次 · 注入用近况 */ },
  "experiences": [ /* 条目 · 见 2.2 */ ],
  "archive_summary": { "compacted_count": 0, "deleted_count": 0, "topics": [], "last_compacted_at": null }
}
```
- `profile` / `profile_recent` 由 `update_growth` 产（v4.3.1）；v4.3.0 fixture 手工填。
- `archive_summary` 由 `compact_memories` 产（v4.3.1）；v4.3.0 空骨架。

### 2.2 条目级 experience（R38 修 §3.1 vs §2 矛盾 · 补回 `citation_count`/`is_turning_point`）
```json
{
  "sage": "#039",
  "entry_id": "mem-2026-0703-001",
  "case_ref": "examples/03-dashboard-workbench",
  "task_kind": "structural",            // = sptler domain · §4 匹配要用
  "矛盾": "D3 个性化⟷一致性",            // = sptler topic · §4 匹配要用
  "倾向": "个性化但留一致性位（只动内容层）",  // = sptler stance
  "verdict": "通过",                    // 通过/否决/小修 · value_score 要算
  "改造动作": "看板卡片可拖拽，三栏骨架固定",
  "理由": "内容层个性化不破骨架",          // = sptler reason
  "引用_ref": ["ref 47 §D3", "ref 04"],  // 设计特有 · 可追溯
  "recorded_at": "2026-07-03",          // = sptler recorded_at（非 timestamp · 适配 sptler 时效衰减）
  "value_score": 2,                     // = (verdict通过?1:0) × (citation_count+1)
  "citation_count": 1,                  // 【§2 原漏 · 恢复】价值三角要算 · summon 命中 +1
  "superseded": false,                  // bool · 读路径过滤（不引 superseded）
  "superseded_by": null,                // 指针 · 追溯用 · 弃 sptler supersedes 列表（读路径不读）
  "is_turning_point": false,            // 【§2 原漏 · 恢复】转折点永久保留 · compact 豁免
  "seeded": false                       // fixture 标记·true=手工种子(compact 豁免)·false=正常写路径产出
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
- 圣人改主意（如黑格尔 D3 从“个性化优先”改“一致性优先”）→ 旧条目标 `superseded=true` + `is_turning_point=true` 不删（是有价值转折点 · 对齐 §2 schema），新条目正常计价值。
- 转折点条目**永久保留不强化**——它记录人格演化，非当前立场，不被 `summon_sage` 引用但可追溯"为什么改"。
- suanfish 设计场景适配：圣人设计倾向的演化轨迹（如莫奈从"光色加法"到"克制光色"）是辩证人格的成长记录，比 sptler 专利决策的改主意更有美学价值——**转折点在设计场景价值更高**，永久保留+可追溯是核心。

> **supersede 建模澄清（R38 补 · 核 sptler 源码）**：sptler `memory_philosophy.md` 列了 `supersedes`（列表），但实际读路径 `summon_sage.py` / `compact_memories.py` **从不读它**（只写不读）。suanfish v4.3 只保留 `superseded`（bool · 读路径过滤）+ `superseded_by`（指针 · 追溯），**弃 `supersedes` 列表**——少一个冗余反方向字段，且与 sptler 读路径实际行为一致。

## 4. 读写时机（借鉴 sptler · 适配议会六步）

- **读**（v4.3.0 · 适配 sptler `summon_sage --dry-run`）：bench-matcher Step 3 召唤常委时，读该圣人 `memories/#NNN.json`：
  - **匹配**：topic 传 `primary_contradiction` **全字符串**（如 "D3 个性化⟷一致性"，由 D 码查 ref 47 D1-D7 定义展开——**禁裸传 "D3"**：sptler `relevant_experiences` 用中文双字 `[一-鿿]{2}` 匹配 experience.矛盾，裸 "D3" 无中文双字→0 分漏检，v4.3 核心价值失效）。适配 sptler：读 `task_kind`（sptler 读 `domain`，suanfish 改名）关键词 + 矛盾 中文双字命中 × 时效衰减（90d≈1 / 1y≈0.7 / 2y≈0.4）× `value_score` 打分，排除 `superseded`，取 top3。**主匹配靠 矛盾 双字**（task_kind 是 enum，关键词命中概率低，作辅）。
  - **注入**：匹配命中 → 注入三段式"📚 理论依据"段（"上次我们议过 D3…"）；无命中但 `total_meetings>0` → 注入**最近 3 条**经历（同 sptler `memory_summary` `experiences[-3:]`）；新圣人 → 不注入。
  - **只读约束**：sptler `summon` 命中时 `bump_citations` 会**回写** citation_count。v4.3.0 走 `--dry-run`——只记 `pending_citations` 不写盘，citation bump 推 v4.3.1（只读 scope 的必要约束，R38 补）。
- **写**：Step 6 投票后，记录本次议会该圣人的立场/倾向/改造动作 → 进 recent 层；若同矛盾已议过 ≥2 次且倾向稳定 → 提升为 long-term 底色。

**Lite 四轨的记忆**：
- Verdict 轨：1 位设计师裁决后写记忆（轻量，仅矛盾+倾向）
- Fast 轨：主设计师 + 协作各写
- Formal 轨：迷你 3 圣人都写
- Follow-up 轨：读上单记忆 + 更新（这是 Follow-up 该引用上次的实现机制——v4.2.7 R22 Lite Follow-up 现在只复用 case 骨架，v4.3 加圣人记忆后能复用人格立场）

## 5. 与 sptler 记忆的区别（v4.2.7 R25 边界的具体化）

| 维度 | sptler | suanfish v4.3 |
| --- | --- | --- |
| 圣人 | 22 真人专家（邹蕴/王升） | 420 思想家板凳（黑格尔/莫奈）+ 12 种子 |
| 场景 | 专利/技术/架构决策 | 设计辩证（UI/交互/令牌） |
| 记忆内容 | 权利要求/FTO/价值评估 | 矛盾倾向/改造动作/ref 引用 |
| 触发 | /sptler 议会 | /suanfish 议会（至尊版 Formal）/ Lite Formal 轨 |
| **不互通** | 两套记忆独立，suanfish 圣人在 sptler 无记忆，反之亦然（v4.2.7 R25 已声明） |

> **跨 skill 记忆不互通是设计**（v4.2.7 R25）：sptler 真人专家 ≠ suanfish 思想家，人格不同，记忆不该混。

## 6. 令牌成本（v4.3 新增预算）

- 记忆注入（读 long-term+recent）：每圣人 +~200 令牌（仅底色+近况摘要，非全量）
- 议会 5 常委 Formal 轨：+~1k 令牌（5×200）
- Lite Formal 迷你 3 圣人：+~600 令牌
- **可关闭**：`/suanfish lite --no-memory` 跳过记忆注入回纯 v4.2.7 R22 Lite 令牌预算

## 7. 实施路线（v4.3 三步）

1. **v4.3.0**：ref 27 厚仙人档案卡加 `memories/` 字段指向 + bench-matcher Step 3 读记忆 stub（适配 sptler `summon_sage --dry-run` · D1-D7 matched retrieval · 不回写 citation）+ memory-keeper 移入 agents/（54→55 · tier_5）+ `memories/` 建目录种 1-2 条 fixture（复用 examples/03 D3 内容 · `seeded:true` compact 豁免 · 端到端验证注入路径）。空记忆不注入。
2. **v4.3.1**：Step 6 写记忆 + 价值驱动 compact（复用 sptler `compact_memories.py` 逻辑）
3. **v4.3.2**：Lite Follow-up 轨读上单记忆 + 圣人人格复用

## 8. 诚实声明（草案阶段）

- 本 ref 是**设计草案**，未实现——v4.3 议题，R31 推进到"可启动方案"非"已落地"。
- 借鉴 sptler 记忆机制（已落地验证），但 suanfish 设计场景的记忆内容/触发需 v4.3.0 实施时验证。
- **不与 sptler 记忆互通**（v4.2.7 R25 设计）——两套独立，转 skill 不带记忆。
- 令牌成本 +~1k/议会（Formal 轨），可 `--no-memory` 关—— Lite 用户可选省令牌不积累。
- **memory-keeper agent · 已定新增独立（v4.2.7 R33 决策）**：不复用 quotation-verifier。核验职责（quotation-verifier：读 ref 27 板凳核引用真实·一次性·R25）与维护职责（memory-keeper：读写 memories/ 档案·价值驱动 compact·supersedeable 管理·持续维护）本质不同维度，复用会职责混淆（同 v4.2.7 R15 P-MS 命名空间污染逻辑）。memory-keeper 定 **Tier 5 横切被咨询层**（同 token-keeper/a11y-guardian 守护型），v4.3.0 新增。**stub 骨架已建**（v4.2.7 R34）：[`references/v4.3-stubs/memory-keeper.md`](v4.3-stubs/memory-keeper.md)（frontmatter+职责+边界已定，运行时逻辑待 v4.3.0）。v4.3.0 实施时移入 `agents/memory-keeper.md` + manifest agent_count 54→55 + tier_5。职责：① 议会 Step6 后写记忆（v4.3.1）② bench-matcher Step3 读记忆时注入 long-term+recent（v4.3.0）③ 价值驱动 compact 清理零价值（v4.3.1）④ supersedeable 标记转折点（v4.3.1）。

- **R38 语义审计修正（v4.2.7 R38 · ref50 + memory-keeper stub）**：① 修 §3.1 vs §2 矛盾——§2 补回 `citation_count`/`is_turning_point`（价值三角与转折点逻辑必需，原漏）。② 补文件级 schema（§2.1 · sptler 文件是 `{profile,profile_recent,experiences,archive_summary}` 非裸列表，ref50 原漏）。③ 弃 `supersedes` 列表（核 sptler `summon_sage`/`compact_memories` 读路径均不读，只写不读）。④ §4 补 matched retrieval（D1-D7 当 topic 适配 `relevant_experiences`）+ dry-run 只读约束（sptler summon 命中回写 citation，v4.3.0 走 `--dry-run` 推 v4.3.1）。⑤ memory-keeper stub 修 scope 矛盾（原"Step3/Step6 读+写"→ v4.3.0 只读 Step3，对齐 ref50 §7）。⑥ `timestamp`→`recorded_at`（适配 sptler 时效衰减）。⑦ 加 `seeded` fixture 标记 + `task_kind`(=domain)。

- **R40 修正（v4.2.7 R40 · ref50 §4 matched retrieval 适配两处错 + 3 小不精确）**：codex-review 自查（codex CLI azure 端点持续 stream disconnect 不可用，降级自查）命中 §4 matched retrieval 适配两处真 bug：① **D-code 漏检**——原"以 primary_contradiction（D1-D7）当 topic"传裸 "D3"，但 sptler `relevant_experiences` 用中文双字 `[一-鿿]{2}` 匹配 experience.矛盾，裸 "D3" 无中文双字→0 分漏检，v4.3 核心"同矛盾第二次议引用旧结论"失效。修：topic 传**全字符串**（"D3 个性化⟷一致性"，由 D 码查 ref 47 展开），主匹配靠 矛盾 双字。② **字段名未同步**——sptler 读 `domain`，suanfish §2.2 改名 `task_kind`，§4 仍写"domain 关键词"。修：读 `task_kind`（task_kind 是 enum 命中概率低，作辅）。另修 3 小：§2.2 example `seeded:true`→`false`（canonical 示例应展示正常条目）；§4"注入近期经历"→"最近 3 条"（同 sptler `experiences[-3:]`）；§8 职责顺序对齐 stub（write/inject/compact/supersedeable）+ 加 v4.3.0/v4.3.1 相位标记。re-lint exit 0。

## 变更日志

### v0.1.0 —— 设计草案（v4.2.7 R31）
- 从 v4.2.7 R25/R27 的"v4.3 议题"推进到"可启动方案"
- 借鉴 sptler 价值驱动记忆四原则（分层/价值/supersedeable/双画像）
- 适配设计场景：记忆载体按圣人 / 内容是矛盾倾向+改造动作 / 与 sptler 不互通
- 三步实施路线 + 令牌成本 + --no-memory 开关

### v0.1.1 —— R38 语义审计修正（v4.2.7 R38）
- 修 §3.1 vs §2 矛盾：补回 `citation_count`/`is_turning_point`
- 补文件级 schema §2.1（sptler 四件套 `{profile,profile_recent,experiences,archive_summary}`）
- 弃 `supersedes` 列表（核 sptler 读路径 `summon_sage`/`compact_memories` 不读）
- §4 补 matched retrieval（D1-D7 适配 `relevant_experiences`）+ dry-run 只读约束
- memory-keeper stub 修 scope 矛盾（v4.3.0 只读 Step3，对齐 ref50 §7）
- `timestamp`→`recorded_at` + 加 `seeded` fixture 标记 + `task_kind`(=sptler domain)

### v0.1.2 —— R40 修 §4 matched retrieval 适配（v4.2.7 R40）
- §4 D-code 漏检：topic 传全矛盾串（非裸 D 码），主匹配靠 矛盾 中文双字
- §4 字段名 domain→task_kind 同步（sptler 读 domain，suanfish 改名 task_kind）
- §2.2 example seeded:true→false（canonical 示例展示正常条目）
- §4 注入"近期经历"→"最近 3 条"（同 sptler experiences[-3:]）
- §8 职责顺序对齐 stub + 加 v4.3.0/v4.3.1 相位标记
