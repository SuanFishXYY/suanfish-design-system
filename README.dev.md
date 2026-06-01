# 算鱼设计系统 · Suanfish Design System

> **一家工作室，五十二位匠人，八个 tier。从用户登录的前 3 秒，到第 3000 次点击，每一寸像素都说着同一种品牌语言。**

一套统一的多智能体设计语言体系，服务于算鱼工作台。它同时治理 **初见的仪式感瞬间**（欢迎、版本更新介绍）和 **日常的稳态界面**（三栏外壳、模态、向导、数据可视化）。

## v4.2 架构亮点

```
Tier 0   · 圣人议会   🏛 默认种子席 12 (4:4:4 骨架) · v4.2.6 bench-matcher 从 420 厚仙人全员评分动态选常委
Tier 1   · 调度       🧭 moment-strategist (可 REJECT)
Tier 1.5 · 协调       🚦 flow-coordinator · 曾降级四人 (福柯/怀特海/老子/庄子 · v4.2.6 已并入普通板凳, 与全员同台竞选常委)
Tier 2   · 主导       🎬 onboarding-director / 🏛 ui-architect / 💬 conversation-director / 🔔 notification-director
Tier 3   · 容器专科   🪟 modal · 🧙 wizard · 📊 viz · 📋 table · 🗨️ chat · 🌊 stream · 🛠️ tool-call · 🌳 thread · 🎨 artifact · ⌨️ prompt-input
Tier 4   · 内容专科   📝 copy · 🎯 icon · 🪟 empty-state · 📱 responsive · 👥 persona · 🗺️ IA · 🩹 error-recovery · 🧠 reasoning · 📑 citation · ⏳ rate-limit
Tier 5   · 横切咨询   🎨 token · 💫 anim · ♿ a11y · 🛡️ brand · 🌍 i18n · 🔀 model-switcher
Tier 6   · 质量门     🔍 ui-auditor (加载外部规则集 ref 15 / 16 / 19) · 🏛 sage-council (已有界面议会点评入口)
```

**v4.2 关键机制**：
- 圣人议会 4:4:4 三学科均权 · 加权陪审团 2/3 表决 · R-Cross1-4 跨学科四律
- 420 位思想家板凳 (335 哲学家 + 50 艺术家 + 35 音乐家) · bench-matcher 动态评分召唤
- 禁单 agent 一票否决 (P1-6) · R1-R25 + R-Cross1-4 REJECT 机制 · R24 议会僵局兜底

**关键边界**：
- icon-curator 只管「选哪个图标」；颜色 / 尺寸归 token-keeper
- empty-state-storyteller 只管状态机；文案归 copy-writer
- 审计规则集与 ui-auditor 解耦，独立版本化

## 何时启用

当用户要你：
- 设计欢迎页、新手引导、版本更新模态
- 在三栏外壳里布一个新视图
- 做模态、向导、表单、表格、数据可视化
- 审计某个界面的合规性
- 写按钮 / 错误 / 空状态文案
- 选用正确的图标 / 颜色 / 字号 / 动画
- 检查可访问性与对比度
- 适配移动 / 平板

## 快速上手

1. 打开 [`SKILL.md`](SKILL.md)，先看 **「快速通道 · 5 套高频搭配」**。如果你的需求落进任一行，直接照搬。
2. 否则走 **六维体检 → 决策森林**。
3. `agents/` 下每个 agent 文件自洽。

## 技术栈

- React 19 · TypeScript 5.8 · Vite 6
- Tailwind 3.4.19 · Heroicons
- 无路由库 —— `activeView` switch-case

## 目录结构

```
suanfish-design-system/
├── SKILL.md                 # 总指挥 + 5 套速查表 + 决策森林
├── agents/                  # 52 位匠人 (12 种子圣人 + 34 执行 + 4 曾降级 + bench-matcher/quotation-verifier)
└── references/              # 27 份规范（含 3 份独立规则集 15/16/19） + 4 份附录
```

## 许可

MIT —— 详见 [LICENSE](LICENSE)。
