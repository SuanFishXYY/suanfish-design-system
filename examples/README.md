# 📚 Examples · 真实 demo 项目

> *光说不练假把式。这里是用算鱼设计系统**实际产出**的完整 SPEC 案例。*

每个 demo 包含完整的 agent 协作 transcript：**BRIEF → PLAN → SPEC × N → REPORT**，让你看到从需求到设计规范的全过程。

---

## 案例索引

| # | 名称 | 主 agent | 模式 | 复杂度 | 状态 |
| --- | --- | --- | --- | --- | --- |
| 01 | [Onboarding Eureka 欢迎页](01-onboarding-eureka/) | onboarding-director | 🎬 仪式 | ⭐⭐⭐ | ✅ |
| 02 | [Three-Gates Modal 三道门端到端](02-three-gates-modal/) | modal-craftsman + review-orchestrator | 🎼 审核制度 | ⭐⭐⭐⭐ | ✅ |
| 03 | [Dashboard 三栏工作台](03-dashboard-workbench/) | ui-architect + light-impressionist + void-painter | 🏛 稳态+美学辩证 | ⭐⭐⭐⭐ | ✅ |
| 04 | [Wizard 多步表单（REJECT 触发演示）](04-wizard-reject/) | wizard-designer + dialectician | 🚫 否决机制 | ⭐⭐⭐ | ✅ |
| 05 | [Streaming Chat](05-streaming-chat/) | conversation-director + stream-craftsman | 💬 AI-native | ⭐⭐⭐⭐⭐ | ✅ |

## 🖼️ 视觉证据（可直接渲染）

> 入口：[visual-evidence/gallery.html](visual-evidence/gallery.html) — 画廊导航页，一键跳转所有证据

| 文件 | 内容 | 对应 ref |
| --- | --- | --- |
| [visual-evidence/index.html](visual-evidence/index.html) | 稳态内核——色谱/加减辩证/组件/三栏/D3 映射/dark mode 全渲染 | 01 / 04 / 44 / 45 / 46 / 47 |
| [visual-evidence/eureka.html](visual-evidence/eureka.html) | 仪式模式 Eureka 欢迎闪现——8 keyframes + 5 层粒子组合真实动画（扩散环/光球/火花/灯泡/标题渐变+扫光），点按钮重放 | 02 / 11 / 46 |
| [visual-evidence/streaming-chat.html](visual-evidence/streaming-chat.html) | AI-native 流式聊天——cursor 三态闪烁 + 工具调用四态卡 + 思维链折叠 + 引用角标 hover 预览 + 模型切换 + IME 安全输入 + 完成脉冲 | 36 / 37 / 39 / 40 / 41 / 46 / 47 |
| [visual-evidence/council-debate.html](visual-evidence/council-debate.html) | 议会辩证可视化——六步推演（路由→评分→常委→邀请→三段式讨论→投票）+ 加减辩证交锋 + D2/D7 矛盾映射 + 端到端追溯链，点按钮推进 | 24 / 27 / 46 / 47 / 48 |
| [visual-evidence/sound-design.html](visual-evidence/sound-design.html) | 声音设计可听证据——R-Cross 三档位（凯奇沉默/Eno 陪伴/贝多芬命运四音）+ 通知音四优先级，Web Audio API 真实播放，点按钮听 | 32 / 46 |
| [visual-evidence/anti-patterns.html](visual-evidence/anti-patterns.html) | 反模式对比可视化——18 条 ❌ 坏 vs ✅ 好并排可看（alert/HEX/!important/任意z/div onClick/阴影/text-yellow/文案空话） | 01 / 07 / 14 / 34 / 35 |

> 03 / 04 / 05 案例正在筹备中，欢迎 PR 贡献：[CONTRIBUTING.md](../CONTRIBUTING.md)

---

## 阅读顺序建议

如果你是**第一次**接触算鱼设计系统：
1. 先读 [01-onboarding-eureka](01-onboarding-eureka/) — 看一个完整的 BRIEF → REPORT 流程
2. 看 demo 的 `report.md` — 那是最终质量证据
3. 看 demo 的 `specs/` — 看各 agent 如何分工

如果你是**正在评估**这个 skill：
- 直接看 [01 的 report.md](01-onboarding-eureka/report.md) — 6 维体检表 + 哲学锚点引用

---

## 每个 demo 的文件结构

```
0X-name/
├── README.md             ← demo 概述 + 设计目标
├── brief.md              ← moment-strategist 派单
├── plan.md               ← 主 agent 拆解组件树
├── specs/                ← 各 agent 的 SPEC 输出
│   ├── animation.md
│   ├── copy.md
│   └── token.md
└── report.md             ← ui-auditor 终审 REPORT
```

> 注：代码实现 (`code/`) 不在仓库内，是因为这是 **SKILL · 设计语言体系**，不是组件库。SPEC 才是契约。框架无关 — 你可以用 React / Vue / Solid 实现。

---

> *"代码不会撒谎。SPEC 才是最终质检。"*

