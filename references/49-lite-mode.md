---
ref: 49
title: Lite 模式 · 省令牌四轨自动降级（SPTLER 风格适配）
owner: moment-strategist（路由）· ui-architect（稳态主理）· ui-auditor（轻量守门）
audited_by: ui-auditor
inspired_by: sptler（算鱼真人议会 · 四轨自动降级机制）
---

# 🪶 ref 49 · Lite 模式 · 省令牌四轨自动降级

> *至尊版是"每单都开 420 板凳议会 + 三道门审核"——严谨但令牌重。Lite 模式借 [sptler](../sptler) 的四轨自动降级：日常单点问题 1 位设计师 3 句话裁决，复杂议题才开多专家链。小问题不背仪式税。*

## 0. 何时进 Lite 模式

- 用户显式：`/suanfish lite`、`/算鱼轻`、说"省令牌""快速""lite""别开全会"。
- 隐式（moment-strategist 路由判定）：BRIEF 单域、单 agent 可解、无令牌/动画/结构大改 → 自动降 Lite。
- 用户未声明且 BRIEF 涉令牌/动画/结构大改或对外发布 → **不降 Lite**，走至尊版全流程（ref 28-30 三道门）。

## 1. 四轨自动降级（核心 · 适配 sptler）

| 轨 | 触发 | 规格 | 令牌量 | 守门 |
| --- | --- | --- | --- | --- |
| **Verdict 轨**（单设计师裁决） | 单点清晰单域问题：「弹窗按钮放哪」「这个色用哪个」 | 1 主 agent + 3 句话（判断/理由/风险）· 无议会·无六维·无蓝军 | 极低 | 主 agent 自检 ref 14 反模式 |
| **Fast 轨**（快速链） | 中等多域：「做个登录页」「加个二次确认」 | 主 agent + 2-3 协作（SKILL.md §快速通道 5 套之一）· 无议会投票·ui-auditor 仅跑 ref 15/16 🟥 严重级 | 低 | ui-auditor 🟥 级拦 |
| **Formal 轨**（迷你议会） | 战略/不可逆/对外：「设计整套令牌体系」「品牌系统」 | 7-9 agent 全链 + **迷你 3 圣人固定议会**（黑格尔辩证 + 莫奈加法 + 倪瓒减法，非 420 板凳动态选拔）+ ui-auditor 跑 ref 15/16/19 | 中 | 迷你议会 ≥2/3 + ui-auditor |
| **Follow-up 轨**（续议） | 迭代上一单 | ≤8 条要点 · 复用上次方案骨架 · 只改差异 | 极低 | 主 agent 自检 |

**降级判定**（moment-strategist `route_track`，确定性）：
- 单域 + 单 agent 可解 + 无大改 → **Verdict**
- 多域但 ≤2 路径 + 无对外发布 → **Fast**
- 跨路径 / 令牌动画结构大改 / 对外发布 / 战略决策 → **Formal**
- 上一单的迭代/修订 → **Follow-up**

> **与至尊版议会的区别**：至尊版每单都走 420 板凳动态选拔 + 六步协议 + 三道门（ref 28-30）；Lite 只 Formal 轨才开迷你 3 圣人议会（固定席，非动态），且不走三道门审核制度（用 ui-auditor 🟥 级单点守门替代）。**Lite 不加载 ref 27 板凳 / ref 28-30 三道门 / ref 46-48 美学议会**——这是省令牌的主力。

## 2. 精简核心 ref（10 份 · Lite 默认加载集）

| ref | 内容 | 主 agent |
| --- | --- | --- |
| [01](01-design-tokens.md) | 设计令牌（颜色/间距/字阶/阴影） | token-keeper |
| [07](07-modal-system.md) | 模态系统 | modal-craftsman |
| [08](08-wizard-pattern.md) | 向导模式 | wizard-designer |
| [10](10-data-visualization.md) | 数据可视化 | data-viz-engineer |
| [11](11-animation-library.md) | 动画库 | animation-choreographer |
| [14](14-anti-patterns.md) | 反模式清单（18 条） | ui-auditor |
| [34](34-accessibility.md) | a11y 5 项必检 | a11y-guardian |
| [35](35-copy-system.md) | 文案系统（双声调） | copy-writer |
| [44](44-common-components.md) | 通用组件（卡片/骨架/Tab 等） | ui-architect |
| [45](45-basic-controls.md) | 基础控件（按钮/标签/进度条） | ui-architect |

**Lite 不加载**（省令牌）：ref 17/24-27 哲学层 + ref 27 板凳 + ref 28-30 三道门 + ref 46-48 美学议会 + ref 36-41 AI-native 深度集（Path G 任务按需单加载）+ ref 42-43 品牌/i18n（按需）。

## 3. 令牌预算对比（单 Fast 轨任务）

| 项 | 至尊版 | Lite | 省 |
| --- | --- | --- | --- |
| 议会选拔（420 板凳评分） | ~8k | 0（Fast 轨不开议会） | 8k |
| 六步协议 + 辩论 + 投票 | ~6k | 0 | 6k |
| 三道门 G1-G6 审核 | ~5k | 0（ui-auditor 🟥 单点守门替代） | 5k |
| 哲学层锚点加载 | ~3k | 0 | 3k |
| 主 agent + 协作链 + ref | ~4k | ~4k（同） | 0 |
| **合计** | **~26k** | **~4k** | **~22k（省 85%）** |

> Verdict 轨更省（~1.5k：1 agent 3 句话）。Formal 轨最重（~12k：迷你议会 + 全链），但仍比至尊版全流程省 50%+。

## 4. 反拖拽铁律（借 sptler `Output length & termination`）

1. **Verdict 轨一回合交付**：1 agent 3 句话，答完即止，不追加"还需要帮助吗"。
2. **Fast 轨最多一问**：仅在需求不清时 AskUser 一次，之后主 agent + 协作链一气跑完，不中途问"继续吗"。
3. **到收口即停**：交付物出完，一句收口（如"完成。"）结束。不开放式追问、不主动提议再开一单。
4. **简短硬上限**：一个观点一句；投票理由一句；最终建议一句。Verdict 轨全程 ≤150 字。

## 5. 与至尊版的切换

- Lite 进行中遇**升级信号**（令牌大改 / 对外发布 / 用户要深度辩证）→ moment-strategist 升 Formal 轨；Formal 仍不够 → 提示用户转至尊版全流程（`/suanfish` 不带 lite）。
- 至尊版用户要快速单点裁决 → 可临时 `/suanfish lite` 降 Verdict 轨。
- **同 skill 两模式**：Lite 与至尊版共享 agents/refs/SKILL.md，仅协议不同（四轨 vs 议会+三道门）。Lite 是至尊版的省令牌子集，不是独立 skill。

## 6. 圣人记忆（可选 · 跨 skill）

Lite 不内置圣人记忆系统（省令牌）。若需"同类问题第二次引用上次结论"的积累能力，转 [sptler](../sptler)（`/sptler`）——它是带 28 位圣人记忆的独立议会 skill，专利/技术决策场景更强；设计场景用 Lite 四轨即可，记忆非必需。

> **⚠️ 圣人体系不同（v4.2.7 R25 · 跨 skill 边界声明）**：suanfish-lite 的迷你 3 圣人（黑格尔/莫奈/倪瓒，思想家板凳）与 sptler 的 22 位圣人（邹蕴/王升/张鑫等真人专家）是**两套独立体系，无重叠**——转 sptler 不带 lite 的辩证人格连续性（黑格尔的辩证立场不会在 sptler 出现）。两 skill 场景分治：suanfish-lite 设计辩证 / sptler 专利技术决策。跨 skill 转换 = 换场景换人格，非续议。若需设计场景的圣人记忆积累，目前 suanfish 至尊版/Lite 均不内置，属未来 v4.3 议题（见 ref 48 §11 诚实声明）。

## 7. 诚实声明

- Lite 用 **ui-auditor 🟥 严重级单点守门**替代至尊版三道门——快但不做整件生成物的六维评分/2/3 投票/蓝军否决。**质量门强度低于至尊版**，故 Formal 轨仍保迷你 3 圣人议会 + ui-auditor 双守门，不全砍。
- Lite 不加载哲学层（ref 17/24-27）= agent 决策缺哲学锚追溯。可接受（日常设计不需），但战略决策（Formal 轨）建议手动引 ref 17 R1-R6 或转至尊版。
- charter-lint（scripts/）不参与 Lite 运行时——它是至尊版制度自检工具，Lite 不跑制度 lint。
- **🔴 R 编号术语表不加载（v4.2.7 R27）**：Lite 不加载 ref 17（含 R3 厘清的「R1-R25 哲学命题 vs R-01 审计规则」术语表 + R7-R12 空洞声明）。Lite agent 跑 ref 15/16 时按其 `R-XX`（连字符·审计规则集）处理，**勿与哲学命题 `R8`（无连字符·R7-R12 是编号空洞·不存在）混淆**。若 Lite 模式遇用户引裸 `R8`/`R10` 等，视为悬空（R7-R12 空洞），不当作存在规则——需核 ref 17 §三 R 全景（手动加载）确认。

## 8. 四轨降级 worked example（v4.2.7 R23 · 可执行性验证）

> *四轨规则端到端演练，证明降级判定 + 各轨流程跑得通，非纸上闭环。同一 BRIEF 在四轨下的不同处理。*

**BRIEF**：「给后台管理界面加个二次确认弹窗——删除用户时弹"确定删除？"」

### 轨道 1 · Verdict（最可能命中）

**降级判定**：单域（modal）+ 单 agent（modal-craftsman）可解 + 无令牌/动画/结构大改 → `route_track` 返回 **Verdict**。

**执行**：modal-craftsman 单独裁决，3 句话：
1. **判断**：用危险确认弹窗（ref 07 §危险确认变体），红色主按钮 + 灰色取消，Body 写"删除后不可恢复，该用户的历史数据将一并清除"。
2. **理由**：删除是不可逆操作，ref 07 危险确认范式 + ref 14 反模式"无 undo 的关键操作"双触发，必须二次确认 + 后果明示。
3. **风险**：文案别用"确定吗"（模糊），用"删除用户 X？此操作不可恢复"（具名+后果）—— ref 35 文案铁律。

**守门**：modal-craftsman 自检 ref 14 反模式（无 R 规则命中）→ 交付。**令牌 ~1.5k，一回合结束。**

### 轨道 2 · Fast（若 BRIEF 含"还要加个批量删除"）

**降级判定**：多域（modal + table 批量选择）+ ≤2 路径（B 稳态）+ 无对外发布 → **Fast**。

**执行**：主 ui-architect + modal-craftsman + table-craftsman 协作链（SKILL.md §快速通道 #1）：
- table-craftsman：批量选择状态 + "删除选中(N)"按钮
- modal-craftsman：批量删除确认弹窗（Body 动态显示 N 个用户名）
- ui-auditor：跑 ref 15/16 🟥 严重级 → 无命中（按钮色/文案/焦点均合规）→ 放行

**守门**：ui-auditor 🟥 单点（非三道门）。**令牌 ~4k，一气跑完。**

### 轨道 3 · Formal（若 BRIEF 升级为"设计整套删除流的安全规范"）

**降级判定**：战略/不可逆/对外（安全规范要发布）→ **Formal**。

**执行**：7-9 位设计师全链 + 迷你 3 圣人固定议会：
- 主链：ui-architect → modal-craftsman → table-craftsman → copy-writer → a11y-guardian → error-recovery-designer → ui-auditor
- **迷你议会**（黑格尔+莫奈+倪瓒，固定席非 420 板凳）辩证：
  - [黑格尔] 删除流主矛盾是"安全 vs 效率"——倾向安全端（多确认），但留效率位（批量场景降为单确认+undo）
  - [莫奈] 加法：批量删除时给视觉反馈（删除中的骨架屏 + 成功 toast）
  - [倪瓒] 减法：单删别弹二次确认以外的引导（新手 tour 别插进删除流，污染）
  - 投票：3 人全赞成方案（黑格尔主矛盾已选倾向 + 莫/倪 加减留位）→ ≥2/3 通过
- ui-auditor：跑 ref 15/16/19 🟥 + 🟧 全检 → 无 🟥，2 条 🟧（toast 时长建议）→ 放行带建议

**守门**：迷你议会 ≥2/3 + ui-auditor 🟥。**令牌 ~12k。**

### 轨道 4 · Follow-up（用户后续"把 toast 改成内联提示"）

**降级判定**：上一单（轨道 3）的迭代 → **Follow-up**。

**执行**：≤8 条要点，复用轨道 3 方案骨架，只改 toast→内联：
1. 删除成功 toast → 改为表格行内"已删除 · 撤销"提示条（5s 自动消失）
2. copy-writer 文案微调："已删除用户 X" → "已删除 · 撤销"
3. error-recovery-designer：撤销逻辑（软删 5s → 硬删）
4. ui-auditor 🟥 复检 → 无命中 → 交付

**令牌 ~1.5k。**

### 验证结论

四轨降级判定（route_track）+ 各轨流程（Verdict 3 句 / Fast 协作链+🟥 / Formal 迷你议会+全链 / Follow-up 复用骨架）端到端跑通，同一 BRIEF 按重量自动落轨，令牌预算与 §3 对比表一致（1.5k/4k/12k/1.5k）。**Lite 四轨不是纸上闭环，端到端可执行。** 升级信号（Verdict→Fast→Formal）也演练通：BRIEF 加"批量"升 Fast，加"整套规范"升 Formal，迭代升 Follow-up。

## 变更日志

### v1.0.0 —— 初版（v4.2.7 R22）
- 四轨自动降级（Verdict/Fast/Formal/Follow-up），借 sptler 机制适配设计
- 精简核心 ref 10 份，砍哲学层+板凳+三道门+美学议会
- 反拖拽铁律 + 令牌预算对比
