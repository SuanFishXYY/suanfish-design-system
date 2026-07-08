---
ref: component-patterns
title: 仪式模式组件模式 · 11 段
owner: onboarding-director (组件编排)
audited_by: ui-auditor
---

# 🧩 ref · 仪式模式组件模式

> *仪式模式的 11 段组件配方——把 HeroStage + 文案 + 交互缝成完整引导。*
>
> onboarding-director 的组件实现规范。与 ref 02/03/steps-schema 配合使用。仪式暖色谱。

## 1. 模态骨架

固定 720 高（不自适应），左 Hero 45% + 右内容 55%，welcomeAnim 时同步淡出：

```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
  {/* 黑色遮罩（welcomeAnim 时同步淡出） */}
  <div
    className={`fixed inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/75 to-indigo-950/80 backdrop-blur-md transition-opacity duration-500 ${
      welcomeAnim ? 'opacity-0' : isOpen ? 'opacity-100' : 'opacity-0'
    }`}
    onClick={onClose}
  />

  {/* 模态主体 */}
  <div
    className={`pointer-events-auto relative w-full max-w-5xl bg-white rounded-[28px]
      shadow-[0_30px_80px_-20px_rgba(15,23,42,0.4),0_8px_24px_-8px_rgba(15,23,42,0.18)]
      ring-1 ring-slate-900/5 overflow-hidden
      transition-all duration-500 ease-out
      flex flex-col md:flex-row ${
        welcomeAnim
          ? 'opacity-0 scale-95'
          : isOpen
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      }`}
    style={{ height: 720 }}   // ⚠️ 固定 720，不允许自适应
  >
    {/* 左 Hero 45% */}
    <div className="relative md:w-[45%] ...">
      {stepIndex === 0 && <HeroStageImagine parallax={parallax} />}
      {stepIndex === 1 && <HeroStageVision   parallax={parallax} />}
      {stepIndex === 2 && <HeroStageTranslate parallax={parallax} />}
    </div>

    {/* 右内容 55% */}
    <div className="flex-1 flex flex-col">
      {/* WHAT'S NEW + 标题 + 描述 + 高亮卡 */}
      {/* Footer 见 §4 */}
    </div>

    {welcomeAnim && <WelcomeOverlay />}
  </div>
</div>
```

z 层：遮罩 `z-50`，WelcomeOverlay `z-[60]`。容器 `pointer-events-none`，主体 `pointer-events-auto`（遮罩可点关、主体可交互）。高度固定 720，welcomeAnim 触发 `scale-95 + opacity-0` 退场。

## 2. WHAT'S NEW 头部

深色 pill + 倾斜 sticker + STEP 计数：

```tsx
<div className="flex items-center gap-3 mb-2">
  {/* 深色 pill */}
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold tracking-[0.18em]">
    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
    WHAT'S NEW
  </span>

  {/* 倾斜的 V·xxx sticker */}
  <span className="inline-block px-2 py-0.5 -rotate-3 rounded-md bg-gradient-to-br from-amber-400 to-rose-500 text-white text-[10px] font-black tracking-wider shadow-md">
    V · 多模态
  </span>

  {/* 大号 STEP 0X/03 */}
  <span className="ml-auto text-[11px] font-black text-slate-400 tracking-widest">
    STEP {String(stepIndex + 1).padStart(2, '0')}/03
  </span>
</div>
```

## 3. HighlightCard（高亮卡）

渐变 icon 圆 + 标题 + tag + 描述，hover 上浮 + icon 旋转：

```tsx
const HighlightCard: React.FC<HighlightCardProps> = ({ highlight, delay, accent, index }) => {
  return (
    <div
      className={`group relative flex items-start gap-3 p-3 rounded-xl bg-white
        ring-1 ${accent.ringColor} hover:ring-2 transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-lg
        opacity-0 onb-pop-in`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      {/* 左侧 icon — 渐变背景圆 */}
      <div className={`relative flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br ${accent.gradient} flex items-center justify-center shadow-sm`}>
        <div className="text-white">{highlight.icon}</div>
        {/* hover 旋转 */}
        <div className="absolute inset-0 rounded-lg group-hover:rotate-12 transition-transform" />
      </div>

      {/* 内容 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-sm font-bold text-slate-900">{highlight.title}</span>
          <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${accent.chip} ${accent.chipText} tracking-wider`}>
            {highlight.tag}
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-snug">{highlight.desc}</p>
      </div>
    </div>
  );
};
```

渲染（错峰入场 `300 + idx*130`）：

```tsx
{step.highlights.map((h, idx) => (
  <HighlightCard
    key={`hc-${stepIndex}-${idx}`}
    highlight={h}
    delay={300 + idx * 130}
    accent={step.accent}
    index={idx}
  />
))}
```

## 4. Footer（步骤点 + 按钮）

左步骤指示点（可点跳转 + hover tooltip）+ 右（不再显示 + 上一步 + 下一步）：

```tsx
<div className="px-8 md:px-12 py-5 bg-gradient-to-b from-white to-slate-50/80 border-t border-slate-100/80 flex items-center justify-between gap-4 flex-nowrap">

  {/* 左侧：步骤指示点 + 计数 */}
  <div className="flex items-center space-x-2 leading-none">
    {STEPS.map((s, i) => {
      const active = i === stepIndex;
      const done = visited.current.has(i) && i !== stepIndex;
      return (
        <div key={i} className="relative flex items-center">
          <button
            onClick={() => { setAutoplay(false); goTo(i, i > stepIndex ? 'next' : 'prev'); }}
            onMouseEnter={() => setHoverDot(i)}
            onMouseLeave={() => setHoverDot(null)}
            className={`relative block h-2 rounded-full align-middle transition-all duration-300 ${
              active ? `w-5 bg-gradient-to-r ${s.accent.gradient}`
              : done   ? 'w-2 bg-slate-400 hover:bg-slate-600'
                       : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          >
            {active && <span className="absolute inset-0 rounded-full bg-white/30 onb-pulse-ring" />}
          </button>
          {/* hover tooltip */}
          {hoverDot === i && <Tooltip text={s.title} />}
        </div>
      );
    })}
    <span className="ml-2 text-xs text-slate-500 font-medium">
      {stepIndex + 1} / {STEPS.length}
    </span>
  </div>

  {/* 右侧：不再显示 + 上一步 + 下一步/开始体验 */}
  <div className="flex items-center gap-3 flex-shrink-0">
    {isLast && <DontShowCheckbox value={dontShow} onChange={setDontShow} />}
    <PrevButton disabled={isFirst} onClick={goPrev} />
    <NextButton isLast={isLast} accent={step.accent} onClick={goNext} />
  </div>
</div>
```

## 5. 不再显示 checkbox

渐变勾选框，`aria-pressed` 保 a11y：

```tsx
<button
  type="button"
  onClick={() => setDontShow(v => !v)}
  className={`group inline-flex items-center gap-2 text-xs font-medium select-none transition-colors ${
    dontShow ? 'text-slate-700' : 'text-slate-400 hover:text-slate-600'
  }`}
  aria-pressed={dontShow}
>
  <span
    className={`relative inline-flex w-4 h-4 rounded-[5px] border transition-all ${
      dontShow
        ? 'bg-gradient-to-br from-amber-400 to-rose-500 border-transparent shadow-[0_2px_8px_rgba(244,63,94,0.35)]'
        : 'bg-white border-slate-300 group-hover:border-slate-400'
    }`}
  >
    {dontShow && (
      <svg viewBox="0 0 16 16" className="absolute inset-0 m-auto w-3 h-3 text-white"
        fill="none" stroke="currentColor" strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8.5 L7 12 L13 4" />
      </svg>
    )}
  </span>
  不再显示
</button>
```

## 6. 下一步 / 开始体验按钮

渐变按钮 + 白光斑扫光，isLast 变"开始体验"+ CheckIcon：

```tsx
<button
  type="button"
  onClick={goNext}
  className={`group relative inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white rounded-lg shadow-md hover:shadow-xl
    bg-gradient-to-r ${step.accent.gradient} onb-gradient-shift
    hover:translate-x-0.5 transition-all overflow-hidden`}
>
  {/* Shine sweep 白光斑 */}
  <span className="absolute inset-y-0 -left-1/2 w-1/3 bg-white/30 blur-md onb-shine-sweep" />
  {isLast ? (
    <>
      <CheckIcon className="w-4 h-4 mr-1.5" />
      <span className="relative">开始体验</span>
    </>
  ) : (
    <>
      <span className="relative">下一步</span>
      <ArrowRightIcon className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
    </>
  )}
</button>
```

## 7. 步骤点 tooltip

```tsx
{hoverDot === i && (
  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-md bg-slate-900 text-white text-[11px] whitespace-nowrap shadow-lg onb-pop-in pointer-events-none">
    {s.title}
    <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-900" />
  </div>
)}
```

## 8. 键盘提示

```tsx
<div className="absolute bottom-[96px] right-10 md:right-14 hidden md:flex items-center gap-1.5 text-[10px] text-slate-400 pointer-events-none select-none">
  <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">←</kbd>
  <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">→</kbd>
  <span>切换</span>
</div>
```

## 9. 彩带（完成庆祝）

```tsx
{confetti.length > 0 && (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-30">
    {confetti.map(c => (
      <span
        key={c.id}
        className="absolute top-0 w-2 h-3 rounded-sm"
        style={{
          left: `${c.left}%`,
          backgroundColor: c.color,
          animation: `onboardingFloatSlow 0.9s ease-in forwards`,
          animationDelay: `${c.delay}ms`,
          transform: 'translateY(-20px) rotate(0deg)',
          boxShadow: `0 0 6px ${c.color}`,
        }}
      />
    ))}
  </div>
)}
```

彩带生成（30 片，暖色 4 色循环）：
```tsx
const pieces = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  color: ['#f59e0b','#f43f5e','#fbbf24','#fb7185'][i % 4],
  delay: Math.random() * 600,
}));
```

## 10. Polaroid 双层结构

外层一次性入场（`onb-polaroid-enter` + `both/forwards`），内层无限浮动（`onb-polaroid-${phase}`）：

```tsx
{/* 外层：一次性 enter，必配 both/forwards */}
<div
  className="absolute onb-polaroid-enter"
  style={{ '--rot': `${rot}deg`, top, left, animationDelay: `${delay}ms` } as React.CSSProperties}
>
  {/* 内层：无限浮动 */}
  <div className={`onb-polaroid-${phase}`} style={{ width: 195, height: 220 }}>
    <div className="bg-white rounded-lg p-2 shadow-2xl ring-1 ring-black/5">
      <div className="rounded-md overflow-hidden" style={{ width: 165, height: 165 }}>
        <img src={src} className="w-full h-full object-cover" />
      </div>
      <p className="text-center text-[10px] text-slate-600 mt-1.5 font-medium">{caption}</p>
    </div>
  </div>
</div>
```

入场与浮动分两层——避免入场动画结束后浮动不触发。

## 11. localStorage 持久化（不再显示）

版本化 dismiss key，升级版本即重显：

```tsx
// 顶部常量
const ONBOARDING_VERSION = 'v1.2-multimodal';
const ONBOARDING_DISMISS_KEY = `onboarding_dismissed_${ONBOARDING_VERSION}`;

// state
const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

// 启动检查
useEffect(() => {
  if (typeof window === 'undefined') return;
  if (window.localStorage.getItem(ONBOARDING_DISMISS_KEY) !== '1') {
    setIsOnboardingOpen(true);
  }
}, []);

// 永久关闭
const handleDismissOnboardingForever = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(ONBOARDING_DISMISS_KEY, '1');
  }
  setIsOnboardingOpen(false);
};

// 渲染
<OnboardingModal
  isOpen={isOnboardingOpen}
  onClose={() => setIsOnboardingOpen(false)}
  onDontShowAgain={handleDismissOnboardingForever}
/>
```

key 带版本号——发布新 onboarding 时升 `ONBOARDING_VERSION`，已 dismiss 的用户重新看到。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版仪式组件模式：11 段（骨架/头部/高亮卡/Footer/checkbox/按钮/tooltip/键盘/彩带/polaroid/持久化）。对齐 onboarding-director 依赖。 |
