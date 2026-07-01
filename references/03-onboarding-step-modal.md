---
ref: 03
title: 仪式步骤模态 · HeroStage 主视觉舞台
owner: onboarding-director (步骤编排) · animation-choreographer (动效) · copy-writer (步骤文案)
audited_by: ui-auditor
---

# 🎬 ref 03 · 仪式步骤模态 · HeroStage

> *每步一个主视觉舞台——把功能介绍演成一场戏。*
>
> onboarding-director 的步骤标题/主视觉文案模式（copy-writer 据此出步骤文案）。仪式模式暖色谱（ref 01 §11）。每个 HeroStage 300×300，带视差。

## 0. 视差接口

所有 HeroStage 接收视差参数（鼠标/陀螺仪驱动，-0.5~0.5）：

```tsx
interface StageProps {
  parallax: { x: number; y: number };  // -0.5 ~ 0.5
}
```

视差幅度按舞台类型递减（Imagine 12px / Vision 10px / Translate 8px），近景动得多、远景动得少，造层次。

---

## 1. HeroStageImagine · 想象（拍立得 + 扫描）

3 张拍立得 + 扫描光线 + 提示词浮签 + 进度条。演示"AI 想象"过程：

```tsx
const HeroStageImagine: React.FC<StageProps> = ({ parallax }) => (
  <div className="relative w-[300px] h-[300px]" style={{ transform: `translate(${parallax.x * 12}px, ${parallax.y * 12}px)` }}>
    {/* 3 张拍立得 — 用 §10 双层结构 */}
    <Polaroid src="..." top="10%" left="50%" rot={-5} delay={200} phase="a" size="lg" caption="cyberpunk skyline" />
    <Polaroid src="..." top="55%" left="10%" rot={6}  delay={400} phase="b" />
    <Polaroid src="..." top="45%" left="78%" rot={-3} delay={600} phase="c" />

    {/* 扫描光线 */}
    <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent onb-scan-line" />

    {/* 提示词浮签 */}
    <div className="absolute top-2 left-2 bg-white/95 rounded-lg px-2 py-1 shadow-lg text-[10px] font-mono text-slate-600 onb-float-fast">
      prompt: "cyberpunk skyline"
    </div>

    {/* 进度条 */}
    <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-amber-400 to-rose-500 onb-progress-bar" />
    </div>
  </div>
);
```

## 2. HeroStageVision · 视觉（同心扫描环 + 检测框）

同心扫描环 + 中心被扫描图标 + 检测框 + 像素网格 + VISION OK 标签。演示"AI 视觉识别"：

```tsx
const HeroStageVision: React.FC<StageProps> = ({ parallax }) => (
  <div className="relative w-[300px] h-[300px]" style={{ transform: `translate(${parallax.x * 10}px, ${parallax.y * 10}px)` }}>
    {/* 同心扫描环 */}
    <svg className="absolute inset-0" viewBox="0 0 300 300">
      <circle cx="150" cy="150" r="80"  fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 4" className="onb-dash-flow" />
      <circle cx="150" cy="150" r="40"  fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
    </svg>

    {/* 中心被扫描的图标 */}
    <div className="absolute inset-0 flex items-center justify-center">
      <EyeIcon className="w-16 h-16 text-white drop-shadow-lg" />
    </div>

    {/* 检测框 — 用 SVG rect 配 onb-detect-pulse */}
    <svg className="absolute inset-0" viewBox="0 0 300 300">
      <rect x="100" y="100" width="100" height="100" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4 4" className="onb-detect-box" />
    </svg>

    {/* 像素网格淡背景 */}
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    }} />

    {/* 扫描标签 */}
    <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
      VISION OK
    </div>
  </div>
);
```

## 3. HeroStageTranslate · 翻译（多语环绕 + 引擎卡）

6 语言气泡环绕中心翻译引擎卡（Engine A ⇄ Engine B 滑动 + 术语库/知识库）。演示"多语翻译"：

```tsx
const HeroStageTranslate: React.FC<StageProps> = ({ parallax }) => {
  const langs = [
    { txt: '中', color: 'text-amber-600',  pos: { top: '14%', left: '50%' }, delay: '0.2s' },
    { txt: 'EN', color: 'text-rose-600',   pos: { top: '50%', left: '86%' }, delay: '0.5s' },
    { txt: 'JP', color: 'text-orange-600', pos: { top: '84%', left: '62%' }, delay: '0.8s' },
    { txt: 'KR', color: 'text-pink-600',   pos: { top: '78%', left: '20%' }, delay: '1.1s' },
    { txt: 'DE', color: 'text-violet-600', pos: { top: '32%', left: '8%'  }, delay: '1.4s' },
    { txt: 'FR', color: 'text-sky-600',    pos: { top: '8%',  left: '22%' }, delay: '1.7s' },
  ];
  return (
    <div className="relative w-[300px] h-[300px]" style={{ transform: `translate(${parallax.x * 8}px, ${parallax.y * 8}px)` }}>
      <svg className="absolute inset-0 m-auto" width="280" height="280" viewBox="0 0 280 280">
        <circle cx="140" cy="140" r="120" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="140" cy="140" r="90"  fill="none" stroke="rgba(255,255,255,0.4)"  strokeWidth="2"   strokeDasharray="8 6" className="onb-dash-flow" />
      </svg>

      {langs.map((l, i) => (
        <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2 onb-pop-in"
          style={{ ...l.pos, animationDelay: l.delay, animationFillMode: 'both' }}>
          <div className="relative w-10 h-10 rounded-full bg-white shadow-xl ring-2 ring-white/40 flex items-center justify-center onb-float-xy"
            style={{ animationDelay: `${-i * 0.4}s` }}>
            <span className={`${l.color} font-bold text-sm`}>{l.txt}</span>
            <span className="absolute inset-0 rounded-full ring-2 ring-white/30 onb-pulse-ring" style={{ animationDelay: l.delay }} />
          </div>
        </div>
      ))}

      {/* 中心引擎卡 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[186px] bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-3.5 ring-1 ring-black/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-amber-600 tracking-wider">TRANSLATE ENGINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          {/* Engine A ⇄ Engine B 滑动指示器 */}
          <div className="relative w-full h-10 bg-slate-100 rounded-full">
            <div className="absolute top-1 h-8 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 shadow-[0_4px_12px_-2px_rgba(244,114,89,0.55)] onb-engine-swap"
              style={{ width: '48%' }} />
            <div className="relative h-full grid grid-cols-2 z-10">
              <div className="relative flex items-center justify-center">
                <span className="text-[11px] font-extrabold text-slate-600 tracking-wide"><Product></span>
                <span className="absolute text-[11px] font-extrabold text-white tracking-wide onb-engine-white-l"><Product></span>
              </div>
              <div className="relative flex items-center justify-center">
                <span className="text-[11px] font-extrabold text-slate-600 tracking-wide">Engine B</span>
                <span className="absolute text-[11px] font-extrabold text-white tracking-wide onb-engine-white-r">Engine B</span>
              </div>
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400/50 select-none pointer-events-none z-20">⇄</span>
          </div>
          {/* 翻译场景 */}
          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            <div className="text-center py-1 rounded-md bg-amber-50 text-[10px] font-semibold text-amber-700">业务模块 A</div>
            <div className="text-center py-1 rounded-md bg-amber-50 text-[10px] font-semibold text-amber-700">业务模块 B</div>
          </div>
          {/* 术语库 / 知识库（不写数字！） */}
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <div className="relative flex items-center gap-2 px-2.5 py-2 rounded-lg bg-gradient-to-br from-rose-50 via-rose-100/60 to-amber-50 ring-1 ring-rose-200 shadow-[0_2px_6px_-2px_rgba(244,114,89,0.25)] overflow-hidden">
              <span className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 opacity-20 blur-sm" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-rose-500 onb-dot flex-shrink-0" />
              <span className="relative text-[11px] font-black bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent tracking-wider">术语库</span>
            </div>
            <div className="relative flex items-center gap-2 px-2.5 py-2 rounded-lg bg-gradient-to-br from-amber-50 via-amber-100/60 to-orange-50 ring-1 ring-amber-200 shadow-[0_2px_6px_-2px_rgba(245,158,11,0.25)] overflow-hidden">
              <span className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-20 blur-sm" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-amber-500 onb-dot flex-shrink-0" style={{ animationDelay: '0.3s' }} />
              <span className="relative text-[11px] font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent tracking-wider">知识库</span>
            </div>
          </div>
        </div>
      </div>

      {/* Powered by <Product> 浮签 */}
      <div className="absolute -top-2 right-2 bg-white/95 backdrop-blur rounded-full px-3 py-1 shadow-lg flex items-center gap-1.5 ring-1 ring-black/5 onb-float-fast">
        <SparklesIcon className="w-3 h-3 text-amber-500" />
        <span className="text-[10px] font-bold text-slate-700 tracking-wider">Powered by <Product></span>
      </div>
    </div>
  );
};
```

## 4. 步骤布局（HeroStage 容器）

每步左侧暖色渐变舞台区，承载 HeroStage + tagline：

```tsx
<div className="relative md:w-[45%] bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 p-8 flex flex-col items-center justify-center">
  {/* 背景装饰 */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
    <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-white/15 blur-3xl" />
  </div>
  {/* Hero Stage */}
  <div className="relative z-10">
    {stepIndex === 0 && <HeroStageImagine parallax={parallax} />}
    ...
  </div>
  {/* tagline */}
  <p className="relative z-10 mt-6 text-white/90 text-[11px] tracking-[0.4em] uppercase font-medium">
    {step.tagline}
  </p>
</div>
```

步骤切换用 `stepIndex` 选择对应 HeroStage，tagline 走 copy-writer 的步骤文案模式（见 ref 14 文案专项）。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版 HeroStage：Imagine/Vision/Translate 三舞台 + 视差接口 + 步骤布局。对齐 onboarding-director / animation-choreographer / copy-writer 依赖。 |
