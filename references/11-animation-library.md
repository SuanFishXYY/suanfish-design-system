---
ref: 11
title: 动画库 · 稳态工具类 + 仪式 keyframes
owner: animation-choreographer (动画编排) · token-keeper (时长令牌)
audited_by: ui-auditor
---

# 🎞 ref 11 · 动画库

> *动画不是装饰——是状态的可见性。*
>
> animation-choreographer 的动画规范。稳态工具类进 `src/index.css` 的 `@keyframes`，仪式 keyframes 进 `references/animation-keyframes.css`。禁内联 `<style>`（见 ref 14 反模式 10）。

## 1. 稳态动画工具类

8 个稳态工具类（`animate-*`），统一进 `src/index.css`：

| 工具类 | keyframe | 时长/缓动 | 用途 |
| --- | --- | --- | --- |
| `animate-fade-in` | `fadeIn` | `0.3s ease-out` | 通用淡入 |
| `animate-fade-in-up` | `fadeInUp` | `0.4s ease-out` | 视图入场（上滑淡入） |
| `animate-scale-in` | `scaleIn` | `0.3s cubic-bezier(0.16, 1, 0.3, 1)` | 模态/弹层缩放入场 |
| `animate-slide-up` | `slideUp` | `0.4s ease-out` | 底部上滑 |
| `animate-shimmer` | `shimmer` | `2s linear infinite` | 骨架屏微光 |
| `animate-flash-green` | `flashGreen` | `1s ease-out` | 成功反馈闪烁 |
| `animate-bubble-expand` | `bubbleExpand` | `0.3s cubic-bezier(...)` | 聊天气泡展开 |
| `animate-thinking-pulse` | `thinking-pulse` | `1.5s ease-in-out infinite` | AI 思考态脉冲 |

## 2. 时长令牌

| token | 用途 |
| --- | --- |
| `duration-150` | 微交互（文字色 hover） |
| `duration-200` | 元素 hover（scale/lift） |
| `duration-300` | 模态开关 / 侧栏折叠 / 页面 chrome |
| `duration-500` | tour-guide 等长过渡 |

## 3. 缓动令牌

| token | 用途 |
| --- | --- |
| `ease-in-out` | 对称过渡 |
| `ease-out` | 入场（快进慢出） |
| `cubic-bezier(0.16, 1, 0.3, 1)` | 系统主缓动（弹性入场） |

## 4. 应用场景

**模态开关**：backdrop `animate-fade-in` (300ms) + panel `animate-scale-in` (300ms) + `translate-y-0 from translate-y-4`。

**视图切换**：body wrapper 带 `key={activeView}`，触发 `animate-fade-in-up` (400ms)——key 变化强制重挂载重放动画。

**聊天气泡**：新消息气泡 `animate-bubble-expand` (300ms)。

**骨架屏**：`animate-shimmer` + 渐变背景造微光扫动：
```tsx
<div className="animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:1000px_100%] rounded-lg h-20" />
```

## 5. 仪式 keyframes（onboarding 专属）

仪式模式动画 keyframes 进 `references/animation-keyframes.css`，统一 `onb*` / `onboarding*` 前缀（稳态模式禁引用，ref 15 R-01）。含：
- `onbEureka*` / `onbWelcome*`：Eureka 欢迎 + 入场（ref 02）
- `onboardingPolaroid*` / `onboardingDot` / `onboardingBarFill`：拍立得/进度
- `onboardingConicSweep` / `onboardingScanRingExpand` / `onboardingBoxBlink`：扫描视觉
- `onboardingIrisPulse` / `onboardingOrbitA/B` / `onboardingToggleSwap`：虹膜/轨道/切换
- `onboardingEngineSwap` / `onboardingEngineWhiteLeft/Right`：翻译引擎滑动
- `onboardingDashFlow` / `onboardingPolaroidEnter`：虚线流动/拍立得入场
- `onboardingFloatSlow/Fast` / `onboardingSpinSlow`：浮动/慢转
- `onboardingPulseRing` / `onboardingGradientShift` / `onboardingShineSweep`：脉冲环/渐变/扫光
- `onboardingPopIn` / `onboardingSlideInRight/Left`：弹入/滑入
- `onboardingNumberFlip` / `onboardingTwinkle` / `onboardingDriftLR`：数字翻转/闪烁/漂移
- `onboardingProgressFill` / `onboardingRippleOut` / `onboardingGlowPulse`：进度/涟漪/辉光

## 6. 动画铁律

- **禁内联 `<style>` / `@keyframes`**：一律进 `index.css` 或 `animation-keyframes.css`（ref 14 反模式 10）。
- **禁 JS 手撸帧**：用 CSS 动画；确需 JS 用 `requestAnimationFrame`，不用 setInterval。
- **循环动画必须 `infinite` 显式声明**：`animation-iteration-count: infinite`。
- **入场动画用 `animate-*` 工具类**，不内联 style 重放。
- **重放动画用 `key={…}`**：key 变化触发重挂载重放，不手动操控 DOM。

## 7. 状态过渡（transition）

可见性过渡用 `transition-all duration-300` + transform/opacity：

```tsx
<div
  className="transition-all duration-300"
  style={{
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
    opacity: isVisible ? 1 : 0,
  }}
/>
```

## 8. 无障碍降级

仪式动画在 `prefers-reduced-motion: reduce` 下降级（进 `index.css`）：

```css
@media (prefers-reduced-motion: reduce) {
  .onb-eureka-particle,
  .onb-shimmer,
  .onb-halo,
  .onb-sweep { display: none !important; }

  .onbEurekaIn,
  .onboardingPolaroidEnter { animation-duration: 80ms !important; }
}
```

装饰性粒子/微光直接隐藏，必要入场动画缩到 80ms——既尊重偏好又不丢信息。仪式动画源码在 `src/features/onboarding/`，ui-auditor 据本节审动画合规。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版动画库：8 稳态工具类 + 时长/缓动令牌 + 场景 + 仪式 keyframes 清单 + 铁律 + 降级。对齐 animation-choreographer 依赖。 |
