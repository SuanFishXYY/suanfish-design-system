# 变更日志（Changelog）

## [2.5.1] —— v2.5 闭环补丁：ui-auditor REPORT 模板升级到 33 agent

> *"lint 规则有了，REPORT 模板还卡在 24 行——不补就是 lint 失效。"*

### Fixed

- ❗ `agents/ui-auditor.md` REPORT 模板不再"知道"24 agent 之外的 9 个新 agent · 修复后 33 agent 全部进入覆盖率清单

### Added

- **三模式识别**：仪式 / 稳态 / **AI-native 叠加** —— 通过文件路径 + SSE / tool_calls / reasoning_content 等信号判别
- **33 Agent 覆盖率清单**：REPORT 必输出每个相关 agent 的检查状态（含 v2.4 / v2.5 新增 ✨ 标记）
- **Path G 四原则自检块**：ai-native 模式必填 · 可视化 / 归因化 / 透明化 / 可撤回 四项 ✅/❌
- **规则编号双引用**：每条发现同时引用 `[ruleset:R-XX]`（ref 15/16）+ `[P-XX]`（ref 19）

### Changed

- ui-auditor frontmatter description 提及 v2.5 三模式与 Path G 强制自检
- 「完整参考」段标注 ref 19 §三·补 · 33 agent · 53+ P-XX 规则

### Philosophical Footnote

> *韩非：『法不阿贵。』*
>
> 规则不能因为是 v2.5 新加就免审。给 24 agent 守门的审计，必须也给 33 agent 守门——否则 9 个新 agent 都在玩"3.25 边缘"。

---

## [2.5.0] —— AI-native 大版本：33 agent · 7 path · 新增路径 G

> *"v2.4 把工作室扩到全场景；v2.5 让工作室原生说 AI 的语言。"*
>
> 多模态、流式、工具调用、思维链、引用、画布、提示输入、配额、模型切换——9 个 AI 产品的原生原语，9 位新 agent，9 个哲学锚点，27 条 P-XX lint 规则。

### Added

**① 9 位 AI-native agent**（5 个 Tier 3 容器专科 + 3 个 Tier 4 内容专科 + 1 个 Tier 5 横切）

| Agent | Tier | 路径 | 哲学锚点 | 主理领域 |
| --- | --- | --- | --- | --- |
| 🌊 `stream-craftsman` | 3 | G | 赫拉克利特 · 万物流变 | token 流式 / cursor / 增量 markdown |
| 🛠️ `tool-call-presenter` | 3 | G | 奥斯汀 · 言语行为 | function call 卡片 / 四态 / 二阶段 |
| 🌳 `agent-thread-architect` | 3 | G | 博尔赫斯 · 小径分岔 | 多轮线程 / regenerate / fork |
| 🎨 `artifact-architect` | 3 | G | 海德格尔 · 作品的世界性 | 画布 / canvas / 版本 diff |
| ⌨️ `prompt-input-craftsman` | 3 | G | 奥斯汀 · 施为言语 | 输入框 / @mention / 命令 |
| 🧠 `reasoning-visualizer` | 4 | G | 笛卡尔 · cogito | 思维链折叠 / 步进显示 |
| 📑 `citation-keeper` | 4 | G | 福柯 · 作者功能 | inline 引用 / 源卡 / 断链处理 |
| ⏳ `rate-limit-communicator` | 4 | G | 罗尔斯 · 正义论 | 配额沟通 / 降级告知 / 付费墙 |
| 🔀 `model-switcher-stylist` | 5 | G | 列维-斯特劳斯 · 修补匠 | 模型切换器 UX / 跨模型一致 |

**② 新增 Path G · AI-native**（增强层）
- 不独立存在，永远叠加在 C / B / F 之上
- 由 `conversation-director` 兼任主理
- 7 路径全表更新，新关键词扩展

**③ 哲学锚点扩到 33 位** (`references/17-philosophy.md`)
- 新增 §三·补 章节：9 位新 agent 哲学锚点
- 提炼 Path G 总命题：**认知可视化 + 输出归因化 + 限制透明化 + 操作可撤回**

**④ Philosophy-as-lint 扩到 33 位** (`references/19-audit-ruleset-philosophy.md`)
- 新增 §三·补 章节：**27 条新 P-XX 规则**
- `P-SC1/2/3` (stream) · `P-TCP1/2/3` (tool-call) · `P-ATA1/2/3` (thread) · `P-RV1/2/3` (reasoning) · `P-CK1/2/3` (citation) · `P-AA1/2/3` (artifact) · `P-PI1/2/3` (prompt-input) · `P-RLC1/2/3/4` (rate-limit) · `P-MS1/2/3` (model-switch) · `P-G-OVERALL` (横切总规)

**⑤ Dispatcher 升级 7 路径路由** (`agents/moment-strategist.md`)
- 路径 G 完整加入决策树
- 派单速查表新增 10 行（9 个 G 路径触发词 + 1 个 C+G 复合）
- 复合 C+G 通过 flow-coordinator 协调

### Changed

- 版本三连同步到 2.5.0（SKILL / manifest / README / CHANGELOG）
- README 徽章 agents 24→33 · paths 6→7 · 新增 `AI-native: Path G`

### Philosophical Footnote

> *庄子：『此亦一是非，彼亦一是非。』*
>
> v2.4 解决了"场景齐不齐"，v2.5 回答"AI 产品到底长什么样"。
> 我们的答案：把不可见的变可见，把不可信的归因，把不可控的透明，把不可逆的可撤回——
> 这四件事做得到，AI 产品才配叫 "native"。

---

## [2.4.1] —— v2.4 闭环补丁：哲学 + lint + dispatcher 三件套

> *"扩到 24 agent 不算完成；扩到 24 agent 都进了哲学/lint/路由 才算完成。"*

### Added

**① 哲学锚点扩到 24 位** (`references/17-philosophy.md`)
- 新增 §二·补 章节：10 位新 agent 的哲学锚点
- flow-coordinator 亚里士多德 · conversation-director 巴赫金 · notification-director 海德格尔(烦) · table-craftsman Tufte · chat-ui-craftsman 麦克卢汉 · persona-architect 梅洛-庞蒂 · information-architect 康德 · error-recovery-designer 海德格尔(工具坏掉) · brand-keeper 海德格尔(命名) · i18n-strategist 维特根斯坦

**② Philosophy-as-lint 扩到 24 位** (`references/19-audit-ruleset-philosophy.md`)
- 新增 §二·补 章节：26 条新 P-XX 规则
- `P-FC1/2` (flow) · `P-CD1/2` (conv) · `P-ND1/2/3` (notify) · `P-TC1/2/3` (table) · `P-CC1/2` (chat) · `P-PA1/2/3` (persona) · `P-IA1/2/3` (IA) · `P-ER1/2/3/4` (error) · `P-BK1/2/3` (brand) · `P-I18-1/2/3` (i18n)

**③ Dispatcher 升级 6 路径路由** (`agents/moment-strategist.md`)
- 六维体检表新增"形态"维度
- 路径 A/B/C/D/E/F 全部列出，每条带主理 agent + 关键词 + 哲学锚
- 派单速查表从 9 行扩到 22 行（覆盖 v2.4 全部新 agent）
- 复合路径必须走 flow-coordinator（新增禁令）

### Changed

- 版本三连同步到 2.4.1
- ui-auditor REPORT 模板里 agent 专项表覆盖 24 位（隐式扩展）

### Philosophical Footnote

> *孔子：『名不正则言不顺。』*
>
> v2.4.0 给 10 个新 agent 起了名，v2.4.1 让他们的名"正"了——有哲学锚点 / 有 lint 规则 / 有派单路由。从此他们才真正存在于这个系统里。

---

## [2.4.0] —— 全场景扩编：24 位 agent · 7 tier · 6 路径

> *"统一不是塞进同一个抽屉，统一是各就各位。"*
> v2.4 把"塞不下"的多场景问题拆开：聊天、通知、表格、移动、嵌入各有 owner，跨路径有协调官，决策上游有用户画像与信息架构。

### Added · 10 个新 agent

**Tier 1.5 协调层（新增）**
- 🚦 `flow-coordinator` — 多路径混合时的裁判（A+C 复合等场景）

**Tier 2 主导层 +2**
- 💬 `conversation-director` — Path C 聊天对话流主理（chatbot / agent thread）
- 🔔 `notification-director` — Path D 通知流主理（toast / banner / push / badge）

**Tier 3 容器专科 +2**
- 📋 `table-craftsman` — 表格 / 列表容器专家
- 🗨️ `chat-ui-craftsman` — 聊天容器专家

**Tier 4 内容专科 +3**
- 👥 `persona-architect` — 用户画像建构（决策上游）
- 🗺️ `information-architect` — IA / 站点地图 / 导航树
- 🩹 `error-recovery-designer` — 错误恢复设计（非快乐路径）

**Tier 5 横切咨询 +2**
- 🛡️ `brand-keeper` — 品牌守护者
- 🌍 `i18n-strategist` — 国际化策略

### Added · 6 条路径

Path A (仪式) / B (稳态) / **C (聊天)** / **D (通知)** / **E (移动)** / **F (嵌入)**

### Changed

- SKILL.md 架构图重绘 · 24 agent + 7 tier + 6 路径
- README badges: agents 14→24, tiers 6→7, +paths-6 徽章
- .skill-manifest.json：tiers 增加 1.5 协调层 + paths 字段
- moment-strategist 派单决策树新增 Path C/D/E/F 分支识别（详见 agent 文档）

### Philosophical Footnote

> *亚里士多德：『整体大于部分之和。』*
> 增加 10 个 agent 不是为了"更多"，是为了让既有的 14 个 agent 不再越界扛着不属于他们的活。Tier 1.5 的协调官让多路径不再混乱——这才是"统一"。

---

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
