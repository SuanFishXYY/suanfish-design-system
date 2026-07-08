---
ref: steps-schema
title: 仪式步骤 Schema · Step 数据结构
owner: onboarding-director (步骤编排) · copy-writer (文案填充)
audited_by: ui-auditor
---

# 📋 ref · 仪式步骤 Schema

> *每步的内容结构——文案、KPI、高亮、配色统一契约。*
>
> onboarding-director 的 Step 数据结构，copy-writer 据此填文案。仪式模式暖色谱 + 三步渐变。

## 1. Step 接口

```typescript
interface Step {
  /** 顶部小徽章文案，如 '新功能 · 01' */
  badge: string;
  /** 主标题（白色部分） */
  title: string;
  /** 主标题强调部分（渐变色） */
  titleAccent: string;
  /** 副标题一句话 */
  subtitle: string;
  /** 4 字关键词，作为视觉锚点 */
  keyword: string;
  /** 三段式英文 tagline，如 'Imagine · Generate · Beyond' */
  tagline: string;
  /** KPI 卡片 — 数字 + 标签，每步 3 个 */
  kpis: { value: string; label: string }[];
  /** 主描述段落，允许 ReactNode 用于 inline 强调 */
  description: React.ReactNode;
  /** 高亮卡片 — 必须 3 个，icon 全局不重复 */
  highlights: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    tag: string;  // 大写英文标签 NEW / SMART / PRO / VISION 等
  }[];
  /** Hero 区主图标 */
  heroIcon: React.ReactNode;
  /** Hero 区浮动装饰图标 */
  floatingIcons: React.ReactNode[];
  /** 配色系统 */
  accent: {
    gradient: string;       // 主渐变 Tailwind class
    textGradient: string;   // 文字渐变
    chip: string;           // chip 背景
    chipText: string;       // chip 文字
    chipBorder: string;     // chip 边框
    ringColor: string;      // ring 环色
    glowRgb: string;        // rgba 阴影 R,G,B 值（不含 alpha）
  };
}
```

## 2. 三步主题与渐变

每步一个主题色 + 三段式 tagline，渐变进 ref 01 §11 仪式渐变表：

| 步 | 主题 | 渐变 | tagline |
| --- | --- | --- | --- |
| 1 · 想象 | 文生图 | `from-indigo-500 via-blue-500 to-cyan-500` | `Imagine · Generate · Beyond` |
| 2 · 视觉 | 图像理解 | `from-emerald-500 via-teal-500 to-green-500` | `See · Understand · Decode` |
| 3 · 翻译 | 多语引擎 | `from-amber-500 via-orange-500 to-rose-500` | `Translate · Switch · Smarter` |

三步渐变覆盖冷光开场 / 生机铺底 / 暖场高潮，呼应 HeroStage（ref 03）。

## 3. 示例（Step 1 · 文生图）

```tsx
const STEPS: Step[] = [
  {
    badge: '新功能 · 01',
    title: '文生图',
    titleAccent: '文生图',
    subtitle: '联网检索加持，企业级视觉创作能力全面跃迁',
    keyword: '首次搭载联网检索',
    tagline: 'Imagine · Generate · Beyond',
    kpis: [
      { value: '1st', label: '联网检索' },
      { value: '3+',  label: '能力维度' },
      { value: '企业级', label: '场景质量' },
    ],
    description: (
      <p>
        模型首次搭载<strong className="font-semibold text-indigo-600">联网检索能力</strong>，
        融合实时网络信息，显著提升文生图的<strong className="font-semibold text-indigo-600">时效性</strong>...
      </p>
    ),
    highlights: [
      { icon: <GlobeNetIcon className="w-6 h-6 text-indigo-600" />, title: '联网检索',    desc: '融合实时网络信息',         tag: 'NEW' },
      { icon: <CpuChipIcon  className="w-6 h-6 text-indigo-600" />, title: '聪明度升级', desc: '复杂指令精准落地',         tag: 'SMART' },
      { icon: <PaletteIcon  className="w-6 h-6 text-indigo-600" />, title: '专业场景增强', desc: '世界知识更广 · 一致性更高', tag: 'PRO' },
    ],
    heroIcon: <PhotoIcon className="w-16 h-16 text-white drop-shadow-lg" />,
    floatingIcons: [
      <GlobeIcon className="w-10 h-10 text-white/80" />,
      <SparklesIcon className="w-8 h-8 text-white/90" />,
      <PhotoIcon className="w-9 h-9 text-white/70" />,
    ],
    accent: {
      gradient:      'from-indigo-500 via-blue-500 to-cyan-500',
      textGradient:  'from-indigo-600 to-cyan-600',
      chip:          'bg-indigo-50',
      chipText:      'text-indigo-700',
      chipBorder:    'border-indigo-100',
      ringColor:     'ring-indigo-200',
      glowRgb:       '99,102,241',
    },
  },
  // ... Step 2 与 Step 3 同结构
];
```

## 4. 填充约束

| 字段 | 约束 |
| --- | --- |
| `kpis` | 每步固定 3 个，value 带具体数字/级别（不空写"高"） |
| `highlights` | 必须 3 个，icon 全局不重复，tag 大写英文 |
| `tagline` | 三段式英文，动词 · 动词 · 形容词 |
| `keyword` | 4 字中文，视觉锚点 |
| `accent.glowRgb` | R,G,B 不含 alpha（alpha 由阴影 class 控制） |

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版 Step Schema：接口 + 三步主题渐变 + 示例 + 填充约束。对齐 onboarding-director / copy-writer 依赖。 |
