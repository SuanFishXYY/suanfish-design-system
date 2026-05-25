<div align="center">

# 🎭 算鱼设计系统

### *能对老板说「不」的多智能体设计 AI*

![version](https://img.shields.io/badge/version-4.0.0-blueviolet)
![philosophers](https://img.shields.io/badge/philosophers-301-9cf)
![agents](https://img.shields.io/badge/agents-44-purple)
![congress](https://img.shields.io/badge/sage_congress-democratic-yellow)
![tiers](https://img.shields.io/badge/tiers-8-orange)
![paths](https://img.shields.io/badge/paths-7-teal)
![philosophy](https://img.shields.io/badge/philosophy-3--layer-darkblue)
![AI-native](https://img.shields.io/badge/AI--native-Path%20G-ff69b4)
![rules](https://img.shields.io/badge/REJECT-R1--R25-red)
![language](https://img.shields.io/badge/lang-中文-red)
![license](https://img.shields.io/badge/license-MIT-green)
![SKILL.md](https://img.shields.io/badge/SKILL.md-standard-black)
![stars](https://img.shields.io/github/stars/SuanFishXYY/suanfish-design-system?style=social)

**99% 的 AI 永远说"好的"。这个 AI 会先反问你: 这事真该做吗?**

它内置 25 条硬规则——比如老板要"每次进首页都弹 10 秒品牌动画"? 直接拒绝, 还给你算 30 天后 DAU 会跌 4%。

**v4.0 升级**: 不再每次召唤一堆 AI 群辩。现在按你这个具体需求, 智能挑 1-15 位最懂的"圣人专家"开个小议会, 投票 2/3 通过才出方案——简单事 1 个圣人就够 (省 80% token), 复杂事多人辩论。

```
业务方: 「登录页加个 10 秒品牌动画，每天都播。」
🛑 REJECT —— R1 + R2 双重命中：强加体验 + 高频骚扰
   预计 30 天后 DAU 跌 4%。退回业务方。

业务方: 「既要 100% AI 自动，又要用户随时介入每个细节。」
🛑 REJECT —— R18 命中：矛盾两端都站（D2 没选倾向）
   请补全 BRIEF 后重新提交。  ← v3.0 新规
```

[ 📖 进阶文档 (README.dev) ](README.dev.md) · [ 🎬 SKILL 入口 ](SKILL.md) · [ 🏛 议会 demo (5 TC) ](docs/v4-congress-simulation.md) · [ 🤖 看 44 位 agent ](agents/) · [ 🌗 三层哲学 ](references/24-philosophy-dialectics.md) · [ 🌐 English ](README.en.md)

</div>

---

## ⚡ 30 秒上手 · Quick Install & Use

### 方式 A · Claude Code 插件市场 (推荐)

```bash
# 在 Claude Code 里执行
/plugin marketplace add SuanFishXYY/suanfish-marketplace
/plugin install suanfish-design-system
```

装好后会自动加载 44 位 agent + 议会协议 + 25 条 REJECT 规则。无需任何配置。

### 方式 B · 直接克隆 (Copilot CLI / Codex / 其他)

```bash
# 1. 克隆到项目
git clone https://github.com/SuanFishXYY/suanfish-design-system.git .github/skills/suanfish-design-system

# 2. 全局链接 (按你用的 CLI 选一行)
ln -sf "$(pwd)/.github/skills/suanfish-design-system" ~/.copilot/skills/suanfish-design-system   # GitHub Copilot CLI
ln -sf "$(pwd)/.github/skills/suanfish-design-system" ~/.claude/skills/suanfish-design-system    # Claude Code 手动模式
ln -sf "$(pwd)/.github/skills/suanfish-design-system" ~/.agents/skills/suanfish-design-system    # 通用 agents 目录

# 3. 验证安装
ls ~/.copilot/skills/suanfish-design-system/agents/ | wc -l   # 应该输出 44
```

### 怎么用 · How to trigger

**直接对你的 AI 说话, 涉及以下关键词时自动启用**:

> UI / 设计 / 组件 / 动画 / 文案 / a11y / 弹窗 / 引导 / 图表 / 对话 / 通知 / 移动端 / AI 助手界面

**示例 BRIEF**:

```
你: "帮我设计一个企业 dashboard 的毛玻璃数据卡片"

算鱼: 🏛 议会召唤中...
      ① 评分: silence-architect (8.5) / holism-strategist (7.85) / wuwei-master (7.65) 入场
      ② 邀请: 西田 / 海德格尔 / 怀特海 / 维纳 / 庄子 (5 助手)
      ③ 讨论: blur 半径三态辩证 + 200ms 反馈环 + 暗黑模式自动反转
      ④ 投票: 7/10 = 70% ≥ 67% ✓ 第 1 轮通过
      → 5 条具体设计决策 + 引用核验 + 路径推荐 Path B
```

完整 5 TC 演示见 → [docs/v4-congress-simulation.md](docs/v4-congress-simulation.md)

### REJECT 示例 · 你会看到的样子

```
你: "登录页加个 10 秒品牌动画, 每天都播"
算鱼: 🛑 REJECT —— R1 + R2 双重命中: 强加体验 + 高频骚扰
      预计 30 天后 DAU 跌 4%。退回业务方。
```

---

## 🏛 核心机制 · v4.0 圣人议会民主

**这是算鱼和其他设计 AI 最根本的区别**——不是"AI 给你答案", 而是"AI 帮你召开一场专家会议给你答案"。

```
                          你的 BRIEF
                              ↓
        ┌─────────────────────────────────────────┐
        │   🏛 议会五步协议 (bench-matcher 全包)     │
        ├─────────────────────────────────────────┤
        │  ① 评分   8 位 Tier 0 圣人按需求 5 维打分  │
        │  ② 召唤   ≥7.5 分的入场 (通常 1-3 位)      │
        │  ③ 邀请   入场圣人从 293 板凳叫师弟师妹    │
        │           (单人配额 3 · 总数封顶 15)       │
        │  ④ 讨论   全员陈述 → 合并共识 → 调解冲突   │
        │  ⑤ 投票   Tier 0 = 2 票 / 助手 = 1 票      │
        │           ≥ 2/3 通过 · 不过重投 (max 3 轮) │
        └─────────────────────────────────────────┘
                              ↓
                  🔍 引用核验 (R25 兜底)
                              ↓
                 🧭 派单 → Path A-G → 🛡 体检
```

### 议会的三个关键设计

| 设计 | 解决什么问题 | v3 时代的做法 |
| --- | --- | --- |
| **动态召唤** | 简单需求不需要 8 个 AI 群辩, 一个就够 | v3.x 八圣人每次固定全上 (token 浪费) |
| **加权投票** | Tier 0 (核心圣人) 权重 2×, 助手 1× | v3.x 没有投票, 谁声音大听谁的 |
| **议会僵局律 (R24)** | 3 轮投不过 → 不假装通过, 直接升级用户 | v3.x 强行 "和稀泥" 出方案 |

### 议会调用成本

| BRIEF 类型 | 入场人数 | LLM 调用 | 对比 v3.x |
| --- | --- | --- | --- |
| 简单调整 (圆角/颜色) | 1 圣人 | ~5 calls | **省 80%** |
| 中等组件 (毛玻璃卡片) | 8 人 | ~18 calls | 省 30% |
| 复杂系统 (企业级 DS) | 15 人 (封顶) | ~50 calls | 持平 |
| 哲学冲突 (要 2 轮投票) | 9 人 | ~25 calls | 持平 |

📖 完整 5 TC 演示 → [docs/v4-congress-simulation.md](docs/v4-congress-simulation.md)

---

## 🌗 三层哲学 + 301 板凳 (议会的"知识库")

**议会能开起来, 是因为底下有 301 位真实哲学家做后盾** —— 不是 LLM 瞎编圣人, 每条引用都能在板凳里查到。

| Layer | 回答什么 | R 规则 |
| --- | --- | --- |
| **价值** [📖](references/17-philosophy.md) | 该选哪边? | R1-R12 |
| **辩证** [📖](references/24-philosophy-dialectics.md) | 为什么有两边? | R18 |
| **发展规律** [📖](references/25-philosophy-laws.md) | 矛盾如何随时间漂移? | R13-R17 |
| **历史定位** [📖](references/26-historical-positioning.md) | 这个时代该怎么做? | — |

📚 **[301 位哲学家板凳 →](references/27-philosopher-bench.md)**（117 位中国 + 184 位西方/全球, 每位带"一句话核心 + 设计钩子"）

---

<details>
<summary>📐 <b>详细架构图 · 33 agent / 7 tier mermaid 流程图</b> (v3 时代图 · 点开看 · 议会民主版图正在制作中)</summary>

## 🏗️ 架构总览 · v3.0 (36 agent · 8 tier · 7 path · Tier 0 辩证哲学层 + Path G AI-native)

> ⚠️ 下面这张是 v3.0 的图。v4.0 议会民主版图正在制作中——核心流程见上方 [🏛 核心机制](#-核心机制--v40-圣人议会民主) 块。

```mermaid
flowchart LR
    User([👤 用户<br/>BRIEF])

    subgraph T0 ["🚦 Tier 1 · 入口调度"]
        MS["moment-strategist<br/><i>REJECT R1–R6</i>"]
    end

    subgraph T05 ["🚦 Tier 1.5 · 协调 (v2.4)"]
        FC[flow-coordinator]
    end

    subgraph T2 ["🎯 Tier 2 · 4 路径主理"]
        OD["onboarding-director<br/>Path A 仪式"]
        UA["ui-architect<br/>Path B/E/F 稳态"]
        CD["conversation-director<br/>Path C 聊天 ✨"]
        ND["notification-director<br/>Path D 通知 ✨"]
    end

    subgraph T3 ["🏗️ Tier 3 · 5 容器专科"]
        MC[modal-craftsman]
        WD[wizard-designer]
        DV[data-viz-engineer]
        TC["table-craftsman ✨"]
        CC["chat-ui-craftsman ✨"]
    end

    subgraph T4 ["✍️🎨 Tier 4 · 7 内容专科"]
        CW[copy-writer]
        IC[icon-curator]
        ES[empty-state-storyteller]
        RS[responsive-strategist]
        PA["persona-architect ✨"]
        IA["information-architect ✨"]
        ER["error-recovery-designer ✨"]
    end

    subgraph T5 ["🧩 Tier 5 · 5 横切咨询"]
        TK[token-keeper]
        AC[animation-choreographer]
        AG[a11y-guardian]
        BK["brand-keeper ✨"]
        I18["i18n-strategist ✨"]
    end

    subgraph T6 ["🛡️ Tier 6 · 审计"]
        UAU["ui-auditor<br/>ref 15+16+19"]
    end

    Output([✅ REPORT<br/>实施清单])

    User ==> MS
    MS ==>|单路径| T2
    MS ==>|多路径| FC
    FC ==> T2
    T2 ==> T3
    T3 ==> T4
    T4 ==> UAU
    T3 -.consult.-> T5
    T4 -.consult.-> T5
    UAU ==>|✅ PASS| Output
    UAU -.->|🛑 REJECT 回炉| MS

    classDef tier0 fill:#FCA5A5,stroke:#DC2626,color:#7F1D1D,stroke-width:2px
    classDef tier05 fill:#FECACA,stroke:#B91C1C,color:#7F1D1D,stroke-width:1.5px
    classDef tier2 fill:#DDD6FE,stroke:#7C3AED,color:#4C1D95,stroke-width:1.5px
    classDef tier3 fill:#BFDBFE,stroke:#2563EB,color:#1E3A8A,stroke-width:1.5px
    classDef tier4 fill:#A7F3D0,stroke:#059669,color:#064E3B,stroke-width:1.5px
    classDef tier5 fill:#FEF08A,stroke:#CA8A04,color:#713F12,stroke-width:1.5px
    classDef tier6 fill:#FDBA74,stroke:#EA580C,color:#7C2D12,stroke-width:1.5px
    classDef entry fill:#F3F4F6,stroke:#6B7280,color:#111827,stroke-width:2px
    classDef exit fill:#6EE7B7,stroke:#047857,color:#064E3B,stroke-width:2px

    class MS tier0
    class FC tier05
    class OD,UA,CD,ND tier2
    class MC,WD,DV,TC,CC tier3
    class CW,IC,ES,RS,PA,IA,ER tier4
    class TK,AC,AG,BK,I18 tier5
    class UAU tier6
    class User entry
    class Output exit
```

> **✨ = v2.4 新增 agent**（10 个）。多路径混合时由 `flow-coordinator` (Tier 1.5) 协调。

> **REJECT 机制独家**：moment-strategist 内置 R1-R6 6 条硬规则，命中任一即拒，不做就是不做。每条 REJECT 都绑定一条不可让步的哲学命题（详见 [📜 哲学根基](references/17-philosophy.md)）。

<details>
<summary>📐 <b>架构图变体 · 点开看更多视角</b>（数据流 / 决策树 / 用户旅程）</summary>

### 🔄 变体 1 · 数据流时序图（BRIEF → SPEC → REPORT）

```mermaid
sequenceDiagram
    autonumber
    actor User as 👤 用户
    participant MS as 🚦 moment-strategist
    participant T1 as 🎯 Tier 1<br/>战略层
    participant T2 as 🏗️ Tier 2<br/>架构层
    participant T34 as ✍️🎨 Tier 3-4<br/>内容/视觉
    participant T5 as 🧩 Tier 5<br/>横切咨询
    participant UAU as 🛡 ui-auditor

    User->>MS: BRIEF（业务需求 + 上下文）
    MS->>MS: 跑 R1-R6 预检
    alt 命中 REJECT
        MS-->>User: 🛑 拒单 + 理由 + 替代方案
    else 通过预检
        MS->>T1: 派单（onboarding / wizard）
        T1->>T2: 战略 → 信息架构
        T2->>T34: 模块拆解
        T34->>T5: consult（token / a11y / responsive）
        T5-->>T34: 约束清单
        T34->>UAU: SPEC 提审
        UAU->>UAU: 全量 checklist
        alt PASS
            UAU-->>User: ✅ REPORT + 实施清单
        else 不合格
            UAU->>MS: 🛑 REJECT 回炉
            MS->>T2: 带修改建议重做
        end
    end
```

### 🛑 变体 2 · REJECT R1-R6 决策树

```mermaid
flowchart TD
    Start([📥 收到 BRIEF]) --> R1{R1<br/>有明确<br/>用户痛点?}
    R1 -->|否| Rej1[🛑 REJECT R1<br/>'连问题都没说清，做啥?']
    R1 -->|是| R2{R2<br/>符合产品<br/>定位?}
    R2 -->|否| Rej2[🛑 REJECT R2<br/>'稳态高频别玩仪式感']
    R2 -->|是| R3{R3<br/>有数据/<br/>调研支撑?}
    R3 -->|否| Rej3[🛑 REJECT R3<br/>'凭感觉的决策不接']
    R3 -->|是| R4{R4<br/>风险/成本<br/>可控?}
    R4 -->|否| Rej4[🛑 REJECT R4<br/>'ROI 不正不做']
    R4 -->|是| R5{R5<br/>a11y/合规<br/>过关?}
    R5 -->|否| Rej5[🛑 REJECT R5<br/>'歧视任何用户都是红线']
    R5 -->|是| R6{R6<br/>有验证/<br/>退出方案?}
    R6 -->|否| Rej6[🛑 REJECT R6<br/>'没法验证就是赌博']
    R6 -->|是| Pass([✅ 进入 Tier 1 派单])

    Rej1 -.提供替代.-> Alt([💡 替代方案])
    Rej2 -.-> Alt
    Rej3 -.-> Alt
    Rej4 -.-> Alt
    Rej5 -.-> Alt
    Rej6 -.-> Alt

    style Pass fill:#69db7c,stroke:#37b24d,color:#000
    style Alt fill:#ffd43b,stroke:#fab005,color:#000
    style Rej1 fill:#ff6b6b,color:#fff
    style Rej2 fill:#ff6b6b,color:#fff
    style Rej3 fill:#ff6b6b,color:#fff
    style Rej4 fill:#ff6b6b,color:#fff
    style Rej5 fill:#ff6b6b,color:#fff
    style Rej6 fill:#ff6b6b,color:#fff
```

### 🗺️ 变体 3 · 用户旅程图（从需求到交付）

```mermaid
journey
    title 算鱼设计系统 · 用户旅程
    section 🔥 提需求
      写 BRIEF: 3: 用户
      MS 跑预检: 4: MS
      被 REJECT(可能): 2: MS
      重写 BRIEF: 3: 用户
    section 🏗️ 设计中
      Tier 1 派单: 5: MS, T1
      架构拆解: 5: T2
      内容/视觉并行: 5: T3, T4
      Tier 5 consult: 4: T5
    section 🛡️ 审计
      UAU 全量检查: 4: UAU
      回炉重做(可能): 2: UAU, MS
      PASS 输出: 5: UAU
    section ✅ 交付
      拿到 REPORT: 5: 用户
      实施清单: 5: 用户
      上线验证: 5: 用户
```

### 📦 变体 4 · 6 Tier 类图（看清职责边界）

```mermaid
classDiagram
    class MomentStrategist {
        +tier: 0
        +role: 调度+审单
        +rules: R1-R6
        +reject(brief)
        +dispatch(spec)
    }
    class OnboardingDirector {
        +tier: 1
        +role: 新手引导战略
    }
    class WizardDesigner {
        +tier: 1
        +role: 向导流程设计
    }
    class UIArchitect {
        +tier: 2
        +role: 信息架构
    }
    class ModalCraftsman {
        +tier: 2
        +role: 弹窗/抽屉
    }
    class TokenKeeper {
        +tier: 5
        +role: 设计 token 守门
        +consult()
    }
    class A11yGuardian {
        +tier: 5
        +role: 可访问性
        +consult()
    }
    class UIAuditor {
        +tier: 6
        +role: 终审
        +pass()
        +reject_back()
    }
    MomentStrategist --> OnboardingDirector
    MomentStrategist --> WizardDesigner
    OnboardingDirector --> UIArchitect
    WizardDesigner --> UIArchitect
    WizardDesigner --> ModalCraftsman
    UIArchitect ..> TokenKeeper : consult
    UIArchitect ..> A11yGuardian : consult
    UIArchitect --> UIAuditor
    UIAuditor --> MomentStrategist : REJECT
```

</details>

</details>

---

## 🥇 为什么选算鱼 · 三大差异

### 1. 唯一会"拒单"的设计 AI

```
普通 AI:  "好的, 这就给您做"   ← 灾难的开始
算鱼:     "等等, 这个需求我看不太合理:
          R1 + R2 命中, 30 天后 DAU 预计跌 4%。
          建议改成 [替代方案]。"   ← P8 同事
```

25 条硬规则 (R1-R25), 命中即拒, 附数据化替代方案。

### 2. v4.0 圣人议会民主

不是"一个 AI 包打天下"——按你的需求动态召唤 1-15 位最懂的"圣人专家", 投票 ≥ 2/3 才出方案。简单事省 80% token, 复杂事多人辩论, 不和稀泥。

### 3. 引用真实律 (R25 兜底)

凡是议会引用的圣人观点 (如"老子说...""维特根斯坦认为...") 都要在 301 板凳里查到原文。LLM 编一句话装作圣人说的? `quotation-verifier` 直接打回重审。

### 与其他工具一句话对比

| 维度 | 算鱼 v4.0 | shadcn/ui | Tailwind UI | 普通 AI design |
| --- | --- | --- | --- | --- |
| 本质 | 44 agent + 议会民主 | 组件库 | 组件库 + 模板 | 单 prompt |
| 会说 NO | ✅ R1-R25 | ❌ | ❌ | ❌ 永远 yes |
| 引用可追溯 | ✅ 301 板凳兜底 | N/A | N/A | ❌ 黑盒 |
| 适合谁 | 内部产品 / design ops 团队 | 独立开发者 | 商业 SaaS | 个人项目 |

---

## 🏛 44 agent · 8 tier · 7 path (一图概览)

```
┌────────────────────────────────────────────────────────────────────┐
│ Tier 0   · 议会 ×8       🪙 dialectician · 📜 historian · 🔭 futurist │
│  (辩证哲学层)             🍃 wuwei-master · 🦋 perspectivist          │
│                          🌫 silence-architect · 🏺 holism-strategist │
│                          🔬 debunk-auditor                          │
├────────────────────────────────────────────────────────────────────┤
│ Tier 1   · 调度          🧭 moment-strategist (R1-R23 REJECT)       │
│ Tier 1.5 · 协调          🔀 flow-coordinator                        │
│ Tier 1.6 · 议会调度       🏛 bench-matcher (5 步议会自包含)          │
│ Tier 1.7 · 引用核验       🔍 quotation-verifier (R25)                │
├────────────────────────────────────────────────────────────────────┤
│ Tier 2   · 主导 ×4       🎬 onboarding · 🏛 ui-architect             │
│                          💬 conversation · 🔔 notification           │
├────────────────────────────────────────────────────────────────────┤
│ Tier 3   · 容器专科 ×10  🪟 modal · 🧙 wizard · 📊 viz · 📋 table     │
│                          💬 chat-ui · 🌊 stream · 🛠️ tool-call       │
│                          🧵 thread · 🎨 artifact · ✍️ prompt-input   │
├────────────────────────────────────────────────────────────────────┤
│ Tier 4   · 内容专科 ×10  📝 copy · 🎯 icon · 🪟 empty-state           │
│                          📱 responsive · 👤 persona · 🗂 info-arch    │
│                          🔧 error-recovery · 🧠 reasoning-viz         │
│                          📑 citation · ⏱️ rate-limit                  │
├────────────────────────────────────────────────────────────────────┤
│ Tier 5   · 横切咨询 ×6   🎨 token · 💫 anim · ♿ a11y · 🏷 brand     │
│                          🌐 i18n · 🔀 model-switcher                 │
├────────────────────────────────────────────────────────────────────┤
│ Tier 6   · 质量门        🛡 ui-auditor                              │
└────────────────────────────────────────────────────────────────────┘

7 条路径: A 仪式 · B 稳态 · C 聊天 · D 通知 · E 移动 · F 嵌入 · G AI-native
```

每位 agent 是一个独立 `.md` 文件, 可独立审阅 / 修改 → [`agents/`](agents/)

---

## 📂 项目结构

```
suanfish-design-system/
├── SKILL.md                 # 总指挥 + 6 维决策树 + 5 套快速通道
├── README.md                # 你正在读的文件
├── README.dev.md            # 给已经懂的人 · 技术细节
├── CHANGELOG.md             # 版本历史
├── .skill-manifest.json     # 机读元数据
├── LICENSE                  # MIT
├── agents/                  # 44 位匠人 (v4.0: Tier 0 议会 8 位 + bench-matcher + quotation-verifier + ...)
│   ├── bench-matcher.md          # ⭐ v4.0 议会核心
│   ├── quotation-verifier.md     # ⭐ R25 引用核验
│   ├── dialectician.md           # ⭐ Tier 0 ×8
│   ├── moment-strategist.md
│   └── ... (40 more)
├── docs/
│   └── v4-congress-simulation.md # ⭐ 5 TC 议会演示
└── references/              # 27 份规范 + 301 哲学家板凳
    ├── 17-philosophy.md
    ├── 24-philosophy-dialectics.md
    ├── 25-philosophy-laws.md
    ├── 26-historical-positioning.md
    └── 27-philosopher-bench.md   # ⭐ 301 圣人板凳
```

---

## ⚠️ 不适合谁用（反向筛选）

- ❌ **只想做一个 landing page 的人** —— 杀鸡用牛刀，去用 Tailwind UI
- ❌ **不喜欢「被 AI 反驳」的团队** —— REJECT 机制对你是负担不是资产
- ❌ **追求 5 分钟出 demo 的人** —— 学习架构要半小时
- ❌ **没有 design system 沉淀需求的个人项目** —— 8 tier 是企业级配置

**适合谁**：
- ✅ 有真实产品要长期维护的 in-house 团队
- ✅ 厌倦了「业务方什么都要做」的设计 / 工程 lead
- ✅ 想把 design ops 工程化的技术管理者
- ✅ 喜欢可追溯、可审计、可问责的工程师

---

## 📜 许可

[MIT](LICENSE) · 算鱼工作室

---

<div align="center">

**如果你也被「永远说 yes 的 AI」毒打过，给个 ⭐ Star。**

</div>
