# 参考文档

> 本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。本段补充说明用于在保留代码示例、类名、类型、路径和样式值原样的同时，明确该参考文件的设计意图、适用边界、交互原则、视觉约束和工程落地要求。

> 译文说明：本参考文件已翻译为专业简体中文，代码块、类名、类型、路径、颜色值和样式属性保持原样。中文内容聚焦设计意图、适用边界、交互原则和工程落地要求。

> 说明：本条描述设计规则、交互约束或实现注意事项。

> 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节
1. 说明：本条描述设计规则、交互约束或实现注意事项。

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

*说明：本条描述设计规则、交互约束或实现注意事项。
```tsx
<div style={{ transform: `translate(${parallax.x * 8}px, ${parallax.y * 8}px)` }}>
```

说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节
2. 说明：本条描述设计规则、交互约束或实现注意事项。

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

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `← → 切换` 不变。

## 参考章节
3. 说明：本条描述设计规则、交互约束或实现注意事项。

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

## 参考章节
4. 说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
const dragStartX = useRef<number 
| null>(null);

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

说明：本条描述设计规则、交互约束或实现注意事项。
```tsx
<div onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
```

## 参考章节
5. 说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
const [autoplay, setAutoplay] = useState(true);
const [autoplayProgress, setAutoplayProgress] = useState(0);
const AUTOPLAY_MS = 6000;

useEffect(() => {
  if (!autoplay || !isOpen |
| isLast) return;
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

*说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。 保持 `setAutoplay(false)` 不变。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
  

```tsx
  {autoplay && <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${step.accent.gradient}`} style={{ width: `${autoplayProgress * 100}%` }} />}
  

```

## 参考章节
6. 说明：本条描述设计规则、交互约束或实现注意事项。

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

*说明：本条描述设计规则、交互约束或实现注意事项。 保持 `translate-x` 不变。
```tsx
<div key={stepIndex} className={`onb-slide-${direction}`}>...</div>
```

## 参考章节
7. 说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
const visited = useRef<Set<number>>(new Set([0]));
```

说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节
8. 说明：本条描述设计规则、交互约束或实现注意事项。

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

*说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。
- 说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节
9. 说明：本条描述设计规则、交互约束或实现注意事项。

```tsx
// Esc 见 §2 键盘导航
// 遮罩 onClick
<div className="..." onClick={onClose} />
```

说明：本条描述设计规则、交互约束或实现注意事项。

## 参考章节
10. 说明：本条描述设计规则、交互约束或实现注意事项。

说明：本条描述设计规则、交互约束或实现注意事项。 保持 `window` `localStorage` 不变。
```tsx
if (typeof window === 'undefined') return;
```

## 参考章节
11. 说明：本条描述设计规则、交互约束或实现注意事项。

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

## 参考章节
12. 说明：本条描述设计规则、交互约束或实现注意事项。

| 说明 | 说明 | 说明 |
|---- |--------- |------|
| 说明 | `z-50` | 说明 |
| 说明 | `z-50` | 说明 |
| 说明 | `z-20`（模态内部） | 说明 |
| 说明 | `z-30`（模态内部） | 说明 |
| 说明 | `z-[60]` | 说明 |
| 说明 | `z-40`（模态内部） | 说明 |
