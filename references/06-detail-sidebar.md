---
ref: 06
title: DetailSidebar · 中间详情侧栏
owner: ui-architect (结构)
audited_by: ui-auditor
---

# 📋 ref 06 · DetailSidebar

> *256px 详情栏——当前视图的上下文。*
>
> ui-architect 的 DetailSidebar 规范（三栏布局中栏，见 ref 04）。按 `activeView` 渲染 per-view 内容。

## 1. 容器（可折叠）

宽度 `w-0 ↔ w-64` 过渡，内容固定 256 防折叠时重排：

```tsx
<aside className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out overflow-hidden
  ${showDetailSidebar ? 'w-64' : 'w-0'}`}>
  <div className="w-64 flex-shrink-0 flex flex-col h-full">
    {/* per-view content */}
  </div>
</aside>
```

内层 `w-64 flex-shrink-0`——折叠时内容不被压缩，只裁切。

## 2. 顶部操作行（新建 + 搜索）

```tsx
<div className="p-4 pb-2 flex items-center gap-2">
  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 px-4 rounded-xl text-sm">
    新建对话
  </button>
  <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
    <SearchIcon className="w-4 h-4 text-gray-500" />
  </button>
</div>
```

## 3. 会话/列表项

active / pinned / 默认三态，active 带左侧蓝色指示条：

```tsx
<button
  className={`group relative w-full text-left px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200
    ${active
      ? 'bg-blue-50 text-blue-700 shadow-sm'
      : isPinned
      ? 'bg-gray-50/80 text-gray-700 hover:bg-gray-100'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
>
  {active && (
    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-blue-500 rounded-r-full" />
  )}
  <div className="flex items-center gap-2">
    {isPinned && <PinSolidIcon className="w-3 h-3 text-gray-400" />}
    <span className="text-sm truncate">{title}</span>
  </div>
  <button className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-gray-200">
    <MoreHorizontalIcon className="w-4 h-4 text-gray-500" />
  </button>
</button>
```

- active：蓝底 + 左侧 `w-1 h-4` 指示条。
- pinned：灰底 + PinSolidIcon。
- 更多按钮 hover 才显（`opacity-0 group-hover:opacity-100`）。

## 4. Tab 切换

```tsx
<button
  className={`px-4 py-2.5 rounded-md text-sm border transition-all
    ${active
      ? 'bg-blue-50 text-blue-600 border-blue-100'
      : 'text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-200 hover:shadow-sm'
    }`}
>
  {label}
</button>
```

## 5. AI 入口卡

```tsx
<button
  className={`w-full rounded-xl border shadow-sm transition-all
    ${active
      ? 'bg-blue-100 text-blue-700 border-blue-300 ring-2 ring-blue-200'
      : 'bg-white text-blue-700 hover:bg-blue-50 border-blue-200'
    }`}
>
  <SparkleIcon className="w-5 h-5" />
  <span className="text-base font-semibold">AI 智能助手</span>
</button>
```

AI 入口用 blue 色谱 + SparkleIcon（ref 12 AI 图标）。

## 6. 右键上下文菜单（Portal）

必须 `createPortal` 到 body（防被 sidebar overflow 裁切）：

```tsx
{createPortal(
  <div
    className="fixed z-[9999] bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 w-44 animate-fade-in"
    style={{ left: anchor.x, top: anchor.y }}
  >
    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50">重命名</button>
    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50">{isPinned ? '取消置顶' : '置顶'}</button>
    <div className="relative group">
      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center justify-between">
        导出 <ChevronRightIcon className="w-3 h-3" />
      </button>
      {/* submenu */}
      <div className="absolute left-full top-0 ml-1 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 hidden group-hover:block">
        <button>PDF</button>
        <button>Markdown</button>
      </div>
    </div>
    <div className="h-px bg-gray-100 my-1" />
    <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50">删除</button>
  </div>,
  document.body
)}
```

z-[9999]（ref 01 §8 portal tooltip 层），删除 `text-red-600` 危险色。

## 7. 搜索模态

```tsx
<div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm animate-fade-in flex items-center justify-center">
  <div className="w-[600px] max-h-[80vh] rounded-2xl shadow-2xl bg-white overflow-hidden animate-scale-in flex flex-col">
    {/* search bar */}
    {/* checkbox list */}
    {/* footer action row */}
  </div>
</div>
```

z-[100]（modal 层），遮罩 + scale-in 入场。

## 8. 空态

```tsx
<div className="flex flex-col items-center justify-center flex-1 text-gray-400">
  <HistoryIcon className="w-10 h-10 mb-2 opacity-60" />
  <p className="text-xs">没有找到相关记录</p>
</div>
```

## 9. 滚动条

列表滚动用全局 `custom-scrollbar`（ref 01 §10），不自写。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版 DetailSidebar：折叠容器/操作行/列表项/tab/AI 入口/右键菜单/搜索模态/空态。对齐 ui-architect 依赖。 |
