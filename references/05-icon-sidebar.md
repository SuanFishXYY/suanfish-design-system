---
ref: 05
title: IconSidebar · 左侧图标导航栏
owner: ui-architect (结构)
audited_by: ui-auditor
---

# 📐 ref 05 · IconSidebar

> *80px 玻璃侧栏——工作区的入口锚点。*
>
> ui-architect 的 IconSidebar 规范（三栏布局左栏，见 ref 04）。稳态玻璃 `bg-white/60 backdrop-blur-xl`。

## 0. 容器

- 宽 `w-[80px]`，内边距 `py-5`，z 层 `z-30`。
- 玻璃底 `bg-white/60 backdrop-blur-xl border-r border-white/20`。
- 内部纵向 `space-y-4`。

## 1. 间距尺标

```
mb-8  → between logo and workspace switcher
mb-6  → between workspace switcher and divider
my-2  → divider margin
space-y-4 → between main nav items
mt-auto → push avatar to bottom
```

`mt-auto` 把 avatar 推到底部，logo/switcher/nav 在顶部。

## 2. Logo

```tsx
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center">
  <LogoIcon className="w-6 h-6 text-white" />
</div>
```

## 3. Workspace switcher

工作区切换按钮（首字母 + 类型角标）：

```tsx
<button
  className={`relative w-12 h-12 rounded-2xl text-xl font-bold transition-all duration-200
    ${isOpen
      ? 'bg-gray-800 text-white shadow-lg'
      : 'bg-white/80 text-gray-500 hover:bg-white hover:text-blue-600 border border-white/40 shadow-sm'
    }`}
>
  {workspaceInitial}
  <span className={`absolute -bottom-1 -right-1 px-1 py-0.5 rounded-md text-[8px] font-black text-white ${typeColor}`}>
    {typeLabel}
  </span>
</button>
```

类型角标色：个人 `bg-blue-500`、团队 `bg-emerald-500`、其他 `bg-gray-500`。

## 4. Nav item

主导航项（图标按钮，active 态高亮）：

```tsx
<button
  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105
    ${active
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
      : 'bg-transparent text-gray-400 hover:bg-white/50 hover:text-blue-500'
    }`}
>
  <Icon className="w-6 h-6" />
</button>
```

- active：蓝底白字 + 阴影。
- 非 active：透明 + hover 半透明白底。
- hover `scale-105` 微放大。

## 5. Avatar

头像按钮（首字母 + 未读红点）：

```tsx
<button
  className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-gray-100 to-white text-gray-700 border border-white/50 shadow-md transition-all duration-200 hover:scale-105 hover:ring-2 hover:ring-blue-200"
>
  {initial}
  {hasUnread && (
    <span className="absolute top-0 right-0 h-3.5 w-3.5 ring-2 ring-white bg-red-500 rounded-full" />
  )}
</button>
```

未读红点 `h-3.5 w-3.5` + `ring-2 ring-white`（白边脱离头像）。

## 6. Avatar 弹出菜单

点击 avatar 弹出菜单（个人信息 / 设置 / 退出）：

```tsx
<div className="absolute bottom-16 left-4 z-20 w-64 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-2 animate-fade-in-up">
  <button className="w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-blue-600">
    个人信息
  </button>
  {/* ... */}
  <div className="h-px bg-gray-200/50 my-1" />
  <button className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50">
    退出登录
  </button>
</div>
```

- 定位 `bottom-16 left-4`（avatar 上方）。
- 玻璃底 + `animate-fade-in-up` 入场。
- 分隔线 `h-px bg-gray-200/50`。
- 退出 `text-red-600` 危险色。

## 7. 新增 nav item 流程

1. 图标进 `features/layout/components/icons.tsx`（ref 12）。
2. 加 nav item（§4 模板），绑 `activeView`。
3. 在 ref 04 MainContent switch 加对应 case。
4. 间距遵循 §1 尺标，分隔线用 `my-2`。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版 IconSidebar：容器/间距/logo/switcher/nav/avatar/弹出菜单/新增流程。对齐 ui-architect 依赖。 |
