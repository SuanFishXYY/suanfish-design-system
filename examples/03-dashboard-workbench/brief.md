# 📝 BRIEF — 数据分析工作台

**派单**：moment-strategist
**case_id**：`case-2026-0630-003`（review-orchestrator 挂号）
**task_kind / 等级**：user-declared · structural + visual（mixed）· S 级

## 需求

业务方要一个「数据分析工作台」：
- 左 IconSidebar 导航 / 中 DetailSidebar 筛选 / 右 Main 数据看板
- Main 区：KPI 指标卡 + 知识图谱 + 数据表
- 每个用户可自定义 Main 看板内容（拖拽卡片）
- 但全站视觉必须统一（品牌克制）

## 主矛盾声明（ref 24 · ref 47 映射）

**D3 个性化 ⟷ 一致性**

- 业务倾向：个性化（用户自定义看板）
- 一致性容忍度：三栏骨架 / 令牌系统 / 品牌声调 不动（ref 47 §D3 留位）

> 这是 ref 47 §一 D3 的直接演示：个性化只动**内容层**（看板卡片可调），不动**结构层**（三栏骨架固定）。

## 验收标准（可证伪）

1. 三栏骨架 `IconSidebar(80px) + DetailSidebar(256px) + Main(flex-1)` 固定不变（ref 04）
2. 令牌走 ref 01，无 HEX（ref 14 反模式 2）
3. 看板卡片可拖拽重排，但卡片样式统一（ref 44 卡片规范）
4. 暗色控制面板用 `bg-slate-900`（倪瓒冷逸·减法，ref 46）
5. 数据高亮用莫奈光色渐变（加法·R-Cross2 感官完整性，ref 46）
6. 关键节点（数据加载完成）有情感曲线（R-Cross3，ref 46）

## ⚠️ 议会强制入场（ref 48 Step 1）

- task_kind=mixed → 三大类全开
- visual + 涉及配色 → light-impressionist（加）+ void-painter（减）强制辩证
- structural → dialectician 命名 D3 矛盾
- 关键节点 → tension-composer 审 R-Cross3
