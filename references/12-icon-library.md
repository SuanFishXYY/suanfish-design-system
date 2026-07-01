---
ref: 12
title: 图标库 · SVG 组件 + Material Symbols
owner: icon-curator (图标守门)
audited_by: ui-auditor
---

# 🎨 ref 12 · 图标库

> *图标统一进 icons.tsx，散落即失控。*
>
> icon-curator 的图标规范。禁各处内联 SVG（见 ref 14 反模式 14）。

## 1. 图标文件分布

每个 feature 区一个 `icons.tsx`，按域就近管理：

| 路径 | 域 | 说明 |
| --- | --- | --- |
| `src/features/layout/components/icons.tsx` | 布局（侧栏/导航/通用） | 全局通用图标 |
| `src/features/workspace/components/icons.tsx` | 工作区 | 工作区专属 |
| `src/features/user/components/icons.tsx` | 用户 | 用户/账户 |
| `src/features/notification/components/icons.tsx` | 通知 | 通知/消息 |
| `src/features/onboarding/components/icons.tsx` | 仪式引导 | 仪式模式专属 |
| `src/features/<workArea>/components/icons.tsx` | 业务工作区 | 该工作区通用 |
| `src/features/<workArea>/<moduleA>/components/icons.tsx` | 模块 A | 模块专属 |
| `src/features/<workArea>/<moduleB>/components/icons.tsx` | 模块 B | 模块专属 |
| `src/features/<workArea>/<moduleC>/components/icons.tsx` | 模块 C | 模块专属 |

`<workArea>` / `<moduleA/B/C>` 为业务占位符，按实际域替换。

## 2. SVG 组件模板

所有 SVG 图标用统一模板（`features/layout/components/icons.tsx` 为基准）：

```tsx
export const FooIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="..." />
  </svg>
);
```

铁律：
- `viewBox="0 0 24 24"`（24 网格统一）。
- `stroke-width: 1.5`（线宽统一，描边图标）。
- `currentColor`（颜色继承父级 text-*，不硬编码）。
- 实心变体用 `PinSolidIcon` 之类命名，与线框 `PinIcon` 区分。
- 默认尺寸 `w-5 h-5`，可由调用方覆盖。

## 3. Material Symbols（字体图标）

部分图标用 Material Symbols 字体（进 `index.css`）：

```css
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
}
```

调用：

```tsx
<span className="material-symbols-outlined text-blue-600 text-base">analytics</span>
```

字体图标颜色走 `text-*` 令牌，尺寸走 `text-*` 字号。

## 4. 图标变体

| 类型 | 用途 |
| --- | --- |
| `Icon` | 默认线框 |
| `SolidIcon` | 实心（选中/强调态） |
| `ShortIcon` | 简版（小尺寸/紧凑） |
| `FunctionIcon` | 功能/AI 专属（配 Sparkle） |

## 5. 新增图标流程

1. 图标进对应域的 `icons.tsx`（不在域里则进 `features/layout/components/icons.tsx`）。
2. 用 §2 模板，保持 `viewBox 24` / `strokeWidth 1.5` / `currentColor`。
3. 默认 `w-5 h-5`，需其他尺寸调用方传 className。
4. 实心/简版/AI 变体按 §4 命名约定。

## 6. 常用图标清单

| 类别 | 图标 |
| --- | --- |
| 方向/关闭 | `ChevronLeftIcon`, `ChevronRightIcon`, `ChevronDownIcon`, `XMarkIcon` |
| 操作 | `PlusIcon`, `TrashIcon`, `PencilSquareIcon`, `PinIcon`, `LogoutIcon` |
| 状态 | `CheckCircleIcon`, `WarningTriangleIcon`, `InformationCircleIcon`, `ShieldCheckIcon` |
| AI | `SparkleIcon`, `SparkleFunctionIcon`, `LightBulbIcon` |
| 数据 | `ChartBarIcon`, `TableCellsIcon`, `FilterIcon`, `SortIcon` |
| 用户 | `UserIcon`, `UserGroupIcon`, `UsersIcon`, `KeyIcon` |
| 文件/资源 | `FolderIcon`, `BookIcon`, `CubeTransparentIcon` |

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版图标库：9 域文件分布 + SVG 模板 + Material Symbols + 4 变体 + 新增流程 + 清单。对齐 icon-curator 依赖。 |
