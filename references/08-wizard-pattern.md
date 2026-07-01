---
ref: 08
title: 向导模式 · 多步表单 Wizard
owner: wizard-designer (向导编排)
audited_by: ui-auditor
---

# 🧙 ref 08 · 向导模式 Wizard

> *内联面包屑多步表单——把长流程拆成可回跳的步。*
>
> wizard-designer 的向导规范。步骤数变更须走 wizard-designer（ref 14 反模式 6）。稳态冷色谱。

## 1. 内联面包屑 Stepper

步骤间用 `ChevronRight` 分隔，过去步可点回跳，未来步禁用：

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

## 2. 步骤状态

| 状态 | 样式 | 行为 |
| --- | --- | --- |
| 当前 | blue 高亮 pill | 不可点（已在） |
| 过去 | gray → hover blue | 可点回跳（`onClick` + cursor-pointer） |
| 未来 | `disabled`, `cursor-default`, text-gray-400 | 不可点 |

## 3. 布局

sticky header（Stepper + 下一步按钮）+ 可滚动 main（步骤内容）：

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

步骤切换用 `key={currentStep}` 触发重挂载 + `animate-fade-in-up` 重放入场（ref 11）。

## 4. 步骤内容网格

12 栏：左 8 主内容 + 右 4 暗色控制面板：

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

## 5. 等待态（依赖上一步）

```tsx
<div className="flex flex-col items-center justify-center py-20 text-gray-400">
  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
    <ClockIcon className="w-8 h-8" />
  </div>
  <p className="text-sm">等待上一步确认...</p>
</div>
```

## 6. 下一步/完成按钮

`bg-gradient-to-r from-blue-500 to-blue-600`，hover `shadow-lg` + `scale-105`，isLastStep 文案变"完成"。

## 7. 步骤标题

```tsx
<div className="flex flex-col">
  <h1 className="text-xl font-bold text-slate-800">{stepTitle}</h1>
  <p className="text-sm text-gray-500 mt-0.5">{stepDescription}</p>
</div>
```

## 8. 约束

- 步骤数/顺序变更必须经 wizard-designer（ref 14 反模式 6）。
- 步骤切换必须 `key={currentStep}` 重放动画，不手动操控 DOM。
- 滚动区用 `custom-scrollbar`（ref 01 §10）。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版向导模式：面包屑 Stepper/状态/布局/网格/等待态/按钮/标题/约束。对齐 wizard-designer 依赖。 |
