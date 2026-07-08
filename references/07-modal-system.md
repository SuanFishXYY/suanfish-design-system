---
ref: 07
title: 模态系统 · 9 尺寸 + 6 变体 + Portal
owner: modal-craftsman (模态构建) · responsive-strategist (响应式)
audited_by: ui-auditor
---

# 🪟 ref 07 · 模态系统

> *模态是打断——必须值得打断。*
>
> modal-craftsman 的 14 种模态详细规范。强制 Portal 挂载（ref 15 R-05：没 Portal = 🟥 严重）。稳态冷色谱（ref 01）。

## 1. 尺寸表

9 档尺寸，按内容量选：

| 尺寸 | 宽 | 高 | 用途 |
| --- | --- | --- | --- |
| XS | `max-w-sm` | — | 确认/提示 |
| S | `w-96` | — | 小表单 |
| M | `max-w-lg` | — | 标准对话框 |
| M+ | `sm:max-w-lg` | `min-h-[300px]` | 带最小高的标准 |
| L | `sm:max-w-3xl` | — | 多字段表单 |
| L+ | `max-w-4xl` | `h-[70vh]` | 长内容 |
| XL | `sm:max-w-5xl` | `max-h-[85vh] flex column` | 大面板 |
| XXL | `max-w-6xl` | `h-[85vh]` | 全功能面板 |
| 全屏 | `fixed inset-0` | — | 沉浸式 |

可双值约束（CSS 复合）：
```tsx
<div className="sm:max-w-5xl" style={{ height: '80vh', maxHeight: '800px' }}>
```

## 2. Portal 骨架（强制）

模态必须 `createPortal` 到 `document.body`，带遮罩 + z-[100] + 滚动锁：

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

遮罩 `bg-gray-900/40 backdrop-blur-sm`，点击遮罩关闭（`onClick={onClose}`），面板 `stopPropagation` 防误关。`role="dialog"` + `aria-modal="true"` 保 a11y。

## 3. Header

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

## 4. Body

```tsx
<div className="px-6 py-6 flex-1 overflow-y-auto custom-scrollbar">
  {children}
</div>
```

`flex-1` 撑满 + `overflow-y-auto` 滚动 + `custom-scrollbar` 统一滚动条（ref 01 §10）。

## 5. Footer

```tsx
<div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
  <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">取消</button>
  <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium">确定</button>
</div>
```

## 6. 动画

- backdrop：`animate-fade-in` (300ms)
- panel：`animate-scale-in` (300ms) + `translate-y-4 → translate-y-0`（上滑入场）
- 关闭：`opacity-0 translate-y-4 sm:scale-95` + `setTimeout(unmount, 300)`（等动画完再卸载）

缓动 `cubic-bezier(0.16, 1, 0.3, 1)`。

## 7. 危险确认模态（DeleteConfirm）

```tsx
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
  <TrashIcon className="w-6 h-6 text-red-600" />
</div>
<h2 className="text-lg font-bold text-red-600 text-center">确认删除</h2>
<p className="text-sm text-gray-600 text-center mt-2">此操作无法撤销，请谨慎操作。</p>
```

危险态：red-50 圆形图标底 + red-600 标题 + 明确"无法撤销"文案。确认按钮 `bg-red-600`，边框 `border-gray-300`。

## 8. 变体

| 变体 | 尺寸 | 特征 |
| --- | --- | --- |
| 标准 | `w-96` | 小型确认 |
| 危险 | `w-96` | red-600 + `type="danger"` |
| 大面板 | `sm:max-w-5xl` | `80vh / 800px` + 图标 `getSourceIcon(type)` |
| 全屏 | `max-w-4xl h-[70vh]` | 多内容 |
| 超大面板 | `max-w-6xl h-[85vh]` | `requestAnimationFrame` 入场 |
| 沉浸全屏 | `fixed inset-0 z-[10000] bg-white` | 无遮罩全屏 |

## 9. 滚动锁

模态打开时锁 body 滚动：

```tsx
useEffect(() => {
  if (!isOpen) return;
  document.body.style.overflow = 'hidden';
  return () => { document.body.style.overflow = ''; };
}, [isOpen]);
```

## 10. 通用约束

- 确认/删除确认统一用 `ConfirmModal` / `DeleteConfirmModal`，不各写各的（ref 14 反模式 16）。
- 模态必须 Portal（R-05），否则 ui-auditor 🟥 拦截。
- 模态 z-[100]，全屏模态 z-[10000]（ref 01 §8）。
- 关闭动画必须 `setTimeout(unmount, 300)` 等动画完，不可瞬卸。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版模态系统：9 尺寸 + Portal 骨架 + Header/Body/Footer + 危险确认 + 6 变体 + 滚动锁。对齐 modal-craftsman / responsive-strategist 依赖。 |
