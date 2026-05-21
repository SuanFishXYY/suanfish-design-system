# 参考文档

> 译文说明：本参考文件已翻译为专业简体中文，代码块、类名、类型、路径、颜色值和样式属性保持原样。中文内容聚焦设计意图、适用边界、交互原则和工程落地要求。

> 说明：本条描述设计规则、交互约束或实现注意事项。

说明：本条描述设计规则、交互约束或实现注意事项。

```
┌──────┬──────────┬───────────────────────────────────┐
│ Icon │  Detail  │            Main                   │
│ 80px │  256px   │            flex-1                 │
│ z-30 │  z-base  │                                   │
└──────┴──────────┴───────────────────────────────────┘
```

## 参考章节

```tsx
<div className="h-screen flex overflow-hidden bg-white text-gray-800 font-sans antialiased">
  <IconSidebar />
  <DetailSidebar />
  <MainContent />
</div>
```

说明：本条描述设计规则、交互约束或实现注意事项。

- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `h-screen` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `flex` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `overflow-hidden` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `bg-white` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `font-sans antialiased` `text-slate-800` 不变。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
const showDetailSidebar = isDetailSidebarVisible && !fullWidthViews.includes(activeView);
```

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `showDetailSidebar` `w-0` `w-64` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `transition-all duration-300 ease-in-out overflow-hidden` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `w-64 flex-shrink-0` 不变。

#参考文档

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

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

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

#参考文档

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

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

## 参考章节

| 说明 | 说明       |
| ----------------------------- | ------------- |
| 说明 | `z-10`        |
| 说明 | `z-20`        |
| 说明 | `z-30`        |
| 说明 | `z-50`        |
| 说明 | `z-[100]`     |
| 说明 | `z-[9999]`    |
| 说明 | `z-[10000]` |

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `MainContent.tsx` 不变。

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

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

1. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `activeView` 不变。
2. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `MainContent.tsx` 不变。
3. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `fullWidthViews` 不变。
4. 说明：本条描述设计规则、交互约束或实现注意事项。
5. 说明：本条描述设计规则、交互约束或实现注意事项。
6. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `src/features/<area>/components/<PageName>View.tsx` 不变。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `features/layout/components/iframe-loaders/` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `z-10` `animate-fade-in` 不变。
