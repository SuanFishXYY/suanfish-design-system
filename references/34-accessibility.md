---
ref: 34
title: 可访问性 a11y · 无知之幕规范
owner: a11y-guardian (可访问性守护)
audited_by: ui-auditor
---

# ♿ ref 34 · 可访问性 a11y

> *能用键盘走通的界面，才是真正会用的界面。*
>
> a11y-guardian 主理。哲学锚：罗尔斯 · 无知之幕——替最弱势用户设计。a11y 不是加分项，是合规底线。反模式见 ref 14 §三。

## 1. 5 项必检清单

### ① 键盘导航
- 所有交互元素能用 `Tab` 到达。
- Tab 顺序符合视觉阅读顺序（绝不跳跃）。
- `Enter` / `Space` 触发主操作。
- `Escape` 关闭模态 / 弹层 / Tooltip。
- `Arrow` 在列表 / 菜单 / 步骤中切换。

### ② 焦点可见性
```css
/* 全局 focus-visible 模式 */
:focus-visible {
  outline: 2px solid theme('colors.blue.500');
  outline-offset: 2px;
}
```
- **绝不** `outline: none` 单独使用。
- 移除原生 outline 时必须用 `:focus-visible` 替代。

### ③ ARIA
- 图标按钮必须有 `aria-label`（如 `<button aria-label="关闭">×</button>`）。
- 模态必须有 `role="dialog"` + `aria-modal="true"` + `aria-labelledby` 指向标题。
- 表单输入必须有 `<label>` 或 `aria-label`。
- 加载状态用 `aria-busy="true"` + `role="status"`。
- 错误提示用 `role="alert"` + `aria-live="polite"`。
- 装饰元素（粒子/光效）加 `aria-hidden="true"`，屏幕阅读器忽略。

### ④ 色彩对比度（WCAG AA）
- 正文文字 ≥ 4.5:1。
- 大字（≥18px 或 14px bold）≥ 3:1。
- 图标 / UI 组件边界 ≥ 3:1。
- 焦点 ring 与背景对比 ≥ 3:1。

算鱼工作台典型对照表（已验证）：
- `text-slate-600` on `bg-white` ≈ 7.5:1 ✅
- `text-slate-400` on `bg-white` ≈ 3.4:1 ⚠️ 仅装饰文字
- `text-blue-600` on `bg-blue-50` ≈ 4.9:1 ✅
- `amber-200` on `bg-white` ≈ 1.4:1 ❌ 不可正文，仅装饰

### ⑤ 运动敏感
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 80ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 80ms !important;
  }
}
```
所有动画与转场必须有此降级（仪式模式见 ref 11 §8 专项降级）。

## 2. a11y SPEC 模板

```markdown
## ♿ 可访问性 SPEC —— <界面名>

**键盘导航**:
- [ ] Tab 顺序：<标题> → <主操作> → <次操作> → <关闭>
- [ ] Escape 关闭：✅ 已绑定
- [ ] Enter 主操作：✅ 已绑定

**ARIA**:
- [ ] role="dialog" / role="alert" / ...
- [ ] aria-label / aria-labelledby：<位置>
- [ ] aria-live="polite" / "assertive"：<位置>

**对比度**（关键文本/UI 元素）:
- 主标题 text-slate-800 on bg-white：≈ 12:1 ✅
- 次文字 text-slate-500 on bg-white：≈ 4.6:1 ✅
- 主按钮 white on blue-600：≈ 8.2:1 ✅

**reduced-motion**:
- [ ] 全局降级已生效
- [ ] 关键动画手动跳过：<列表>

**屏幕阅读器朗读顺序**:
1. <模态标题>
2. <说明文字>
3. <主操作>
4. <次操作>
```

## 3. 常见反模式（与 ref 14 §三互补）

| 反模式 | 改法 |
| --- | --- |
| `<div onClick={...}>` 当按钮 | 改用 `<button>`，原生有键盘 / ARIA 支持 |
| `<img>` 无 alt | 装饰图 `alt=""`，信息图真实描述 |
| `placeholder` 当 label | 加 `<label>`（placeholder 朗读不出 / 输入后消失） |
| 仅用颜色传递状态（红色=错误） | 加图标 + 文字，色弱用户依赖语义 |
| 自动 focus 跳到无关元素 | 自动 focus 仅用于「显然下一步」 |
| 隐藏 outline 不补 :focus-visible | 键盘用户失明，必补 |
| 模态无 focus trap | 焦点会跑模态外，补焦点陷阱 |

## 4. 联动

- 表单 a11y 见 ref 09（label / error / disabled）。
- a11y 反模式清单见 ref 14 §三。
- 动画降级见 ref 11 §8。
- 对比度令牌走 ref 01（amber-200 等低对比色仅装饰）。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版 a11y 规范：5 项必检（键盘/焦点/ARIA/对比度/运动）+ SPEC 模板 + 反模式 + 联动。对齐 a11y-guardian 依赖。 |
