# 参考文档

> 译文说明：本参考文件已翻译为专业简体中文，代码块、类名、类型、路径、颜色值和样式属性保持原样。中文内容聚焦设计意图、适用边界、交互原则和工程落地要求。

> 说明：本条描述设计规则、交互约束或实现注意事项。

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `w-[80px]` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `py-5` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `z-30` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `bg-white/60 backdrop-blur-xl border-r border-white/20` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `space-y-4` 不变。

## 参考章节

```
mb-8  → between logo and workspace switcher
mb-6  → between workspace switcher and divider
my-2  → divider margin
space-y-4 → between main nav items
mt-auto → push avatar to bottom
```

## 参考章节

```tsx
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center">
  <LogoIcon className="w-6 h-6 text-white" />
</div>
```

说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

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

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `bg-blue-500` `bg-emerald-500` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `bg-gray-500` 不变。

## 参考章节

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

- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

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

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `h-3.5 w-3.5` 不变。

## 参考章节

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

- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `h-px bg-gray-200/50` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `animate-fade-in-up` 不变。

## 参考章节

1. 说明：本条描述设计规则、交互约束或实现注意事项。
2. 说明：本条描述设计规则、交互约束或实现注意事项。
3. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `my-2` 不变。
4. 说明：本条描述设计规则、交互约束或实现注意事项。
5. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `mt-auto` 不变。
6. 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

1. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `features/layout/components/icons.tsx` 不变。
2. 说明：本条描述设计规则、交互约束或实现注意事项。
3. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `activeView` 不变。
4. 说明：本条描述设计规则、交互约束或实现注意事项。
