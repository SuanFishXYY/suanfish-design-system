---
ref: 45
title: 基础控件系统 · 按钮/标签/徽章/角标/头像/进度/spinner
owner: ui-architect (复用) · 各 agent 复用
audited_by: ui-auditor
---

# 🔘 ref 45 · 基础控件系统

> *比组件更原子的小控件——按钮、标签、徽章、角标、头像、进度、spinner。全工作室复用，统一收口。*
>
> 沉淀既有用法（cross-ref 回原 ref），不重复造数据。按钮文案归 copy-writer（ref 35），按钮 a11y 归 ref 34。

## 1. 按钮（Button）

最高频控件（散在 ref 07/09/36/component-patterns）。四态 + 三级：

```tsx
{/* 主操作 */}
<button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm">确定</button>
{/* 次操作 */}
<button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">取消</button>
{/* 危险 */}
<button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium">删除</button>
```

| 级别 | 样式 | 用途 |
| --- | --- | --- |
| 主（primary） | `bg-blue-600 text-white` | 每屏仅 1 个 |
| 次（secondary） | `border bg-white text-gray-700` | 取消/辅助 |
| 危险（danger） | `bg-red-600 text-white` | 删除/不可逆 |
| 幽灵（ghost） | `bg-transparent hover:bg-gray-100` | 工具栏 |
| 链接（link） | `text-blue-600 underline` | 文内动作 |

| 尺寸 | padding |
| --- | --- |
| sm | `px-3 py-1.5 text-xs` |
| md（默认） | `px-4 py-2 text-sm` |
| lg | `px-6 py-2.5 text-base` |

按钮状态机（含发送态）见 ref 36 §二 send 按钮、ref 09 §6 toggle。铁律：
- `<button type="button">`（表单内防误提交，ref 14）。
- 禁用态 `disabled:opacity-40 cursor-not-allowed`。
- 危险按钮配二次确认（ref 07 §7）。
- 移动端 `min-h-[44px]` 触控（ref 33 §6）。
- 文案 2-6 字动词开头（ref 35）。

## 2. 标签 / Chip

小面积分类标记（ref 09 §8/9、ref 10 §9）：

```tsx
{/* 状态标签 badge */}
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-blue-100 text-blue-700 border border-blue-200">{label}</span>
{/* 可删除 chip */}
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-blue-100 text-blue-700 border border-blue-200">
  {label}
  <button onClick={onRemove} className="hover:bg-blue-200 rounded-full p-0.5"><XMarkIcon className="w-3 h-3" /></button>
</span>
```

| 色阶 | bg | text |
| --- | --- | --- |
| 信息 | `bg-blue-100` | `text-blue-700` |
| 成功 | `bg-emerald-100` | `text-emerald-700` |
| 警告 | `bg-amber-100` | `text-amber-700` |
| 危险 | `bg-red-100` | `text-red-700` |
| 中性 | `bg-gray-100` | `text-gray-700` |

铁律：`rounded-full text-xs`；删除按钮是 `<button>`（a11y）；色阶对齐语义（ref 01 §1）。

## 3. 徽章 / 角标 / 红点

计数或状态标记（ref 05 §3 角标、ref 32 §8 badge）：

```tsx
{/* 数字角标 */}
<span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
  {count > 99 ? '99+' : count}
</span>
{/* 红点 */}
<span className="absolute top-0 right-0 h-3.5 w-3.5 ring-2 ring-white bg-red-500 rounded-full" />
```

- 数字 > 99 显示 `99+`。
- 红点 `h-3.5 w-3.5` + `ring-2 ring-white`（脱离底元素）。
- 类型角标色：个人 blue / 团队 emerald / 其他 gray（ref 05）。

## 4. 头像（Avatar）

用户/实体头像（ref 05 §5、ref 06 列表项）：

```tsx
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-100 to-white text-gray-700 border border-white/50 shadow-md flex items-center justify-center font-medium">
  {initial}
</div>
```

| 尺寸 | 用途 |
| --- | --- |
| `w-6 h-6` | 行内/列表紧凑 |
| `w-10 h-10` | 默认 |
| `w-12 h-12` | 侧栏/Profile |

铁律：圆形 `rounded-full`；首字母 fallback；图片 `object-cover`；可叠未读红点（§3）。

## 5. 进度条（Progress）

明确进度的加载（ref 31 > 1s 档、ref 36 自动播放进度）：

```tsx
{/* 线性 */}
<div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
  <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-500" style={{ width: `${pct}%` }} />
</div>
{/* 仪式自动播放（细线置顶） */}
<div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${accent.gradient}`} style={{ width: `${pct}%` }} />
```

铁律：背景 `bg-gray-200` + 前景渐变；`transition-all duration-500` 平滑；带百分比文字（a11y `role="progressbar"`）。

## 6. Spinner / 加载指示

不确定时长的加载（ref 31 200ms-1s 档、ref 36 cursor breathe）：

```tsx
{/* 旋转 spinner */}
<svg className="animate-spin h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
</svg>
{/* 三点跳动 */}
<div className="flex gap-1">
  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
</div>
```

铁律：
- < 200ms 不显示（防闪烁，ref 31）。
- 200ms-1s spinner / 骨架屏。
- \> 1s 改进度条（spinner 无进度感 = 焦虑）。
- \> 5s 加等待提示文字（ref 31）。
- `aria-busy="true"` + `role="status"`（a11y）。

## 7. 分割线（Divider）

```tsx
<div className="h-px bg-gray-100 my-1" />  {/* 水平 */}
<div className="w-px bg-gray-100 mx-1" />  {/* 垂直 */}
```

铁律：`h-px bg-gray-100`；不滥用——分割线过多 = 信息层级不清。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版基础控件：按钮（五级三尺寸）/标签chip/徽章角标红点/头像/进度条/spinner三点/分割线。沉淀既有用法，cross-ref 回 ref 01/05/06/07/09/10/31/32/33/34/35/36。 |
