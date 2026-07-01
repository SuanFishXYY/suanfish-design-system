# 🎨 SPEC · token-keeper — 工作台令牌（加减辩证落地）

> 莫奈光色（加法·高亮）vs 倪瓒冷逸（减法·控制面板）的令牌取舍。R-Cross2 感官完整性：色光非装饰是骨架。

## 三栏骨架令牌（一致性·不动）

```
IconSidebar:  w-[80px] · z-30 · bg-white/60 backdrop-blur-xl (ref 05)
DetailSidebar: w-64 · bg-white · border-r border-gray-200 (ref 06)
MainContent:  flex-1 · bg-slate-50 (ref 04)
```

## 莫奈光色（加法·数据高亮）

数据高亮用光色渐变，非纯色块——R-Cross2 要求色光有氛围：

```tsx
{/* KPI 卡 hover 光晕（莫奈·光色） */}
<div className="rounded-xl bg-white shadow-sm hover:shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-all" />

{/* 知识图谱节点光色（罗斯科色域 + 莫奈光感调解） */}
<span className="rounded-full bg-gradient-to-br from-emerald-400 to-teal-500
  shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
  {/* emerald-400 而非 600 = 罗斯科色域让步；光晕 = 莫奈光感 */}
```

## 倪瓒冷逸（减法·控制面板）

控制面板用冷暗色，不取悦、不暖色——倪瓒"萧疏冷逸"：

```tsx
{/* DarkControlPanel · 倪瓒冷逸 */}
<aside className="bg-slate-900 text-slate-100 rounded-2xl p-5 space-y-4
  shadow-xl ring-1 ring-slate-700">
  {/* 不加暖色装饰 · 不加品牌色 · 纯冷 */}
</aside>
```

## 加减辩证裁定（ref 46 §一）

| 维度 | 加法（莫奈） | 减法（倪瓒） | 裁定 |
| --- | --- | --- | --- |
| 应用区 | Main 数据看板 | DarkControlPanel | 各司其职 |
| 色温 | 暖光（emerald/amber 高亮） | 冷暗（slate-900） | 共存不冲突 |
| 留白 | 数据区间距紧凑 | 控制面板留白多 | 按区分配 |
| 失败模式 | 失结构（过度光效） | 失温度（过冷） | 互相制衡 |

> 议会裁定：Main 区用莫奈（数据需可读+有氛围），控制面板用倪瓒（控制需冷静+不干扰）。加减两端各占一区，辩证不塌方。

## 令牌清单（ref 01 对齐）

| 用途 | 令牌 |
| --- | --- |
| KPI 数字 | `text-2xl font-bold text-slate-800` |
| 高亮（莫奈） | `from-emerald-400 to-teal-500` + 光晕 |
| 控制面板底（倪瓒） | `bg-slate-900 text-slate-100` |
| 警告 | `text-amber-600`（ref 01 §1 警告） |
| 分割线 | `border-gray-100` |
| 玻璃 | `bg-white/60 backdrop-blur-xl` |

禁 HEX，全走 ref 01 令牌（ref 14 反模式 2）。
