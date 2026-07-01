---
ref: 10
title: 数据可视化 · 图谱 / 表 / Tooltip / 指标卡
owner: data-viz-engineer (可视化)
audited_by: ui-auditor
---

# 📊 ref 10 · 数据可视化

> *图谱 / 表 / Tooltip / 指标卡——数据可读性的四件套。*
>
> data-viz-engineer 的可视化规范。Tooltip/Popover 必须 Portal（ref 01 §8 z-[9999]）。

## 1. 知识图谱画布

容器 `relative overflow-hidden bg-slate-50`，节点绝对定位 `style={{ left, top }}`，连线用 SVG `<line>`。

## 2. 节点配色

| 类别 | 主色 | 半透态 |
| --- | --- | --- |
| A 类 | `bg-blue-500`, `bg-purple-500`, `bg-emerald-500` | `bg-white` |
| B 类 | `bg-blue-400`, `bg-purple-400`, `bg-orange-400` | 半透 |
| C 类 | `bg-indigo-400`, `bg-red-400` | `bg-gray-300` |

## 3. 节点

圆形 + label，selected 态放大 + 环 + 慢转：

```tsx
<div
  className={`absolute rounded-full flex items-center justify-center text-white text-xs font-semibold shadow-md
    transition-all duration-300 cursor-pointer
    ${selected ? 'scale-110 ring-2 ring-offset-2 ring-indigo-400 animate-spin-slow' : ''}
    ${color}`}
  style={{ left: x, top: y, width: size, height: size }}
  onClick={onClick}
  onDoubleClick={onDoubleClick}
>
  {label}
</div>
```

## 4. 连线

SVG line，高亮态加粗 + 变色 + 虚线：

```tsx
<svg className="absolute inset-0 pointer-events-none">
  <line
    x1={node1.x + node1.size / 2}
    y1={node1.y + node1.size / 2}
    x2={node2.x + node2.size / 2}
    y2={node2.y + node2.size / 2}
    stroke={highlighted ? '#6366f1' : '#cbd5e1'}
    strokeWidth={highlighted ? 3 : 1.5}
    strokeDasharray="6 4"
    className="transition-all duration-300"
  />
</svg>
```

## 5. 缩放

`0.3 – 4` 范围，`transform: scale()`。控件右下：

```tsx
<div className="absolute bottom-4 right-4 flex flex-col gap-1 bg-white rounded-xl shadow-lg border border-gray-200 p-1">
  <button className="w-8 h-8 rounded-lg hover:bg-gray-100">+</button>
  <button className="w-8 h-8 rounded-lg hover:bg-gray-100">−</button>
  <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-xs">1:1</button>
</div>
```

## 6. 表格

sticky 表头 + 斑马 hover + 状态徽章：

```tsx
<div className="overflow-x-auto custom-scrollbar rounded-xl border border-gray-200">
  <table className="min-w-full">
    <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
      <tr>
        <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          Name
        </th>
        <th className="px-4 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          Status
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 bg-white">
      {rows.map(row => (
        <tr key={row.id} className="hover:bg-blue-50/50 transition-colors">
          <td className="px-4 py-3 text-sm text-gray-800">{row.name}</td>
          <td className="px-4 py-3 text-sm text-right">
            <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-100 text-emerald-700">
              {row.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

## 7. 分页

```tsx
<div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50/50">
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

## 8. 指标卡

```tsx
<div className="relative bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all p-5 cursor-pointer">
  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-2">{label}</div>
  <div className="text-2xl font-bold text-slate-800">{value}</div>
  {trend && (
    <div className="mt-2 text-xs text-emerald-600 flex items-center gap-1">
      <ArrowUpShortIcon className="w-3 h-3" />
      {trend}
    </div>
  )}
</div>
```

数字变化用 `animate-scale-in`，卡片 `rounded-xl shadow-2xl`。

## 9. Chip（关键词标签）

```tsx
<div className="group relative inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs transition-all
  ${selected ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}">
  {label}
  <button
    onClick={() => setOpen(o => !o)}
    className="opacity-0 group-hover:opacity-100 hover:bg-blue-200 rounded-full p-0.5 transition-opacity"
  >
    <MoreHorizontalIcon className="w-3 h-3" />
  </button>
</div>
```

## 10. Popover（Portal）

```tsx
{createPortal(
  <div className="fixed z-[9999] bg-white rounded-lg shadow-xl border border-gray-100 p-1 animate-fade-in">
    <button>编辑</button>
    <button className="text-red-600">删除</button>
    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-gray-100 rotate-45" />
  </div>,
  document.body
)}
```

## 11. Tooltip（Portal）

```tsx
{createPortal(
  <div
    className="fixed z-[9999] pointer-events-none bg-slate-900/95 text-slate-100 rounded-lg shadow-xl px-3 py-2 text-xs max-w-xs animate-fade-in"
    style={{ left: x, top: y }}
  >
    <div className="font-semibold text-white">{code}</div>
    <div className="opacity-80 mt-1">{description}</div>
    <ul className="mt-2 space-y-0.5 opacity-70">
      {path.map(p => <li key={p}>· {p}</li>)}
    </ul>
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
  </div>,
  document.body
)}
```

`pointer-events-none`（tooltip 不抢交互），z-[9999]（ref 01 §8）。

## 12. AI 洞察面板

暗色 aside + 覆盖度条 + 警告 callout：

```tsx
<aside className="bg-slate-900 text-slate-100 rounded-2xl p-5 space-y-4 shadow-xl ring-1 ring-slate-700">
  <header className="flex items-center gap-2">
    <SparkleIcon className="w-4 h-4 text-amber-300" />
    <h3 className="text-sm font-semibold">AI 洞察分析</h3>
  </header>

  {/* coverage bar */}
  <div className="space-y-1">
    <div className="flex justify-between text-xs opacity-70">
      <span>覆盖度</span>
      <span>{coverage}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-slate-700 overflow-hidden">
      <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-500" style={{ width: `${coverage}%` }} />
    </div>
  </div>

  {/* warning callout */}
  <div className="rounded-lg bg-amber-500/10 border border-amber-400/30 p-3">
    <div className="flex items-start gap-2">
      <WarningTriangleIcon className="w-4 h-4 text-amber-400 mt-0.5" />
      <p className="text-xs text-amber-200">{warning}</p>
    </div>
  </div>
</aside>
```

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版数据可视化：图谱画布/节点配色/节点/连线/缩放/表格/分页/指标卡/chip/Popover/Tooltip/AI 面板。对齐 data-viz-engineer 依赖。 |
