# Example 01 · Onboarding Eureka 欢迎页

> 用户首次登录 SuanFish 平台时，看到的 3 步亮点介绍 — 介绍 v2.2 多模态能力、联网检索、Gemini 模型切换。

## 🎯 设计目标

- 让 5 分钟内的新用户能**完整理解** v2.2 的核心升级
- **不超过 3 步**（庄子 · 庖丁解牛 — 找肯綮，不硬切）
- 用户**可随时跳过**（康德 · 人是目的）
- 整体时长 ≤ 15s（避免 R1 强加体验）

## 📊 六维体检

| 维度 | 取值 |
| --- | --- |
| 重复度 | 1-2 次（首次登录 + 版本升级时） |
| 信息密度 | 序列（3 步） |
| 交互意图 | 读 + 探索 |
| 时长预算 | 10-15s |
| 情感目标 | 期待 + 欢迎 |
| 复用度 | 100%（标准 onboarding 模式） |

→ **路径 A · 仪式感模式** ✅

## 📋 文件清单

- [`brief.md`](brief.md) — moment-strategist 派单（含哲学引用）
- [`plan.md`](plan.md) — onboarding-director 组件树
- [`specs/copy.md`](specs/copy.md) — copy-writer 3 步文案
- [`specs/animation.md`](specs/animation.md) — animation-choreographer 动效节奏
- [`specs/token.md`](specs/token.md) — token-keeper 颜色/尺寸约束
- [`report.md`](report.md) — ui-auditor 终审 REPORT
- [`code/WelcomeModal.tsx`](code/WelcomeModal.tsx) — reference 实现

---

## 🎬 用户看到的效果

```
┌────────────────────────────────────────────────┐
│                                                │
│         ✨ 欢迎来到 SuanFish v2.2               │
│                                                │
│   ┌─ Step 1 of 3 ─────────────────────────┐   │
│   │                                       │   │
│   │   🎨 多模态能力升级                    │   │
│   │   现在我能「文生图」+「读图」           │   │
│   │   首次搭载联网检索，融合实时网络信息    │   │
│   │   提升企业级视觉创作的时效性           │   │
│   │                                       │   │
│   │   [跳过]              [下一步 →]      │   │
│   └───────────────────────────────────────┘   │
│                                                │
│              ● ○ ○  Step 1 / 3                │
│                                                │
└────────────────────────────────────────────────┘
```

---

> [📜] 哲学锚点：`[庄子 · 庖丁解牛]` — 顺势而为，找肯綮
> [📐] 引用 Canon：`[Canon-D4]` 让产品易于理解 / `[Canon-E2]` 物哀 · 余韵
