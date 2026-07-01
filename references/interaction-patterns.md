---
ref: interaction-patterns
title: 仪式模式交互模式 · 12 段
owner: onboarding-director (交互编排)
audited_by: ui-auditor
---

# 🖱 ref · 仪式模式交互模式

> *仪式模式的 12 段交互配方——视差、键盘、滚轮、拖拽、自动播放、完成庆祝。*
>
> onboarding-director 的交互实现规范。与 component-patterns 配合。

## 1. 鼠标视差

HeroStage 跟随鼠标偏移（-0.5~0.5）：

```tsx
const [parallax, setParallax] = useState({ x: 0, y: 0 });
const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setParallax({
      x: (e.clientX - cx) / rect.width,   // [-0.5, 0.5]
      y: (e.clientY - cy) / rect.height,
    });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);
```

应用（各 Stage 幅度不同，见 ref 03）：
```tsx
<div style={{ transform: `translate(${parallax.x * 8}px, ${parallax.y * 8}px)` }}>
```

## 2. 键盘导航

`← →` 切换、`Esc` 关闭：

```tsx
useEffect(() => {
  if (!isOpen) return;
  const handler = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') { setAutoplay(false); goNext(); }
    else if (e.key === 'ArrowLeft') { setAutoplay(false); goPrev(); }
    else if (e.key === 'Escape') { onClose(); }
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, [isOpen, stepIndex]);
```

与 §8 键盘提示（`← → 切换`）呼应。

## 3. 滚轮切换

滚轮切步，700ms 节流防连触：

```tsx
const wheelLock = useRef(false);
useEffect(() => {
  if (!isOpen) return;
  const onWheel = (e: WheelEvent) => {
    if (wheelLock.current) return;
    wheelLock.current = true;
    setTimeout(() => { wheelLock.current = false; }, 700);
    setAutoplay(false);
    if (e.deltaY > 30) goNext();
    else if (e.deltaY < -30) goPrev();
  };
  window.addEventListener('wheel', onWheel, { passive: true });
  return () => window.removeEventListener('wheel', onWheel);
}, [isOpen, stepIndex]);
```

## 4. 拖拽切换

水平拖拽 >60px 切步：

```tsx
const dragStartX = useRef<number | null>(null);

const onPointerDown = (e: React.PointerEvent) => {
  dragStartX.current = e.clientX;
};
const onPointerUp = (e: React.PointerEvent) => {
  if (dragStartX.current === null) return;
  const dx = e.clientX - dragStartX.current;
  if (Math.abs(dx) > 60) {
    setAutoplay(false);
    if (dx < 0) goNext();
    else goPrev();
  }
  dragStartX.current = null;
};
```

挂载：
```tsx
<div onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
```

## 5. 自动播放

6s 自动下一步，带进度条；任意手动操作 `setAutoplay(false)` 停止：

```tsx
const [autoplay, setAutoplay] = useState(true);
const [autoplayProgress, setAutoplayProgress] = useState(0);
const AUTOPLAY_MS = 6000;

useEffect(() => {
  if (!autoplay || !isOpen || isLast) return;
  setAutoplayProgress(0);
  const start = Date.now();
  const tick = setInterval(() => {
    const elapsed = Date.now() - start;
    setAutoplayProgress(Math.min(elapsed / AUTOPLAY_MS, 1));
    if (elapsed >= AUTOPLAY_MS) {
      goNext();
    }
  }, 50);
  return () => clearInterval(tick);
}, [autoplay, isOpen, stepIndex, isLast]);
```

进度条：
```tsx
{autoplay && <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${step.accent.gradient}`} style={{ width: `${autoplayProgress * 100}%` }} />}
```

## 6. 方向感知切换

记录方向，配 `onb-slide-${direction}` 做左/右滑入场：

```tsx
const [direction, setDirection] = useState<'next' | 'prev'>('next');

const goTo = (idx: number, dir: 'next' | 'prev' = 'next') => {
  setDirection(dir);
  setStepIndex(idx);
  visited.current.add(idx);
};
const goNext = () => isLast ? handleFinish() : goTo(stepIndex + 1, 'next');
const goPrev = () => !isFirst && goTo(stepIndex - 1, 'prev');
```

切换容器带 `key={stepIndex}` 重挂载 + 方向 class：
```tsx
<div key={stepIndex} className={`onb-slide-${direction}`}>...</div>
```

## 7. visited 跟踪

记录已访问步骤（Footer 步骤点用 done 态）：

```tsx
const visited = useRef<Set<number>>(new Set([0]));
```

## 8. 完成庆祝（彩带 + Eureka）

最后一步触发彩带 + Welcome 灵光动画，2.8s 后关闭：

```tsx
const handleFinish = () => {
  if (dontShow) onDontShowAgain?.();

  // 触发礼花
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: ['#f59e0b','#f43f5e','#fbbf24','#fb7185'][i % 4],
    delay: Math.random() * 600,
  }));
  setConfetti(pieces);

  // 触发 Welcome 灵光动画
  setWelcomeAnim(true);
  setTimeout(() => setConfetti([]), 900);
  setTimeout(() => {
    setWelcomeAnim(false);
    onClose();
  }, 2800);
};
```

时序：彩带 900ms 清除，Eureka 2800ms 后关模态（与 ref 02 Eureka 2.8s 时长一致）。

## 9. 关闭（Esc + 遮罩点击）

Esc 见 §2，遮罩 `onClick={onClose}`：
```tsx
<div className="..." onClick={onClose} />
```

## 10. SSR 安全

localStorage 访问前判 window：
```tsx
if (typeof window === 'undefined') return;
```

## 11. 关闭按钮

右上角圆形玻璃按钮，hover 旋转 90°：

```tsx
<button
  onClick={onClose}
  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 hover:rotate-90 flex items-center justify-center text-white transition-all"
  aria-label="关闭"
>
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3 L13 13 M13 3 L3 13" />
  </svg>
</button>
```

`aria-label` 保 a11y。

## 12. z-index 层级（仪式模态内）

| 元素 | z-index |
| --- | --- |
| 遮罩 / 模态主体 | `z-50` |
| 关闭按钮 | `z-20`（模态内部） |
| 彩带 | `z-30`（模态内部） |
| WelcomeOverlay | `z-[60]` |
| 步骤点 tooltip | `z-40`（模态内部） |

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版仪式交互模式：12 段（视差/键盘/滚轮/拖拽/自动播放/方向/visited/完成/关闭/SSR/关闭按钮/z-index）。对齐 onboarding-director 依赖。 |
