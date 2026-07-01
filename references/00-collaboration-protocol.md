---
ref: 00
title: 协作协议 · agent 交接规范
owner: flow-coordinator（流程协调）· 全 agent（交接）
audited_by: ui-auditor
---

# 00 · 协作协议（Collaboration Protocol）

> *9 位 agent 在工作室内部如何彼此交接，不掉信息。*

## 四种结构化产出

每一次交接都使用以下四种文档形态之一：

### 1. `BRIEF` —— 仅由 `moment-strategist` 起草

任何任务的 **入口**。框定问题、派单。

```markdown
## 🎬 / 🏛 BRIEF —— <一句话框定问题>

**模式**: onboarding | steady-state | mixed
**主 agent**: <agent 名>
**协作 agent**: [<列表>]
**成功标准**: [...]
**为何选这个模式**: <理由>
**派单 hand-off**: > @<主-agent> ...
```

### 2. `PLAN` —— 由主 agent（`onboarding-director` 或 `ui-architect`）起草

解决方案的 **架构**。命名文件、组件树、要调用的协作 agent。

```markdown
## 🎬 / 🏛 PLAN —— <界面名>

**类型**: <分类>
**文件路径**: <新代码落点>
**组件树**: <树>
**使用的令牌**: <交给 token-keeper>
**动画**: <交给 animation-choreographer>
**成功标准**: [...]
```

### 3. `SPEC` —— 由协作 agent 起草

具体 **交付物**：代码片段、令牌表、动画时间线。

```markdown
## 🪟 / 🧙 / 📊 / 🎨 / 💫 SPEC —— <切片名>

**输入**: <本切片依赖>
**输出**:
<代码 / 令牌表 / 时间线>
**回传 hand-back**: > @<请求方-agent> ...
```

### 4. `REPORT` —— 仅由 `ui-auditor` 起草

最终 **质量门**。带严重等级的发现清单。

```markdown
## 🔍 REPORT —— <界面名>

**状态**: ✅ 通过 | ⚠️ 带警告通过 | ❌ 不通过
**发现**:
- 🟥 严重: <问题> · <文件:行号> · <修复建议>
- 🟧 警告: <问题> · <修复建议>
- 🟨 提示: <观察>
```

---

## 标准流程

```
用户请求
   │
   ▼
moment-strategist            → BRIEF  + 触发 review-orchestrator G1 立案（v4.2.7）
   │
   ▼
主 agent                     → PLAN
   │
   ├── 协作 agent #1         → SPEC
   ├── 协作 agent #2         → SPEC
   └── 协作 agent #N         → SPEC
   │
   ▼
ui-auditor                   → REPORT
   │
   ▼
📜 内容评价审核 · 三道门（v4.2.7 · ref 28-30 · review-orchestrator 编排）
   │
   ├─ 入口门 ref 28：G1立案→G2辩论→G3评分→G4投票(2/3)→G5蓝军否决→G6
   │     │ FAIL ──→ 退回门 ref 29：R1开单→R2认领(SLA)→R3修复→R4复审→R5销项 → 回 G3
   │     │ PASS ──→ 事后门 ref 30：K轨(查内容衰弱/下架) + M轨(查审核者腐烂/下岗)
   │
   ▼
回交用户（G6 PASS 放行；若 FAIL 则走退回门整改闭环，不再靠旧"回路重做"）
```

> **v4.2.7 起，旧的「REPORT ❌ 则回路重做」升级为三道门**：REPORT 是 ui-auditor 单条规则审计，三道门是整件生成物放行门。退回不再靠主 agent 自觉修订 PLAN，而是走 ref 29 工单 SLA 闭环（见下方"何时回路"）。

## 何时回路（v4.2.7 升级为退回门 ref 29）

若 `ui-auditor` 返回 `❌ 不通过`，或 ref 28 G6 判定 `FAIL`：
1. **review-orchestrator R1 开单**——把 G6 缺陷清单拆成工单（带可证伪 acceptance + SLA）
2. **owner agent R2 认领**——限时认领，SLA 计时开始
3. **R3 修复**——按 acceptance 逐项修复，贴证据（禁空口销项）
4. **R4 复审**——只验缺陷项不重审整件（P0 强制换人防自打脸）
5. **R5 销项**——全销回 ref 28 G3 复审；超时走 L1-L4 升级链

详见 [`references/29-remediation-loop-charter.md`](29-remediation-loop-charter.md)。旧流程的"主 agent 修订 PLAN 重跑 ui-auditor"仍适用于 B 级草稿 Fast-track（ref 28 §7）。

**绝不带 🟥 严重发现交付任何界面。**

## 共享状态

所有 agent 对以下文件具有 **读权限**：
- `references/01-design-tokens.md` —— 视觉原子的唯一真相
- `references/12-icon-library.md` —— 图标盘点
- 整个代码库（用于交叉参考既有模式）

`01-design-tokens.md` 的 **写权限只属于 `token-keeper`**。其他 agent 通过带 `token-proposal` 标签的 SPEC 提议改动。

## 冲突仲裁

两位 agent 意见不一时：
1. 关于 **令牌** → `token-keeper` 决定
2. 关于 **动效** → `animation-choreographer` 决定
3. 关于 **模式**（仪式 vs 稳态）→ 上交 `moment-strategist`
4. 关于 **合规** → `ui-auditor` 决定（REPORT 即终审）

## 决策留痕

任何非琐碎决定（如批准了新模态尺寸、新增了一条 keyframe），负责 agent 在该领域的 `references/<domain>.md` 文件追加一条带日期与理由的 `## 决策日志` 条目。

---

*流程，就是把 9 个人黏成同一款产品的那根线。*
