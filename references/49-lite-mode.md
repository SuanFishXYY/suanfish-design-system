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

## 7. 诚实声明

- Lite 用 **ui-auditor 🟥 严重级单点守门**替代至尊版三道门——快但不做整件生成物的六维评分/2/3 投票/蓝军否决。**质量门强度低于至尊版**，故 Formal 轨仍保迷你 3 圣人议会 + ui-auditor 双守门，不全砍。
- Lite 不加载哲学层（ref 17/24-27）= agent 决策缺哲学锚追溯。可接受（日常设计不需），但战略决策（Formal 轨）建议手动引 ref 17 R1-R6 或转至尊版。
- charter-lint（scripts/）不参与 Lite 运行时——它是至尊版制度自检工具，Lite 不跑制度 lint。

## 变更日志

### v1.0.0 —— 初版（v4.2.7 R22）
- 四轨自动降级（Verdict/Fast/Formal/Follow-up），借 sptler 机制适配设计
- 精简核心 ref 10 份，砍哲学层+板凳+三道门+美学议会
- 反拖拽铁律 + 令牌预算对比
