---
ref: 44
title: 通用组件元素 · 卡片/骨架/Tooltip/Tab/导航/抽屉/分页
owner: ui-architect (容器结构) · 各 agent 复用
audited_by: ui-auditor
---

# 🧱 ref 44 · 通用组件元素

> *高频复用的小颗粒——卡片、骨架、Tooltip、Tab、导航、抽屉、分页。散在各 ref，本篇统一收口。*
>
> 这些元素无单一 agent 主理，但全工作室复用。本文沉淀既有用法（cross-ref 回原 ref），不重复造数据。遇冲突以原 ref 为准。

## 1. 卡片（Card）

最通用的内容容器。统一 `rounded-xl/2xl + shadow + bg-white`，hover 可上浮。

```tsx
<div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-5">
  {children}
</div>
```

| 变体 | 用途 | 样式 |
| --- | --- | --- |
| 基础卡 | 默认 | `rounded-xl shadow-sm border-gray-200` |
| 悬浮卡 | hover 交互 | `+ hover:shadow-md hover:-translate-y-0.5` |
| 指标卡 | 数据展示 | `rounded-xl` + label/value/trend（ref 10 §8） |
| 高亮卡 | 仪式步骤 | `ring-1` + 渐变 icon 圆（component-patterns §3） |
| 暗色卡 | 控制面板 | `bg-slate-900 text-slate-100`（ref 10 §12） |

铁律：圆角统一（ref 01 §5），阴影统一（ref 01 §6），不混用任意值。

## 2. 骨架屏（Skeleton）

加载态占位（ref 31 LOADING 态 200ms-1s 档），用 `animate-shimmer`（ref 11 §1）：

```tsx
<div className="animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:1000px_100%] rounded-lg h-20" />
```

| 占位 | 形态 |
| --- | --- |
| 文本行 | `h-4 rounded mb-2`（多行错宽） |
| 卡片 | `h-20 rounded-lg` |
| 头像 | `w-10 h-10 rounded-full` |
| 表格行 | 多个 `h-8` 横排 |

铁律：骨架形状须近似真实内容（防布局跳）；> 1s 改进度条（ref 31）；dark 态用 `from-slate-800 via-slate-700`（ref 01 §13）。

## 3. Tooltip / Popover

轻量悬浮提示。**必须 Portal + z-[9999]**（ref 01 §8）。

### Tooltip（纯提示，不可交互）

```tsx
{createPortal(
  <div className="fixed z-[9999] pointer-events-none bg-slate-900/95 text-slate-100 rounded-lg shadow-xl px-3 py-2 text-xs max-w-xs animate-fade-in"
    style={{ left: x, top: y }}>
    {content}
    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
  </div>, document.body)}
```

- `pointer-events-none`（不抢交互）。
- 触发 hover ≥ 200ms（同 ref 41 引用预览）。
- 暗底白字，箭头三角。

### Popover（可交互，含按钮/菜单）

```tsx
{createPortal(
  <div className="fixed z-[9999] bg-white rounded-lg shadow-xl border border-gray-100 p-1 animate-fade-in">
    {actions}
  </div>, document.body)}
```

- `pointer-events-auto`，可点。
- 点击外部关闭（`onClick` 遮罩或 `useEffect` 监听）。
- ref 06 右键菜单 / ref 10 Popover 同套路。

铁律：两者都 Portal 防 overflow 裁切；超视口自动回退方向（同 ref 13 §4）。

## 4. Tab 切换

横向标签页，active 高亮（ref 06 §4）：

```tsx
<button className={`px-4 py-2.5 rounded-md text-sm border transition-all
  ${active ? 'bg-blue-50 text-blue-600 border-blue-100'
           : 'text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-200'}`}>
  {label}
</button>
```

| 变体 | 用途 |
| --- | --- |
| 下划线 Tab | 顶部导航（active 底部 `border-b-2 border-blue-500`） |
| 胶囊 Tab | 内容切换（上方圆角 pill） |
| 图标 Tab | IconSidebar（ref 05，方块 active） |

铁律：active 态必须可视（不只 hover）；Tab 切换内容用 `key` 重放动画（ref 11 §6）；键盘 `Arrow` 切换（a11y，ref 34）。

## 5. 面包屑（Breadcrumb）

路径导航，可回跳（ref 08 §1 Stepper 是其变体）：

```tsx
<nav className="flex items-center gap-2 text-sm">
  <a className="text-gray-500 hover:text-blue-600">首页</a>
  <ChevronRightIcon className="w-4 h-4 text-gray-300" />
  <a className="text-gray-500 hover:text-blue-600">项目</a>
  <ChevronRightIcon className="w-4 h-4 text-gray-300" />
  <span className="text-gray-900 font-medium">当前</span>
</nav>
```

铁律：分隔符统一 `ChevronRight`；当前页不可点；过去页可回跳；RTL 反转方向（ref 43）。

## 6. 抽屉（Drawer）

侧滑面板，移动端替代模态/侧栏（ref 33 §2 MobileDrawer）：

```tsx
{createPortal(
  <div className="fixed inset-0 z-[100]">
    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm animate-fade-in" onClick={onClose} />
    <aside className={`absolute top-0 left-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300
      ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      {children}
    </aside>
  </div>, document.body)}
```

| 方向 | 用途 |
| --- | --- |
| 左抽屉 | IconSidebar 移动态（ref 33） |
| 右抽屉 | 详情/设置面板 |
| 底抽屉 | 移动端 artifact（ref 37 §二） |

铁律：遮罩点击关闭；Esc 关闭（ref 34）；`transition-transform` 滑入不硬切；焦点陷阱（a11y）。

## 7. 分页（Pagination）

长列表分页（ref 10 §7）：

```tsx
<div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
  <span className="text-xs text-gray-500">第 {page} / {totalPages} 页，共 {total} 条</span>
  <div className="flex items-center gap-1">
    <button className="p-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"><ChevronDoubleLeftIcon /></button>
    <button className="p-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"><ChevronLeftIcon /></button>
    <input type="number" className="w-12 text-center rounded-md border border-gray-300 text-xs" />
    <button className="p-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"><ChevronRightIcon /></button>
    <button className="p-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"><ChevronDoubleRightIcon /></button>
  </div>
</div>
```

| 场景 | 方案 |
| --- | --- |
| ≤ 20 行 | 不分页（ref 38 小表） |
| 20-200 行 | 分页 20/页 |
| 200-10k | 虚拟滚动（ref 38） |
| 内容流 | 无限滚动 + 回到顶部（ref 36 §③） |

铁律：disabled 态 `opacity-40` 不可点；当前页可视；跳页 input 回车确认。

## 8. 顶部导航（Top Nav / Header）

页面顶栏，sticky（ref 08 §3）：

```tsx
<header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
  <div className="flex items-center gap-4">
    <Logo />
    <Breadcrumb />
  </div>
  <div className="flex items-center gap-3">
    <SearchButton />
    <NotificationBadge />
    <Avatar />
  </div>
</header>
```

铁律：`sticky top-0 z-10`；左品牌+路径 / 右操作；高度统一 64px（py-4）；移动端折叠为汉堡菜单。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版通用组件元素：卡片/骨架屏/Tooltip-Popover/Tab/面包屑/抽屉/分页/顶部导航。沉淀既有用法，cross-ref 回 ref 01/05/06/08/10/11/31/33/36/37/41/43。 |
