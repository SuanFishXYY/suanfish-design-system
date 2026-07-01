---
ref: 33
title: 响应式断点 · 多屏适配规范
owner: responsive-strategist (响应式策略)
audited_by: ui-auditor
---

# 📱 ref 33 · 响应式断点

> *同一屏内容，三种设备，三种节奏。*
>
> responsive-strategist 主理多屏适配。算鱼主战场是桌面（1280px+），但须在平板（768~1279px）与移动（<768px）保持可用。哲学锚：赫拉克利特——人不能两次踏入同一屏幕。

## 1. 断点系统（Tailwind 标配）

| 名 | 起始宽度 | 设备 |
| --- | --- | --- |
| 默认 | 0px | 手机竖屏 |
| `sm:` | 640px | 大手机 / 小平板 |
| `md:` | 768px | 平板竖屏 |
| `lg:` | 1024px | 平板横屏 / 小笔记本 |
| `xl:` | 1280px | 桌面（**主战场**） |
| `2xl:` | 1536px | 大桌面 |

**绝不自定义断点**（如 `min-w-[1100px]`），除非走 `token-proposal` 流程经 token-keeper 批准。

## 2. 三栏外壳响应式（ref 04）

桌面（xl+）保持完整三栏；中等屏（lg）DetailSidebar 默认收起；小屏（< lg）变单栏 + 抽屉式 IconSidebar：

```tsx
<div className="h-screen flex overflow-hidden">
  {/* IconSidebar: 桌面常驻 / 移动抽屉 */}
  <IconSidebar className="hidden xl:flex" />
  <MobileDrawer className="xl:hidden" />

  {/* DetailSidebar: 桌面默认展开 / 平板默认收起 / 移动隐藏 */}
  <DetailSidebar
    defaultOpen={isDesktop}
    className="hidden md:flex" />

  {/* MainContent: 永远展开，占据剩余宽度 */}
  <MainContent className="flex-1" />
</div>
```

## 3. 模态响应式（ref 07）

| 桌面尺寸 | 移动表现 |
| --- | --- |
| `max-w-sm` ~ `max-w-md` | 居中 · 保留 padding |
| `max-w-lg` ~ `max-w-2xl` | 居中 · `mx-4` |
| `max-w-3xl` ~ `max-w-6xl` | **全屏化**（`inset-0`）· 顶栏带返回按钮 |
| 全屏 | 保持全屏 |

```tsx
<div className="fixed inset-0 sm:inset-auto sm:max-w-2xl
                sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
                bg-white sm:rounded-2xl">
  ...
</div>
```

移动端全屏 + 顶部返回栏，桌面端居中圆角。

## 4. 表格响应式（ref 10）

桌面：完整表格；平板：隐藏次要列；移动：变 **垂直卡片列表**：

```tsx
{/* 桌面 */}
<table className="hidden md:table">...</table>

{/* 移动 */}
<div className="md:hidden space-y-2">
  {rows.map(r => <Card key={r.id}>{...}</Card>)}
</div>
```

不直接强缩表格——改用「桌面表 + 移动卡片」双形态。

## 5. 字号缩放

| 元素 | 移动 | 平板 | 桌面 |
| --- | --- | --- | --- |
| 仪式 hero 标题 | `text-3xl` | `md:text-4xl` | `xl:text-5xl` |
| 稳态页头 | `text-lg` | `md:text-xl` | `xl:text-2xl` |
| 正文 | `text-sm` | `md:text-base` | `xl:text-base` |
| 表格内文字 | `text-xs` | `md:text-sm` | `xl:text-sm` |

字号走 ref 01 §4 令牌，跨断点用响应式前缀叠加（如 `text-3xl md:text-4xl xl:text-5xl`）。

## 6. 触控目标

移动端最小可点击区域 **44 × 44 px**（iOS HIG / Material 标准）：

```tsx
<button className="p-2 md:p-1">  {/* 移动端 padding 大 */}
  <Icon className="w-5 h-5" />
</button>
```

桌面端可收窄 padding（`md:p-1`），移动端放大（`p-2`）保触控区。

## 7. 移动端视口陷阱

| 反模式 | 问题 | 替代 |
| --- | --- | --- |
| `100vh` | 移动浏览器地址栏占空间 | `100dvh` |
| `user-scalable=no` | 违反可访问性 | 允许缩放（与 a11y-guardian 联合驳回） |
| 固定 px 宽度 | 无法适配 | `%` / `rem` / 响应式断点 |
| 自定义断点 | 破坏一致性 | 标准 `sm/md/lg/xl/2xl` |

## 8. 响应式 SPEC 模板

```markdown
## 📱 响应式 SPEC —— <界面名>

**断点行为**:
| 断点 | 布局 | 关键差异 |
| --- | --- | --- |
| < md (768) | 单栏 + 抽屉 | IconSidebar 抽屉、DetailSidebar 隐藏 |
| md ~ lg | 双栏 | DetailSidebar 收起 |
| xl+ | 三栏 | 全形态 |

**模态尺寸响应**:
- 桌面: max-w-3xl 居中
- 移动: 全屏 inset-0 + 顶部返回栏

**触控目标**:
- 主按钮: min-h-[44px]
- 图标按钮: p-2 (移动) / p-1 (桌面)

**字号梯度**:
- hero: text-3xl md:text-4xl xl:text-5xl
- body: text-sm md:text-base
```

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版响应式断点：断点系统 + 三栏/模态/表格响应式 + 字号缩放 + 触控目标 + 视口陷阱 + SPEC 模板。对齐 responsive-strategist 依赖。 |
