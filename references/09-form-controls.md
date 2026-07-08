---
ref: 09
title: 表单控件规范 · 输入 / 选择 / 反馈
owner: form-liberator (主) · a11y-guardian (a11y 审) · empty-state-storyteller (空态)
audited_by: ui-auditor
---

# 📝 ref 09 · 表单控件规范

> *表单是用户做决策的地方——控件统一，决策才不被干扰。*
>
> a11y-guardian 据本文件审表单 a11y（焦点 / label / 错误提示）。所有控件遵循 ref 01 令牌 + ref 14 反模式（禁 `!important` / 禁 HEX）。

## 0. 通用约束

- 每个 input 必须有 `<label>`（不靠 placeholder 当标签，placeholder 是提示不是标签）。
- 焦点态统一 `focus:border-blue-500 focus:ring-2 focus:ring-blue-200`，不得各写各的。
- 禁用态 `disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed`。
- 错误提示用 `text-xs text-red-500`，紧贴控件下方。

---

## 1. 文本输入

```tsx
<label className="block">
  <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
  <input
    type="text"
    className="w-full rounded-lg border border-gray-300 py-2.5 px-3 text-sm text-gray-800 placeholder-gray-400
      focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors
      disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
    placeholder={placeholder}
  />
  {helper && <p className="text-xs text-gray-400 mt-1">{helper}</p>}
  {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
</label>
```

helper（辅助说明）gray-400，error red-500——两者互斥时 error 优先显示。

## 2. 带图标输入（搜索框）

```tsx
<div className="relative">
  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
  <input className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
</div>
```

图标 `pointer-events-none`，不抢输入焦点。

## 3. 下拉选择

```tsx
<select className="w-full rounded-lg border border-gray-300 py-2.5 px-3 text-sm bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
  <option>选项 A</option>
</select>
```

原生 select 保持可访问，仅令牌化外观。

## 4. 复选框

```tsx
<label className="flex items-center gap-2 cursor-pointer">
  <input
    type="checkbox"
    className="rounded text-blue-600 focus:ring-blue-500 border-gray-300"
  />
  <span className="text-sm text-gray-700">{label}</span>
</label>
```

整行可点（label 包 input），不只是方框可点——增大触控区。

## 5. 单选卡片（radio card）

用 `<input type="radio">` 配卡片样式，选中态高亮：

```tsx
<button
  className={`p-4 rounded-xl border-2 text-left transition-all
    ${selected
      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
      : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50'
    }`}
>
  <div className="font-semibold text-slate-800">{title}</div>
  <p className="text-xs text-gray-500 mt-1">{description}</p>
</button>
```

## 6. Toggle 开关

```tsx
<button
  onClick={onToggle}
  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
    ${on ? 'bg-blue-600' : 'bg-gray-300'}`}
>
  <span
    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
      ${on ? 'translate-x-6' : 'translate-x-1'}`}
  />
</button>
```

需配 `aria-pressed={on}` 供屏幕阅读器。

## 7. 滑块（range）

```tsx
<input
  type="range"
  min={0}
  max={100}
  className="w-full accent-blue-600"
/>
<div className="flex justify-between text-xs text-gray-500 mt-1">
  <span>精准</span>
  <span>泛化</span>
</div>
```

两端标签说明语义（如"精准↔泛化"），不只放数字。

---

## 8. 状态标签（badge）

| 状态 | 样式 |
| --- | --- |
| 信息（默认） | `bg-blue-100 text-blue-700 border-blue-200` |
| 警告（高亮） | `bg-amber-50 text-amber-700 ring-2 ring-amber-200 scale-105` |
| 提示（带点） | `bg-orange-50 text-orange-600` + `::before` content dot |

## 9. 可删除标签（chip）

```tsx
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-blue-100 text-blue-700 border border-blue-200">
  {label}
  <button onClick={onRemove} className="hover:bg-blue-200 rounded-full p-0.5">
    <XMarkIcon className="w-3 h-3" />
  </button>
</span>
```

删除按钮是 `<button>`（a11y），不是 div。

---

## 10. AI 控件（Path G 专属）

### AI 联想按钮

```tsx
<button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors text-xs">
  <SparkleIcon className="w-3.5 h-3.5" />
  AI 联想
</button>
```

AI 控件统一 purple 色谱（ref 01 §1 AI 语义色）。

### AI 思考态

```tsx
<span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 border-dashed border-purple-300 text-purple-500 animate-thinking-pulse">
  <SparkleIcon className="w-3.5 h-3.5 animate-spin-slow" />
  AI 正在联想...
</span>
```

虚线边框 + 脉冲动画表示"进行中、未完成"，区别于实态按钮。

---

## 11. 拖拽上传

```tsx
<div
  className={`rounded-xl border-2 border-dashed p-8 text-center transition-colors
    ${isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50/50 hover:border-blue-300'}`}
>
  <UploadCloudIcon className="w-10 h-10 text-gray-400 mx-auto mb-2" />
  <p className="text-sm text-gray-600">拖拽文件到此处，或 <span className="text-blue-600 underline">点击上传</span></p>
  <p className="text-xs text-gray-400 mt-1">支持 PDF / DOCX / TXT，单个文件 ≤ 10MB</p>
</div>
```

拖拽悬停态变色 + 明确格式/大小限制（防用户上传后被拒）。

---

## 12. 边框状态对照表

| 状态 | border | ring | 文字 |
| --- | --- | --- | --- |
| 默认 | `border-gray-300` | — | `text-xs text-gray-400` |
| 聚焦 | `border-blue-500` | `ring-2 ring-blue-200` | — |
| 错误 | `border-red-400` | `ring-2 ring-red-200` | `text-xs text-red-500` |
| 禁用 | `bg-gray-100` | — | — |

---

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版表单控件规范：文本/图标/下拉/复选/单选卡/toggle/slider/标签/AI 控件/拖拽上传 + 状态对照表。对齐 a11y-guardian / empty-state-storyteller / form-liberator 依赖。 |
