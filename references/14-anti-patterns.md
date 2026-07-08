---
ref: 14
title: 反模式清单 · 禁止做法与正确替代
owner: ui-auditor (执行) · a11y-guardian / copy-writer (补充)
audited_by: ui-auditor
---

# 🚫 ref 14 · 反模式清单

> *规则告诉你「该做什么」；本清单告诉你「绝不能做什么」——以及踩了该怎么改。*
>
> ui-auditor 跑 ref 15/16 规则集时，命中本清单即 🟥 严重（拒绝合并）。a11y-guardian 查 a11y 反模式段，copy-writer 查文案反模式段。

## 0. 如何用本清单

每条反模式给三件套：**🚫 bad 示例 → 为什么坏 → ✅ 正确替代**。ui-auditor 的 REPORT 模板：

```
| Severity | File:Line | Issue | Suggested fix |
```

ui-auditor 用 `grep` 检测本清单中的 bad 模式（如 `alert(` / `confirm(` / `prompt(` / `!important` / HEX 颜色），命中即报。

---

## 一、交互反模式

### 1. 原生弹窗 `alert()` / `confirm()` / `prompt()`

```tsx
// 🚫 bad —— 原生弹窗阻断、丑、不可定制、无 a11y
alert('删除成功');
confirm('确定删除？');
```

为什么坏：原生弹窗阻塞主线程、样式不可控、屏幕阅读器支持差、移动端体验灾难。

✅ 正确：用 [`modal-craftsman`](../agents/modal-craftsman.md) 出模态（ref 07）。成功反馈用 `animate-flash-green` 之类的轻提示，不用阻断弹窗。

### 2. HEX 硬编码颜色

```tsx
// 🚫 bad
<div style={{ color: '#3b82f6' }}>
```

为什么坏：绕过 token-keeper 令牌体系，颜色散落代码各处，无法统一改色。

✅ 正确：用令牌 `text-blue-500`（见 [ref 01](01-design-tokens.md)）。token-keeper 是颜色唯一守门人。`index.css` / `KnowledgeGraph.tsx` 等已有文件保持既有令牌不变。

### 3. `display:none / hidden` 硬切换

```tsx
// 🚫 bad —— 突兀出现/消失，无过渡
<div className={isOpen ? 'block' : 'hidden'}>
```

为什么坏：内容瞬切，用户感知不到状态变化，认知断裂。

✅ 正确：用条件渲染 + opacity 过渡：
```tsx
{isOpen && (
  <div className="opacity-100 transition-opacity duration-300">...</div>
)}
```

### 4. `!important` 强制覆盖

```tsx
// 🚫 bad
className="!bg-red-500"
```

为什么坏：`!important` 破坏样式优先级链，后续维护无法覆盖，是样式系统的债。

✅ 正确：用 Tailwind 任意值变体精确作用域，如 `[&_div]:bg-red-500`（限定子元素），或回到 token 体系选对的色。

### 5. 乱配色（非令牌色组合）

```tsx
// 🚫 bad —— pink/yellow 不在令牌表
className="text-pink-700 bg-yellow-200"
```

为什么坏：用了令牌表外的色，破坏视觉一致性。

✅ 正确：走 token-keeper，从 [ref 01](01-design-tokens.md) 语义色选（动作 blue / 危险 red / 警告 amber 等）。

### 6. 向导步骤跳改

向导步骤数 / 顺序变更必须经 wizard-designer（见 ref 08-wizard-pattern），不得擅改步骤流。

### 7. 自定义滚动条

为什么坏：各处自写滚动条样式不统一。

✅ 正确：用全局 `custom-scrollbar`（亮）/ `custom-scrollbar-dark`（暗）工具类（ref 01 §10）。滚动容器加 `overflow-y-auto`。

### 8. `<div onClick>` 假按钮

```tsx
// 🚫 bad —— div 不可聚焦、无键盘、无 a11y
<div onClick={handler}>...</div>
```

为什么坏：键盘用户无法触发，屏幕阅读器不识别为可操作。

✅ 正确：用 `<button type="button">`；确需 div 时补 `role="button"` + `tabIndex={0}` + 键盘事件。但首选 `<button>`。

### 9. 主内容区脱锚

主内容区（`features/layout/components/MainContent.tsx`）的布局锚点不得擅改，影响整体栅格。

### 10. 内联 `<style>` / `@keyframes`

为什么坏：内联样式绕过全局动画库，重复定义、难维护。

✅ 正确：动画统一进 `index.css` 的 `animate-*` 工具类（ref 01 §10）。

---

## 二、令牌反模式（🟡 警告级）

### 11. 任意阴影值

```tsx
// 🟡
className="shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
```

✅ 正确：用 `shadow-md` / `shadow-lg` / `shadow-xl` / `shadow-2xl`（ref 01 §6）。

### 12. 任意字号值

```tsx
// 🟡
className="text-[14px]"
```

✅ 正确：用 `text-sm`（14）。仅角标允许 `text-[10px]`（ref 01 §4）。

### 13. 任意间距 `mt-` / `mb-`

✅ 正确：纵向堆叠用 `space-y-4`，不逐个 `mt-/mb-` 拼凑。

### 14. 图标散落

图标统一进 `features/layout/components/icons.tsx`，不得各处内联 SVG。

### 15. 任意 z-index

```tsx
// 🟡
className="z-[42]"
```

✅ 正确：z-index 必须落 ref 01 §8 z-index 表。说不清场景找 token-keeper 定位。

### 16. 重复确认模态

确认/删除确认统一用 `ConfirmModal` / `DeleteConfirmModal`（ref 07），不得各写各的。

### 17. `text-yellow-*` 暖色误用

稳态模式禁用 `text-yellow-*`，用 `text-amber-*`（ref 01 暖色谱是仪式专属，amber 是稳态警告色）。

### 18. 文案空话

文案反模式（"点击这里""了解更多"等无信息量引导）见下方文案专项。

---

## 三、a11y 反模式（a11y-guardian 查）

- **步骤切换丢状态**：向导换步用 `key={currentStep}` 触发重挂载时，焦点 / 表单状态不得丢。
- **Tooltip 不挂 Portal**：tooltip 必须 `createPortal` + `z-[9999]`，否则被父容器 overflow 裁切。
- **状态色仅靠颜色**：成功/失败不能只靠绿/红，需配图标或文字（色盲友好）。
- **反馈无对比**：成功 `bg-emerald-50` / 失败 `bg-red-50` 必须配深色文字或图标，对比度达标。
- **不可点元素加交互**：交互必须落在 `cursor-pointer` + `<button>` / `<a>` 上，不得挂静态元素。
- **按钮缺 type**：表单内按钮必须 `<button type="button">`，防误提交。

---

## 四、文案反模式（copy-writer 查）

| 🚫 bad | ✅ good |
| --- | --- |
| 说明空洞（"欢迎"） | 具体欢迎 `Welcome <Product>!` |
| 说明无钩子 | Subtitle `eureka · let's create` |
| 说明冗长 | 说明精简 |
| 说明无信息量 | Library labels like `12K entries` / `8 items`（带具体数字） |
| 说明无层级 | 说明分主次 |
| 说明冷冰冰 | 暖场 `from-amber-50 to-orange-50`（仪式模式）配暖文案 |

> 文案不是装饰——它是用户决策的依据。说不出具体数字/动作的文案 = 空话，退回 copy-writer 重写。

---

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版反模式清单：18 条交互/令牌反模式 + a11y 专项 + 文案专项。对齐 ui-auditor / a11y-guardian / copy-writer 依赖。 |
