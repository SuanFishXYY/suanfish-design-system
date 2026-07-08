# 🏛 SPEC · ui-architect — 工作台布局（D3 矛盾映射）

> D3 个性化⟷一致性的 UI 决策落地（ref 47 §D3）：个性化只动内容层，结构层一致是底线。

## 三栏骨架（一致性·固定·ref 04）

```tsx
<div className="h-screen flex overflow-hidden bg-slate-50 text-slate-800 font-sans antialiased">
  <IconSidebar className="w-[80px] z-30" />        {/* ref 05 · 固定 */}
  <DetailSidebar className="w-64 flex-shrink-0" />  {/* ref 06 · 固定 */}
  <MainContent className="flex-1 flex flex-col overflow-hidden">
    <TopBar />
    <KPIGrid />
    <ContentGrid />
    <DataTable />
  </MainContent>
</div>
```

骨架永不个性化——三栏宽度/层级/z-index 全走 ref 04/05/06。

## Main 看板（个性化·内容层·可拖拽）

```tsx
<MainContent>
  <TopBar className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Logo /><Breadcrumb />   {/* ref 44 §5/§8 */}
    </div>
    <div className="flex items-center gap-3">
      <SearchButton /><NotificationBadge /><Avatar />  {/* ref 45 §3/4 */}
    </div>
  </TopBar>

  {/* KPI 卡片网格 · 可拖拽重排（个性化内容层） */}
  <KPIGrid className="grid grid-cols-4 gap-4 p-6" draggable>
    {kpis.map(k => <KpiCard key={k.id} {...k} />)}  {/* ref 10 §8 + ref 44 §1 */}
  </KPIGrid>

  {/* 内容区 · 12 栏 · 图谱+控制面板加减共存 */}
  <ContentGrid className="grid grid-cols-12 gap-6 px-6 pb-6">
    <KnowledgeGraph className="col-span-8" />      {/* ref 10 · 莫奈光色 */}
    <DarkControlPanel className="col-span-4" />    {/* ref 10 §12 · 倪瓒冷逸 */}
  </ContentGrid>

  <DataTable className="px-6 pb-6" />  {/* ref 38 + ref 10 §6 */}
</MainContent>
```

## D3 映射决策表（ref 47 §D3）

| 层 | 个性化？ | 决策 | 依据 |
| --- | --- | --- | --- |
| 三栏骨架 | ❌ | 固定 | 一致性底线 |
| 令牌系统 | ❌ | 走 ref 01 | 一致性底线 |
| 品牌声调 | ❌ | 稳态声调 | ref 35/42 |
| KPI 卡片顺序 | ✅ | 可拖拽 | 个性化内容层 |
| 看板卡片显隐 | ✅ | 用户可选 | 个性化内容层 |
| 图表时间范围 | ✅ | 可调 | 个性化内容层 |

> 个性化只动**内容层**（看板顺序/显隐/时间范围），不动**结构层**（三栏/令牌/声调）。这是 ref 47 §D3 的直接落地。

## 响应式（ref 33）

- xl+（1280px）：完整三栏
- lg（1024px）：DetailSidebar 收起
- < md（768px）：单栏 + IconSidebar 抽屉 + 表格转卡片（ref 33 §4）

## 暗色模式（ref 01 §13）

全工作台 dark 适配——倪瓒冷逸的 DarkControlPanel 在 dark 模式下天然契合，Main 区走 ref 01 §13 dark 映射。

## a11y（ref 34）

- 所有图表 `aria-label`（ref 34 §③）
- 拖拽键盘可达（`tabindex` + 方向键移动，ref 34 §①）
- 对比度 ≥ 4.5:1（ref 34 §④，dark 控制面板 slate-100 on slate-900 ≈ 13:1 ✅）
