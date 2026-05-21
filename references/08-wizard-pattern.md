# 参考文档

> 本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。

> 译文说明：本参考文件已翻译为专业简体中文，代码块、类名、类型、路径、颜色值和样式属性保持原样。中文内容聚焦设计意图、适用边界、交互原则和工程落地要求。

> 说明：本条描述设计规则、交互约束或实现注意事项。

> 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

```tsx
<div className="flex items-center gap-2 text-sm">
  {steps.map((step, i) => {
    const isCurrent = step.id === currentStep;
    const isPast = step.id < currentStep;
    return (
      <Fragment key={step.id}>
        {i > 0 && <ChevronRightIcon className="w-4 h-4 text-gray-300" />}
        <button
          disabled={!isPast}
          onClick={() => isPast && setCurrentStep(step.id)}
          className={
            isCurrent
              ? 'text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-medium'
              : isPast
              ? 'text-gray-600 hover:text-blue-600 cursor-pointer px-3 py-1.5'
              : 'text-gray-400 cursor-default px-3 py-1.5'
          }
        >
          {step.title}
        </button>
      </Fragment>
    );
  })}
</div>
```

## 参考章节

```tsx
<div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
  <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
    <Stepper />
    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-all">
      {isLastStep ? '完成' : '下一步'}
    </button>
  </header>

  <main className="flex-1 overflow-y-auto custom-scrollbar">
    <div key={currentStep} className="animate-fade-in-up max-w-5xl mx-auto py-8 px-6">
      <StepComponent />
    </div>
  </main>
</div>
```

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `key={currentStep}` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

| 说明 | 说明                                           |
| ---------- | -------------------------------------------------- |
| 说明 | 说明                    |
| 说明 | Clickable to jump back (`onClick` + cursor-pointer)|
| 说明 | `disabled`, `cursor-default`, text-gray-400 |

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-8 space-y-4">
    <InfoCard /> {/* metric */}
    <KnowledgeGraph /> {/* canvas */}
    <NodeInteractionPanel /> {/* keyword chips */}
  </div>
  <aside className="col-span-4 bg-slate-900 text-slate-100 rounded-2xl p-5 space-y-4 shadow-xl ring-1 ring-slate-700">
    <SearchStrategyControl /> {/* slider */}
    <SearchIntelligencePanel /> {/* coverage bar + warnings */}
  </aside>
</div>
```

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
<div className="flex flex-col items-center justify-center py-20 text-gray-400">
  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
    <ClockIcon className="w-8 h-8" />
  </div>
  <p className="text-sm">等待上一步确认...</p>
</div>
```

## 参考章节

- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `bg-gradient-to-r from-blue-500 to-blue-600` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `hover:shadow-lg` `scale-105` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
<div className="flex flex-col">
  <h1 className="text-xl font-bold text-slate-800">{stepTitle}</h1>
  <p className="text-sm text-gray-500 mt-0.5">{stepDescription}</p>
</div>
```

## 参考章节

- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
