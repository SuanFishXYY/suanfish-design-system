---
ref: 01
title: 设计令牌 · 视觉原子唯一真相
version: 1.0.1
owner: token-keeper
audited_by: ui-auditor
---

# 🎨 ref 01 · 设计令牌表 v1.0.0

> *设计 token 即立法。* — 康德 · 绝对命令
>
> 这是算鱼整套设计语言里**所有视觉原子的唯一真相之源**。颜色、圆角、阴影、间距、字号、字重、z-index、动画时长——任何 agent 想用、想改、想新增，都得先来这里查，再过 [`token-keeper`](../agents/token-keeper.md) 批准。**写权限只属于 token-keeper**（见 [ref 00](00-collaboration-protocol.md) §写权限）。

## 版本同步契约

| 字段 | 说明 |
| --- | --- |
| `version` | 本令牌表的 semver · 任何令牌增删改由 token-keeper 提 PR 并升版本 |
| `bound_to_token_version`（在 ref 15/16 规则集） | 对应本文件的 `version` |

**ui-auditor 加载 ref 15/16 时检查**：规则集的 `bound_to_token_version` 若落后于本文件 `version`，审计直接拒绝执行（`RULESET_OUT_OF_SYNC`），强制 token-keeper 先同步规则集。token 改动 ≠ 静默生效。

## 双模式 token 集

算鱼有两把嗓子——**🏛 稳态模式**（默认，冷色谱）与 **🎬 仪式模式**（onboarding-director 专用，暖色谱）。两套共享同一把间距/圆角/字重尺标，只是色谱与圆角档位不同。

---

## 1. 稳态色谱（冷色 · 默认模式）

稳态模式的标准语义色。每色给出 7 列映射：base 原色 / 背景软底 / 主文字 / 边框 / 聚焦环。**禁用 HEX，一律走 Tailwind 语义色阶。**

| 语义 | base | 软底 bg | 主文字 text | 边框 border | 聚焦环 ring |
| --- | --- | --- | --- | --- | --- |
| 动作（主按钮/链接） | `blue-700` | `bg-blue-50` | `text-blue-600` | `border-blue-200` | `ring-blue-200` |
| 危险（删除/报错） | `red-700` | `bg-red-50` | `text-red-600` | `border-red-200` | `ring-red-200` |
| 成功（完成/通过） | `emerald-700` | `bg-emerald-50` | `text-emerald-600` | `border-emerald-200` | `ring-emerald-200` |
| 警告（提醒/待办） | `amber-700` | `bg-amber-50` | `text-amber-600` | `border-amber-200` | `ring-amber-200` |
| 强调（CTA 次级） | `orange-700` | `bg-orange-50` | `text-orange-500` | `border-orange-200` | `ring-orange-200` |
| AI（智能体专属） | `purple-700` | `bg-purple-50` | `text-purple-500` | `border-purple-200` | `ring-purple-200` |
| 信息（辅助提示） | `indigo-700` | `bg-indigo-50` | `text-indigo-500` | `border-indigo-200` | `ring-indigo-200` |

---

## 2. 中性底色（slate / gray / white）

页面骨架与文字层级。冷色谱稳态用 slate/gray，不用暖色。

| 用途 | 值 |
| --- | --- |
| 页面背景 | `bg-slate-50` (or gradient `from-[#F7F9FC] to-[#E8EFF9]`) |
| 卡片底 | `bg-white` |
| 悬浮面板 | `bg-white` |
| 玻璃模糊层 | `bg-white/60 backdrop-blur-xl` |
| 暗色块/反转 | `bg-slate-900 text-slate-100` |
| 正文主文字 | `text-slate-800` |
| 次文字 | `text-gray-600` |
| 占位/禁用文字 | `text-gray-400` |
| 分割线 | `border-gray-100` or `border-gray-200` |
| 禁用态 | `bg-gray-100 text-gray-500 cursor-not-allowed` |

---

## 3. 状态指示色

小面积状态点 / 标签徽章底色。

| 状态 | 值 |
| --- | --- |
| 进行中 / 主信息 | `bg-blue-500` |
| 成功 / 已完成 | `bg-emerald-500` |
| 中性 / 草稿 | `bg-gray-500` |

---

## 4. 字号尺标

Tailwind 字号梯度，**禁用任意 px**（如 `text-[17px]`）。微字号仅用于角标/徽章。

| token | 用途 |
| --- | --- |
| `text-[8px]` | 角标 / 角标数字 |
| `text-[10px]` | 徽章 / 元信息 |
| `text-xs` | 辅助标签 (12) |
| `text-sm` | 次文字 / 表单提示 (14) |
| `text-base` | 正文 (16) |
| `text-lg` | 小标题 (18) |
| `text-xl` | 区块标题 (20) |
| `text-2xl` | 页面标题 (24) |
| `text-3xl` – `text-6xl` | 落地页大标题 |

字重保持 `font-medium` `font-semibold` `font-bold` 不变。
标题级保持 `font-black` 不变。

正文保持 `font-sans antialiased` 不变。

---

## 5. 圆角尺标

token 值统一，**应用方式按模式分档**（仪式模式比稳态大一档）。禁用任意值（如 `rounded-[10px]`）。

| token | 稳态用途 | 仪式用途 |
| --- | --- | --- |
| `rounded-md` | 输入框 / 小标签 | — |
| `rounded-lg` | 按钮 / 卡片 (8) | 小元素 |
| `rounded-xl` | 大卡片 / 面板 (12) | 按钮 |
| `rounded-2xl` | 仪式专属 (16) | 卡片 / 面板 |
| `rounded-3xl` | — | 大容器 / 落地区 |
| `rounded-full` | 头像 / 药丸标签 | 头像 / 药丸标签 |

---

## 6. 阴影尺标

稳态用中性阴影（不带颜色）；仪式模式允许彩色阴影（`shadow-amber-200/40` 等）。**稳态卡片用彩色阴影 = 越界，会被 ui-auditor 拦。**

| token | 用途 |
| --- | --- |
| `shadow-sm` | 输入框 / 轻悬浮 |
| `shadow-md` | 卡片默认 |
| `shadow-lg` | 悬浮卡片 / dropdown |
| `shadow-xl` | 模态 / 大面板 |
| `shadow-2xl` | 仪式玻璃面板 / 聚焦主体 |
| `shadow-blue-200` | 动作色聚焦阴影（仪式或强调态） |

---

## 7. 间距尺标

两套模式共享，**绝不另起一套**。纵向节奏用 `space-y-1` ~ `space-y-8` 全梯度。

间距保持 `gap-2` `gap-3` `gap-4` `gap-6` 不变。
内边距保持 `p-4` `p-5` `p-6` `p-8` `px-3 py-1.5` `px-4 py-2` 不变。
按钮内边距保持 `px-5 py-2.5` `px-6 py-4` `px-6 py-6` 不变。
外边距/纵向节奏保持 `mb-2` `mb-3` `mb-4` `mb-6` `mb-8` 不变；纵向堆叠用 `space-y-1` `space-y-2` `space-y-3` `space-y-4` `space-y-6` `space-y-8` 全梯度。

---

## 8. z-index 层级表

**z-index 必须落在本表内**，禁止 `z-99999` 这类任意值。说说场景，token-keeper 帮你定位。

```
z-10  → iframe-loader overlay
z-20  → toggle handle between IconSidebar and DetailSidebar
z-30  → IconSidebar
z-50  → detail-sidebar popover menu
z-[100]   → modal backdrop
z-[9999]  → portal tooltip
z-[10000] → fullscreen overlay
```

> 跨模式不变量口径（token-keeper）：scrim 40 · modal 50 · tooltip 60 · toast 70——上表为细化实现值，二者不冲突。

---

## 9. 动画时长

```
150ms   → micro hover (text color)
200ms   → element hover (scale, lift)
300ms   → modal open / close, sidebar collapse, page chrome
400ms   → page enter / step enter
500ms+  → tour-guide transitions
2s loop → shimmer skeleton
```

缓动曲线统一 `cubic-bezier(0.16, 1, 0.3, 1)`。

---

## 10. 全局 CSS 原子

保持 `index.css` 不变，以下工具类为系统级原子，不得擅改：

- 保持 `.custom-scrollbar` 不变。
- 保持 `.custom-scrollbar-dark` 不变。
- 保持 `.clip-path-hexagon` 不变。
- 保持 `.animate-*` 不变。
- 保持 `.onb-*` 不变（仪式模式动画 keyframes）。

---

## 11. 仪式模式装饰令牌

仪式模式（onboarding-director 专用）的暖色谱与玻璃效果。**稳态 agent 误用暖色 = 越界。**

### 暖色谱（仪式专属）

| 语义 | tailwind | HEX |
| --- | --- | --- |
| 仪式主光 | `amber-400` | `#fbbf24` |
| 仪式强调 | `amber-500` | `#f59e0b` |
| 仪式深底 | `amber-600` | `#d97706` |
| 仪式边框 | `amber-700` | `#b45309` |
| 暖玫红 | `rose-400` | `#fb7185` |
| 玫红 | `rose-500` | `#f43f5e` |
| 深玫红 | `rose-600` | `#e11d48` |
| 暖橙 | `orange-500` | `#f97316` |
| 深橙 | `orange-600` | `#ea580c` |

### 仪式渐变

| 用途 | 渐变 |
| --- | --- |
| 冷光开场 | `from-indigo-500 via-blue-500 to-cyan-500` |
| 生机铺底 | `from-emerald-500 via-teal-500 to-green-500` |
| 暖场高潮 | `from-amber-500 via-orange-500 to-rose-500` |

### 仪式玻璃（柔玻璃）

仪式模式的面板玻璃比稳态更柔更厚——`bg-white/70 backdrop-blur-2xl shadow-2xl shadow-amber-200/40`。稳态玻璃是 `bg-white/60 backdrop-blur-xl`（见 §2），**仪式不得用稳态玻璃，稳态不得用仪式玻璃**。

仪式模式允许打破稳态冷色谱约束——这是它的特权，也是它的边界（仅 onboarding-director）。

---

## 12. 仪式特效配方

仪式模式的标志性视觉配方，直接复用：

### 暖光底晕

```css
/* background warm glow */
background: radial-gradient(ellipse at center,
  rgba(255,251,235,0.92) 0%,
  rgba(255,247,237,0.55) 32%,
  rgba(255,255,255,0)    72%);

/* center spark */
background: radial-gradient(circle, #fff 0%, #fbbf24 40%, transparent 70%);
box-shadow: 0 0 50px 14px rgba(251,191,36,0.7);
```

### 产品名渐变文字

```tsx
<span className="bg-clip-text text-transparent" style={{
  backgroundImage: 'linear-gradient(135deg, #f59e0b 0%, #f43f5e 100%)',
}}><Product></Product></span>
```

### 仪式玻璃深阴影

```css
box-shadow:
  0 30px 80px -20px rgba(15,23,42,0.4),
  0 8px 24px  -8px  rgba(15,23,42,0.18);
```

---

## 13. Dark Mode 令牌（v1.0.1 新增）

> *亮色是默认，暗色是承诺——用户切到 dark，整系统必须不塌。*

dark mode 用 `prefers-color-scheme: dark` + Tailwind `dark:` 变体。**所有稳态令牌必须有 dark 对应**，仪式模式暂不强制 dark（仪式是首次入场，暗色优先级低）。

### 中性底色 dark 映射

| 亮色 | dark | 用途 |
| --- | --- | --- |
| `bg-white` | `dark:bg-slate-900` | 卡片/面板底 |
| `bg-slate-50` | `dark:bg-slate-950` | 页面背景 |
| `bg-gray-50/50` | `dark:bg-slate-800/50` | 次级底（footer/header） |
| `text-slate-800` | `dark:text-slate-100` | 正文 |
| `text-gray-600` | `dark:text-slate-300` | 次文字 |
| `text-gray-400` | `dark:text-slate-500` | 占位/禁用 |
| `border-gray-100` | `dark:border-slate-800` | 分割线 |
| `border-gray-200` | `dark:border-slate-700` | 卡片边框 |

### 语义色 dark 映射

语义色 dark 态用更亮的色阶（暗底需提亮保对比度，a11y-guardian 审 ≥4.5:1）：

| 语义 | 亮色 | dark |
| --- | --- | --- |
| 动作 | `text-blue-600` | `dark:text-blue-400` |
| 危险 | `text-red-600` | `dark:text-red-400` |
| 成功 | `text-emerald-600` | `dark:text-emerald-400` |
| 警告 | `text-amber-600` | `dark:text-amber-400` |
| 软底（动作） | `bg-blue-50` | `dark:bg-blue-950/40` |
| 软底（危险） | `bg-red-50` | `dark:bg-red-950/40` |

### 玻璃/阴影 dark

- 玻璃：`bg-white/60 backdrop-blur-xl` → `dark:bg-slate-900/60 backdrop-blur-xl`。
- 阴影：dark 态阴影减弱（`shadow-lg` → `shadow-lg dark:shadow-black/30`），暗底阴影本就不显。
- 模态遮罩：`bg-gray-900/40` → `dark:bg-black/60`（更黑保对比）。

### 切换机制

```css
/* index.css —— 跟随系统 */
@media (prefers-color-scheme: dark) {
  :root { color-scheme: dark; }
}

/* 或手动切换：在 <html> 加 class="dark" */
```

- 默认跟随系统（`prefers-color-scheme`）。
- 手动切换在 `<html>` 加 `dark` class（Tailwind `dark:` 前缀生效）。
- 用户偏好存 localStorage，与 ref 13 Tour 的版本化 key 同套路。

### dark 铁律

- **所有稳态界面必须 dark 适配**——亮色-only 视图触发 K 轨衰弱（见 demo case-2026-0622-001）。
- dark 文字对比度仍须 ≥ 4.5:1（a11y-guardian 审，ref 34 §④）。
- dark 态禁用纯黑 `bg-black`（用 `slate-900/950` 保层次）。
- 仪式模式（ref 02/03）暂不强制 dark，但不得在 dark 模式下塌（至少遮罩/文字可读）。
- `.custom-scrollbar-dark`（ref 01 §10）用于 dark 滚动条。

---

## 决策日志

token-keeper 批准的令牌变更追加于此（版本号随升）。

| 版本 | 变更 | 决策者 |
| --- | --- | --- |
| 1.0.0 | 初版令牌表：稳态冷色谱 7 色 + 中性 + 状态 + 字号/圆角/阴影/间距/z-index/动画 + 仪式暖色谱与特效配方 | token-keeper |
| 1.0.1 | 新增 §13 dark mode 令牌段（prefers-color-scheme + dark: 变体）——demo case-2026-0622-001 的"dark 适配衰弱整改"所引令牌落地 | token-keeper |
