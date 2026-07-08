# 💫 SPEC · animation-choreographer — 工作台动效（R-Cross3 情感张力）

> 贝多芬 R-Cross3：关键节点（数据加载完成）必须有情感曲线，不是煽情是结构性张力。ref 46 §三 + ref 11。

## 加载态四档（ref 31 §一）

| 时长 | 形态 | 实现 |
| --- | --- | --- |
| < 200ms | 不显示 | 防闪烁 |
| 200ms-1s | 骨架屏 | `animate-shimmer`（ref 11 §1） |
| 1s-5s | 进度条 | `h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500` |
| > 5s | 进度条+文字 | `正在分析... 预计 N 秒` |

## 关键节点情感曲线（R-Cross3 · 贝多芬）

数据加载完成是关键节点，须有命运四音式张力——不是"Welcome!"平铺：

```tsx
{/* 完成瞬间 0.8s 渐进 + 主色脉冲 */}
<div className="animate-fade-in-up duration-700">
  <KpiCard className="ring-2 ring-emerald-400 animate-pulse-once" />
  {/* animate-pulse-once: 1 次脉冲，不循环（区别于无限 pulse 焦虑） */}
</div>
```

时序：
- 0ms：数据到达，骨架屏淡出（`animate-fade-in` 300ms）
- 200ms：KPI 卡渐入（`animate-fade-in-up` 700ms）
- 500ms：主色脉冲 1 次（`animate-pulse-once` 300ms）—— 命运四音的"动机"
- 800ms：完成态稳定

> 反例（REJECT）：加载完成直接 snap 显示，无过渡 = 情感曲线为零（ref 46 §三 R-Cross3 反例）。

## 图谱节点入场（对位·巴赫 ref 46 §六）

知识图谱节点按对位法节奏入场，多旋律并行不乱：

```tsx
{nodes.map((n, i) => (
  <Node
    key={n.id}
    className="animate-scale-in"
    style={{ animationDelay: `${i * 60}ms` }}  // 0.2/0.4/0.2 节奏分配（ref 46 §六）
  />
))}
```

每节点延迟 60ms，节奏精确分配——巴赫对位"各自完整又融贯"。

## 控制面板开合（倪瓒·克制）

```tsx
{/* 次要控件折叠，仅露核心（老子·减法默认） */}
<details className="group">
  <summary className="cursor-pointer text-sm text-slate-300 hover:text-slate-100">高级筛选</summary>
  <div className="mt-2 space-y-2 animate-slide-up">...</div>
</details>
```

开合用 `animate-slide-up`（ref 11 §1），不用弹跳/花哨——控制面板冷静。

## reduced-motion 降级（ref 34 §⑤ + ref 11 §8）

所有动画在 `prefers-reduced-motion: reduce` 下降到 80ms 或隐藏——a11y 底线不投票（ref 47 §四）。

## 动效铁律

- per-token 不跳字，按 markdown 块提交（ref 36 §二，流式场景才适用，本 demo 非流式）
- 完成态不循环 pulse（焦虑）——用 `animate-pulse-once`
- 关键节点必有曲线（R-Cross3），非关键节点别过度（Eno R-Cross4 灰度）
