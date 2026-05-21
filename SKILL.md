---
name: suanfish-design-system
description: Suanfish Design System — A unified multi-agent design language system with 14 specialized agents across 6 tiers and a REJECT mechanism for opinionated AI-driven UI generation. Governs both first-impression onboarding moments (welcome, version updates) and steady-state interfaces (three-pane layouts, modals, wizards, data viz). Activate when designing, generating, auditing, or refactoring any UI surface. 算鱼工作室的统一多智能体设计语言体系，14 位专精 agent 协同工作，分布在 6 个 tier，搭载 6 条 REJECT 硬规则。
version: 2.1.0
author: 算鱼工作室
license: MIT
language: zh-CN
tags: [design-system, multi-agent, onboarding, ui, modal, wizard, data-viz, animation, tokens, react, tailwind, accessibility, responsive, copywriting, icon, empty-state, chinese]
---

# 算鱼设计系统 · The Studio · v2.1

> *一家工作室，十四位匠人。从用户登录的前 3 秒，到第 3000 次点击，每一寸像素都说着同一种品牌语言。*

这是一个 **伞状 skill（umbrella skill）**，按一家小型设计工作室的组织结构来运转。它同时治理 **两种声音**：

| 模式 | 触发时机 | 主导 agent | 气质 |
| --- | --- | --- | --- |
| 🎬 **仪式感模式（Onboarding）** | 首次登录 · 版本更新 · 新功能发布 | `onboarding-director` 导演 | 暖色 · 隆重 · 一刻惊艳 |
| 🏛 **稳态模式（Steady-State）** | 日常工作 · 多步流程 · 模态 · 表格 · 图谱 | `ui-architect` 架构师 | 冷色 · 功能 · 沉稳安静 |

两种模式共享 **同一套设计令牌、动画原子、图标库**。区别只在于工作室此刻该用「哪一把嗓子」说话。

---

## ⚡ 快速通道 · 5 套高频搭配（80% 请求直接照搬）

> 在做六维体检前先看这张表 —— 如果你的需求落进任一行，**直接照搬**那一行的 agent 链，跳过决策树。

| # | 一句话需求 | 主 agent | 协作链（按调用次序） | 出口 |
| --- | --- | --- | --- | --- |
| 1 | 「做一个二次确认 / 危险操作弹窗」 | 🪟 modal-craftsman | 📝 copy → 🎯 icon → 🎨 token → ♿ a11y → 📱 resp | 🔍 |
| 2 | 「在侧栏加一个新视图 / 主页面」 | 🏛 ui-architect | 🎯 icon → 🎨 token → 📱 resp → 🪟 empty-state → 📝 copy → ♿ a11y | 🔍 |
| 3 | 「介绍新版本 / 新功能给老用户」 | 🎬 onboarding-director | 📝 copy → 🎯 icon → 💫 anim → 🎨 token → ♿ a11y → 📱 resp | 🔍 |
| 4 | 「加一个多步表单 / 向导」 | 🧙 wizard-designer | 📝 copy → 🎨 token → ♿ a11y → 📱 resp | 🔍 |
| 5 | 「列表 / 图表 / 知识图谱」 | 📊 data-viz-engineer | 🎨 token → 🪟 empty-state → 📝 copy → ♿ a11y → 📱 resp | 🔍 |

> 不在表中？再走下方的六维体检 → 决策森林。

---

## 🎭 工作室组织架构 · 14 位 Agent · 6 个 Tier

```
┌────────────────────────────────────────────────────────────────────────┐
│  Tier 1 · 调度层                                                        │
│  🧭 moment-strategist  ── 每单请求的总台 · 派单 · 可 REJECT              │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 2 · 主导层                                                        │
│  🎬 onboarding-director       🏛 ui-architect                          │
│  仪式感界面主导                稳态界面主导                              │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 3 · 容器专科层                                                    │
│  🪟 modal-craftsman   🧙 wizard-designer   📊 data-viz-engineer         │
│  14+ 模态变体          多步流程             图 / 表 / Tooltip            │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 4 · 内容专科层（主动产出 · 进入 SPEC）                            │
│  📝 copy-writer       🎯 icon-curator                                  │
│  每一个字              语义 → 图标映射                                   │
│  🪟 empty-state-storyteller   📱 responsive-strategist                 │
│  空 / 错 / 加载 状态机          桌面 / 平板 / 移动                       │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 5 · 横切被咨询层（被动咨询 · 守门 · 不主导）                       │
│  🎨 token-keeper          💫 animation-choreographer    ♿ a11y-guardian│
│  设计令牌唯一真相          动画词汇仲裁                  ARIA · 对比度    │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 6 · 质量门                                                        │
│  🔍 ui-auditor  ── 加载外部规则集 · 分级 REPORT                          │
└────────────────────────────────────────────────────────────────────────┘
```

### 关键边界（v2.1 厘清，必须遵守）

| 边界 | 谁说了算 |
| --- | --- |
| 「选哪个 icon」（语义映射） | 🎯 icon-curator |
| 「icon 用什么颜色 / 尺寸」 | 🎨 token-keeper |
| 「空状态文案怎么写」 | 📝 copy-writer |
| 「空状态的状态机切换 / 布局」 | 🪟 empty-state-storyteller |
| 「这个动画允不允许做」 | 💫 animation-choreographer |
| 「这个颜色合不合规」 | 🎨 token-keeper |
| 「整体能不能上线」 | 🔍 ui-auditor |
| 「这单要不要做 / 是不是该回退」 | 🧭 moment-strategist（可 REJECT） |

### 十四位 agent 一览

| Tier | # | Agent | 主动 / 被动 | 职责 |
| --- | --- | --- | --- | --- |
| 1 | 1 | 🧭 [`moment-strategist`](agents/moment-strategist.md) | 主动 | 派单 · 框定 · 可 REJECT |
| 2 | 2 | 🎬 [`onboarding-director`](agents/onboarding-director.md) | 主动 | 仪式感界面主导 |
| 2 | 3 | 🏛 [`ui-architect`](agents/ui-architect.md) | 主动 | 稳态界面主导 |
| 3 | 4 | 🪟 [`modal-craftsman`](agents/modal-craftsman.md) | 主动 | 14+ 模态变体 |
| 3 | 5 | 🧙 [`wizard-designer`](agents/wizard-designer.md) | 主动 | 多步流程 |
| 3 | 6 | 📊 [`data-viz-engineer`](agents/data-viz-engineer.md) | 主动 | 图谱 · 表 · Tooltip |
| 4 | 7 | 📝 [`copy-writer`](agents/copy-writer.md) | 主动 | 每一个字 |
| 4 | 8 | 🎯 [`icon-curator`](agents/icon-curator.md) | 主动 | **仅** 语义 → 图标映射 |
| 4 | 9 | 🪟 [`empty-state-storyteller`](agents/empty-state-storyteller.md) | 主动 | **仅** 状态机 / 布局（文案让给 copy-writer） |
| 4 | 10 | 📱 [`responsive-strategist`](agents/responsive-strategist.md) | 主动 | 桌面 / 平板 / 移动 |
| 5 | 11 | 🎨 [`token-keeper`](agents/token-keeper.md) | 被动 | 颜色 / 圆角 / 阴影 / 间距 / z-index / **icon 颜色尺寸** |
| 5 | 12 | 💫 [`animation-choreographer`](agents/animation-choreographer.md) | 被动 | 动画词汇仲裁（仪式 vs 功能） |
| 5 | 13 | ♿ [`a11y-guardian`](agents/a11y-guardian.md) | 被动 | ARIA · 键盘 · 对比度 · reduced-motion |
| 6 | 14 | 🔍 [`ui-auditor`](agents/ui-auditor.md) | 主动 | 加载外部规则集 · 分级 REPORT |

---

## 🧭 升级版决策树 · 六维体检

`moment-strategist` 在派单前会对每一项请求做 **六维体检**。如果走完六维仍然不该做，可输出 **REJECT** 而非 BRIEF。

### 维度 1 · 重复度（用户一生看到几次？）
1-2 次 → 路径 A · 仪式 ｜ 3-100 次 → 路径 B 候选 ｜ 每天 100+ 次 → 路径 C · 稳态

### 维度 2 · 信息密度
单点情感 / 序列叙事 / 中密度 / 高密度

### 维度 3 · 交互意图
读取 / 提交 / 决策

### 维度 4 · 时长预算
<3 秒 / 3-15 秒 / >15 秒

### 维度 5 · 情感目标
庆贺 / 警告 / 中性 / 无情感

### 维度 6 · 复用度
100% 复用 / 需要变体 / 全新组件

---

## 🗺 决策森林（含 REJECT 出口）

```
六维体检结果
       │
       ▼
┌─────────────────────────────────────────────────────────────────────┐
│   重复度=低 + 情感=庆贺/欢迎/期待 + 时长=3-15s                         │
│   ✦ 路径 A · 仪式感模式                                               │
│      🎬 onboarding-director  ←─ 主导                                 │
│         主动协作: 📝 copy · 🎯 icon · 🪟 empty-state · 📱 resp         │
│         被动咨询: 🎨 token(暖) · 💫 anim(仪式词汇) · ♿ a11y           │
│         出门审: 🔍 ui-auditor（仪式规则集 · 见 ref 16）                │
├─────────────────────────────────────────────────────────────────────┤
│   重复度=高 + 信息密度=中/高 + 情感=中性/警告                          │
│   ✦ 路径 C · 稳态模式                                                 │
│      🏛 ui-architect  ←─ 主导                                        │
│         容器派单: 🪟 modal / 🧙 wizard / 📊 viz                       │
│         主动协作: 📝 copy · 🎯 icon · 🪟 empty-state · 📱 resp         │
│         被动咨询: 🎨 token(冷) · 💫 anim(功能词汇) · ♿ a11y           │
│         出门审: 🔍 ui-auditor（稳态规则集 · 见 ref 15）                │
├─────────────────────────────────────────────────────────────────────┤
│   ✦ 路径 B · 混合模式（硬条件触发 · v2.1 写死）                        │
│      仅当 全部同时满足 时才允许：                                       │
│        ① 情感目标 = 庆贺                                              │
│        ② 落点 = 已有稳态视图（不是新页）                                │
│        ③ 持续时间 < 2 秒                                              │
│        ④ 不阻断当前任务流                                              │
│      否则强制归入 A 或 C。任何其他「想混合」的请求一律 REJECT。          │
├─────────────────────────────────────────────────────────────────────┤
│   ✦ REJECT · 退回业务方                                                │
│      触发条件（任一）：                                                 │
│        - 时长 > 5s 且无用户主动触发（强加体验，必拒）                    │
│        - 仪式装饰落在稳态高频界面（每天 100+ 次）                       │
│        - 需求自相矛盾（要求「快速完成」又「沉浸仪式」）                  │
│        - 违反铁律三条之一                                              │
└─────────────────────────────────────────────────────────────────────┘
```

### 🚨 三条铁律（永远不破）

1. **路径 A 的暖色 / 粒子 / 仪式 keyframes 永不流入路径 C**
2. **路径 C 的冷色 / 表格 / 数据密度永不裹进路径 A**
3. **路径 B 必须满足硬条件全部 4 项**，否则一律 REJECT 或归入 A/C

---

## 🤝 协作协议 · BRIEF → PLAN → SPEC → REPORT（+ REJECT）

| 阶段 | 产出 | 作者 | 目的 |
| --- | --- | --- | --- |
| 1 | **BRIEF** 或 **REJECT** | `moment-strategist` | 派单或拒做 |
| 2 | **PLAN** | 主 agent | 拆解组件树 |
| 3 | **SPEC × N** | Tier 3 + Tier 4 主动 / Tier 5 被动响应 | 交付片段 |
| 4 | **REPORT** | `ui-auditor` | 分级签收 |

完整模板见 [`references/00-collaboration-protocol.md`](references/00-collaboration-protocol.md)。

---

## 📚 参考资料库（共 21 份）

| # | 文件 | 主要使用者 |
| --- | --- | --- |
| 00 | [collaboration-protocol.md](references/00-collaboration-protocol.md) | 全员 |
| 01 | [design-tokens.md](references/01-design-tokens.md) | 全员 |
| 02 | [onboarding-eureka.md](references/02-onboarding-eureka.md) | 🎬 |
| 03 | [onboarding-step-modal.md](references/03-onboarding-step-modal.md) | 🎬 |
| 04 | [three-pane-layout.md](references/04-three-pane-layout.md) | 🏛 📱 |
| 05 | [icon-sidebar.md](references/05-icon-sidebar.md) | 🏛 🎯 |
| 06 | [detail-sidebar.md](references/06-detail-sidebar.md) | 🏛 |
| 07 | [modal-system.md](references/07-modal-system.md) | 🪟 📱 |
| 08 | [wizard-pattern.md](references/08-wizard-pattern.md) | 🧙 |
| 09 | [form-controls.md](references/09-form-controls.md) | 共享 |
| 10 | [data-visualization.md](references/10-data-visualization.md) | 📊 |
| 11 | [animation-library.md](references/11-animation-library.md) | 💫 |
| 12 | [icon-library.md](references/12-icon-library.md) | 🎯 |
| 13 | [tour-guide.md](references/13-tour-guide.md) | 共享 |
| 14 | [anti-patterns.md](references/14-anti-patterns.md) | 🔍 |
| **15** | **[audit-ruleset-steady.md](references/15-audit-ruleset-steady.md)** | 🔍 **稳态规则集（v2.1 独立）** |
| **16** | **[audit-ruleset-onboarding.md](references/16-audit-ruleset-onboarding.md)** | 🔍 **仪式规则集（v2.1 独立）** |

附录资产 4 份：`animation-keyframes.css`、`component-patterns.md`、`interaction-patterns.md`、`steps-schema.md`

> **v2.1 规则集独立化**：审计规则不再藏在 ui-auditor 内。任何令牌 / 动画变更必须同步提交 ref 15 或 16 的 PR，否则审计员将拒绝执行。

---

## 🛠 技术栈速览

React 19 · TypeScript 5.8 · Vite 6 · Tailwind 3.4.19 · Heroicons · 无路由库 · `switch(activeView)` 切换 · `cubic-bezier(0.16, 1, 0.3, 1)`

---

*一家工作室。一种语言。两把嗓子。十四位匠人。六个 tier。零越界。*
