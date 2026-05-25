---
name: suanfish-design-system
description: "Suanfish Design System v4.2 — 算鱼工作室哲学驱动多智能体设计语言体系 · 52 个 agent · 4:4:4 (哲学家/艺术家/音乐家) 圣人议会 · 加权陪审团 2/3 表决 · R-Cross1-4 跨学科四律 · 25-rule REJECT 机制。Activate on '/suanfish', '/算鱼', '/suanfish-design', '/算鱼设计系统'. Trigger phrases: '算鱼', 'suanfish', '召集议会', 'sage congress', '议会民主', 'bench-matcher', '4:4:4'. Auto-loads on UI design/audit/refactor: hero/landing/dashboard/modal/animation/design-tokens/copywriting/dialectical-review. bench-matcher 跑 5 步议会 → 12 圣人候选 → 自由邀请 (cap 15) → 议会讨论 → 2/3 加权表决。P1-6: 禁单 agent 否决权。R24 议会僵局兜底。"
version: 4.2.0
author: 算鱼工作室
license: MIT
language: zh-CN
flavor: hybrid
philosophy: enabled
philosophy_layers: [values, dialectics, laws, historical_positioning]
tags: [design-system, multi-agent, philosophy, dialectics, onboarding, ui, modal, wizard, data-viz, animation, tokens, react, tailwind, accessibility, responsive, copywriting, icon, empty-state, ai-native, chinese]
---

# 算鱼设计系统 · The Studio · v4.2

> 🎯 **快速召唤**: 在 Copilot / Claude / Codex / Gemini / Antigravity 任一 CLI 输入 `/suanfish` 或 `/算鱼` 即可强制激活本 skill 进入议会模式。也可直接说 "用算鱼设计 XXX" / "召集议会" 等自然语言。

> *一家工作室，三十六位匠人。从用户登录的前 3 秒，到第 3000 次点击，每一寸像素都说着同一种品牌语言。*
>
> **v3.0 哲学升维**：在 33 agent 之上新增 Tier 0 辩证哲学层（🪙 dialectician / 📜 historian / 🔭 futurist），让每一个 BRIEF 入场前必须命名矛盾、定位时代、预测演进。

## 🌗 v3.0 三层哲学体系（必读）

| Layer | 文件 | 回答的问题 |
| --- | --- | --- |
| **Layer 1 · 价值** | [references/17-philosophy.md](references/17-philosophy.md) | 该选哪边？ |
| **Layer 2 · 辩证** | [references/24-philosophy-dialectics.md](references/24-philosophy-dialectics.md) | 为什么有两边？ |
| **Layer 3 · 发展规律** | [references/25-philosophy-laws.md](references/25-philosophy-laws.md) | 矛盾如何随时间漂移？ |
| **Layer 0.5 · 历史定位** | [references/26-historical-positioning.md](references/26-historical-positioning.md) | 我来自哪个时代？要去哪个时代？ |
| **附录 · 哲学家板凳** ✨v3.0.1 | [references/27-philosopher-bench.md](references/27-philosopher-bench.md) | 301 位中外思想家候选池（117 中国 + 184 西方），供 v3.x agent 援引升级 |

**任何 BRIEF 入场顺序（v4.0 议会民主 · 5 站）**：
```
BRIEF
  ↓
🏛 bench-matcher · 圣人议会自包含 (5 步骤)
  ├─ ① 评分: 301 池中给 Tier 0 八位优先打分
  ├─ ② Layer 1 召唤: 选 k 位 Tier 0 (相关性 ≥ 7.5, k 通常 1-3)
  ├─ ③ 自由邀请 (递归): 入场者从板凳邀师弟师妹, 总人数 cap 15
  ├─ ④ 议会讨论: 全员陈述 → 合并共识 → 调解冲突 → 形成方案草案
  └─ ⑤ 陪审团投票: Tier 0 = 2 票 / 助手 = 1 票 · ≥ 2/3 通过
       不过则修订重投 (max 3 轮) · 仍不过 → R24 议会僵局律 → 用户决断
  ↓
🔍 quotation-verifier (核验所有圣人引用真实性 · R25)
  ↓
🧭 moment-strategist (A-G 路径分流 / R1-R6)
  ↓
... Path agent · ui-auditor
```
- **v4.0 砸了 v3.x "八圣人固定全上"的地基** — 议会民主 · 因事召唤 · 投票决议
- v3.3 三档通道 (fast/standard/full) 已撤回 — 改为议会自适应 (k 可以是 1, 即等价快通)

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

## 🎭 工作室组织架构 · 33 位 Agent · 7 个 Tier · 7 条路径（v2.5 · 新增 AI-native 路径 G）

```
┌────────────────────────────────────────────────────────────────────────┐
│  Tier 1 · 调度层                                                        │
│  🧭 moment-strategist  ── 每单请求的总台 · 派单 · 可 REJECT              │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 1.5 · 协调层（v2.4 新增 · 跨路径调度）                            │
│  🚦 flow-coordinator   ── 多路径混合时的裁判（A+C 复合等）               │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 2 · 主导层（4 路径主理 · 路径 G 由 conversation-director 兼任）   │
│  🎬 onboarding-director    🏛 ui-architect                             │
│  Path A · 仪式             Path B · 稳态 (+E 移动 / +F 嵌入)            │
│  💬 conversation-director  🔔 notification-director                    │
│  Path C · 聊天对话 / Path G · AI-native   Path D · 通知流               │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 3 · 容器专科层                                                    │
│  🪟 modal-craftsman   🧙 wizard-designer   📊 data-viz-engineer         │
│  📋 table-craftsman   🗨️ chat-ui-craftsman                              │
│  🌊 stream-craftsman  🛠️ tool-call-presenter  🌳 agent-thread-architect │
│  🎨 artifact-architect  ⌨️ prompt-input-craftsman   (v2.5 新增 ×5)       │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 4 · 内容专科层（主动产出 · 进入 SPEC）                            │
│  📝 copy-writer       🎯 icon-curator                                  │
│  🪟 empty-state-storyteller   📱 responsive-strategist                 │
│  👥 persona-architect  🗺️ information-architect  🩹 error-recovery     │
│  🧠 reasoning-visualizer  📑 citation-keeper  ⏳ rate-limit-communicator │
│                                                       (v2.5 新增 ×3)    │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 5 · 横切被咨询层（被动咨询 · 守门 · 不主导）                       │
│  🎨 token-keeper          💫 animation-choreographer    ♿ a11y-guardian│
│  🛡️ brand-keeper          🌍 i18n-strategist                            │
│  🔀 model-switcher-stylist                              (v2.5 新增 ×1)  │
├────────────────────────────────────────────────────────────────────────┤
│  Tier 6 · 质量门                                                        │
│  🔍 ui-auditor  ── 加载 ref 15 + 16 + 19 三层规则集 · 分级 REPORT        │
└────────────────────────────────────────────────────────────────────────┘
```

### 🛣 7 条设计路径（v2.5 拓展 · 新增 Path G · AI-native）

| Path | 路径 | 主理 | 典型场景 |
| --- | --- | --- | --- |
| **A** | 仪式 | onboarding-director | 欢迎/版本升级/里程碑 |
| **B** | 稳态 | ui-architect | 日常工作界面 |
| **C** | 聊天 | conversation-director | AI 助手 / chatbot / agent thread |
| **D** | 通知 | notification-director | toast / banner / push / badge |
| **E** | 移动 | ui-architect + responsive-strategist | 移动端原生 |
| **F** | 嵌入 | ui-architect（变体） | 卡片 / widget / iframe |
| **G** ✨ | AI-native | conversation-director（兼） | 流式 / 工具调用 / 思维链 / 引用 / 画布 / 提示输入 / 配额 / 模型切换 |

Path G 是**增强层**——它不独立存在，永远叠加在 C / B / F 之上，提供 AI 产品的原生原语。
多路径混合时 → flow-coordinator（Tier 1.5）协调。

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

### 三十三位 agent 一览

| Tier | # | Agent | 主动 / 被动 | 职责 |
| --- | --- | --- | --- | --- |
| 1 | 1 | 🧭 [`moment-strategist`](agents/moment-strategist.md) | 主动 | 派单 · 框定 · 可 REJECT |
| 1.5 | 2 | 🚦 [`flow-coordinator`](agents/flow-coordinator.md) | 主动 | **跨路径调度（v2.4 新）** |
| 2 | 3 | 🎬 [`onboarding-director`](agents/onboarding-director.md) | 主动 | Path A 仪式主理 |
| 2 | 4 | 🏛 [`ui-architect`](agents/ui-architect.md) | 主动 | Path B/E/F 稳态/移动/嵌入主理 |
| 2 | 5 | 💬 [`conversation-director`](agents/conversation-director.md) | 主动 | **Path C 聊天对话主理（v2.4 新）** |
| 2 | 6 | 🔔 [`notification-director`](agents/notification-director.md) | 主动 | **Path D 通知流主理（v2.4 新）** |
| 3 | 7 | 🪟 [`modal-craftsman`](agents/modal-craftsman.md) | 主动 | 14+ 模态变体 |
| 3 | 8 | 🧙 [`wizard-designer`](agents/wizard-designer.md) | 主动 | 多步流程 |
| 3 | 9 | 📊 [`data-viz-engineer`](agents/data-viz-engineer.md) | 主动 | 图 · 数字 · Tooltip |
| 3 | 10 | 📋 [`table-craftsman`](agents/table-craftsman.md) | 主动 | **表格/列表容器（v2.4 新）** |
| 3 | 11 | 🗨️ [`chat-ui-craftsman`](agents/chat-ui-craftsman.md) | 主动 | **聊天容器（v2.4 新）** |
| 4 | 12 | 📝 [`copy-writer`](agents/copy-writer.md) | 主动 | 每一个字 |
| 4 | 13 | 🎯 [`icon-curator`](agents/icon-curator.md) | 主动 | 语义 → 图标映射 |
| 4 | 14 | 🪟 [`empty-state-storyteller`](agents/empty-state-storyteller.md) | 主动 | 状态机 / 布局 |
| 4 | 15 | 📱 [`responsive-strategist`](agents/responsive-strategist.md) | 主动 | 桌面 / 平板 / 移动 |
| 4 | 16 | 👥 [`persona-architect`](agents/persona-architect.md) | 主动 | **用户画像建构（v2.4 新）** |
| 4 | 17 | 🗺️ [`information-architect`](agents/information-architect.md) | 主动 | **信息架构 / IA（v2.4 新）** |
| 4 | 18 | 🩹 [`error-recovery-designer`](agents/error-recovery-designer.md) | 主动 | **错误恢复设计（v2.4 新）** |
| 5 | 19 | 🎨 [`token-keeper`](agents/token-keeper.md) | 被动 | 颜色/圆角/阴影/间距/z-index |
| 5 | 20 | 💫 [`animation-choreographer`](agents/animation-choreographer.md) | 被动 | 动画词汇仲裁 |
| 5 | 21 | ♿ [`a11y-guardian`](agents/a11y-guardian.md) | 被动 | ARIA · 键盘 · 对比度 |
| 5 | 22 | 🛡️ [`brand-keeper`](agents/brand-keeper.md) | 被动 | **品牌守护（v2.4 新）** |
| 5 | 23 | 🌍 [`i18n-strategist`](agents/i18n-strategist.md) | 被动 | **国际化策略（v2.4 新）** |
| 3 | 24 | 🌊 [`stream-craftsman`](agents/stream-craftsman.md) | 主动 | **token 流式工匠（v2.5 新 · Path G）** |
| 3 | 25 | 🛠️ [`tool-call-presenter`](agents/tool-call-presenter.md) | 主动 | **工具调用展示（v2.5 新 · Path G）** |
| 3 | 26 | 🌳 [`agent-thread-architect`](agents/agent-thread-architect.md) | 主动 | **对话线程架构（v2.5 新 · Path G）** |
| 3 | 27 | 🎨 [`artifact-architect`](agents/artifact-architect.md) | 主动 | **产物画布（v2.5 新 · Path G）** |
| 3 | 28 | ⌨️ [`prompt-input-craftsman`](agents/prompt-input-craftsman.md) | 主动 | **提示输入框（v2.5 新 · Path G）** |
| 4 | 29 | 🧠 [`reasoning-visualizer`](agents/reasoning-visualizer.md) | 主动 | **思维链可视化（v2.5 新 · Path G）** |
| 4 | 30 | 📑 [`citation-keeper`](agents/citation-keeper.md) | 主动 | **引用守护（v2.5 新 · Path G）** |
| 4 | 31 | ⏳ [`rate-limit-communicator`](agents/rate-limit-communicator.md) | 主动 | **配额沟通（v2.5 新 · Path G）** |
| 5 | 32 | 🔀 [`model-switcher-stylist`](agents/model-switcher-stylist.md) | 被动 | **模型切换造型（v2.5 新 · Path G）** |
| 6 | 33 | 🔍 [`ui-auditor`](agents/ui-auditor.md) | 主动 | 加载 ref 15+16+19 · 分级 REPORT |

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

## 📜 哲学根基（v2.2 新增）

> *"规则会过时，案例会重复，但哲学命题穿越时间。"*

每位 agent 在职能之上还配一个**哲学锚点**——当业务方拍脑袋、当流行风潮涌来、当甲方意志压顶时，agent 拒绝服从的最后一道防线。

### 📌 哲学根基三件套

| 文件 | 作用 |
| --- | --- |
| [`references/17-philosophy.md`](references/17-philosophy.md) | 14 agent 哲学锚点 + REJECT R1-R6 哲学命题映射 + 东西方分流 |
| [`references/18-design-canon.md`](references/18-design-canon.md) | 20 条经典设计法典（Dieter Rams 十诫 / Tufte / 包豪斯 / 东方美学） |
| [`references/cases/`](references/cases/) | 案例库（5 个 agent 各 3 正 3 反） |

### 🎯 14 agent 哲学锚点（速查表）

| Agent | 哲学锚点 | 核心命题 |
| --- | --- | --- |
| moment-strategist | 孙子 · 上兵伐谋 | 最好的设计是不需要做的设计 |
| onboarding-director | 庄子 · 庖丁解牛 | 顺应用户认知的肌理 |
| wizard-designer | 禅宗 · 一期一会 | 每步引导都不可复制 |
| ui-architect | Sullivan · Form follows function | 形式追随功能 |
| modal-craftsman | 奥卡姆剃刀 | 如无必要，勿增弹窗 |
| copy-writer | 维特根斯坦 | 语言的边界即世界的边界 |
| icon-curator | 深泽直人 · without thought | 用户不需思考就能识别 |
| empty-state-storyteller | 海德格尔 · Dasein | 空状态是存在的提示 |
| data-viz-engineer | Tufte · Data-Ink Ratio | 删除每一滴非数据墨水 |
| animation-choreographer | 老子 · 大象无形 | 最好的动画用户感觉不到 |
| token-keeper | 康德 · 绝对命令 | 设计 token 即立法 |
| a11y-guardian | 罗尔斯 · 无知之幕 | 替最弱势用户设计 |
| responsive-strategist | 赫拉克利特 | 人不能两次踏入同一屏幕 |
| ui-auditor | 苏格拉底 · 产婆术 | 不评判，助产 |

### 🛑 REJECT R1-R6 哲学命题映射

| 规则 | 条件 | 哲学命题 | 出处 |
| --- | --- | --- | --- |
| R1 | 时长 > 5s 非主动触发 | 人是目的，不是手段 | 康德 |
| R2 | 仪式装饰在 100+ 次高频界面 | 控制二分法 | 爱比克泰德 |
| R3 | 需求自相矛盾 | 矛盾律 | 亚里士多德 |
| R4 | 违反三条铁律 | 绝对命令 | 康德 |
| R5 | 路径 B 硬条件未满足 | 可证伪性 | 波普尔 |
| R6 | 双主导冲突 | 名不正则言不顺 | 孔子 |

### 🌸 / 🏛️ 东方 / 西方双轨

`flavor: eastern` / `western` / `hybrid`（默认）—— 详见 [`references/17-philosophy.md`](references/17-philosophy.md) §四。

### 🧠 思维链可视化（所有 agent 通用）

agent 输出 SPEC 时建议显式标注哲学推理路径：

```
[Dasein 此在 → 识别用户处境]
[现象学还原 → 提取本质需求]
[奥卡姆剃刀 → 删除冗余方案]
[Canon-D5 → Dieter Rams: 好设计是隐而不见的]
[结论 → 不做弹窗，改 inline 提示]
```

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

## 📚 参考资料库（共 23 份 + 案例库）

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
| **17** | **[philosophy.md](references/17-philosophy.md)** | 全员（**v2.2 哲学根基**） |
| **18** | **[design-canon.md](references/18-design-canon.md)** | 全员（**v2.2 经典法典**） |
| **case/** | **[cases/](references/cases/)** | 全员（**v2.2 案例库**） |
| **19** | **[audit-ruleset-philosophy.md](references/19-audit-ruleset-philosophy.md)** | 🔍 **哲学规则集 P-G1~P-G4 + per-agent P-XX + Flavor P-F1/F2（v2.3）** |
| **examples/** | **[examples/](examples/)** | 全员（**v2.3 真实 demo 库**） |

附录资产 4 份：`animation-keyframes.css`、`component-patterns.md`、`interaction-patterns.md`、`steps-schema.md`

> **v2.1 规则集独立化**：审计规则不再藏在 ui-auditor 内。任何令牌 / 动画变更必须同步提交 ref 15 或 16 的 PR，否则审计员将拒绝执行。

---

## 🛠 技术栈速览

React 19 · TypeScript 5.8 · Vite 6 · Tailwind 3.4.19 · Heroicons · 无路由库 · `switch(activeView)` 切换 · `cubic-bezier(0.16, 1, 0.3, 1)`

---

*一家工作室。一种语言。两把嗓子。十四位匠人。六个 tier。零越界。*
