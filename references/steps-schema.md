# 参考文档

> 译文说明：本参考文件已翻译为专业简体中文，代码块、类名、类型、路径、颜色值和样式属性保持原样。中文内容聚焦设计意图、适用边界、交互原则和工程落地要求。

> 说明：本条描述设计规则、交互约束或实现注意事项。

> 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

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

## 参考章节

#参考文档

## 参考章节
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `from-indigo-500 via-blue-500 to-cyan-500` `from-amber-500 via-orange-500 to-rose-500` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `Imagine · Generate · Beyond` 不变。

#参考文档

## 参考章节
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `from-emerald-500 via-teal-500 to-green-500` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `See · Understand · Decode` 不变。

#参考文档

## 参考章节
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `from-amber-500 via-orange-500 to-rose-500` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `Translate · Switch · Smarter` 不变。

## 参考章节

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

## 参考章节

*说明：本条描述设计规则、交互约束或实现注意事项。

说明：本条描述设计规则、交互约束或实现注意事项。

| 说明 | 说明 | 说明 | 说明 |
|--------- |-------- |-------- |--------|
| 说明 | 说明 | 说明 | 说明 |
| 说明 | 说明 | 说明 | 说明 |
| 说明 | 说明 | 说明 | 说明 |
