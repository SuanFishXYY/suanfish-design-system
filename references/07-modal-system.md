# 参考文档

> 译文说明：本参考文件已翻译为专业简体中文，代码块、类名、类型、路径、颜色值和样式属性保持原样。中文内容聚焦设计意图、适用边界、交互原则和工程落地要求。

> 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

| 说明 | 说明 | 说明 | 说明                                          |
| --- | -------------------- | ---------------------------- | -------------------------------------------- |
| 说明 | `max-w-sm` | 说明 | 说明                          |
| 说明 | `w-96` | 说明 | 说明                              |
| 说明 | `max-w-lg` | 说明 | 说明                      |
| 说明 | `sm:max-w-lg` | `min-h-[300px]` | 说明                |
| 说明 | `sm:max-w-3xl` | 说明 | 说明                     |
| 说明 | `max-w-4xl` | `h-[70vh]` | 说明                         |
| 说明 | `sm:max-w-5xl` | `max-h-[85vh]` flex column | 说明                      |
| 说明 | `max-w-6xl` | `h-[85vh]` | 说明                          |
| 说明 | `fixed inset-0` | 说明 | 说明 |

说明：本条描述设计规则、交互约束或实现注意事项。
```tsx
<div className="sm:max-w-5xl" style={{ height: '80vh', maxHeight: '800px' }}>
```

## 参考章节

```tsx
{createPortal(
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-6 animate-fade-in"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
  >
    <div
      className={`bg-white rounded-2xl shadow-2xl w-full ${sizeClass} overflow-hidden flex flex-col animate-scale-in
        transform transition-all duration-300
        ${isOpen ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  </div>,
  document.body
)}
```

#参考文档

## 参考章节

```tsx
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
  <div>
    <h2 className="text-lg font-bold text-slate-800">{title}</h2>
    {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
  </div>
  <button
    onClick={onClose}
    className="rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors"
  >
    <XMarkIcon className="w-5 h-5" />
  </button>
</div>
```

#参考文档

## 参考章节

```tsx
<div className="px-6 py-6 flex-1 overflow-y-auto custom-scrollbar">
  {children}
</div>
```

#参考文档

## 参考章节

```tsx
<div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
  <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">取消</button>
  <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium">确定</button>
</div>
```

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `animate-fade-in` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `animate-scale-in` `cubic-bezier(0.16, 1, 0.3, 1)` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `translate-y-4 → translate-y-0` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `opacity-0 sm:scale-95` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `setTimeout(unmount, 300)` 不变。

## 参考章节

#参考文档

## 参考章节
```tsx
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
  <TrashIcon className="w-6 h-6 text-red-600" />
</div>
<h2 className="text-lg font-bold text-red-600 text-center">确认删除</h2>
<p className="text-sm text-gray-600 text-center mt-2">此操作无法撤销，请谨慎操作。</p>
```
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `border-gray-300` `bg-red-600` 不变。

#参考文档

## 参考章节
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `w-96` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `text-lg font-bold` `type="danger"` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。

#参考文档

## 参考章节
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `sm:max-w-5xl` `80vh / 800px` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。

#参考文档

## 参考章节
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `max-w-4xl h-[70vh]` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `getSourceIcon(type)` 不变。

#参考文档

## 参考章节
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `max-w-6xl h-[85vh]` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `requestAnimationFrame` 不变。

#参考文档

## 参考章节
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `fixed inset-0 z-[10000] bg-white` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
useEffect(() => {
  if (!isOpen) return;
  document.body.style.overflow = 'hidden';
  return () => { document.body.style.overflow = ''; };
}, [isOpen]);
```

## 参考章节

- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
