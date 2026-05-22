# 变更日志（Changelog）

## [2.3.0] —— 哲学落地：lint 规则集 + 真实 demo 库

> *"哲学不是装饰，哲学是约束。" —— v2.3 把 v2.2 的哲学根基从『可读』升级到『可审』。*

### Added

- **references/19-audit-ruleset-philosophy.md**：哲学规则集（独立 lint 层）
  - 通用规则：`P-G1` 哲学锚点引用 / `P-G2` 引用合理性 / `P-G3` 思维链完整性 / `P-G4` REJECT 哲学命题化
  - 单 agent 规则：`P-MS1` / `P-CW1-2` / `P-IC1-2` / `P-AC1-2` / `P-TK1-2` / `P-OD1-2` / `P-AG1-2`
  - Flavor 一致性：`P-F1` flavor 字段与输出一致 / `P-F2` 混合 flavor 时分层规则
  - 与 ref 15/16 共构，版本号契约：`bound_to_skill_version: 2.3.0`
- **examples/** 真实 demo 库（v2.3 三件套之二）
  - `examples/01-onboarding-eureka/`：完整 6 文件示范（README + BRIEF + PLAN + 4 SPEC + REPORT）
  - 每一份 SPEC 都嵌入哲学锚点 + 思维链 5 步 + Canon 引用，作为 lint 规则集的活案例
- **agents 加载链路**：ui-auditor 现在同时加载 ref 15 + 16 + 19，哲学审查从『隐性建议』升级为『显性 PASS/FAIL』

### Changed

- SKILL.md 引用文档表新增 ref 19 + examples/
- audit 规则集合从 2 套（15+16）扩到 3 套（15+16+19）
- 仪式 / 稳态规则集 + 哲学规则集 = 三层独立可审

### Philosophical Footnote

> *维特根斯坦：『凡是能被说清的，都能被说清；凡是不能说清的，必须保持沉默。』*
>
> v2.2 我们把哲学说清了（17 + 18），v2.3 我们把"说清"本身变成可强制执行的规则。哲学只有变成 lint，才不会被遗忘。

---

## [2.2.0] —— 哲学根基注入 · 14 锚点 · 20 法典 · 案例库

> *规则会过时，案例会重复，但哲学命题穿越时间。*

### 改动 · 6 项哲学化升级

1. **14 agent 哲学锚点**：每位 agent 在 frontmatter 新增 `philosophy:` 字段，绑定一条不可让步的哲学命题（如 modal-craftsman ↔ 奥卡姆剃刀，animation-choreographer ↔ 老子大象无形）。
2. **REJECT R1-R6 配哲学命题**：`moment-strategist.md` 的 R1-R6 表新增"哲学命题"列。规则不再是 KPI，而是哲学约束。
3. **设计经典法典**：新增 `references/18-design-canon.md`，收录 Dieter Rams 十诫 / 包豪斯三原则 / Tufte 信息可视化 / 东方美学等 20 条经典原则，编号 D1-D10 / B1-B3 / V1-V3 / A1-A2 / E1-E2，可被 agent 引用。
4. **案例库**：新增 `references/cases/` 目录，5 个核心 agent 各配 3 正例 + 3 反例（共 30 条），每条标注 `[Canon-XX]` 编号 + 哲学依据。
5. **东方/西方双轨分流**：SKILL.md frontmatter 新增 `flavor: hybrid` 字段（可选 eastern / western / hybrid），不同 flavor 下 agent 推理路径自动切换。
6. **思维链可视化**：所有 agent 输出 SPEC 时建议显式标注哲学推理路径，如 `[Dasein → 识别用户处境]` `[Canon-D5 → 隐而不见]` `[结论]`。

### 新增

- `references/17-philosophy.md` — 14 agent 哲学锚点 + R1-R6 命题映射 + 东西方分流（核心文档）
- `references/18-design-canon.md` — 20 条经典设计法典
- `references/cases/README.md` — 案例库索引
- `references/cases/modal-craftsman.md` — 弹窗决策案例（3 正 3 反）
- `references/cases/animation-choreographer.md` — 动画克制案例（3 正 3 反）
- `references/cases/empty-state.md` — 空状态文学案例（3 正 3 反）
- `references/cases/copy-writer.md` — 文案对比案例（3 正 3 反）
- `references/cases/data-viz.md` — 图表减法案例（3 正 3 反）

### 哲学注脚（v2.2 引入的命题清单）

**东方哲学**：孙子 · 上兵伐谋 / 庄子 · 庖丁解牛 / 老子 · 大象无形 / 禅宗 · 一期一会 / 物哀 · 余韵 / 间 (Ma) / 孔子 · 名不正则言不顺

**西方哲学**：苏格拉底 · 产婆术 / 亚里士多德 · 矛盾律 / 康德 · 绝对命令 + 人是目的 / 维特根斯坦 · 语言边界 / 海德格尔 · Dasein / 罗尔斯 · 无知之幕 / 爱比克泰德 · 控制二分法 / 波普尔 · 可证伪性 / 赫拉克利特 / 奥卡姆剃刀

**现代设计**：Dieter Rams 十诫 / Sullivan · Form follows function / Adolf Loos · Ornament is crime / Mies · Less is more / Tufte · Data-Ink Ratio / 深泽直人 · without thought / 原研哉 · 白

### 文件

- 14 个 agent · 23 个 reference · 5 个 case · 总文件数约 50

### 淘汰的旧观念

- ❌ "REJECT 是冷冰冰的拒绝" → ✅ REJECT 是哲学命题的捍卫
- ❌ "agent 是工具" → ✅ agent 是有信念的匠人
- ❌ "一套规则吃天下" → ✅ 东方/西方双轨分流

---

## [2.1.0] —— 架构修缮：边界厘清 + 独立规则集 + REJECT 机制 + 速查表

### 改动 · 修复 7 项架构问题

1. **Tier 重组（4 tier → 6 tier）**：原 Tier 4 横切层职责混乱，拆为：
   - Tier 4 **内容专科**（主动产出）：copy-writer / icon-curator / empty-state-storyteller / responsive-strategist
   - Tier 5 **横切咨询**（被动 · 守门 · 不主导）：token-keeper / animation-choreographer / a11y-guardian
   - Tier 6 **质量门**：ui-auditor
2. **icon-curator 收紧领地**：只管语义 → 图标名 → 形态。颜色 / 尺寸 / 容器 / 间距明确移交 token-keeper。
3. **empty-state-storyteller 重新聚焦**：只管 4 态状态机（FIRST_TIME / FILTERED / ERROR / LOADING）+ 布局。文案明确移交 copy-writer。
4. **路径 B 硬约束**：从「人脑约束」变为「写死的 4 项硬条件」。不满足任一 → REJECT 或归入 A / C。
5. **审计规则集独立化**：规则从 ui-auditor 拆出，落到 `references/15-audit-ruleset-steady.md` 与 `references/16-audit-ruleset-onboarding.md`。新增 `bound_to_token_version` 版本同步契约 —— token 改动必须同步规则集 PR。
6. **REJECT 机制**：moment-strategist 新增 REJECT 输出类型，写明 6 项硬拒绝触发条件（R1-R6），允许工作室拒做。
7. **5 套高频搭配速查表**：SKILL.md 顶部新增「快速通道」，80% 请求直接照搬，跳过六维体检。

### 新增
- `references/15-audit-ruleset-steady.md`（19 条稳态规则）
- `references/16-audit-ruleset-onboarding.md`（13 条仪式规则）

### 文件
- 14 个 agent · 21 个 reference · 总文件数 40

---

## [2.0.0] —— 扩编 14 人 + 全中文化

### 新增 5 位 agent
- 📝 `copy-writer`
- ♿ `a11y-guardian`
- 📱 `responsive-strategist`
- 🎯 `icon-curator`
- 🪟 `empty-state-storyteller`

### 改动
- 9 → 14 位 agent，重新分入 5 个 tier
- SKILL.md 全中文化 + 决策森林图扩展
- 所有 agent / references 中文化

---

## [1.0.0] —— 统一发布首版

### 新增
- 9 位 agent 智能协作模型
- 15 份参考文档
- 协作协议 BRIEF → PLAN → SPEC → REPORT
- 仪式 vs 稳态严格分离
- 六维决策树
