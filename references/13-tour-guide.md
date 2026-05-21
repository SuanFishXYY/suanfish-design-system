# 参考文档

> 本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。

> 译文说明：本参考文件已翻译为专业简体中文，代码块、类名、类型、路径、颜色值和样式属性保持原样。中文内容聚焦设计意图、适用边界、交互原则和工程落地要求。

> 说明：本条描述设计规则、交互约束或实现注意事项。

> 说明：本条描述设计规则、交互约束或实现注意事项。

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

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

## 参考章节

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

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

```tsx
<div
  className="fixed pointer-events-none z-[9998] rounded-lg ring-2 ring-blue-400 animate-pulse"
  style={{ left: target.x - 4, top: target.y - 4, width: target.width + 8, height: target.height + 8 }}
/>
```

## 参考章节

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

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `position` `'top' | 'bottom' | 'left' | 'right'` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `left/top` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `getBoundingClientRect()` 不变。

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

说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `localStorage` 不变。

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

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `:v1` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

- 说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
