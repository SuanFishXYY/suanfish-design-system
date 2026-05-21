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
moment-strategist            → BRIEF
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
回交用户（若 REPORT 为 ❌ 则回路重做）
```

## 何时回路

若 `ui-auditor` 返回 `❌ 不通过`：
1. 主 agent 阅读 REPORT
2. 修订 PLAN
3. 仅向「输出有变化」的协作 agent 重新索取 SPEC
4. 重新跑 `ui-auditor`

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
