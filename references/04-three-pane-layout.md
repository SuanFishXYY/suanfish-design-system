---
ref: 04
title: 三栏布局 · IconSidebar / DetailSidebar / Main
owner: ui-architect (结构) · responsive-strategist (断点形态)
audited_by: ui-auditor
---

# 🏛 ref 04 · 三栏布局

> *Icon / Detail / Main 三栏——工作台的骨架。*
>
> ui-architect 的三栏布局规范，responsive-strategist 据此定断点形态。稳态模式冷色谱（ref 01）。

## 0. 骨架

```
┌──────┬──────────┬───────────────────────────────────┐
│ Icon │  Detail  │            Main                   │
│ 80px │  256px   │            flex-1                 │
│ z-30 │  z-base  │                                   │
└──────┴──────────┴───────────────────────────────────┘
```

```tsx
<div className="h-screen flex overflow-hidden bg-white text-gray-800 font-sans antialiased">
  <IconSidebar />
  <DetailSidebar />
  <MainContent />
</div>
```

容器约束：`h-screen`（满高）+ `flex`（横向排）+ `overflow-hidden`（滚动交给内部各栏）+ `bg-white` + `font-sans antialiased` + `text-slate-800`。

## 1. DetailSidebar 折叠

DetailSidebar 可折叠（部分视图需要 Main 全宽）：

```tsx
const showDetailSidebar = isDetailSidebarVisible && !fullWidthViews.includes(activeView);
```

折叠用宽度过渡（`w-0` ↔ `w-64`），配 `transition-all duration-300 ease-in-out overflow-hidden`；展开态 `w-64 flex-shrink-0`。不渲染时也保持过渡，避免硬切。

## 2. 全宽视图白名单

以下视图 Main 占满（隐藏 DetailSidebar），新增全宽视图在此加 key：

```ts
const fullWidthViews = [
  'moduleAlpha',          // iframe-loaded sub-tool
  'moduleBeta',           // iframe-loaded sub-tool
  'moduleGamma',
  'workbenchChat',
  'workbenchChatDetail',
  'searchModeA',
  'searchModeB',
  'searchModeC',
  // ...add new keys here
];
```

iframe 子工具与聊天/搜索类视图走全宽，其余视图保留 DetailSidebar。

## 3. 折叠手柄

DetailSidebar 边缘的折叠按钮，位置随 sidebar 展开/折叠联动：

```tsx
<button
  className="absolute top-1/2 -translate-y-1/2 z-20 ..."
  style={{
    left: showDetailSidebar
      ? 'calc(80px + 16rem - 0.875rem)'
      : 'calc(80px - 0.875rem)',
    transition: 'left 300ms ease-in-out',
  }}
>
  {showDetailSidebar ? <ChevronLeftIcon /> : <ChevronRightIcon />}
</button>
```

## 4. z-index 层级

三栏布局内的 z 轴（与 ref 01 §8 全局表一致）：

| 元素 | z-index |
| --- | --- |
| iframe-loader overlay | `z-10` |
| 折叠手柄 | `z-20` |
| IconSidebar | `z-30` |
| detail-sidebar popover menu | `z-50` |
| modal backdrop | `z-[100]` |
| portal tooltip | `z-[9999]` |
| fullscreen overlay | `z-[10000]` |

## 5. MainContent 视图路由

Main 区按 `activeView` 路由到具体视图组件（`MainContent.tsx`）：

```tsx
function MainContent({ activeView, ...props }) {
  switch (activeView) {
    case 'chat':       return <ChatView {...props} />;
    case 'scene':      return <SceneView {...props} />;
    case 'newFeature': return <NewFeatureView {...props} />;
    // ...
    default:           return <EmptyState />;
  }
}
```

## 6. 新增视图流程

1. 定 `activeView` key（白名单/非白名单决定是否全宽）。
2. 在 `MainContent.tsx` 的 switch 加 case。
3. 决定是否进 `fullWidthViews`（全宽则折叠 DetailSidebar）。
4. iframe 子工具进 `features/layout/components/iframe-loaders/`，加载层 `z-10` + `animate-fade-in`。
5. 视图组件放 `src/features/<area>/components/<PageName>View.tsx`。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版三栏布局：骨架/折叠/全宽白名单/手柄/z-index/路由/新增流程。对齐 ui-architect / responsive-strategist 依赖。 |
