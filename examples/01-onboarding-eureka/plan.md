# 🎯 PLAN — Onboarding Eureka 组件树

**作者**：onboarding-director
**输入 BRIEF**：[brief.md](brief.md)

---

## 哲学起点

`[庄子 · 庖丁解牛 — 依乎天理，批大郤，导大窾]`

> 用户首次进入 v2.2，认知模型停留在 v2.1。我们的"刀"不能硬切——找到 3 个"肯綮"（关键认知节点），每个施加最小动作即可。

## 三个肯綮（关键认知节点）

| Step | 肯綮 | 用户当前心智 | 我们要让他理解 |
| --- | --- | --- | --- |
| 1 | **多模态** | 「这是个文本 AI」 | 现在能"看图 + 画图" + 联网检索 |
| 2 | **读图** | 「我得描述图片才能问 AI」 | 直接上传图，AI 自己读 |
| 3 | **Gemini 切换** | 「只有一个翻译模型」 | 新案/OA翻译里可切 Gemini |

每个肯綮 = 1 步。**不合并、不拆分**。庄子的"良庖岁更刀"——刀刃锋利的关键是不强求。

## 组件树

```
<WelcomeModal>
  <ModalShell> ← modal-craftsman 提供基础壳
    <ProgressIndicator current={n} total={3} />
    <StepContent step={n}>
      <StepIcon /> ← icon-curator
      <StepTitle />     ← copy-writer
      <StepDescription /> ← copy-writer
      <StepCallout />   ← optional, 仅 Step 1
    </StepContent>
    <ModalActions>
      <SkipButton />    ← 永远可见（P-OD2）
      <NextOrFinish />  ← 自动切换文案
    </ModalActions>
  </ModalShell>
</WelcomeModal>
```

## 步进逻辑

```
[首次登录] → 显示 Step 1
   ↓ 用户点「下一步」or 5s 后自动 highlight
[Step 2] → 显示 Step 2
   ↓
[Step 3] → 「完成」按钮（不再是"下一步"）
   ↓
[完成] → 模态关闭 + 主界面进入正常状态
```

**关键约束**：
- 不自动 advance（不强加节奏）→ `[控制二分法]`
- 跳过 = 立即关闭 + 不再弹出
- 完成 = 写入 localStorage `seen_v2.2_onboarding: true`

## 各 agent 派单细节

### → copy-writer
**任务**：写 3 步的标题 + 描述（参考 BRIEF 中提到的 3 个肯綮）。
**约束**：
- 标题 ≤ 12 字
- 描述 ≤ 50 字
- 三问检查：主语 / 动作 / 用户下一步能做什么
- 禁忌词清单（P-CW2）

### → icon-curator
**任务**：为 3 步各选 1 个图标。
**约束**：
- 必须从 Heroicons 选（P-IC2）
- 推荐方向：Step 1 用 `SparklesIcon`、Step 2 用 `PhotoIcon`、Step 3 用 `LanguageIcon`
- 3 秒识别测试通过

### → animation-choreographer
**任务**：定义 4 段动效。
**约束**：
- 模态进入：fadeIn + scaleIn(0.95→1) · 400ms · ease-out
- 步骤切换：slide-x · 300ms · ease-out
- 步骤图标进入：spring(stiffness: 200) · 600ms
- 模态退出：fadeOut + scaleOut · 200ms

### → token-keeper
**任务**：颜色 / 间距约束。
**约束**：
- 主色：`primary-500` (#3B82F6)
- 强调：`amber-400` 仅用于 Step 1 「联网检索」徽章
- 圆角：`rounded-2xl` (16px)
- 阴影：`shadow-2xl`
- 仪式专属 token 必须 `mode: ceremonial`，不可流入稳态视图（铁律 1）

### → a11y-guardian
**任务**：键盘可达性 + Focus 顺序。
**约束**：
- ESC 关闭模态 = 跳过
- Tab 顺序：跳过 → 下一步
- 进入 modal 自动 focus 在「下一步」
- aria-label 完整

## 验证矩阵

| 检查项 | 验证方式 |
| --- | --- |
| 3 步骨架 | 代码 grep "STEPS.length === 3" |
| 跳过可达 | 键盘 ESC + 按钮点击都触发 |
| 时长 ≤ 15s | 不自动 advance → 用户掌控节奏 |
| 不渗透稳态 | token 用 `ceremonial-*` 命名空间 |

---

## 派单状态

→ copy-writer / icon-curator / animation-choreographer / token-keeper / a11y-guardian **并行执行**
→ 完成后汇总到 ui-auditor

---

[哲学引用 `[庄子 · 庖丁解牛]` `[控制二分法]` `[P-OD1]` `[P-OD2]`]
