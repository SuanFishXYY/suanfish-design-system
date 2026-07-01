---
ref: 13
title: Tour 引导 · 聚光灯高亮漫游
owner: onboarding-director (引导编排)
audited_by: ui-auditor
---

# 🔦 ref 13 · Tour 引导

> *聚光灯打在目标元素上——边漫游边教。*
>
> onboarding-director 的 Tour 规范。区别于 ref 02/03 的全屏仪式模态，Tour 是针对真实 UI 元素的局部引导。

## 0. 结构

```
┌────────────────────────────────────────────┐
│  ╔════════════════╗   ◀ rounded cutout    │
│  ║ highlighted    ║                       │
│  ║ target element ║   ┌─────────────┐    │
│  ╚════════════════╝   │   Tooltip   │    │
│         dimmed bg     │   step 2/4  │    │
│                       │  [上一步][下一步]│ │
│                       └─────────────┘    │
└────────────────────────────────────────────┘
```

三层：spotlight 遮罩（镂空目标）+ 高亮 ring（脉冲）+ Tooltip 卡（步骤说明 + 按钮）。

## 1. Spotlight 遮罩（SVG mask）

全屏 SVG，用 mask 镂空目标矩形，其余半透黑：

```tsx
<svg className="fixed inset-0 z-[9998] pointer-events-none">
  <defs>
    <mask id="spotlight">
      <rect width="100%" height="100%" fill="white" />
      <rect
        x={target.x - 4}
        y={target.y - 4}
        width={target.width + 8}
        height={target.height + 8}
        rx={8}
        fill="black"
      />
    </mask>
  </defs>
  <rect
    width="100%"
    height="100%"
    fill="rgba(0, 0, 0, 0.6)"
    mask="url(#spotlight)"
    className="transition-all duration-500"
  />
</svg>
```

mask 白显黑隐——目标矩形填黑（隐，露出目标），其余填白（显，盖半透黑）。`transition-all duration-500` 让镂空随目标移动平滑过渡。

## 2. 高亮 ring

目标周围脉冲蓝环：

```tsx
<div
  className="fixed pointer-events-none z-[9998] rounded-lg ring-2 ring-blue-400 animate-pulse"
  style={{ left: target.x - 4, top: target.y - 4, width: target.width + 8, height: target.height + 8 }}
/>
```

比目标大 4px，`animate-pulse` 呼吸提示。

## 3. Tooltip 卡

步骤计数 + 标题 + 描述 + 上一步/下一步：

```tsx
<div
  className="fixed z-[9999] bg-white rounded-xl shadow-2xl border border-gray-100 p-4 w-80 animate-fade-in-up"
  style={positionStyle}
>
  <div className="flex items-center gap-2 mb-2">
    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-semibold">
      Step {currentStepIndex + 1} / {steps.length}
    </span>
  </div>
  <h3 className="text-sm font-bold text-slate-800 mb-1">{step.title}</h3>
  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>

  <div className="flex justify-between mt-4">
    <button
      onClick={onBack}
      disabled={isFirst}
      className="text-xs text-gray-500 hover:text-gray-700 disabled:opacity-40"
    >
      上一步
    </button>
    <button
      onClick={onNext}
      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"
    >
      {isLast ? '完成' : '下一步'}
    </button>
  </div>
</div>
```

z-[9999]（在 spotlight z-[9998] 之上），`animate-fade-in-up` 入场。

## 4. 位置计算

Tooltip 按目标 `getBoundingClientRect()` + 方向定位，gap 12px：

```ts
function computeTooltipPosition(targetRect, position, tooltipSize) {
  const gap = 12;
  switch (position) {
    case 'top':    return { left: targetRect.left + targetRect.width / 2 - tooltipSize.width / 2, top: targetRect.top - tooltipSize.height - gap };
    case 'bottom': return { left: targetRect.left + targetRect.width / 2 - tooltipSize.width / 2, top: targetRect.bottom + gap };
    case 'left':   return { left: targetRect.left - tooltipSize.width - gap, top: targetRect.top + targetRect.height / 2 - tooltipSize.height / 2 };
    case 'right':  return { left: targetRect.right + gap, top: targetRect.top + targetRect.height / 2 - tooltipSize.height / 2 };
  }
}
```

`position: 'top' | 'bottom' | 'left' | 'right'`，超出视口需回退方向。

## 5. 持久化（不再显示）

版本化 dismiss key：

```ts
const TOUR_KEY = 'system-ui:scene-tour:dismissed:v1';

useEffect(() => {
  if (localStorage.getItem(TOUR_KEY)) return;
  setTourOpen(true);
}, []);

function dismissTour() {
  localStorage.setItem(TOUR_KEY, '1');
  setTourOpen(false);
}
```

key 带 `:v1`——Tour 内容更新时升版本，已 dismiss 用户重看。

## 6. 约束

- spotlight/ring z-[9998]，Tooltip z-[9999]（ref 01 §8）。
- 目标移动时 spotlight 镂空 + ring 须 `transition-all` 跟随，不瞬跳。
- Tooltip 超视口自动回退方向（如 top 超出则改 bottom）。
- Tour 与 ref 02/03 仪式模态互斥——仪式是首次入场，Tour 是功能漫游。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版 Tour 引导：spotlight 遮罩/高亮 ring/Tooltip 卡/位置计算/持久化/约束。对齐 onboarding-director 依赖。 |
