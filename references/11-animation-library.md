# 参考文档

> 译文说明：本参考文件已翻译为专业简体中文，代码块、类名、类型、路径、颜色值和样式属性保持原样。中文内容聚焦设计意图、适用边界、交互原则和工程落地要求。

> 说明：本条描述设计规则、交互约束或实现注意事项。

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `src/index.css` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `@keyframes` 不变。

## 参考章节

| 说明 | 说明 | 说明 | 说明                              |
| ----------------------- | ---------------- | ------------------------------------- | ------------------------------------- |
| `animate-fade-in` | `fadeIn` | `0.3s ease-out` | 说明     |
| `animate-fade-in-up` | `fadeInUp` | `0.4s ease-out` | 说明        |
| `animate-scale-in` | `scaleIn` | `0.3s cubic-bezier(0.16, 1, 0.3, 1)` | 说明          |
| `animate-slide-up` | `slideUp` | `0.4s ease-out` | 说明                        |
| `animate-shimmer` | `shimmer` | `2s linear infinite` | 说明                      |
| `animate-flash-green` | `flashGreen` | `1s ease-out` | 说明                    |
| `animate-bubble-expand` | `bubbleExpand` | `0.3s cubic-bezier(...)` | 说明                    |
| `animate-thinking-pulse` | `thinking-pulse` | `1.5s ease-in-out infinite` | 说明 |

## 参考章节

| 说明 | 说明                                            |
| ------------------ | ----------------------------------------------- |
| `duration-150` | 说明                 |
| `duration-200` | 说明           |
| `duration-300` | 说明    |
| `duration-500` | 说明 |

## 参考章节

| 说明 | 说明                              |
| ------------------------------------------ | -------------------------------- |
| `ease-in-out` | 说明                    |
| `ease-out` | 说明              |
| `cubic-bezier(0.16, 1, 0.3, 1)` | 说明 |

## 参考章节

#参考文档

## 参考章节
```
backdrop: animate-fade-in (300ms)
panel:    animate-scale-in (300ms) + translate-y-0 from translate-y-4
```

#参考文档

## 参考章节
```
body wrapper has key={activeView}, applies animate-fade-in-up (400ms)
```

#参考文档

## 参考章节
```
the message bubble has animate-bubble-expand (300ms)
```

#参考文档

## 参考章节
```
<div className="animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:1000px_100%] rounded-lg h-20" />
```

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onbEureka*` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onbWelcome*` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingPolaroid*` `onboardingDot` `onboardingBarFill` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingConicSweep` `onboardingScanRingExpand` `onboardingBoxBlink` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingIrisPulse` `onboardingOrbitA/B` `onboardingToggleSwap` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingEngineSwap` `onboardingEngineWhiteLeft/Right` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingDashFlow` `onboardingPolaroidEnter` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingFloatSlow/Fast` `onboardingSpinSlow` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingPulseRing` `onboardingGradientShift` `onboardingShineSweep` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingPopIn` `onboardingSlideInRight/Left` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingNumberFlip` `onboardingTwinkle` `onboardingDriftLR` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `onboardingProgressFill` `onboardingRippleOut` `onboardingGlowPulse` 不变。

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节

- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `<style>` `@keyframes` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `requestAnimationFrame` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `animation-iteration-count: infinite` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `animate-*` 不变。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `key={…}` 不变。

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
<div
  className="transition-all duration-300"
  style={{
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
    opacity: isVisible ? 1 : 0,
  }}
/>
```

说明：本条描述设计规则、交互约束或实现注意事项。
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `index.css` 不变。


---

## 参考章节

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `references/animation-keyframes.css` 不变。

#参考文档

## 参考章节
| 说明 | 说明 | 说明 |
| --- | --- | --- |
| `onbEurekaIn` | 说明 | 说明 |
| `onbEurekaParticle` | 说明 | 说明 |
| `onboardingPolaroidEnter` | 说明 | 说明 |
| `onbShimmer` | 说明 | 说明 |
| `onbHaloPulse` | 说明 | 说明 |
| `onbSweep` | 说明 | 说明 |
| `onbSparkTwinkle` | 说明 | 说明 |

#参考文档

## 参考章节
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

#参考文档

## 参考章节
说明：本条描述设计规则、交互约束或实现注意事项。 保持 `src/features/onboarding/` `ui-auditor` 不变。
