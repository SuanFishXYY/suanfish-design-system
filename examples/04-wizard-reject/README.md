# 🧙 04 · Wizard 多步表单 — REJECT 触发演示 demo

> *证明算鱼的否决机制不是摆设——一个故意埋雷的向导如何被议会 REJECT 并退回整改。*

## demo 目标

用 `wizard-designer` 产出一个「项目创建向导」，**故意触发** 多条 R 规则 + R18 矛盾两端都站，演示：

- **ref 47 §R18**：矛盾两端都站（既要极简又要全功能）→ dialectician REJECT
- **ref 14 反模式**：alert/HEX/!important/任意 z-index 等命中
- **ref 31 错误恢复**：错误三段式 + 退回整改闭环
- **ref 48 议会推演**：六步协议中投票否决的实际跑法
- **ref 29 整改闭环**：REJECT 后 R1 开单 → 修复 → 复审

## 主 agent

`wizard-designer`（向导·故意埋雷）+ `dialectician`（R18 审）+ `ui-auditor`（ref 14 反模式审）+ `error-recovery-designer`（错误态）

## 复杂度

⭐⭐⭐（向导 + REJECT 演示 + 整改闭环）

## 状态

✅ 完成

## 阅读顺序

1. `brief.md` — moment-strategist 派单（**故意矛盾的需求**）
2. `plan.md` — wizard-designer 首轮方案（埋雷）+ 议会 REJECT 推演
3. `specs/` — 首轮埋雷 SPEC + 整改后 SPEC
4. `report.md` — ui-auditor 终审（首轮 REJECT + 整改后 PASS）

## 这证明什么

| 否决机制 | ref | demo 证据 |
| --- | --- | --- |
| R18 矛盾两端都站 | 47/24 | "既要极简又要全功能"被 dialectician REJECT |
| 反模式拦截 | 14 | alert/HEX/!important/任意z-index 命中即 🟥 |
| 错误三段式 | 31 | 校验错误有"发生了什么+为什么+怎么做" |
| 议会否决 | 48 | 六步投票 Round 1 REJECT + Round 2 整改后 PASS |
| 整改闭环 | 29 | REJECT → R1 开单 → 修复 → 复审 → 销项 |
