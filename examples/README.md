# 📚 Examples · 真实 demo 项目

> *光说不练假把式。这里是用算鱼设计系统**实际产出**的 3 个完整案例。*

每个 demo 包含完整的 agent 协作 transcript：**BRIEF → PLAN → SPEC × N → REPORT**，让你看到从需求到代码的全过程。

---

## 案例索引

| # | 名称 | 主 agent | 模式 | 复杂度 |
| --- | --- | --- | --- | --- |
| 01 | [Onboarding Eureka 欢迎页](01-onboarding-eureka/) | onboarding-director | 🎬 仪式 | ⭐⭐⭐ |
| 02 | [Dashboard 三栏工作台](02-dashboard-three-pane/) | ui-architect | 🏛 稳态 | ⭐⭐⭐⭐ |
| 03 | [Wizard 多步表单](03-wizard-form/) | wizard-designer | 🏛 稳态 | ⭐⭐⭐ |

---

## 阅读顺序建议

如果你是**第一次**接触算鱼设计系统：
1. 先读 [01-onboarding-eureka](01-onboarding-eureka/) — 看一个完整的 BRIEF → REPORT 流程
2. 再读 [02-dashboard-three-pane](02-dashboard-three-pane/) — 看复杂场景如何协作
3. 最后读 [03-wizard-form](03-wizard-form/) — 看 REJECT 机制如何工作

如果你是**正在评估**这个 skill：
- 直接看每个 demo 的 `report.md` — 那是最终质量证据

---

## 每个 demo 的文件结构

```
0X-name/
├── README.md             ← demo 概述 + 设计目标
├── brief.md              ← moment-strategist 派单
├── plan.md               ← 主 agent 拆解组件树
├── specs/                ← 各 agent 的 SPEC 输出
│   ├── ui-architect.md
│   ├── copy-writer.md
│   ├── token-keeper.md
│   └── ...
├── report.md             ← ui-auditor 终审 REPORT
├── code/                 ← reference 实现代码
│   ├── Component.tsx
│   └── styles.css
└── preview.svg           ← 静态预览图（可选）
```

---

> *"代码不会撒谎。SPEC 才是最终质检。"*
