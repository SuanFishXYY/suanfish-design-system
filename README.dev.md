# 算鱼设计系统 · Suanfish Design System

> **一家工作室，十四位匠人，六个 tier。从用户登录的前 3 秒，到第 3000 次点击，每一寸像素都说着同一种品牌语言。**

一套统一的多智能体设计语言体系，服务于算鱼工作台。它同时治理 **初见的仪式感瞬间**（欢迎、版本更新介绍）和 **日常的稳态界面**（三栏外壳、模态、向导、数据可视化）。

## v2.1 架构亮点

```
Tier 1 · 调度       🧭 moment-strategist (可 REJECT)
Tier 2 · 主导       🎬 onboarding-director  /  🏛 ui-architect
Tier 3 · 容器专科   🪟 modal · 🧙 wizard · 📊 viz
Tier 4 · 内容专科   📝 copy · 🎯 icon · 🪟 empty-state · 📱 responsive
Tier 5 · 横切咨询   🎨 token · 💫 anim · ♿ a11y
Tier 6 · 质量门     🔍 ui-auditor (加载外部规则集 ref 15 / 16)
```

**关键边界（v2.1 厘清）**：
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
├── agents/                  # 14 位匠人
└── references/              # 17 份规范（含 2 份独立规则集） + 4 份附录
```

## 许可

MIT —— 详见 [LICENSE](LICENSE)。
