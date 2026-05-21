# 参考文档

> 本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。

> 译文说明：本参考文件已翻译为专业简体中文，代码块、类名、类型、路径、颜色值和样式属性保持原样。中文内容聚焦设计意图、适用边界、交互原则和工程落地要求。

> 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

| 说明 | 说明 | 说明                                        |
| -------------------------------------------------------------------------- | ----- | ---------------------------------------------- |
| `src/features/layout/components/icons.tsx`                                 | 说明 | 说明 |
| `src/features/workspace/components/icons.tsx`                              | 说明 | 说明                            |
| `src/features/user/components/icons.tsx`                                   | 说明 | 说明                    |
| `src/features/notification/components/icons.tsx`                           | 说明 | 说明                             |
| `src/features/onboarding/components/icons.tsx`                             | 说明 | 说明                     |
| `src/features/<workArea>/components/icons.tsx`                             | 说明 | 说明     |
| `src/features/<workArea>/<moduleA>/components/icons.tsx`                   | 说明 | 说明                             |
| `src/features/<workArea>/<moduleB>/components/icons.tsx`                   | 说明 | 说明                             |
| `src/features/<workArea>/<moduleC>/components/icons.tsx`                   | 说明 | 说明 |

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `<workArea>` `<moduleA/B/C>` 不变。

## 参考章节

- 说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `features/layout/components/icons.tsx` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `icons.tsx` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `icons.tsx` 不变。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
export const FooIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="..." />
  </svg>
);
```

- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `viewBox="0 0 24 24"` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `PinIcon` `PinSolidIcon` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `stroke-width: 1.5` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `currentColor` 不变。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `index.css` 不变。

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

说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
<span className="material-symbols-outlined text-blue-600 text-base">analytics</span>
```

## 参考章节

| 说明 | 说明                  |
| -------------- | ------------------------ |
| `Icon` | 说明           |
| `SolidIcon` | 说明       |
| `ShortIcon` | 说明    |
| `FunctionIcon` | 说明 |

## 参考章节

1. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `icons.tsx` 不变。
2. 说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `features/layout/components/icons.tsx` 不变。
3. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `viewBox="0 0 24 24"` `strokeWidth={1.5}` `currentColor` 不变。
4. 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `w-5 h-5` 不变。

## 参考章节

| 说明 | 说明                                                                                  |
| ----------- | ----------------------------------------------------------------------------------------- |
| 说明 | `ChevronLeftIcon`, `ChevronRightIcon`, `ChevronDownIcon`, `XMarkIcon`                     |
| 说明 | `PlusIcon`, `TrashIcon`, `PencilSquareIcon`, `PinIcon`, `LogoutIcon`                      |
| 说明 | `CheckCircleIcon`, `WarningTriangleIcon`, `InformationCircleIcon`, `ShieldCheckIcon`      |
| 说明 | `SparkleIcon`, `SparkleFunctionIcon`, `LightBulbIcon`                                     |
| 说明 | `ChartBarIcon`, `TableCellsIcon`, `FilterIcon`, `SortIcon`                                |
| 说明 | `UserIcon`, `UserGroupIcon`, `UsersIcon`, `KeyIcon`                                       |
| 说明 | `FolderIcon`, `BookIcon`, `CubeTransparentIcon`                                           |
