# 📚 Examples · 真实 demo 项目

> *光说不练假把式。这里是用算鱼设计系统**实际产出**的完整 SPEC 案例。*

每个 demo 包含完整的 agent 协作 transcript：**BRIEF → PLAN → SPEC × N → REPORT**，让你看到从需求到设计规范的全过程。

---

## 案例索引

| # | 名称 | 主 agent | 模式 | 复杂度 | 状态 |
| --- | --- | --- | --- | --- | --- |
| 01 | [Onboarding Eureka 欢迎页](01-onboarding-eureka/) | onboarding-director | 🎬 仪式 | ⭐⭐⭐ | ✅ |
| 02 | Dashboard 三栏工作台 | ui-architect | 🏛 稳态 | ⭐⭐⭐⭐ | 🚧 规划中 |
| 03 | Wizard 多步表单（REJECT 触发演示） | wizard-designer | 🏛 稳态 | ⭐⭐⭐ | 🚧 规划中 |
| 04 | Streaming Chat（v2.5 Path G） | conversation-director | 💬 AI-native | ⭐⭐⭐⭐ | 🚧 规划中 |

> 02 / 03 / 04 案例正在筹备中，欢迎 PR 贡献：[CONTRIBUTING.md](../CONTRIBUTING.md)

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

