# 变更日志（Changelog）

## [4.2.7] —— 内容评价审核制度 · 三道门端到端

> **THREE GATES**: 给所有生成物（设计稿/spec/plan/copy/report）建一套端到端审核制度——入口门（放行）+ 退回门（整改）+ 事后门（复审）。规则集 ref 15/16/19 管「单条规则对不对」，三道门管「整件生成物能不能放行 + 退回后怎么闭环 + 放行后会不会衰弱」。

> **POST-HOC DUAL TRACK**: 事后门双轨并行——K 轨查内容衰弱（定期抽样复审，衰弱→整改 / 过时→CULL 下架），M 轨查审核者腐烂（评分通胀/蓝军形同虚设/复审放水 → Keeper Test 下岗）。两轨交叉喂食：K 下架率喂给 M 判松严，M 失准喂给 K 重采样。套娃止于 sage_congress 仲裁，不无限递归。

### Added
- 📜 **ref 28 入口门**：议会六步放行 G1立案→G2辩论→G3评分(6维rubric)→G4投票(2/3)→G5蓝军否决→G6放行/退回 · 短板红线 + 蓝军一票否决制衡议会
- 🔧 **ref 29 退回门**：整改闭环 R1开单→R2认领(SLA)→R3修复→R4复审→R5销项 · 超时升级 L1-L4 · 屡犯同缺陷强制提规则 PR（个案沉淀为制度）
- 🛡️ **ref 30 事后门**：K 轨归档复审四态(存活/衰弱/过时/推翻) + M 轨元审计五步(双盲/校准/元审/蓝军互攻/下岗) · 双轨交叉喂食 · 新增 meta-auditor 角色
- 🎼 **review-orchestrator agent**：三道门流程编排器 · case_id 挂号/跨门流转/SLA 计时/工单调度/制度自检指标采集（52→54 agent）
- 🛡️ **meta-auditor agent**：元审计员 · 独立于 sage_congress 与 ui-auditor · 专审"审的过程" · 套娃止层（meta-auditor 自身失准由 sage_congress 2/3 仲裁）
- 🔗 **bound_to_ruleset_version 契约**：ref 28-30 加版本同步字段 · 规则集升级时三道门制度检查同步 · 不同步则 G5/R1/K2 挂起输出 `CHARTER_OUT_OF_SYNC`（同 ref 15 `RULESET_OUT_OF_SYNC` 套路）
- 📚 **examples/02-three-gates-modal**：完整三道门 demo case · 故意埋 R-05 违规 · 走 G1-G6 退回 + R1-R5 整改 + K1-K4 事后复审全流程 · 证明制度可执行可验证
- 🔢 **R 编号两套体系术语表**：SKILL.md 厘清 `R1-R25`（哲学命题·无连字符·全局）vs `R-01`（审计规则·带连字符·每份规则集独立）· 消除混淆
- 🎼 **`scripts/charter-lint.mjs` 制度 lint 脚本**：把 ref 28-30 章程里能 grep 的硬约束 + manifest/agent/规则数/版本号同步变成机器可检。A 类（元数据一致性）+ B 类（章程 frontmatter 契约：B1/B2/**B2b 扩展——不只检 ref 01 有无 version，还检 ref 15/16 bound_to_token_version 是否 == ref 01 version，版本号漂移即 🟥**/B3）+ **C 类 agent references 悬空检测：C1 frontmatter 数组 / C2 正文 prose（补 C1 盲区）**。frontmatter 解析支持数组 + 吃 UTF-8 BOM。🟥 非零退出。`node scripts/charter-lint.mjs` 或 `npm run charter-lint`。
- 🆕 **新增 5 份设计元素 ref（31-35）**：补"agent 存在、职责明确、但缺对应规范 ref"的缺口。**ref 31 空状态与错误恢复**（四态机 FIRST_TIME/POPULATED/FILTERED/ERROR/LOADING + 切换规则 + 加载档位 + 布局 + 错误 6 类 + 三段文案 + 恢复矩阵，对齐 empty-state-storyteller / error-recovery-designer）· **ref 32 通知系统**（Toast/Banner/Badge/Push 四载体 + 触发哲学 + 视觉优先级 + 聚合 + PLAN，对齐 notification-director）· **ref 33 响应式断点**（sm/md/lg/xl/2xl 断点 + 三栏/模态/表格响应式 + 字号缩放 + 触控目标 44px，对齐 responsive-strategist）· **ref 34 可访问性 a11y**（5 项必检：键盘/焦点/ARIA/对比度/运动 + SPEC 模板，对齐 a11y-guardian）· **ref 35 文案系统**（双声调仪式/稳态 + 5 类文案 + 长度铁律，对齐 copy-writer）。同步 manifest reference_count 30→35 + 6 个 agent references 依赖修正（empty-state/error-recovery/notification/responsive/a11y/copy-writer）。
- 🌗 **ref 01 §13 dark mode 令牌段 + 升 version 1.0.1**：demo case-2026-0622-001 的"dark 适配衰弱整改"声称令牌 1.0.0→1.0.1 新增 dark mode 令牌，但 ref 01 实无 dark 段——悬空。补 §13：中性/语义色 dark 映射 + 玻璃阴影 dark + 切换机制 + 铁律。ref 01 version 1.0.0→1.0.1，ref 15/16 bound_to_token_version 同步 1.0.0→1.0.1（B2b 新检测项首次跑即抓到版本漂移，实证价值）。
- 🆕 **新增 4 份 AI-native 设计元素 ref（36-39）**：补 Path G AI-native agent "有职责无 ref" 的缺口。**ref 36 AI 流式与工具调用**（聊天容器气泡 4 形态 + token 流式 cursor 三态/增量 markdown 稳态边界/渐进披露/中断 + 工具调用四态卡/IO 展示/批量合并/敏感二阶段，对齐 stream-craftsman/tool-call-presenter/chat-ui-craftsman）· **ref 37 AI 对话线程与输入**（线程树 regenerate/edit-resubmit/checkpoint/跨分支对比 + 提示输入容器增高/键盘 IME/@ / / 命令/附件/send 状态机/草稿 + 产物画布脱出阈值/布局/版本 diff/双向桥接，对齐 agent-thread-architect/prompt-input-craftsman/artifact-architect）· **ref 38 表格规范**（4 规模 + 密度 + 列定义 + 表头操作 + Tufte 三铁律 + 树形，对齐 table-craftsman）· **ref 39 思维链可视化**（三形态折叠/展开/流式 + 嵌套识别 + 与答案关系 + 用时 token 透明化 + 隐私边界 + 异常报警，对齐 reasoning-visualizer）。同步 manifest reference_count 35→39 + 9 个 agent references 依赖修正。
- 🆕 **新增 ref 40 AI 资源约束与模型切换 + ref 41 引用与来源标注**：**ref 40**（配额可见性三层 + 用量文案库 + 模型降级 + 排队 + 付费墙禁暗黑模式 + 历史归档 + 切换器 5 形态 + 模型卡片字段 + 温度差提示 + 跨模型一致性，对齐 rate-limit-communicator / model-switcher-stylist）· **ref 41**（inline 引用三形态 + 引用列表区 + hover 预览 + 可信度三档 + 断链处理 + 用户辅助 + AI 生成标记，对齐 citation-keeper）。同步 manifest reference_count 39→41 + 8 个 agent references 依赖修正（rate-limit/model-switcher/citation 新增 + modal/wizard/data-viz/ui-architect/token-keeper 修正 prose 错配——这些 agent 正文引 ref 但没进 frontmatter）。
- 🔧 **5 agent prose→frontmatter 引用错配修正**：modal-craftsman（引 07 未进 fm）/ wizard-designer（引 08）/ data-viz-engineer（引 10）/ ui-architect（引 04/05/06）/ token-keeper（引 01）—— 这些 agent 正文"完整参考"段引用了 ref 但 frontmatter 无 references 字段，C2 检测本该抓但 ref 已填实无占位故未报。本轮补齐 frontmatter，让依赖关系机读化。
- 🆕 **新增 ref 42 品牌规范 + ref 43 i18n 国际化**：**ref 42**（品牌四件套 Logo/色/字/声调 + 5 硬规则 + BRAND VERDICT 模板 + REJECT，对齐 brand-keeper）· **ref 43**（i18n 6 大决策点 LTR/RTL/字宽/行高/数字日期 + 文案空间预算 + RTL 适配清单 + 4 硬规则 + 不翻译清单，对齐 i18n-strategist）。同步 manifest reference_count 41→43 + brand-keeper/i18n references + onboarding-director 补 ref 13/11（owner 错配修正）。
- 🆕 **新增 ref 44 通用组件元素 + ref 45 基础控件系统**：纠正上轮"无 agent owner 不补"的过窄判断——高频复用元素有 UI 共识范式（非臆造），散落各 ref 无系统载体即真缺口。**ref 44**（卡片/骨架屏/Tooltip-Popover/Tab/面包屑/抽屉/分页/顶部导航，8 类散落 64+35+32+15+13+11+14+7 次引用的元素收口）· **ref 45**（按钮五级三尺寸/标签chip/徽章角标红点/头像/进度条/spinner三点/分割线，按钮散落 139+132 次引用却无系统 ref）。同步 manifest 43→45 + ui-architect references。
- 🎨 **新增 ref 46 设计美学与艺术原则（深入内核）**：补"设计艺术层"——前 45 份是功能规范（做得对不对），ref 46 是美学原则（做得有没有灵魂）。沉淀散在 6 个艺术类 agent 的美学主张：加减辩证（莫奈光色 vs 倪瓒冷逸留白）+ R-Cross2 感官完整性律（莫奈）+ R-Cross3 情感张力律（贝多芬·命运四音）+ R-Cross4 环境陪伴律（Eno·ignorable as interesting）+ 音乐三档位辩证（凯奇-Eno-贝多芬）+ 对位结构美学（巴赫·多旋律并行融贯）。同步 manifest 45→46 + 6 艺术类 agent references。
- 🧭 **新增 ref 47 哲学到设计的决策映射（内核的内核）**：ref 17/24/25 讲哲学命题"是什么"，ref 47 讲"怎么落到 UI 决策"——哲学层到功能层的翻译器。D1-D7 矛盾→UI 决策映射 + L1-L5 规律→时代对齐决策 + 矛盾×规律×路径三维决策 + 不可投票底线。同步 manifest 46→47 + dialectician/historian/futurist references。
- 🏛 **新增 ref 48 议会推演范式（内核总纲）**：bench-matcher 六步议会协议散在 agent 文件，无系统 ref；且未串联哲学/艺术/功能层。ref 48 沉淀六步协议 + 端到端推演链（BRIEF→像素每步可追溯回 ref）+ R24 僵局律 + 议会报告 + 诚实声明。同步 manifest 47→48 + bench-matcher/sage-council references。
- 🔧 **哲学层 8 份 ref 补 frontmatter（ref 编号机读化 · 深入内核）**：扫描 ref 间引用网络发现 28 条断链——根因是哲学层 ref（00/17/18/19/24/25/26/27）全无 frontmatter `ref:` 编号字段，文件存在但不可机读为 ref 编号，导致引用网络断裂 + charter-lint B 类覆盖不到。补全 8 份 frontmatter（ref/title/owner/audited_by），引用网络断链 28→0，48 份 ref 全连通。这是"深入内核"的真动作——ref 48 推演链声称"每步可追溯"，但追溯到的哲学根基之前不可机读，现在根基机读化。
- 🆕 **charter-lint 加 D 类 ref 引用网络校验**：D1 检测 ref 正文 "ref N" 引用是否对应有 frontmatter 的文件，断链即 🟥。注入测试证实有效。charter-lint 四类：A 元数据一致性 / B 章程 frontmatter 契约 / C agent references 悬空 / D ref 间引用网络。
- 🏛 **新增 examples/03 Dashboard 三栏工作台 demo（设计艺术可视化载体）**：把 ref 46 美学律 + ref 47 哲学映射 + ref 48 议会推演落成真实三栏工作台。brief（D3 矛盾声明）+ plan（六步实跑·5 常委含加减两端·Round 1 通过）+ specs（token 加减辩证/animation R-Cross3/layout D3 映射决策表）+ report（美学律体检+哲学追溯）。demo 引用 20 ref 全连通。
- 💬 **新增 examples/05 Streaming Chat demo（AI-native 内核可视化）**：把 ref 36-41 AI-native 五件套内核落成真实流式聊天界面。brief（D2+D7 双主矛盾）+ plan（六步实跑·6 常委·Reich/怀特海调解·Round 1 通过）+ specs（streaming/thread-input/reasoning-citation/quota-model）+ report。demo 引用 ref 36-41+46+47+48 全连通。
- 🚫 **新增 examples/04 Wizard demo（REJECT 否决机制可视化）**：把 ref 14 反模式 + ref 47 R18 + ref 31 错误恢复 + ref 29 整改闭环落成"故意埋 6 雷的向导被议会 REJECT 后整改通过"。brief（故意矛盾）+ plan（6 雷 + 首轮 REJECT 10/10 + ref 29 六工单整改 + Round 2 PASS）+ specs/wizard（埋雷 vs 整改对照表）+ report（四层否决联动）。examples/README 04 从🚧→✅。**至此 examples 全集 5/5 完成**：01 仪式 / 02 三道门审核 / 03 工作台美学辩证 / 04 否决机制 / 05 AI-native 全栈。
- 🔧 **ref 46 美学律 cross-ref 补全（内核质量深审）**：发现 ref 46 cross-ref 仅 2，美学律在 ref 01/11/32/36 有落地却未反向串联=内核断链。补 7 处 cross-ref（加减辩证→ref 01/33/examples-03；R-Cross2→ref 01；R-Cross3→ref 11/36；R-Cross4→ref 32/36）。ref 46 cross-ref 2→7。同时确认 ref 47 D1-D7 与 ref 24、L1-L5 与 ref 25、ref 48 六步与 bench-matcher 一致。
- 🔧 **ref 27 圣人卡 vs agent 矛盾标注一致性深审**：抽审 12 种子席圣人卡，修巴赫卡 D3→D1（与 counterpoint-architect agent 对齐）；8 个圣人卡 vs agent 矛盾标注差异判定为历史哲学语境 vs 设计系统语境合法双面性，ref 27 §0 加视角说明。
- 🔧 **charter-lint 加 B1b charter↔ruleset 版本同步校验（两把同步刀全覆盖）**：ref 28 §版本同步契约显式声明 G5 跑"两把同步刀"——① charter↔ruleset（CHARTER_OUT_OF_SYNC）② ruleset↔token（RULESET_OUT_OF_SYNC）。但 charter-lint 只验第二把（B2b），第一把只在 B1 检字段"存在"不检"版本号相等"。补 **B1b**：检 ref 28-30 bound_to_ruleset_version == max(ref 15/16/19 ruleset_version)，落后即 🟥。同时修 ref 19 ruleset_version 2.3.0→1.0.0（误抄自 bound_to_skill_version）。注入测试通过。两把同步刀均有机器保障（B1b + B2b 对称）。
- 🔧 **charter-lint A6 扩展检 SKILL.md frontmatter version + 修 SKILL.md 4.2.6→4.2.7**：发现 SKILL.md frontmatter version=4.2.6 但 manifest/package.json/README badge 全 4.2.7——SKILL.md 是 skill entrypoint，版本必须同步。A6 原只检 package.json vs manifest，扩展也检 SKILL.md frontmatter version == manifest。注入测试：SKILL.md 改回 4.2.6 → A6 精准抓，还原全绿。版本号现四处同步（SKILL.md/manifest/package.json/README badge）且全被 charter-lint 机器保障。
- 🖼️ **新增 examples/visual-evidence/index.html（首个可直接渲染的视觉证据）**：前 48 份 ref + 5 份 demo 全是 markdown 文字，无浏览器可看界面——"设计艺术"缺视觉证据。建单文件 HTML（零依赖·浏览器直接打开），把 ref 01 色谱 + ref 46 加减辩证（莫奈光色 vs 倪瓒冷逸）+ ref 44/45 组件（按钮/chip/徽章/spinner/tooltip）+ ref 46 R-Cross3 情感张力脉冲 + ref 04 三栏布局 + ref 47 D3 哲学映射决策表 + ref 01 §13 dark mode 全部渲染成肉眼可看像素。从文字到像素——"设计艺术深入内核"的终极证据。examples/README 加视觉证据入口。
- 🔧 **charter-lint JSON 损坏健壮性修复（校验器自校验）**：审计 charter-lint 自身代码质量，发现 manifest/package.json JSON 语法错误时（合并冲突/手动编辑损坏）charter-lint crash（SyntaxError 未捕获）且 exit=0——CI 会放行损坏的 manifest。修：manifest 加载加 try-catch（语法错误→报错+exit 1）；A6 package.json 加载加 try-catch（语法错误→A6 block+exit 1）。验证：语法错误 manifest exit=1 ✓，语法错误 package.json A6 block+exit=1 ✓，正常全绿 exit=0 ✓。校验器现在不会因输入损坏而静默放行。
- 🎨 **ref 01-14 + 3 patterns 全量填实**：14 份 references（除已填实的 ref 01/09/14 外，本轮补 02/03/04/05/06/07/08/10/11/12/13 + component-patterns/interaction-patterns/steps-schema）全部从"说明：本条描述"占位模板填实为真规范——每份读真实数据骨架（占位符仅 1-28%，余为真实 SPEC/代码），填语义标签 + frontmatter + 决策日志，对齐依赖 agent 的引用语义。同时清理 ref 02/09 等的"本段补充说明"重复噪声段。全库占位符归零，C1/C2 全清，charter-lint 零漂移零警告。
- 🚫 **ref 14 反模式清单填实**：18 条交互/令牌反模式 + a11y 专项 + 文案专项。
- 📝 **ref 09 表单控件规范填实**：11 类控件 + AI 控件 + 拖拽上传 + 状态表。
- ✨ **ref 02 Eureka 欢迎闪现**：8 keyframes + 5 层组合组件 + 触发逻辑。
- 🎬 **ref 03 仪式步骤模态 HeroStage**：Imagine/Vision/Translate 三舞台 + 视差 + 步骤布局。
- 🏛 **ref 04 三栏布局**：Icon/Detail/Main 骨架 + 折叠 + 全宽白名单 + z-index + 路由。
- 📐 **ref 05 IconSidebar** / **ref 06 DetailSidebar**：侧栏容器/switcher/nav/avatar/右键菜单/空态。
- 🪟 **ref 07 模态系统**：9 尺寸 + Portal 骨架 + Header/Body/Footer + 危险确认 + 6 变体 + 滚动锁。
- 🧙 **ref 08 向导模式**：面包屑 Stepper + 状态 + 布局 + 网格 + 等待态。
- 📊 **ref 10 数据可视化**：图谱画布/节点配色/连线/缩放/表格/分页/指标卡/chip/Popover/Tooltip/AI 面板。
- 🎞 **ref 11 动画库**：8 稳态工具类 + 时长/缓动令牌 + 仪式 keyframes 清单 + 铁律 + 降级。
- 🎨 **ref 12 图标库**：9 域文件分布 + SVG 模板 + Material Symbols + 4 变体 + 清单。
- 🔦 **ref 13 Tour 引导**：spotlight 遮罩 + 高亮 ring + Tooltip + 位置计算 + 持久化。
- 🧩 **component-patterns**：11 段仪式组件（骨架/头部/高亮卡/Footer/checkbox/按钮/tooltip/键盘/彩带/polaroid/持久化）。
- 🖱 **interaction-patterns**：12 段仪式交互（视差/键盘/滚轮/拖拽/自动播放/方向/visited/完成/关闭/SSR/关闭按钮/z-index）。
- 📋 **steps-schema**：Step 接口 + 三步主题渐变 + 示例 + 填充约束。

### Changed
- 📄 **SKILL.md**：主流程图挂三道门(ref 28-30) · 组织架构 52→54 agent + Tier 6 加 review-orchestrator/meta-auditor · 执行层表 34→36 位 · 参考库表加 ref 28-30 · R 编号术语表
- 📄 **agents/ui-auditor.md**：补三道门角色段(G5蓝军终审/R1开单R4复审/K轨执行M4被互攻) + frontmatter description
- 📄 **README.dev.md**：补三道门 ASCII 流程图段 · 目录"27 份"→"30 份规范"
- 📄 **examples/README.md**：02 三道门 demo 标 ✅ 完成 · 原 02-04 顺延为 03-05

### Fixed
- 🐛 **ref 28 §4 合规门槛自相矛盾**：原「合规维 = 5」门槛与 §3「W 命中仅扣分不自动否决」冲突（W 命中必使合规 < 5 → 强制退回，等同自动否决）。改为「R 规则零命中」门槛，W 命中仅扣分拉低总分，与 §3 一致。
- 🐛 **ref 30 §2-K1 触发条件过窄**：原「令牌大版本升级（跳 major）才全采」与 demo（1.0.0 → 1.0.1 新增 dark mode 令牌触发采样）矛盾。改为「令牌任何变更（含新增令牌集的小版本升级）即全采」——旧内容当时令牌齐全不代表现在齐全。
- 🐛 **ref 29 §1 入口遗漏**：K3 衰弱复用 ref 29 R1 开 W 级工单是制度设计（ref 30 §2-K3 / review-orchestrator 跨门流转均已声明），但 ref 29 §1 入口只写了 G6 FAIL。补 K3 衰弱为第二入口，事后门 → 退回门回灌可追溯。
- ✏️ **demo r1-r5 状态拼写**：`REMEDICATION` → `REMEDIATION`（多一 C，与 review-orchestrator 状态机 / case-verdict 不一致）。
- ✏️ **demo r1-r5 加权总分算术**：`0.25×4.5 + 0.2×5 + 0.15×4.5 + 0.15×4.5 + 0.15×4 + 0.1×4 = 4.475`（原误标 4.5），case-verdict 状态机同步 4.5 → 4.475。
- ✏️ **demo case-verdict 工单状态**：ticket-3（dark 适配）状态机已标「销项后 ARCHIVED 续用」，SLA 表却标「进行中」——改为已销项，终态自洽。
- ✏️ **review-orchestrator 状态机箭头**：原 `… → ARCHIVED → CULLED` 暗示 CULLED 是 ARCHIVED 的后继，实为 K 轨过时/推翻的独立终态。改为分支标注。
- 🐛 **agent 数 52→54 全库同步漏改**：v4.2.7 commit 把 manifest/SKILL 改到 54，但漏改了正文多处 `52`——README.md（导航链「看 52 位 agent」+ 目录树「52 位匠人」+ 对比表「52 agent + 议会民主」+ mermaid「420 thinker · 52 agent」+ 章节标题「52 agent · 8 tier」）、README.dev.md（「52 位匠人」）、README.en.md（`wc -l # should print 52` + 「52 specialized agents」+ 「52-agent coverage」）、CONTRIBUTING.md（「52 个 agent 边界」）、.github/ISSUE_TEMPLATE/feature_request.md（同款边界问题）、docs/antigravity-integration.md（「52 个 agent」）。CONTRIBUTING.md:76 自检 grep 本就列 `52 agent|52 位` 为待查陈旧串（正确，保留），其余正文一律 52→54。这正是该自检 grep 该拦住的漂移，本轮补跑。
- 🐛 **references 数 27→30 全库同步漏改**：README.md 目录树仍写「27 份规范」、docs/antigravity-integration.md 仍写「27 份规范」（README.dev.md 已改 30），一并改 30（含 ref 28-30 审核制度）。
- ✏️ **examples/README.md 筹备中清单未顺延**：表格已把 02 换成 Three-Gates Modal（✅）、原 02-04 顺延 03-05，但表下备注仍写「02 / 03 / 04 案例正在筹备中」——02 已完成。改为「03 / 04 / 05」。
- 🐛 **ref 01 设计令牌表是占位模板但全库当真令牌库引用**：token-keeper 称其为「圣经·唯一真相·完整冷暖色双段」、00-collaboration-protocol 称「视觉原子唯一真相」、ui-auditor 据其 `bound_to_token_version` 拒绝执行——但 ref 01 本体是"说明：本条描述…"占位符（虽含冷暖色数据骨架但无标签无 version）。9 处引用承诺 vs 占位现实的实现债。填实为真令牌库（见上 Added）+ 补 version 1.0.0，契约兑现。由 charter-lint B2b/B3 首次跑即抓出（脚本拦截价值再证实）。
- 🐛 **package.json version 4.2.6≠manifest 4.2.7**：v4.2.7 commit 改了 manifest/SKILL，漏了 package.json。由新增的 `charter-lint.mjs` A6 项首次跑即抓到（脚本实证拦截价值），修为 4.2.7。
- 🐛 **02-14 references 同 ref 01 同性质占位债（性质纠正 + 全量填实）**：此前误判 02-14 为「纯占位·需领域设计决策·超机械修复边界」。经核实 02-14 非纯占位——有真实数据骨架（占位符仅 1-28%，余为真实 SPEC/代码），与 ref 01 同性质=「数据在、标签缺、机械可补」。且 agent frontmatter `references:` / 正文 prose 将它们列为依赖，占位部分=承诺悬空。新增 charter-lint C 类检测（C1 frontmatter + C2 prose）抓出悬空。本轮全量填实 14 份 ref，占位符归零，C1/C2 全清。
- 🐛 **charter-lint frontmatter 解析遇 UTF-8 BOM 静默失败**：带 BOM 的 agent 文件（如 modal-craftsman.md 开头 `EF BB BF`）致 `^---` 匹配失败 → frontmatter 返回 `{}` → C 类检测漏报。修：解析前吃掉 BOM。此 bug 会让所有带 BOM agent 的 references 悬空检测失效，C 类上线即暴露并修复。
- 🐛 **[机制与机理内核审计 R2 · ref 28 §版本同步契约不完整]**：§版本同步契约只写了 charter↔ruleset 检查（`bound_to_ruleset_version`→`CHARTER_OUT_OF_SYNC`），漏写 G5 同时继承 ref 15/16 的 ruleset↔token 检查（`bound_to_token_version`→`RULESET_OUT_OF_SYNC`）。这造成 §2-G5/§9 的 `RULESET_OUT_OF_SYNC` 看似与契约段 `CHARTER_OUT_OF_SYNC` 自相矛盾的假象（审计一度误判为字段错配）。补「G5 跑两把同步刀」段——两把刀·两个字段·两个码·两层 owner 各归位，假矛盾消除。（⚠️ 反误判记录：审计 agent 据此一度提议把 §2-G5 改成 `CHARTER_OUT_OF_SYNC`，那会反而破坏与 ui-auditor.md:74 / ref 15:21 契约的一致性——人工核验 ref 15 + ui-auditor 后否决该提议，改为补全契约段。）
- 🐛 **[机制与机理内核审计 R2 · ref 28 §2-G1 R18 误标]**：G1「缺 BRIEF 或验收标准」误标为 R18（矛盾两端都站·没选倾向）命中。R18 是 dialectician 的病因级规则（既要 A 又要 ¬A 没选倾向，见 ref 24 §五 / moment-strategist:133），不管缺件——缺件是 G1 完整性硬门。误标会污染 ref 29 §6「屡犯同缺陷→提规则 PR」的 `rule_hit` 信号（缺件被记成 R18 屡犯 → 错误地提 R18 规则 PR）+ ref 30 M 轨元审计诊断。改为「立案要件不全」G1 硬门，并显式注明「非 R18」防再混。
- 🐛 **[机制与机理内核审计 R2 · bench-matcher §Step6 投票公式与示例自相矛盾]**：`total_votes: 2*k + (N - k)` 用扁平 2 票且把全员 N 计入分母，与本文件 dynamic_bonus（task_kind +0.5 cap 2.5，见 §voting_weight）+ `abstain_handling: 不计入分母` + Example A（有效票权 2+2+2.5+2.5+1+1=11.0，海德格尔 abstain 不计，门槛 ⌈11.0×2/3⌉=8）+ ref 48 §7 全部冲突。按例 A 真值改写为 `Σ(base+dynamic_bonus) over 投票圣人 · abstain 不计入`。原公式在「有 task_kind 加成」或「有人弃权」时算错门槛——Example A 巧合凑整（11→8 两可）掩盖了 bug。
- 🐛 **[哲理机理内核审计 R3 · R7-R12 编号空洞 · 伪制度冰山]**：全库精确扫描 R1-R25 哲学命题级规则发现 **R7-R12 六条全库 0 引用 0 定义、无任何预留/候选说明**——但 ref 24 §七声称「R1-R17 是症状级规则」、ref 28/29/30 frontmatter 声明 `hard_rules: R1-R25`、ref 28 §G3 价值维 0 分红线写「R1-R25 命中」、SKILL.md 术语表声称「全局编号·25 条」、ref 17 顶部摘要写「REJECT R1-R12」。**声称 25 条连续硬规则全集，实际 19 条（R1-R6 ∪ R13-R25），中间 R7-R12 凭空蒸发**——审计在引用 6 条幽灵规则，正是 R23 疾虚妄律该抓却漏网的「完整性装腔」伪制度。根因：R 规则散落 8 处定义（ref 17/24/25 + 5 agent），**无单一权威索引**，故无人发现塌陷。修：① ref 17 §三建「R 规则编号全景」权威索引表，显式标注 R7-R12=🟥编号空洞·v2.x→v3.1 跳号预留·未启用·不得当存在规则引用，并规定「新增 R 优先回填空洞再扩 R26+」；② ref 24 §七「R1-R17」→「R1-R6 与 R13-R17」+ R7-R12 注；③ ref 28 §G3「R1-R25 命中」→「任一已定义 R 规则(R1-R6,R13-R25)命中」；④ SKILL.md 术语表「25 条」→「19 条已定义·R7-R12 预留空洞」+ 扩展段「R1-R25」→「R1-R6 ∪ R13-R25」；⑤ ref 17 顶部「33 agent + R1-R12」双重 stale→如实改述。frontmatter `hard_rules: R1-R25` 保留（意图声明=全部已定义 R 规则，由 ref 17 §三 澄清其意）。未补齐 R7-R12 真规则——补齐需哲学命题决策，超机械修复边界，留作 R 规则 PR 议题。
- 🔍 **[哲理机理内核审计 R3 · debunk 排除项]**：SKILL.md §REJECT 扩展段把 R19 描述为「无为减法」/ R20「齐物多视角」，初看与 moment-strategist R19「元素无 intent」/ R20「单一视图独裁」冲突。核验判定**非矛盾**：SKILL.md 给的是 R19/R20 的**哲学命题**（老子/庄子锚点，类比 R1→康德），moment-strategist 给的是**触发条件**，同一规则两面（无 intent → 违反无为减法命题；单一视图独裁 → 违反齐物多视角命题）。记录排除理由，防后续审计重复怀疑。
- 🐛 **[哲理机理内核审计 R4 · ref 17 stale 与内部 Tier 编号自相矛盾]**：ref 17 三处 stale + 一处内部矛盾。① §一「四层文档配合 Tier 0 三件套(dialectician/historian/futurist)构成 v3.0 哲学完整体」——historian/futurist 于 v4.2.6 并入普通板凳不再有「三件套」特殊身份，dialectician 升议会 12 席；改为 v4.2 三大类议会 + 演进注。② layers 表缺 ref 27（板凳附录·议会候选池）行——补。③ §二标题「14 Agent 哲学锚点」——实际 v3.0 列14→v2.4补10→v2.5补9 累计33，系统现54，缺的21位(Tier0议会12席+部分新增)锚点在 ref 27/各agent；标题诚实化为「执行层 Tier 1-6 · 跨版本累积」+ 覆盖范围声明（非全集，补齐54位是领域写作议题非机械修复）。④ **内部 Tier 编号矛盾**：§二把 moment-strategist 标「Tier 0·入口调度」，但 §二补 把 flow-coordinator 标「Tier 1.5 协调」——后者只有 moment-strategist=Tier 1 时才成立（与 SKILL.md v4.2.7 一致），前者是 v3.0 残留脊柱（v4.2 议会插入 Tier 0 后整体下移一位）。同一文件两套 Tier 编号并存。加 §二 banner 声明以 v4.2.7 当前脊柱为准 + moment-strategist 实为 Tier 1。
- 🐛 **[哲理机理内核审计 R4 · SKILL.md R-Cross1-4 执行错配 quotation-verifier]**：R-Cross1-4 编号体系经审**完整无空洞**（四律各有家：R-Cross1 ref27+polymath-bridger / R-Cross2/3/4 ref27+ref46+各自agent），无 R-Cross5+ 幽灵——与 R7-R12 不同，这套编号健康。但 SKILL.md:47 编排图把「R25 + 艺音 R-Cross1-4 五律兜底」归给 quotation-verifier，而 quotation-verifier agent 全文 **0 处提 R-Cross**（只管 R25 引用真实）。R-Cross1-4 实际由 4 位艺音圣人于议会 Step 5 讨论执行（见 sage-council.md:88-95 + 4 agent r_anchor），非 quotation-verifier 职责。修：SKILL.md:47 改为「quotation-verifier 仅 R25；R-Cross1-4 由 4 圣人 Step5 执行」。另补 ref 46 R-Cross1 归属说明——R-Cross1(跨学科联结·结构律)不在 ref 46(设计美学)是设计取舍(结构律vs美学律分治)非缺漏，让"四律"套装读作有意拆分。
- 🐛 **[哲理机理内核审计 R4 · examples/04 R18 悬空指针 ×9]**：审 examples 03-05 端到端一致性——R 规则引用全在真实集(R1-R6∪R13-R25)内、无 phantom range、R-Cross/D1-D7/L1-L5/ref 引用全对得上。但 examples/04 多处指向「ref 47 §R18」（brief:23/plan:49,100/README:9/report:49 + "47/24" 表格列 plan:23/README:38/report:66/wizard:101 共9处），而 ref 47 **完全不提 R18**（ref 47 §一 只映射 D1-D7 矛盾→UI决策，D1 内提 R3 触发但不涉 R18）——9 处悬空指针。R18 真家 = ref 24 §五（R3 已在 ref 17 §三 权威索引标明）。修：9 处「ref 47 §R18」/「47/24」→「ref 24 §五」。另补 ref 47 §一 R18 交叉引用——ref 47 映射矛盾却没说「不选倾向会怎样」是完整性缺口，补「不选倾向→R18退回(ref 24 §五)」既补缺口又让 ref 47 成为合法的矛盾→执行桥梁。examples/03(D3/R-Cross2/3)、examples/05(ref36-41) 核验全自洽，无需改。
- 🔍 **[哲理机理内核审计 R4 · debunk 排除项]**：examples/04 brief 把 demo 矛盾框架为「极简 vs 功能全」(简洁vs完整)，plan/report 标为「D1 简洁⟷可发现 两端都站」——「功能全」≠「可发现」严格说不全是 D1。核验判定**非缺陷**：R18 触发于「任一矛盾没选倾向」，D1 标签仅作示意，demo 用意是触发 R18 而非精确归类某 D；R18 不依赖具体 D 编号即触发。记录排除理由。
- 🐛 **[机制机理内核审计 R5 · 套娃止层循环闭环漏洞 · meta-auditor↔sage_congress 利益冲突]**：深挖三道门制度最深逻辑闭环——ref 30 声称"套娃止于 sage_congress 2/3 仲裁，不无限递归"，但发现两层循环利益冲突：① **M5 弹劾投票悖论**——M5 弹劾"评分圣人失准"需"sage_congress 2/3 仲裁通过才执行"(§M轨权限 line 206)，而被弹劾的评分圣人**正是 sage_congress 议会成员**——等于被弹劾者投票决定自己要不要被弹劾，直接违反 ref 30:202 自己定的"不能让 sage_congress 审自己"红线。ref 30:84 给了 K2 复审员避嫌("不得是原放行议会成员")但 **M5 弹劾投票无对应避嫌**。② **M3↔仲裁双向闭环**——M3 meta-auditor 审议会(法定人数/投票理由/集体翻车)，议会又仲裁 meta-auditor 失准(§9 line 213/247)，被审者反过来仲裁审它的人。根因：sage_congress 在 ref 30 里是"机构/集体"概念但投票权实体就是被审圣人，**机构避嫌机制缺失**。修：① ref 30 §M5 加「弹劾投票避嫌律」——被弹劾圣人本人+师承链上下1跳强制回避不计分母；仲裁议会由三大类重选未被牵连组(复用动态常委机制·非原被审议会自审)；蓝军互攻弹劾同理互回避；避嫌后人数不足扩召独立组补齐(同G4平票逻辑·防"凑不齐就放过")。② ref 30 §10 闭环总检第4条补"sage_congress 自身被监督了吗"问号(原只问 meta-auditor 被监督没)。③ meta-auditor agent description+M5 行同步避嫌律。**排除项(防误判)**：仲裁 meta-auditor 失准时议会成员非"审自己"(meta-auditor 是独立角色非议会成员)，不触发循环——避嫌律精确针对"仲裁评分圣人失准"场景，逻辑正确不扩大化。这是制度的逻辑闭环未真正闭合——不是无限递归问题(止层做对了)，是止层仲裁本身的利益冲突没处理。
- 🐛 **[机制机理内核审计 R6 · R5 避嫌律算术交互死循环 · 补"先类别后人数"扩召优先级]**：复查上轮 R5 引入的避嫌律，发现它自己制造了一个算术死循环。R5 写"避嫌后人数不足→扩召独立组补齐"——但扩召按"分高优先"，而哲学类板凳 335 位最厚、易独占扩召名额，可能凑齐**人数**却只 1 类代表→不满足 G4 S 级"≥3 类有代表"→触发"凑不齐退回"→而 M5 弹劾**不能退回**（退回=放过失准圣人，违制度初衷）→死循环。根因：避嫌律只说"补人数"，没说"补类别"，与 G4 法定人数的**类别维度**没对齐。修：ref 30 §M5 避嫌律第4条补"扩召优先级=先类别后人数"——扩召须先保 G4 类别覆盖（每类≥1 位未被牵连厚仙人，S 级≥3 类/A 级≥2 类）再按分补人数；某类全员被牵连（极罕见，如某学派师承链整体失准）→ 记"缺类"降级处理（S 级弹劾转 A 级法定人数·如实记录回避范围·不伪造类别覆盖）。meta-auditor agent M5 行同步。**冰山扫排除项**：① 普通议会（G4）凑不齐3类=退回是**合法**的（普通 case 退回是正常流程重做即可），只有 M5 弹劾不能退回——区别在此，普通议会不需改；② bench-matcher P0-2 加减平衡递补只管[+]/[-]端不管类别，但类别由 G4 兜底、普通议会类别不足合法退回，故 P0-2 不需管类别（自洽，不扩修避免过度工程）。这一轮是"修自己上轮引入的债"——R5 闭合了利益冲突循环，R6 闭合了 R5 引入的算术死循环，两层闭合才算真闭环。
- 🐛 **[机制机理内核审计 R7 · R6 缺类降级逃审风险 · 补降级边界+防滥用]**：复查上轮 R6 引入的"缺类降级"escape hatch，发现两个真实风险。① **降级边界模糊**：R6 说"转 A 级法定人数≥2类"，但 ref 28 §1 A 级定义含"议会规模减半"——降级若连带触发减半，弹劾投票基数变小，2/3 通过线的实际票数变少→实质放松弹劾门槛（惩罚失准者的环节放松惩罚门槛，自相矛盾）。且 ref 28 §4 S 级评分门槛（加权总分/短板红线/准确维）是否套用未声明，留模糊空间。② **缺类可被故意制造逃审**：被弹劾圣人若其师承链(ref 27 invited 链)覆盖某类多数学人，理论上可人为制造某类"全员被牵连"触发降级放松弹劾。修：ref 30 §M5 补「降级边界与防滥用」——降级**只降 G4 类别要求**(S级≥3类→A级≥2类)，**不降其他**：① 通过线仍 2/3(不分 S/A)②议会规模不减半(A级减半是省token优化不适用M5弹劾·保2/3票数基数不稀释)③不套§4评分门槛(那是生成物放行门槛·M5是投票弹劾门控·套用对象不同)；**防滥用**：回避名单禁被弹劾方自报，由 meta-auditor 独立核验师承链真实性(ref 27 invited 链可追溯·禁臆造师承扩大回避范围造"全员被牵连")，降级记录(缺哪类+回避名单+师承证据)公开受监督。meta-auditor agent 同步。**排除项**：核验通过线不论S/A级均2/3(ref28§G4 line92)——降级本就不放松通过线，R6 这点做对了，R7 只补"减半"和"评分门槛"两个 R6 没声明的模糊维度。S级规模本就≤cap15，"不减半"=保持原规模无冲突。R5闭合利益冲突→R6闭合算术死循环→R7闭合降级逃审，三层闭合，M5弹劾避嫌才算端到端无漏洞。
- 🔧 **[机制机理内核审计 R8 · 横向复用避嫌律到 K2 复审员]**：冰山扫——M5 弹劾避嫌做到三层（回避+独立核验+公开记录），K2 复审员避嫌(ref30:84)只有一句"不得是原放行议会成员"。同类问题（避嫌防滥用）不对称。但 K2 风险层级更低（审内容衰弱非审审核者，利益冲突弱），修法对齐结构不照搬全部：ref 30 §K2 补「K2 避嫌完整版」三层——①身份核验（回避"原放行议会成员"由 meta-auditor 查 case_id G4 投票记录核验，禁自报漏避）②独立性记录公开 ③凑不齐扩召独立组补齐（同 M5 逻辑），极罕见"全员牵连"由 meta-auditor+sage_congress 联合指定外部视角复审（套娃止层兜底不伪造独立性）。
- 🐛 **[机制机理内核审计 R8 · ref 29 §6 屡犯提规则PR 学习闭环两处断链]**：审三道门间"个案→制度沉淀"学习闭环，发现两处断链。① **M轨→§6 反哺断链**：M3 发现"某圣人持续失准"只反哺 K1 重采样(ref30:58/132)，不反哺 ref 29 §6 提规则PR。但圣人持续失准说明"规则没覆盖到他的失准模式"——正是该提规则PR的信号，M 轨发现制度缺口却没接学习闭环。ref 29 §6 触发条件三个全是"同 owner/同位置/同 acceptance"工单维度，漏 M 轨"同圣人持续失准"维度。修：§6 触发条件补第四条"M 轨反哺——同圣人 M2 校准警告≥2次/季度即触发提规则PR"。② **规则PR合并后版本同步无主**：§6 动作"PR合并→进R规则集"没说谁负责升 ruleset_version + 同步 bound_to_token_version(ref15/16) + bound_to_ruleset_version(ref28-30)。ref29:26 只"检查同步"(被动)，§6 是"产生新规则"(主动源头)——主动源头没挂版本同步，会产生 charter-lint B1b/B2b 该抓的漂移。修：§6 动作补第4条"版本同步——PR合并须由 owner 升 ruleset_version(minor bump)+同步三处 bound_to+跑 charter-lint 验证零漂移，漏同步=PR不算合并完成"。
- 🆕 **[机制机理内核审计 R8 · charter-lint E 类语义检测·固化七轮审计模式]**：把 R3/R5/R7 三类逻辑债检测固化为 charter-lint 新 E 类（A 元数据/B 章程契约/C refs 悬空/D ref 网络 → 加 E 语义逻辑债），让以后这类 bug 不靠人挖。三类确定性 grep 级检测：**E1 编号全集空洞**（扫"R1-R25"式范围声称对比实际定义，空洞且无"预留"声明→🟥，对应 R3 R7-R12 幽灵规则）；**E2 被审者审自己循环**（meta-auditor审议会+议会仲裁meta-auditor双向闭环无避嫌词→🟥，对应 R5）；**E3 escape-hatch 无防滥用**（"降级处理/扩召补齐/缺类降级"段无"核验/公开/监督/独立"→🟧，对应 R7）。调试修两处误判：E1 排除 frontmatter `hard_rules: R1-R25`（YAML 列表项 `- hard_rules`，意图声明非正文声称）；E3 收紧 hatchWords（"降级"单字误报 perspectivist/wuwei-master 的"无为降级"与 rate-limit-communicator 的"模型降级"→只匹配制度性 escape 复合词）。**注入测试三类全通过**：E1 注入"R1-R20全集"→抓；E2 删 meta-auditor 避嫌词→抓；E3 注入无防滥用降级段→抓；还原后零漂移 exit 0。CONTRIBUTING 自检段同步五类描述。这是"进一步优化"的杠杆点——七轮人挖的 bug 模式现在机器拦，下次同类债 charter-lint 直接 🟥。
- 🔍 **[机制机理内核审计 R8 · debunk 排除项]**：E3 设计初版用"降级"单字误报 3 agent（perspectivist 庄子"无为降级"、wuwei-master 老子同、rate-limit-communicator"模型降级"——都是技术/哲学语义非制度 escape hatch）。核验后收紧到制度性复合词，零误报。记录：语义检测的 hatchWords 必须用复合词防同形异义，单字 grep 在中文哲学语境噪声大。
- 🔍 **[机制机理内核审计 R9 · examples/02 三道门 demo 端到端核验·自洽]**：审 examples/02（三道门 demo 本体，前几轮只动 03/04/05，02 未审）。R 规则引用全在真实集(R1-R6∪R13-R25)内无 phantom；R1-R5 是 ref 29 整改步骤非哲学规则（同名易混但语境清晰）；G3 评分表 6 维与 ref 28 对齐；02 退回触发点是合规维 R-05 命中（非价值维），R3 改价值维措辞不影响 02 → 自洽。仅微调 02 G3 价值维说明补"0 分红线"对齐 ref 28（demo 简化可接受，但既审到则对齐更严谨）。诚实判定：02 干净，R9 价值在"验证 02 与 R2-R8 改动自洽"——非每轮都必须挖到 bug，审完如实说干净也是闭环。
- 🔧 **[机制机理内核审计 R10 · ref 17 §二 33→54 agent 锚点指针级对齐]**：R4 诚实标注"补齐 54 位锚点是领域写作议题非机械修复"，本轮做指针级对齐消解这个最大遗留债。diff 发现 ref 17 §二 列 24 位、系统 54 位、**32 位缺锚点**（R4 估 21，实 32）。不臆造哲学锚点（每条需哲学家+原文+行为约束+判罚位置四件套，是哲学写作非机械填充），改在 §二 末尾加「32 位缺锚点索引表」分两类给指针：① Tier 0 议会圣人 12 席→指向 ref 27 厚仙人档案卡 + 各 agent philosophical_anchor 字段；② 引擎+降级四人+横切/Path G 新增 20 位→指向各 agent 锚点字段 + 对应 ref。让"缺锚点"从隐形债变可追溯指针，后续逐位增厚为完整条目。
- 🔍 **[机制机理内核审计 R11 · E 类实战验证 + E2 通用层探边界撤回]**：两步。① **E 类全库实战扫**——R8 新工具在真实全库(54agent+48ref+5examples)零误报零漏网，工具经实战验证。② **E2 通用层探边界**——测 E2 能否抓"复审员审自己放行的工单"类变体（原 E2 只认 meta-auditor↔sage_congress 特定对），试加"审/复核+自己/原放行"通用措辞检测层 → **误报率 4/4 全误报**：ref 27"每日自审审视自身"(康德哲学锚点描述)、ref 29"复审员=原审agent怕自己打脸"(反例句式)、ref 30"不能让sage_congress审自己"(避嫌声明本身被段落切割)、ui-auditor"自己审自己等于没审"(反例警示)。根因：自审措辞在反例/警示/哲学描述里合法出现，grep 无法区分句法角色。**诚实撤回**通用层，E2 保留①特定对检测(已验证有效)，通用层注释记为"留待句法角色分析，非 grep 能胜任"。这是 PUA 自我审视的诚实面——加了发现噪声>价值就撤，不死磕有缺陷的检测。E1/E3 不受影响仍零误报。
- 🆕 **[机制机理内核审计 R12 · charter-lint E4 · R-Cross 编号体系空洞检测]**：审 R8 E 类检测自身覆盖盲区——E1 只扫 R1-R25 范围，**R-Cross1-4 跨学科律是另一套编号体系**（散落 ref 27+ref 46+4 agent，无单一索引，与 R 规则塌陷前同构），E 类完全没覆盖。R3 验过 R-Cross 现在完整（无 5+ 幽灵），但"现在完整"≠"未来不塌"——R7-R12 就是演进中塌的，R-Cross 有同构风险却无机器检测。补 **E4**：扫"R-Cross1-4/跨学科四律"全集声称 → 对比实际定义的 R-Cross 编号 → 空洞即 🟥。调试两处：① 初版用文件级"预留/空洞"排除误伤（SKILL.md 含 R7-R12 声明就整个跳过 R-Cross 检测）→ 去掉文件级排除（R-Cross 无跳号历史，全集声称缺定义即报）；② 初版只取第一个范围声称，单文件多声称时漏抓（SKILL.md line 47/370/440 三处 R-Cross1-4，注入 line 370 改 R-Cross1-5 因 line 47 先匹配 [1,4] 无空洞而漏报）→ 改为遍历所有声称。注入测试通过：R-Cross1-5 → 🟥 抓 R-Cross5 无定义；正常零误报。CONTRIBUTING 同步 E 类四项。E 类现覆盖两套编号体系（R 规则 + R-Cross），R3 类幽灵规则漏洞在两套体系都有机器拦截。
- 🔧 **[哲理机理内核审计 R13 · D 命名空间污染 · Canon-D vs 矛盾-D 同号不同义]**：审第三套编号体系 D1-D7（矛盾）/L1-L5（规律）发现命名空间冲突——**D8/D9 在系统里有两套完全不同含义**：ref 24 §九 `D8 同步⟷异步`（矛盾候选·v3.1·未启用）vs ref 18 §一 `D8 Good design is thorough`（Dieter Rams 十诫 Canon）。同号不同义，若 agent 裸引 `[D8]` 无前缀无法判断指哪个。核验判定**中低风险**：ref 24 D8/D9 已标"候选未启用"（不算幽灵，有声明）；ref 18 引用规范是 `[Canon-D8]` 带前缀（§首行）；cases 文件已正确用 `[Canon-D8]`。但 ref 18 §六引用矩阵用裸 `D8`（icon-curator/token-keeper）——矩阵虽标题锁 Canon 语境，裸写仍是混淆入口。修：ref 18 §六加「D 命名空间声明」——显式声明本表 D1-D10 是 Canon 体系非矛盾体系，规范引用须带 `Canon-` 前缀，禁裸 `D8` 跨体系引用。**未加 E5 检测**（诚实判定边际收益低）：无现存裸 `[D8]` 跨体系引用，cases 已正确带前缀，加 E5 检测"裸跨体系引用"会成过度工程（无目标可抓）。声明+前缀规范已足够隔离，留文档层而非机器层。记录排除理由防后续重复怀疑。
- 🔧 **[哲理机理内核审计 R14 · E 命名空间污染 + A5 覆盖盲区 + ui-auditor/ref26 stale]**：R13 审 D 命名空间后，审 ref 18 其余子体系（B/V/A/E）发现更严重的 E 冲突——**E1-E2 两套都是活跃使用**：ref 18 §五 `E1 间(Ma)/E2 物哀`（Canon 东方哲学）vs ref 26 `E1-E8` 八大时代（frontmatter `historical_era` 锁定编码，98 处 agent 在用）。不像 R13 的 D8 候选未启用，E 两套都活跃。修：ref 18 §五 + ref 26 顶部互指加「E 命名空间声明」——Canon-E 引用须带 `Canon-` 前缀，frontmatter E 永远是 Era 体系（字段名锁定），两套永不交叉。cases 已正确带前缀，实际混淆低。**附带 stale 修复**：审 ref 26 发现"为 33 agent 各发身份证"（§二标题+正文）→ 54；审 ui-auditor agent 发现 4 处"33 agent"现行覆盖率描述（description/标题/§覆盖追溯）→ 54（line 23 "v2.5 扩到 33（现 54）"是合法历史叙述保留）。**挖到 A5 真实盲区**：A5 数字漂移检测 targets 原只扫 README/SKILL/CONTRIBUTING/docs/.github，**不扫 agents/**——所以 ui-auditor 的 33→54 漂移 A5 从来抓不到。修 A5：targets 加 `listMd('agents')` + skipLine 加 agents/ 历史叙述排除（"v2.5 扩到""累计 N 位"）+ Tier 子集语义排除（"Tier 0 agent"的 0 别当 agent 数）。调试修误报：A5 正则 `/(\d+)\s+agent/` 把"Tier 0 agent"的 0 误匹配→加 Tier 排除。**A5 已知局限（诚实记录）**：A5 skipLine 是行级排除防历史叙述误报，但 agent description 长行常混合"v2.5 历史叙述+当前态数字"在同一行——skipLine 命中 v2.5 跳过整行，连带漏掉同行的数字漂移。这是行级排除的结构局限，不硬修（拆行级排除会引入更多误报）。ui-auditor 的 33→54 已手动修，A5 抓不到长 description 行是可接受边界。
- 🐛 **[哲理机理内核审计 R15 · P-MS 规则前缀跨 agent 命名空间污染 + E5 检测]**：审 ref 19 哲学规则集 P-XX 编号体系发现——**P-MS1/P-MS2 同号不同 agent**：`moment-strategist` 段 P-MS1=BRIEF 前置质询（line 71）/ P-MS2=R1-R6 哲学命题覆盖（line 76）vs `model-switcher-stylist` 段 P-MS1=切换需告知（line 596）/ P-MS2=跨模型视觉一致（line 600）。ref 19 的 P-XX 前缀本该是 agent 名缩写（P-OD=onboarding-director / P-WD=wizard / P-UA=ui-architect...），model-switcher-stylist 缩写应是 MSS 却误用 MS——占了 moment-strategist 的 P-MS。**两条都是 🟥 严重级活跃规则**，agent 引用 `[P-MS1]` 不知指"BRIEF 质询"还是"切换告知"，比 R13 D8/R14 E1（候选/前缀隔离）更严重——两套都活跃无隔离。修：ref 19 model-switcher 段 P-MS→**P-MSS**（3 条规则 line 596/600/604）+ ui-auditor:115 引用 `P-MS1/2/3`→`P-MSS1/2/3`。moment-strategist 的 P-MS1/2 保持不变（现在 P-MS 唯一指 moment-strategist）。examples/01 引用 moment-strategist 的 P-MS1 不受影响。全库 P-XX 前缀扫描确认无其他跨 agent 冲突。**加 E5 检测**：扫 ref 19 `### agent` 段下 `#### P-XX数字` 定义，同前缀归属多个 agent → 🟥。注入测试通过（恢复 P-MS 冲突→抓 moment-strategist+model-switcher-stylist 同占 P-MS）；正常零误报。CONTRIBUTING 同步 E 类五项。E 类现覆盖：编号空洞（E1 R/E4 R-Cross）+ 被审者审自己（E2）+ escape-hatch 防滥用（E3）+ 前缀跨 agent 冲突（E5）——四类语义债机器拦。
- 🆕 **[机制机理内核审计 R16 · D2 带前缀编号引用悬空检测 · 补 D 类覆盖盲区]**：R13-R15 引入三套带前缀编号体系（Canon-D / P-XX / R-Cross），但 D 类只检 `ref N` 引用（D1），**不检 `[Canon-D8]`/`[P-MS1]`/`[R-Cross1]` 这类带前缀引用的悬空**——写错编号（如 `[Canon-D11]` 不存在）D1 抓不到，是 D 类真实盲区。手动全库扫描确认现无悬空（三套引用都健康），但"现在健康"≠"未来不悬"（同 R12 R-Cross 空洞逻辑）。补 **D2**：收集三套定义集（ref 18 `### XN` Canon / ref 19 `#### P-XX数字` / ref 27+46+agent R-Cross）→ 扫全库 `[Canon-X数字]`/`[P-XX数字]`/`[R-Cross数字]` 引用 → 悬空即 🟥。注入测试三套全覆盖：`[Canon-D11]`→抓、`[P-XYZ9]`→抓、`[R-Cross9]`→抓；正常零误报。CONTRIBUTING 同步 D 类两项。D 类从"只检 ref N"扩到"ref N + 三套带前缀编号"，引用网络检测覆盖 R13-R15 引入的全部命名空间。这闭合了 R13-R15 命名空间工作的最后一环——不只检命名冲突（E5），也检引用悬空（D2），带前缀编号体系端到端可机检。
- 🔍 **[机制机理内核审计 R17 · examples/01 onboarding demo 端到端核验·自洽]**：审 examples/01（最老从未审过的 demo，前几轮审 02/03/04/05）。引用集全健康：P-OD1/2·P-CW1/2·P-AC1/2·P-TK1/2·P-IC1/2·P-AG1/2 全在 D2 定义集；P-MS1 是 moment-strategist 前置质询（R15 后唯一归属，正确）；Canon-D4/D6/D10/E2 全带前缀；R1 引用正确（时长≤15s 避免强加体验，合 ref 17 R1）；无 phantom range。01 README 提"v2.2 升级"是 demo 场景设定非系统版本声明，保留正确。仅微调 brief:47「避免 R1」补 ref 17 §三 R 全景锚点（同 R9 给 02 价值维对齐，低风险可追溯）。诚实判定：01 干净，R17 价值在"验证 01 与 R2-R16 改动自洽"——至此 examples 全集 01-05 五个 demo 全部核验过，引用网络端到端干净。
- 🐛 **[机制机理内核审计 R18 · SKILL.md 主文档 charter-lint 描述 stale]**：审 SKILL.md（最大未审文件，entrypoint）。引用集全健康（R1-R25/R-Cross1-4/Canon/ref 全在 D1/D2 定义集），54 agent/8 Tier/7 路径声明核验正确（7 路径 = A-G 全列见 ref 24 §四矩阵 + moment-strategist；8 Tier = 0/1/1.5/2/3/4/5/6 含 1.5 半层）。**排除项**：初判"7 路径"可能 stale（组织架构图只显 A/B/C/D/G），核验后确认 E/F 是 B 的子路径（+E 移动/+F 嵌入）仍算独立路径，ref 24 §四矩阵全列 A-G 七条，7 路径正确不报。**真 bug**：line 58 charter-lint 描述停在"agent数/规则数/版本号/章程frontmatter契约"（A/B 类），R8 加 E 类语义检测、R16 加 D2 带前缀引用后未同步——entrypoint 描述与实际 lint 能力脱节。修：line 58 补全五类检测（A 元数据 / B 章程契约 / C refs 悬空 / D D1 ref N + D2 带前缀编号 / E E1-E5 语义逻辑债）。**未扩术语表**（诚实退让）：line 352 R 编号两套术语表（R3 改过"19条"）只列 R1-R25 vs R-01，没列 R-Cross/Canon/P-XX——但后者各有独特前缀混淆风险低（不像 R1 vs R-01 易混），术语表重点该列易混项，不膨胀塞所有编号体系（同 R13 不加 E5 的逻辑）。R-Cross/Canon/P-XX 在各自 ref 18/19/46 有定义可查。
- 🐛 **[机制机理内核审计 R19 · README.dev 目录结构 stale · 附录数错 + 漏列 scripts/examples]**：R18 修 SKILL.md 后审对外文档。README/README.en 无 charter-lint 描述（设计：README 面向用户，lint 在 CONTRIBUTING 面向开发者），不是 stale。README.dev 目录结构段抓到两处真 bug：① references 注释"+4 份附录"——实际 **3 份**（component-patterns/interaction-patterns/steps-schema，核 `ls references/*.md` = 48 含 45 编号 ref + 3 附录）；② **漏列 `scripts/` 目录**（charter-lint.mjs 所在，R8 引入的关键工具）和 **`examples/` 目录**（5 份 demo + visual-evidence）。开发者文档目录结构不列 scripts/examples = 新贡献者不知道这两个目录存在。修：4→3 附录 + 补 scripts/（注明 charter-lint 五类检测）+ examples/（注明 5 份 demo + visual-evidence）。**排除项**：README.md:219"33 agent / 7 tier mermaid"是合法历史标签（显式标"v3 时代历史图"，A5 skipLine 排除历史）；details 内"v3.0 36 agent"与 summary"33 agent"数字内部不一致属历史图内部瑕疵，不影响当前系统，不改历史记录。
- 🔍 **[机制机理内核审计 R20 · manifest 元数据完整性 + debunk-auditor 双角色认知不一致]**：审 `.skill-manifest.json`（charter-lint 真相源，R2-R18 改 54agent/48ref 后未审过）。**排除项**：README.en 无目录结构段（不像 README.dev）+ line 91"should print 54"正确，无同款 stale；manifest agents[] 54 个无重复（Counter 验）✅；manifest eight_eras E1-E8 用 Era 编码一致（R14 命名空间声明后）✅。**真认知不一致**：`tier_6_quality_gate` 列 `['ui-auditor','sage-council','review-orchestrator','meta-auditor']`——但 ref 28 §2-G5 把 debunk-auditor 和 ui-auditor 并列为"蓝军两把刀"。核 debunk-auditor 在 manifest `tier_0_philosophers`（王充·#225·Tier 0 圣人）+ agent frontmatter tier:0——**它是 Tier 0 圣人兼 G5 蓝军（双角色）**，manifest 防双计不重复列 tier_6 是对的，但缺交叉说明 → 读者可能误以为蓝军只有 ui-auditor 一把刀。修：ref 28 §2-G5 蓝军表后加「debunk-auditor 双角色」注——主职 Tier 0 圣人（manifest tier_0_philosophers）兼 G5 蓝军，tier_6 不重复列防双计，读者勿误判蓝军单刀。**未加 A7 检测**（诚实退让）：目录结构段是自由格式文本，机器检"列全所有目录"需解析 markdown 树复杂度高易误报，边际收益低（README.dev 不常改）——同 R13/R18 不加 E5/扩术语表的逻辑，留文档层。
- 📚 **[机制机理内核审计 R21 · M5 弹劾避嫌 worked example · R5-R7 三层闭合可执行性验证]**：审 examples 全集发现 **M5 弹劾避嫌（R5-R7）零 demo 覆盖**——examples/02 演了 K 轨衰弱 + M 轨观察，但 M5 弹劾/避嫌/Keeper Test 全空。R5-R7 写了三层闭合规则（利益冲突→算术死循环→降级逃审）但全是抽象描述，从没演练端到端可执行性 = 纸上闭环风险。诚实判定：建完整 examples/06 demo 是大工程（token 重、边际递减），改最小可行验证——**在 ref 30 §M5 内加 worked example trace**，数值化证明三层闭合算术跑通。构造场景：评分圣人 #039 黑格尔 M2 校准≥2 次→M5 动议→① R5+R7 回避名单独立核验师承链（#039+#232+#150 回避不计分母）② R5 重选仲裁议会（三大类各 2 代表=6 人，满足 S 级≥3 类不降级）③ R6+R7 投票算术：总票权 13.0（常委 2+task_kind+0.5 cap 2.5），门槛 ⌈13×2/3⌉=9，APPROVE 11≥9 通过 ④ 缺类降级分支演练（假设哲学家类全牵连→S→A 降级，通过线仍 2/3 不降、规模不减半、防滥用核验）。算术核验通过（node 验 13→9→11 自洽）。**验证结论**：R5-R7 不是纸上闭环，端到端可执行——这是这程最深机制工作（M5 三层闭合）首次有可执行性证据，而非纯规则声明。
- 🆕 **[v4.2.7 R22 · Lite 模式 · 省令牌四轨自动降级（SPTLER 风格适配）]**：用户要做 lite 版省 token。三个设计点：① 形态=至尊版内 lite 模式（/suanfish lite 触发，非独立 skill）② 议会=SPTLER 风格——读 `X:/suanfish-draft-system/sptler` 读懂 sptler 的四轨自动降级（Verdict 1圣人3句 / Fast 3-5 / Formal 7-9 / Follow-up）是它的省 token 核心，适配设计场景：Verdict=1 位设计师 3 句话 / Fast=主设计师+2-3 协作 / Formal=7-9 位+迷你 3 圣人固定议会（黑格尔+莫奈+倪瓒，非 420 板凳动态选拔）/ Follow-up=≤8 要点复用骨架 ③ ref=精简核心 10 份（01/07/08/10/11/14/34/35/44/45），砍哲学层+板凳+三道门+美学议会。**新增 ref 49 `49-lite-mode.md`**：完整 lite 协议（四轨表+降级判定+令牌预算对比：至尊版~26k vs Lite Fast~4k 省 85%+ 反拖拽铁律+与至尊版切换+诚实声明质量门强度低于至尊版）。**SKILL.md 加 lite 段**（快速通道后，短表+触发+反拖拽+ref 49 指针）+ description 补 `/suanfish lite` `/算鱼轻` 触发（394 字符未超 700 上限）。**manifest reference_count 48→49** + 同步 README.md/README.dev.md/docs/antigravity 三处"48 份规范"→49（A5 检测拦）。**调试 A5 误报**：lite 表"1 agent"/"7-9 agent"被 A5 误当系统总 agent 数 → 改"位设计师"避开 N agent 模式（A5 行级排除难区分轨道规格语境，改措辞比加 skipLine 规则干净）。**诚实声明**：Lite 用 ui-auditor 🟥 单点守门替代三道门，质量门强度低，故 Formal 轨保迷你议会双守门；不内置圣人记忆（省令牌），需积累转 sptler。这是"至尊版严谨/Lite 高效"的双模式分叉——同 skill 两协议，共享 agents/refs。
- 📚 **[v4.2.7 R23 · Lite 四轨降级 worked example · 可执行性验证]**：R22 Lite 落地但四轨从没演练过——同 R21 给 M5 补 worked example 的纸上闭环风险。ref 49 §8 加同一 BRIEF 在四轨下的端到端演练：BRIEF「后台加个删除用户二次确认弹窗」→ ① Verdict 轨（最可能命中）：单域单 agent → modal-craftsman 3 句话（判断/理由/风险），自检 ref 14，~1.5k 一回合 ② Fast 轨（BRIEF 加"批量删除"）：多域 ≤2 路径 → ui-architect+modal+table 协作链 + ui-auditor 🟥 单点守门，~4k ③ Formal 轨（升级"整套删除流安全规范"）：战略/对外 → 7-9 位全链 + 迷你 3 圣人固定议会（黑格尔主矛盾选安全倾向+莫奈加法视觉反馈+倪瓒减法别插 tour）≥2/3 + ui-auditor 🟥🟧，~12k ④ Follow-up 轨（"toast 改内联"）：迭代上单 → ≤8 要点复用骨架只改差异，~1.5k。**验证结论**：四轨降级判定（route_track）+ 各轨流程端到端跑通，令牌预算与 §3 对比表一致（1.5k/4k/12k/1.5k），升级信号（Verdict→Fast→Formal）也演练通。Lite 四轨非纸上闭环，可执行——同 R21 给 M5 三层闭合补可执行性证据的逻辑，R23 给 Lite 四轨补。
- 📚 **[v4.2.7 R24 · ref 48 端到端链补 examples/03 指针 · 议会可执行性交叉引用]**：R21/R23 给 M5/Lite 补 worked example 后，审至尊版议会 ref 48 六步协议。ref 48 §8 端到端推演链是抽象图，非数值化 worked example——但 examples/03 dashboard plan 已是 worked example 级（5 常委评分 8.8/8.6/8.5/7.9/7.6 + 三段式讨论 + 投票算术 票权13/门槛9/APPROVE13 通过 Round 1）。真·悬空：ref 48 §8 没指向 examples/03。修：ref 48 §8 末尾加指针摘要其评分/讨论/投票算术。**至此三大机制 worked example 全齐**：至尊版议会→examples/03+ref48§8指针(R24) / M5弹劾避嫌→ref30§M5(R21) / Lite四轨→ref49§8(R23)。
- 📚 **[v4.2.7 R25 · suanfish-lite↔sptler 圣人体系边界声明]**：审跨 skill 边界——suanfish-lite 迷你 3 圣人（黑格尔/莫奈/倪瓒·思想家板凳）与 sptler 22 位圣人（邹蕴/王升等真人专家）是两套独立体系无重叠（grep sptler roster 证实）。ref 49 §6 说"转 sptler"但不带 lite 辩证人格连续性。诚实判定非 bug（两 skill 场景分治：设计辩证 vs 专利技术决策，转=换场景），但补说明避免用户困惑。修 ref 49 §6 加边界声明 + 设计场景圣人记忆积累标为 v4.3 议题。**未加 E6 算术一致性检测**（L3 诚实退让）：R21/R23/R24 三处算术已 node 验过自洽且文档留痕，但 grep 提取门槛格式不统一+票权加法解析复杂，误报风险高——同 R11 撤 E2 通用层逻辑，grep 撑不住语义。
- 🏁 **[v4.2.7 R26 · L4 终检报告 · R2-R25 跨轮一致性回归]**：L4 毕业终检——R2-R25 累计 24 commits 散点修改，做整体一致性回归。① **charter-lint 全绿**（A/B/C/D1+D2/E1-E5 五类全绿，exit 0）② **R 全景索引跨轮准确**：R3 建的 ref 17 §三 R 全景历经 R2-R25 仍自洽——R1-R6 在 ref 17 / R13-R17 在 ref 25 §五 / R18 在 ref 24 §五 / R19-R21 在 moment-strategist / R22 在 holism-strategist / R23 在 debunk-auditor / R24 在 bench-matcher / R25 在 quotation-verifier，全部核验位置准确（初次 grep 误匹配 ref 17 索引表本身，排除后确认）③ **M5 三层闭合跨轮自洽**：R5 利益冲突+R6 算术死循环+R7 降级逃审 + R21 worked example（13.0→9→11）+ R20 debunk 双角色声明无冲突 ④ **命名空间三套隔离**：R3 R7-R12 空洞声明 / R13 D 命名空间（Canon-D vs 矛盾-D）/ R14 E 命名空间（Canon-E vs Era-E）/ R15 P-MS→P-MSS 前缀冲突修复，E5 检测拦截复发 ⑤ **Lite 线完整**：R22 协议+R23 worked example+R25 跨 skill 边界，与至尊版分治清晰。**终检结论**：24 轮散点修改无跨轮冲突，机制与机理端到端自洽。整个 R2-R26 工程统计：修复真 bug 15+（R7-R12 幽灵/M5 三层闭合/P-MS 污染/D-E 命名空间/ui-auditor stale 等）、新增 charter-lint 检测 7 项（D2+E1-E5+A5 扩 agents/）、新增 ref 49 Lite 模式+四轨 worked example、三大机制（至尊议会/M5/Lite）worked example 全齐。charter-lint 从 A/B/C/D 四类升到五类（+E 语义）11 项检测，机器拦语义债能力从 0 到成体系。
- 📚 **[v4.2.7 R27 · Lite 补 R 编号术语表缺口]**：L4 穷尽跨轮边界。ref 49 §7 诚实声明只说"Formal 轨建议手动引 ref 17 R1-R6"，但没声明 R7-R12 空洞——Lite 不加载 ref 17（含 R3 术语表+R7-R12 空洞声明），Lite agent 跑 ref 15/16 的 R-XX（连字符审计规则）时可能混哲学命题 R8（无连字符·R7-R12 空洞不存在）。诚实判定风险低（ref 15/16 自声明 R-XX 是审计规则集，R3 核过），但补声明更稳。修 ref 49 §7 加「R 编号术语表不加载」——遇裸 R8/R10 等视为悬空（R7-R12 空洞），需手动加载 ref 17 §三 R 全景确认。未加 E6 R 全景一致性检测（grep 撑不住 R 范围+跨文件验证，同 R25 撤 E6 算术逻辑）。
- 🏁 **[v4.2.7 R28 · L4 注入测试套件终检 · charter-lint 11 项检测全验]**：L4 毕业最后一件——R8-R27 给 charter-lint 加了 E1-E5/D2/A5扩 等 11 项检测，单点注入都测过，但从没**多 bug 同跑 + 全套正向验**。L4 补：① **多 bug 同跑**（同时注入 A5 数字漂移 + E1 R1-R20 幽灵 + E4 R-Cross1-5 空洞 + D2 Canon-D11 悬空）→ D2/E1/E4 全抓，互不干扰 ✅ ② **E2/E3/E5 正向注入**（删避嫌词+无防滥用降级段+P-MS 冲突）→ E2🟥/E3🟧/E5🟥 全抓 ✅。**结论**：E1-E5+D2 全部正向抓 bug，多 bug 同跑互不干扰，charter-lint 11 项检测非摆设。**唯一已知盲区**：A5 在 agents/ 长行（ui-auditor description 混 v2.5 历史+当前态数字，skipLine 命中 v2.5 整行跳过连带漏数字漂移）——R14 已记录为"可接受边界"（拆行级排除会引误报），L4 不硬修。至此 loop 完成条件"build/test 验证通过"真正兑现——charter-lint 是这程的唯一 test，R28 给它跑了完整测试套件。R2-R28 工程闭合：修复(15+bug)+检测(11项机器拦)+验证(全套注入测试)+新特性(Lite)+worked example(三大机制全齐)+跨轮终检(R26)+检测终检(R28)。
- 🔍 **[v4.2.7 R29 · A5 长行盲区穷尽验证 · 子句级剥离不可行]**：L4 不放过 R28 留的"可接受边界"——A5 在 agents/ 长行（ui-auditor description 混 v2.5 历史+54 agent 当前态同行，skipLine 命中 v2.5 整行跳过连带漏数字漂移）。R14 标"可接受"就放过是逃避，L4 穷尽：原型试**子句级剥离**（按句号切子句单独判 skipLine，非历史子句照常扫数字）。原型暴露两问题：① 中文逗号/句号混用切割不准（description 用"，"非"。"，split 切不到）② Lite "1 agent""7-9 位"子集语义会误报为系统总数。**结论：子句级剥离不可行**（grep 撑不住中文句法+子集语义，同 R11 撤 E2/R25 撤 E6 逻辑）。独立 frontmatter 字段方案需改 54 agent + A5，大工程不划算。故 A5 长行盲区**已穷尽验证不可机器修**，留人工核（CONTRIBUTING 自检 grep 兜底）。修 charter-lint A5 skipLine 注释固化此结论（从"可接受边界"升级为"R29 穷尽验证不可修"+记录三种试过方案）。这是 L4 真正的穷尽——不是修，是证明修不了并把排除理由固化进代码注释，防后续重复尝试。
- 🏁 **[v4.2.7 R30 · L4 收尾 · CHANGELOG 完整性审计 + loop 周期收口]**：L4 毕业最终收尾。审计 R2-R29 工程记录完整性——commit 的 R 编号 vs CHANGELOG 条目差集为空（R2-R29 全 28 轮均有 commit + CHANGELOG 条目，R3 在 R2 整合提交内所以 commit 标题 grep 缺 R3 是假象，body 含"内核审计 R3"，CHANGELOG 有条目）。**CHANGELOG 完整可追溯 ✅**。至此 R2-R30 工程全维度收束：① 修复 15+ 真 bug ② charter-lint 11 项检测（A/B/C/D1+D2/E1-E5）全套注入测试通过（R28）③ 跨轮一致性回归无冲突（R26）④ A5 唯一盲区穷尽验证不可机器修（R29）⑤ 新特性 Lite 模式省令牌 85%（R22-R25）⑥ 三大机制 worked example 全齐（R21/R23/R24）⑦ CHANGELOG 完整（R30）。loop 完成条件四项全满足：核心功能实现✓ / build·test 验证通过✓ / 同类问题扫尽✓ / 无已知未修 bug（唯一盲区已穷尽验证）✓。**当前迭代周期收口**——任务"继续优化机制和机理"是开放式的（v4.3 圣人记忆/PR review 反馈等是未来议题），但 R2-R30 当前周期已端到端交付且穷尽。
- 🆕 **[v4.3 R31 · 圣人记忆系统设计草案 · 从"标了"推进到"可启动方案"]**：R30 收口后用户喊继续——R2-R30 主线穷尽，但 R25/R27 都标了"设计场景圣人记忆是 v4.3 议题"。L4 既毕业又重启，R31 把这个议题从"标了"推进到"可启动方案"。读 sptler 已落地的记忆机制（`memories/<姓名>.json` + 价值驱动 passed×cited + 分层 recent/long-term + supersedeable + 双画像），适配 suanfish 设计场景。**新增 ref 50 `50-sage-memory-v4.3-draft.md`**（status: draft）：① 记忆载体按圣人（仅厚仙人，薄仙人无附着点）② 内容是矛盾倾向+改造动作+ref 引用（区别 sptler 的权利要求/FTO）③ 直接复用 sptler `memory_philosophy.md` 四原则（场景无关不重造）④ 读写时机挂议会六步 Step3 读/Step6 写 + Lite 四轨各轨记忆策略（Follow-up 轨读上单记忆实现人格复用，补 R22 Lite Follow-up 只复用 case 骨架的缺口）⑤ 与 sptler 记忆不互通（R25 设计·两套圣人独立）⑥ 令牌成本 +~1k/议会（Formal），`--no-memory` 可关 ⑦ 三步实施路线 v4.3.0/4.3.1/4.3.2。manifest 49→50 + 三处"49 份规范"→50（A5 拦）。这是"进一步优化"的真前进——v4.3 议题不再是"未来再说"，有可启动方案。诚实：ref 50 是草案未实现，v4.3.0 实施时验证。
- 📚 **[v4.3 R32 · ref50 补价值判断三角+转折点]**：L2 灵魂拷问——R31 说"复用 sptler memory_philosophy.md 四原则"但没真读源文件（R3 式凭空声称风险）。R32 核 sptler memory_philosophy.md 真实存在且四原则如 R31 所述 ✅，但发现 R31 漏了**价值判断三角**（通过×引用=value_score）+**转折点特殊处理**（superseded 但代表改主意→永久保留不强化）。ref50 §3.1 补全 + suanfish 适配（转折点在设计场景价值比 sptler 专利决策更高）。
- 📚 **[v4.3 R33 · memory-keeper 定新增独立 agent]**：R31 §8"待定·可能复用 quotation-verifier 或新增"是悬空决策。R33 穷尽定：不复用（核验职责 vs 维护职责本质不同维度，复用会职责混淆，同 R15 P-MS 逻辑），memory-keeper 新增 Tier 5 横切被咨询层。v4.3.0 新增，职责四项定。
- 🆕 **[v4.3 R34 · memory-keeper agent stub 建]**：R33 定而不建仍悬空，R34 推进 v4.3.0 第一步。建 `references/v4.3-stubs/memory-keeper.md`（frontmatter 哲学锚洛克+莱布尼茨 / Tier 5 / D7 透明 + 职责四项 + 边界 + v4.3.0 状态）。**诚实处理 agent_count**：stub 是 v4.3.0 不该在 v4.2.7 升 55 触发全库漂移（10+处 README），故 manifest 保持 v4.2.7 的 54 + stub 放 v4.3-stubs/（非 agents/）不触发 A1/A2，v4.3.0 实施时移入 agents/ + 升 55。这是"穷尽但不越界"——推进 v4.3.0 实体化同时守住 v4.2.7 完整性。
- 🐛 **[v4.2.7 R35 · sptler 跨仓库断链修复 · R22-R34 v4.3 工作反噬]**：L2 灵魂拷问——R31-R34 全在 v4.3 草案堆，是不是回避 v4.2.7 真问题？回头审发现 R22-R34 的 v4.3 工作真实反噬：4 处 `[sptler](../sptler)` markdown 链接（SKILL.md + ref49×2 + ref50）指向**兄弟项目 sptler，不在本 repo**（git ls-files 0 个 sptler 文件，非 submodule，README 只声明 kpop 孪生未提 sptler）。clone 本 repo 后 `../sptler` 不存在，4 处链接全断。修：① 4 处 `../sptler` 链接改纯文本「sptler（孪生项目·见 README §孪生项目）」（断链比纯文本描述更糟）② README 加 sptler 孪生项目段（像 kpop 那样正式声明归属 + 断链说明）。这是 L2 自我审视——R31-R34 推进 v4.3 时引入了跨仓库依赖，R35 修这个反噬，让 v4.2.7 当前态不被 v4.3 草案的跨仓库引用污染。
- 🔍 **[v4.2.7 R36 · 跨仓库断链全量回归 · R35 漏扫验证]**：R35 修了 4 处活 `../sptler` 链接，但 L2 穷尽——全库还有无残留？写扫描脚本（`git ls-files` 所有 .md + 正则 `](../xxx)` + 判断目标 seg 是否仓库内已知目录 agents/references/examples/scripts/docs/.github）。结果：① 跨仓库链接仅剩 CHANGELOG.md + README.md 两处 `../sptler`，但**都在反引号内**（`` `[sptler](../sptler)` `` 是引述/警告文本，markdown 不渲染为活链接），非断链 bug ✅ ② 其余 `../CONTRIBUTING.md`/`../plan.md` 是仓库内跨目录（.github→根文件、examples 子目录→同 examples 文件），clone 后可达 ✅。R35 修的 4 处是唯一活断链，R36 验证无残留。**未加跨仓库链接检测到 charter-lint**（L2 诚实退让）：需解析 markdown 链接+判断仓库内+区分反引号转义，复杂度高易误报（反引号包裹的 `../sptler` 会被误报），同 R29 A5/R11 E2 逻辑——grep 撑不住 markdown 语义。R36 扫描脚本作"可手动跑的跨仓库链接检查"参考，留人工核。
- 🐛 **[v4.2.7 R37 · ref 30 语义审计 · §0 摘要与 K3 四态表自相矛盾 + 套娃制衡 blockquote 重复]**：v4.2.7 收口后新一轮语义审计（lint 只抓元数据漂移，抓不到自相矛盾/重复/误标）。精读三道门 refs 28-30，命中 ref 30（今日最活跃文件）两处 lint 盲区 bug：① **§0 制度一句话与 §2 K3 四态表直接矛盾**：§0 行32 写「衰弱就 CULL 下架」，但同文件 K3 判定四态明确「衰弱→进 ref 29 整改闭环」「过时/被推翻→CULL 下架」——衰弱不 CULL，§0 把处置说反，会误导读者对衰弱内容直接下架。独立验证：4 处外部引用全为正确框架（CHANGELOG 顶部「衰弱→整改/过时→CULL」·ui-auditor.md:72·examples/02-three-gates-modal/k1-k4-posthoc.md:59「衰弱不直接下架·衰弱走整改」·ref 30 §10:314「衰弱内容进 ref 29 了吗」），仅 §0 是 outlier。按 R2 教训修 outlier 不改 K3：§0 改为「衰弱就进整改、过时/被推翻才 CULL 下架」，与 K3 + 4 处引用一致。② **套娃制衡 blockquote 重复**：ref 30 §M5 worked example 末尾（行192/194）逐字重复两次（隔一空行），copy-paste 残留，grep 计数=2 坐实，删一留一。两处均仅改正文不动 frontmatter，charter_version 不 bump（bug 修复非内容新增，同项目惯例），re-lint exit 0 零漂移。**诚实退让（未改）**：README:28/SKILL:56/00-collab:98 有「衰弱/下架」「衰弱下架」松散并列表述——slash 形式可读作 K 轨两项职责（查衰弱/做下架）非断言衰弱→下架，README 无 slash 但与「腐烂下岗」对仗修辞，属压缩摘要非逻辑 bug，且 example-02 已明确澄清；本轮不强行改（避免破坏对仗+扩面 3 文件风险），留措辞专项。**审计范围**：refs 28-30 精读 + refs 46-48 表面扫描（无连续重复块/无 §0 式摘要，深语义审计留后续轮）。
- 🐛 **[v4.2.7 R38 · ref50 + memory-keeper stub 语义审计 · v4.3 记忆机制 schema/文件级/matched retrieval/dry-run/scope 五处 lint 盲区]**：R37 审 ref30 后承接下一目标 ref50（v4.3 记忆机制草案）。精读 ref50 + memory-keeper stub + 核 sptler `summon_sage.py`/`compact_memories.py`/`memory_io.py` 读路径源码，命中五处 lint 抓不到的语义 bug：① **§3.1 vs §2 矛盾**——§3.1 声称复用 sptler 价值三角+转折点，但 §2 schema 丢 `citation_count`/`is_turning_point`（核 sptler `bump_citations`/`classify`/`turning_points` 全靠这俩字段算）。补回。② **ref50 无文件级 schema**——sptler 记忆文件是 `{profile,profile_recent,experiences,archive_summary}` 四件套（核 `memory_summary`/`compact_file`），ref50 原只有条目级。补 §2.1。③ **弃 `supersedes` 列表**——核 sptler 读路径 `summon_sage`/`compact_memories` 从不读它（只写不读），保留 `superseded` bool + `superseded_by` 指针即可。④ **§4 漏 matched retrieval + dry-run 约束**——sptler `relevant_experiences` 已解「同矛盾识别」（domain+topic 双字×时效衰减×value_score，排除 superseded，top3），ref50 未记；且 sptler summon 命中 `bump_citations` 会回写，v4.3.0 只读须走 `--dry-run`（pending_citations 不写盘，citation bump 推 v4.3.1）。补 §4。⑤ **memory-keeper stub scope 矛盾**——原「Step3/Step6 读注入+写记录」与 ref50 §7 v4.3.0 只读冲突。修为 v4.3.0 只读 Step3（写/compact/supersedeable 留 v4.3.1，职责段加 v4.3.0/v4.3.1 相位标记）。顺手 `timestamp`→`recorded_at`（适配 sptler 时效衰减）+ 加 `seeded` fixture 标记（compact 豁免）+ `task_kind`(=sptler domain)。re-lint exit 0 零漂移。**审计范围**：ref50 全文 + memory-keeper stub 全文 + sptler 三读路径脚本核源码（`record_memory.py` 写路径留 v4.3.1 再核）。**诚实退让（未改）**：ref50 §5 不互通边界/§6 令牌成本未深审（数值需 v4.3.0 实施实测，非语义 bug）；tech stack 错位（sptler Python vs suanfish .mjs「复用 compact_memories.py 逻辑」未指定怎么复用）留 v4.3.0 实施方案定，非本轮 ref 文档审计范围。**冰山扫描同类（已修）**：ref49:81「28 位圣人记忆」与 ref49:83「22 位圣人」+ ref50 §0/§5「22」+ sptler roster.md 标题「22 位」全部冲突——ref49:81 是 outlier（核 sptler saints/ 实际 28 目录但 roster 声明 22，sptler 自身内部不一致非 suanfish 可修），按 R2/R37 修 outlier 不改框架：ref49:81「28」→「22」，suanfish 文档内部一致。**诚实退让（未改）**：sptler saints/ 目录 28 个 vs roster 声明 22——sptler 内部不一致，非本 repo 可修，留 sptler 侧；sptler memories/ 实际 0 文件（memory_philosophy 称「22 文件」）同属 sptler 侧状态，不属 suanfish 审计。

- 🔍 **[v4.2.7 R39 · 全库语义广扫 · 重复块/占位符/计数一致性 · 1 修 + 3 误报澄清 + 1 复合 defer]**：「全部优化」广度优先——grep 扫全库 refs+agents 的重复行/占位符残余/prose 计数一致性（R37 的 ref30 blockquote 重复就是这类）。**1 修**：`00-collab:10` intro「9 位 agent」→「54 位」（v1.0 首版 9 agent 的 stale 计数，doc 是当前活跃协作协议 owner=flow-coordinator·全 agent，manifest 54，同 R38 ref49 22/28 同类 stale 数字）。**3 误报澄清（grep 命中但精读确认合法，非 bug）**：① ref17 `《存在与时间》`4 次 / `维特根斯坦·语言边界`2 次——4 个不同 agent（empty-state/notification-director/error-recovery/brand-keeper）各取海德格尔不同概念（Dasein/Sorge/工具显现/命名），2 agent（copy-writer/i18n-strategist）共享维特根斯坦锚点，跨 agent 共享同源非重复。② SKILL.md:352「14 agent 哲学锚点速查表」vs ref17:515「24 位全量条目」非矛盾——line 391 明确 14 是 Tier 1-6 执行层 subset，24 含 Tier 0，两回事。③ ref26 tier 计数 3+1+1+4+10+10+6+1=36——doc 是「历史定位」(intro 标 v3.0 Layer 0.5)，tier 段标「v3.0 新增」，36 是 v3.0 历史标注非当前架构误称。**占位符全清**（R37「占位符归零」守住，扫到的都是合法 i18n/URL 占位符）。**1 复合 defer（已精确诊断 · fix 含 authored 锚点非自动化）**：ref17 §二「缺锚点索引」对账——§一 24 全量 + §二 31 行，精确诊断（grep §一 `####` + §二 table rows vs manifest 54）命中：① **3 处 stale dup**（§一 有全量条目却还留在 §二 缺锚点索引）：`a11y-guardian`/`brand-keeper`/`i18n-strategist`——剔后 §二 31→28。② **2 处 missing**（manifest 54 中既不在 §一 也不在 §二）：`model-switcher-stylist`/`rate-limit-communicator`（v4.2.7 Path G 新增，未进 ref17）——补后 §二 28→30。③ §二 intro「余 32 位」数字错 → 正确 **30**（24+30=54 ✅）。fix 需为 2 missing authored 锚点摘要（非臆造，ref17:515 自陈「补齐留 R 规则 PR 议题」），属判断工作非自动化；只剔 dup 不补 missing 留 52≠54 新不一致，故整块留专门轮。re-lint exit 0 零漂移。**审计范围**：全 refs+agents grep 广扫 + ref17/ref26/SKILL.md/00-collab 精读核。**诚实退让**：ref26 可能有 v4.x 新 agent 漏时代身份证（doc 写于 v3.0），深审留后续；ref17 §二复合对账留专门轮。

- 🔧 **[v4.2.7 R40 · ref50 §4 matched retrieval 适配两处真 bug + 3 小不精确 · codex-review 自查闭环]**：上轮 codex-review（codex CLI azure 端点持续 stream disconnect 2 次不可用，降级深读自查）命中 ref50 §4 v4.3 记忆 matched retrieval 适配两处真 bug（v4.3 核心价值"同矛盾第二次议引用旧结论"会失效）：① **D-code 漏检**——原 §4「以 primary_contradiction（D1-D7）当 topic」传裸 "D3"，但核 sptler `summon_sage.relevant_experiences` 用中文双字 `[一-鿿]{2}` 匹配 experience.矛盾，裸 "D3" 无中文双字→0 分漏检（domain "structural" in "d3" 亦 0 分）→记忆永不被检索。修：topic 传**全矛盾串**（"D3 个性化⟷一致性"，由 D 码查 ref 47 D1-D7 定义展开），主匹配靠 矛盾 中文双字（task_kind enum 命中概率低作辅）。② **字段名未同步**——sptler 读 `e.get('domain')`，suanfish §2.2 改名 `task_kind`，§4 仍写"domain 关键词"。修：读 `task_kind`。另修 3 小不精确：§2.2 example `seeded:true`→`false`（canonical 示例应展示正常条目，fixture 另注）；§4「注入近期经历」→「最近 3 条」（同 sptler `memory_summary experiences[-3:]`）；§8 职责顺序对齐 stub（write/inject/compact/supersedeable，原 write/compact/supersedeable/inject）+ 加 v4.3.0/v4.3.1 相位标记。ref50 frontmatter status + 变更日志 v0.1.2 同步。re-lint exit 0 零漂移。**审计范围**：ref50 §2/§4/§8 全文深读 + sptler `summon_sage.relevant_experiences` 源码核匹配逻辑。**诚实退让**：codex CLI azure 端点 2 次 stream disconnect 未获独立第二意见（非瞬时段点持续不可用），靠深读自查闭环；ref17 §二 复合对账（R39 精确诊断）+ ref26 v4.x agent 时代身份证 两项仍留专门轮。

- 🔧 **[v4.2.7 R41 · ref17 §二 缺锚点索引对账 · 3 stale dup 剔除 + 2 missing 补 + 4 处计数同步 · 24+30=54 闭环]**：R39 精确诊断的 ref17 §二 复合对账本轮修毕。核 manifest 54 agent vs §一(24 全量)+§二(缺锚点索引)：① **剔 3 stale dup**——`a11y-guardian`/`brand-keeper`/`i18n-strategist` 已在 §一 有全量条目（哲学家+命题+行为约束），却还留在 §二 缺锚点索引（stale 残留）→ 剔除（§二 B 19→16）。② **补 2 missing**——`model-switcher-stylist`（修补匠·列维-斯特劳斯·无银弹 → ref 40）/`rate-limit-communicator`（正义论·罗尔斯·配额即分配正义 → ref 40）v4.2.7 Path G 新增，从未进 ref17 → 补入 §二 B（16→18），锚点摘要从 agent frontmatter `philosophical_anchor`/`philosophy` derive 非臆造。③ **4 处计数同步**——header「32 位指针级对齐」→「现 30 位」、intro「余 32 位」→「余 30 位」、B 段标题「20 位」→「18 位」（原已偏 1，实际 19）、footer「补齐 32 位」→「补齐 30 位」。**对账闭环**：§一 24 + §二 30（A 12 Tier 0 + B 18）= 54 = manifest ✅。re-lint exit 0 零漂移。**审计范围**：ref17 §二 全段 + 2 missing agent frontmatter 核锚点。**诚实退让**：2 missing 的 §二 条目是「指针级」（锚点摘要+所在），非 §一 全量四件套——补全量留 R 规则 PR 议题（ref17 自陈领域写作工程）；ref26 v4.x agent 时代身份证补全仍留专门轮。

- 🔍 **[v4.2.7 R42 · ref47 深审 · §五 v4.2.8 笔误修 + R6 跨 ref 碰撞精确诊断 compound defer]**：「继续研究」深审 ref 47（哲学到设计映射·内核的内核，R37 仅表面扫）。**1 修**：§五 example REPORT「🌗 哲学→设计映射 · v4.2.8」→「v4.2.7」（v4.2.8 不存在，当前 v4.2.7，同 ref 24 §八 example 用 v3.0 的惯例）。**1 compound defer（精确诊断）**：R6 跨 ref 碰撞——ref 24 §七:120 + ref 47 D4:48 用 R6=「onboarding >3 步无 skip」（D4 强行引导症状），但 ref 17 §三（权威 R 全景·v4.2.7 R3 审计·自陈唯一权威全景）+ moment-strategist:127/239（实际 fire R6 的 agent）用 R6=「双主导（onboarding + ui-architect 同屏主导·名不正则言不顺）」。R6 = 双主导 per authority。「>3 步 skip」是 D4 症状被误标 R6，与双主导不可调和（step-count vs 治理双主导）。**修需 design decision**：① backfill「>3 步 skip」为 R7（R7-R12 预留空洞，需配哲学家+命题）② 或降为 D4 留位（非 R）③ 或重构 ref 24 §七 症状视角表。**R3/R5 可调和（非 bug）**：ref 24 §七 R3=「≥3CTA」是 canonical R3「需求自相矛盾」的症状实例（简洁需求+≥3CTA=自相矛盾）；R5=「无 undo」若 ∈ 路径 B 4 硬条件则是 canonical R5 症状（路径 B 4 条件未在 moment-strategist 明列，未最终核，留疑）。re-lint exit 0 零漂移。**审计范围**：ref 47 全文深读 + ref 17 §三 R 全景 + ref 24 §七 + moment-strategist R 表交叉核。**诚实退让**：R6 碰撞 fix 需 design decision（R7 回填哲学家选择 / D4 留位降级 / ref 24 §七重构），非单数字可解，留专门轮；R5/路径B 4 条件未最终核。

- 🔧 **[v4.2.7 R43 · R6 跨 ref 碰撞修复（R42 compound defer 闭环）+ R5 留疑解决 + R3 同类误标纠偏 · ref 24 §七 重构 + ref 47 三处]**：R42 留 R6 碰撞 compound defer + R5 留疑，本轮独立核验后修毕（守"verify independently — audit agents misdiagnose"教训，R42 是 codex-review 不可用降级自查）。**核验**：① R6 碰撞 R42 诊断正确——canonical R6=双主导（ref 17 §三:310 自陈唯一权威全景 + moment-strategist:127/239 fire agent + SKILL.md:389 三处一致），ref 24 §七:120 + ref 47 D4:48 误标「>3 步无 skip」（D4 症状）。② **R5 留疑解决**——核 SKILL.md:315-318 路径 B 4 硬条件 = ①情感=庆贺 ②落点=稳态视图 ③时长<2s ④不阻断任务流（ritual-in-steady-state 混合约束），**与 undo 无关** →「关键操作无 undo」≠ R5（canonical R5=路径B 4 条件）。R42「R5=无undo 若∈路径B 4 条件则可调和」判断为误标。③ **R3 同类误标**——R42「≥3CTA 是 R3 需求自相矛盾症状」是 stretch：≥3CTA = 强行可发现 = D1 症状，非 R3。ref 24 §七 R3/R5/R6 三行同属「D 症状误标为 R 规则」一类（R42「R3/R5 可调和」整体误判，同 R2 教训）。**修（4 处 · 根 + outliers）**：① **ref 24 §七 表重构**——R3/R5/R6 三行从症状（≥3CTA/无undo/>3步）改为 canonical 触发（需求自相矛盾/路径B 4条件/双主导），辩证根因列同步（矛盾律/可证伪性/名正言顺）；R18 保留（canonical）；旧症状→D 映射移到 blockquote 注（明确标「D 矛盾典型 UI 症状·非 R 规则」），保住有效教学法不丢。② **ref 47 D2:32**——`R5 关键操作必有 undo` → `关键操作必有 undo · D2 强行自动症状`。③ **ref 47 D4:48**——`R6 onboarding >3 步必 skip` → `onboarding >3 步必 skip · D4 强行引导症状`。④ **ref 47 example:169**——`R5(undo)/R15(不可逆)` → `R15(不可逆) 低 · undo 出口已留（D2 症状·非 R5）`（R15=越权·不可逆操作须人确认 = 控制权不下移，保留；undo 是 D2 症状非 R5）。**验证**：re-lint exit 0 零漂移；残留 grep 证实 refs+agents 全部 R6 = 双主导一致、R5 不再绑 undo。仅改正文不动 frontmatter，charter_version 不 bump（bug 修复非内容新增，同项目惯例）。**审计范围**：ref 24 §七 全段 + ref 47 D2/D4/§五 example + SKILL.md §路径B 4 条件核 + ref 17 §三 + moment-strategist R 表交叉核。**诚实退让（2 处新冰山 · R42 漏扫 · 留专门轮）**：① **README.en:297**——`R1-R6 | Forced animation · interrupt · CTA flood · first-time intrusion · destructive-no-undo · long onboarding` 整行 6 主题全误对齐（R3≠CTA flood/R5≠no-undo/R6≠long-onboarding，同 ref 24 §七 旧症状 scheme），fix 需英文 6 主题全重写为 canonical，留专门轮。② **README.md:354-366 决策树**——整棵 mermaid 用第三套 legacy R1-R6（R1=痛点/R2=定位/R3=数据/R4=风险/R5=a11y/R6=验证·brief-acceptance gate），非仅 R6，是 CHANGELOG:681「R1-R6 配哲学命题」re-ground 前的 KPI scheme 残留。fix 需 design decision（重写为 canonical 哲学 R1-R6 / 或降级重编号为「brief 准入门」非 R），整树 6 节点+6 Rej 标签重写，留专门轮。两处同源（核心 refs 已纠偏，README 是表现层摘要，机械但广，单开一轮）。

- 🔧 **[v4.2.7 R44 · R43 defer 闭环（README 决策树+en:297）+ R43 漏扫补遗（ref47:26 R3 + examples/05 R5）+ 审计方法教训]**：R43 留 2 处 README defer，本轮闭环。但**开扫即发现 R43 的"2 处 defer"诊断不完整**——全面 grep（覆盖 examples/+README+全目录）命中 R43 漏扫的 2 处同源误标：① **ref 47:26** D1 表「R3 触发 | 一屏 ≥3 CTA」——R43 重构 ref 24 §七 时只扫了 ref 47 D2/D4/example:169，漏了 §一 D1 表的同源 R3=≥3CTA 误标。② **examples/05-streaming-chat/report.md:10**「R5（关键操作无 undo）：regenerate 保留旧版本」——R43 验证 grep 范围只查 refs+agents，漏扫 examples/。**根因（审计方法教训）**：R43 的验证 grep 只查 `R5↔undo`/`R6↔步` 组合词，没查 `R3↔CTA`，也没扫 examples/ + README/——验证 grep 范围要全覆盖（全目录 + 全 R 编号 × 全症状词），不能只查本轮修的组合。同 R2"audit agents misdiagnose"教训的延伸：自查也会因 grep 盲区漏扫。**独立核验（合法·不改）**：README.en:30 `R1 + R2 triggered: forced animation + high-frequency interruption`（10s login animation case）——R1=时长>5s强加体验（10s>5s ✓）+ R2=仪式装饰在高频界面（每次访问 login 算高频打断 ✓），是 case 描述非规则总览，措辞成立，**不改**（区别于 :297 规则总览表）。**修（4 处）**：① **README.md:354-366 决策树重写**——design decision 选「重写为 canonical」（标题承诺是 R1-R6 决策树）：六问从 legacy brief-质量门（痛点/定位/数据/风险/a11y/验证）改为 canonical R 触发（时长>5s非主动/仪式在高频/需求自相矛盾/违铁律/路径B4条件未满足/一屏双主导），六 Rej 文案从 KPI 风格改为哲学命题（强加体验·人是目的/矛盾律/绝对命令/可证伪性/名不正则言不顺）；**逻辑翻转**——原树"是→继续·否→REJECT"是 brief 质量门逻辑，canonical R 规则是"触发→REJECT"，故翻转为"是→REJECT·否→继续"；mermaid 节点 ID（Rej1-6/Pass/Alt）全保留，:368+ Rej→Alt 连线 + :375+ style 不动（语法不断）。② **README.en:297** 6 主题重写为 canonical：`Forced duration · ritual-on-high-freq · need-contradiction · iron-law-violation · path-B-unmet · dual-led`（原 Forced animation/interrupt/CTA flood/first-time intrusion/destructive-no-undo/long onboarding 全误对齐）。③ **ref 47:26** D1 表「R3 触发 | ≥3 CTA」→「D1 症状 | ≥3 CTA = 强行可发现（非 R3·两端都站才触发 R18）」（同 R43 ref 24 §七 处理：症状移出 R，标 D 症状）。④ **examples/05 report.md:10**「R5（关键操作无 undo）：regenerate 保留旧版本」→「R5（路径 B 4 条件·本 case 走路径 G 不触发）：N/A ✓ · regenerate 可撤销归 D2 留位」（:33 已正确覆盖 D2，此处补 R5 canonical 语义 + D2 归因，保留教学不删）。**验证**：re-lint exit 0 零漂移；**全面 grep（全目录·全 R×症状词·含 examples/README）**证实 R3/R5/R6 误标全清——残留命中全为 canonical 定义（ref17/24/moment-strategist/SKILL/README 决策树）或 CHANGELOG 历史记录（R35-R43 忠实记录"当时发现的误标"，不改历史）。仅改正文不动 frontmatter，charter_version 不 bump。**审计范围**：README.md 决策树全段 + README.en:297/30 + ref 47 §一 D1 表 + examples/05 report.md + 全库 R3/R5/R6 全面 grep。**诚实退让**：无新增 defer——R1-R6 跨 ref/README/examples 误标本轮全清，R43 defer 闭环 + 漏扫补遗完成。
- 🐛 **[v4.2.7 R45 · 新一轮语义审计 · refs 28-30/46-50 八处 lint 盲区 bug + 3 defer + 7 误诊澄清]**：R44 收口 R3/R5/R6 跨 ref/README/examples 误标后开新一轮语义审计（lint 只抓元数据漂移，抓不到自相矛盾/误标/断链）。并行 4 审计 agent 覆盖三道门(28-30)+内核(46-48)+Lite/记忆(49-50/stub)，每条 candidate 独立人工核验源文后修（守 R2/R43「audit agents misdiagnose · verify independently」教训——本轮 7 处误诊即由此拦下）。**8 修**：① **ref 28:93 G4「不搁置」vs §9「挂待议≤1轮」自相矛盾**——G4 平票/法定人数不足「退回·不搁置」与 §9 边界表同案「挂待议≤1轮·仍凑不齐退回」冲突。修 G4 改「不默认通过·法定人数不足可挂待议≤1轮(见§9)·不无限搁置」，保反偷懒过线意图同时与 §9 cool-off 一致。② **ref 29:131 §5「SLA 超时自动升级」无条件 vs §3 P2「警告+计入指标」不升级自相矛盾**——§5 开场「SLA 超时是自动升级」漏 scope，把 P2 也卷进 L1-L4 升级链。修 §5 改「P0/P1 超时自动升级；P2 警告级止于警告+计入指标·不进升级链」。③ **ref 29:145 降级放行→ref 30 K1 断链**——ref 29 §5/§10 承诺「降级放行的带病缺陷转 K1 归档复审跟踪」，但 ref 30 K1 额外触发采样 4 条(令牌/规则集/M3/外部引证)无「降级放行」入口，带病内容只走默认分层抽样非保证跟踪。修 ref 30 K1 补第 5 条「ref 29 §5 L3 降级放行的带病内容→强制全采跟踪」。④ **ref 48:104 推演链 Step6 R18 误标**——端到端推演链 Step6「投票→R18(矛盾选倾向)/R24(僵局)」列 R18 为投票结果，但 §7(line92)+流程图(line29) Step6 均只 R24，且 ref 47:18 定义 R18=「两端都站·不选倾向」病因级 REJECT(dialectician 触发·返回 BRIEF·Step5 矛盾映射产物非 Step6 投票结果)，标签「选倾向」与定义「不选倾向」又反。修删「R18(矛盾选倾向)/」留「R24(僵局)」对齐 §7+流程图。⑤ **ref 49:83 断链「见 ref 48 §11」**——ref 49 §6「设计场景圣人记忆积累属 v4.3 议题(见 ref 48 §11 诚实声明)」指针断：ref 48 §11(line144-149)4 条限制全无圣人记忆/v4.3 议题；真源是 R25/R27 留的缺口(ref 50 §0 标题「为什么需要(R25/R27 留的缺口)」)。修改指「R25/R27 留的缺口·见 ref 50 §0」。⑥ **ref 49:90 裸「R3」与哲学命题 R3 碰撞**——§7「不加载 ref 17(含 R3 厘清的术语表)」用裸 R3 指 charter-audit R3，但 §7 自身规则「裸 RXX=哲学命题」(ref 17:307 哲学命题 R3=需求自相矛盾)，自相矛盾。修改「v4.2.7 哲理审计 R3 厘清的」(对齐 ref 17:312 权威索引表标题惯例)。⑦ **ref 50:164 animation-choreographer 误列 Tier5**——「memory-keeper 定 Tier5 横切被咨询层(同 token-keeper/animation-choreographer 守护型)」误把 animation-choreographer 当 Tier5 守护型，但 ref 17:144 它在「### 🎨 Tier 4 · 视觉层」且非守护型(craft·老子大象无形)，Tier5(line153)=token-keeper/a11y-guardian/responsive-strategist。修改「token-keeper/a11y-guardian 守护型」。⑧ **ref 50:113 is_turning_point 触发未声明**——§3.1「圣人改主意→旧条目标 superseded=true 不删(转折点)」只设 superseded 未设 is_turning_point，但 §2 schema(line70) 该字段独立、stub(memory-keeper:28) 已 patch「is_turning_point=true 永久保留」。修补「+ is_turning_point=true(对齐 §2 schema)」让 ref50 自身可定触发不依赖 stub。**3 defer(真 bug 但 fix 需 authored decision · 不臆断)**：① **B3「W 级工单」未定义**——ref 29:51/ref 30:92,223 用「W 级工单」但 §3 SLA 矩阵只 P0/P1/P2，W 级无定义无 SLA 行(grep 证实仅 3 处用 0 处定义)；W=独立严重级(衰弱回灌专用)还是 P2 别名需 design decision，不臆改 SLA 语义。② **C3 ref 47:26/169「非 R3·非 R5」悬空**——R43/R44 把 R3=CTA/R5=undo 降为 D1/D2 症状后，「非 R3·非 R5」parenthetical 指 ref 47 不定义的 R 编号(哲学命题 R3/R5 还是 ref 29 R3/R5？语境不明)，与 D4 R-namespace 碰撞同源，留专门轮。③ **D4 charter-audit R-namespace 碰撞**——charter-audit 轮次 R22/R23/R25/R15(refs 49/50 用)与哲学命题 R1-R25(ref 17 权威全景)同号不同义(R25=引用真实律 vs 跨skill边界声明；R15=L3 控制权下移 vs P-MS 命名空间污染逻辑)，ref 49 §7 术语表只分 RXX/R-XX 不认 charter-audit 命名空间；fix 需 CA- 前缀或重编号≥R26 的 design decision，非单点可解，留专门轮。**7 误诊澄清(审计 agent 提议但人工核验后否决 · 记录防重复怀疑)**：① A5 ref28:104「v4.2.7 哲理审计 R20 vs frontmatter congress v4.2.6」非版本不一致——前者是 charter-audit 轮次 lineage，后者是 sage_congress 议会版本，正交命名空间。② A4 ref28:85 价值维「R1-R6,R13-R25 跳 R7-R12」非漏写——ref 17:328 明定「R1-R25=R1-R6∪R13-R25·R7-R12 不在其中」，跳号正确(价值维 R 规则双计是 design choice 非硬 bug 不改)。③ C2 ref48:114「常委 4:4:4=12 vs worked example k=5」非矛盾——§4(line59)「常委席位不固定 12 人·动态选拔·固定 12 位降为默认种子」已声明全动态，k=5 合法。④ A8 ref28:104「sage-council(连字符) vs sage_congress(下划线)」非命名不一致——sage-council 是 manifest key+agent 文件(一致)，sage_congress 是 frontmatter bound_to 的 congress 概念，不同实体，lint 零漂移证实。⑤ A2 ref28:102 debunk「R23 命中」非误标——R23=疾虚妄律(ref 17:324)=debunk-auditor 职域，与 §3:130「R→ui-auditor」的张力是 D4 R-namespace 碰撞表象非独立 bug(并入 D4 defer)。⑥ A3 ref28:83 合规维「R 规则命中(ref 15/16/19)」非硬错——(ref 15/16/19) 命名规则集家族非声称 R 规则跨三 ref，§3:123 已 1:1:1 映射 R=ref15，措辞可接受不改。⑦ C4 ref46:96「失结构」标贝多芬 vs 莫奈——低置信·因果层可调和(失结构=结构因·用户被打扰=用户果)，需 maintainer 判定，不改。**审计范围**：refs 28-30/46-50 + v4.3-stubs/memory-keeper 全文精读 + ref 17 §三/§二 交叉核。**审计方法**：4 并行审计 agent(每 ref 簇一个)→ 全部 candidate finding 人工独立核验源文(不轻信 agent 诊断)→ 仅 confirmed+clear-fix 的 8 处修，ambiguous 的 3 处 defer，misdiagnosis 7 处记录澄清。re-lint exit 0 零漂移。仅改正文不动 frontmatter，charter_version 不 bump(bug 修复非内容新增，同项目惯例)。**诚实退让**：B3/C3/D4 三 defer + C4 低置信，留专门轮或 maintainer decision。

## [4.2.6] —— 全动态常委 · 420 板凳全员厚仙人

> **DYNAMIC COUNCIL**: 常委席位从「固定 12 人雷打不动」升级为「每次任务从整张 **420 板凳按分动态选拔**」。做伦理任务可能罗尔斯/阿伦特当常委，做配色任务可能康定斯基/伊登当常委。固定 12 位降为**默认种子 + 人格稳定锚 + 平局兜底**。

> **THICK BENCH**: 全部 420 位思想家(335 哲 + 50 艺 + 35 音)由「一句话薄板凳」增厚为「结构化档案卡厚仙人」(头行: 中西/时代E/主矛盾D/加减派 + 命题 + 钩子 + 立场 + 3 条打法)，人人够格当 2 票常委发三段式(理论依据/设计方向/改造动作)。

### Added
- 🗂 **厚仙人 Profile Schema**：ref-27 §0 新增档案卡格式规范(每位 5-6 行 · 立场/打法扣真实主张 · R25 疾虚妄核验防注水)
- 🎴 **420 份档案卡**：古希腊样板 + phil-1/2/3 + artists + musicians 五批全部增厚，零薄行残留
- 🔴 **可达性红线第 3 条**：自身得分进入三大类 top-N 即当选本次常委(原有"被邀请"/"被点名"两条之外)
- 🔴 **厚仙人门槛**：仅有档案卡的厚仙人可当 2 票常委，薄仙人(本版后已无)经邀请作 1 票助手

### Changed
- 🏛 **bench-matcher Step 3**：固定 12 评分 → 整张 420 板凳全员评分 + 三大类各取 top-N 动态选常委(`eligibility: thick_only` + `default_seeds` + `starred_guaranteed` + 加减平衡校验)
- 🔻 **"Tier 1.5 降级四人"概念取消**：福柯/怀特海/老子/庄子并入普通板凳，与全员同台竞选常委，不再有"自动入场"或"被排除"的特殊身份；保留 agent 文件作人格锚点
- 🗳 **投票权重**：移除 1.5 票档(原 Tier 1.5)，简化为动态常委 2 票 / 助手 1 票
- 📄 **同步**：SKILL.md(六步协议/默认种子席一览/审稿入口) · sage-council.md(frontmatter+正文去"固定12") · 两处投票数学示例(全员竞分+票数重算) · CONTRIBUTING 防漂移映射表
- 🔢 **ref-27 哲学家计数对齐**：316/335 打架修正为统一口径

## [4.2.5] —— 圣人议会 4:4:4 均权 · 蓝军批判全治 (P0/P1/P2)

> **REBALANCE**: 议会从 v4.1 的「8 哲 + 2 艺 + 2 音」(8:2:2 哲学家压倒) 重平衡为严格「**4:4:4 三大类均权**」。哲学家不再天然多数，艺术家/音乐家与哲学家话语权完全平等。

> 本次是对 v4.1 的蓝军自审 (P0/P1/P2 三档批判) 的全面修复：均权、加减辩证、禁一票否决、防自利路由、跨学科规则锚补齐。

### Changed
- 🏛 **议会结构 8:2:2 → 4:4:4**：Tier 0 固定 12 位 = 4 哲学家 + 4 艺术家 + 4 音乐家 (P0-1 话语权平等)
- 🔻 **4 位哲学家降级 Tier 1.5**：historian (福柯 #058) / futurist (怀特海 #091) / wuwei-master (老子 #092) / perspectivist (庄子 #093) —— 仍可被 bench-matcher 邀请，不再默认入议会
- ⭐ **用户点名 2 位新 Tier 0 主理**：polymath-bridger (达芬奇 #A001) + tension-composer (贝多芬 #M005) (P0-3)
- 🗳 **task_kind 改 user-declared 优先**：由 BRIEF 显式声明任务类型，LLM 推断仅作 fallback，防自利路由被 hack (P1-5)
- 🚫 **禁单一圣人一票否决**：silence-composer (凯奇) 等「反对派」必须走议会民主表决，不再默认 reject (P1-6)

### Added
- 🎨 **4 位艺术家 Tier 0 agent**：polymath-bridger (达芬奇·跨学科联结 [+]) / form-liberator (米开朗基罗·减法解放 [-]) / light-impressionist (莫奈·光感印象 [+]) / void-painter (倪瓒·留白 [-])
- 🎵 **4 位音乐家 Tier 0 agent**：counterpoint-architect (巴赫·对位 [~]) / tension-composer (贝多芬·情感张力 [+]) / silence-composer (凯奇·留白即声音 [-]) / ambient-architect (Brian Eno·环境陪伴 [~])
- 📐 **R-Cross1-4 跨学科四律** (P2-8 · 艺音 Tier 0 也有规则锚)：R-Cross1 达芬奇跨学科联结 / R-Cross2 莫奈感官完整 / R-Cross3 贝多芬情感张力 / R-Cross4 Eno 环境陪伴
- 🎭 **议会内置加减辩证** (P0-2)：[减法派 −] 王弼/倪瓒/凯奇 ⟷ [加法派 +] 达芬奇/莫奈/贝多芬；音乐三档 凯奇(静)↔Eno(环境)↔贝多芬(高潮)
- 🏛 **docs/v4.2-congress-simulation.md**：v4.2 跨类辩论 5 TC 全程演示 (达芬奇 × 贝多芬 × 王弼)
- 🗳 **议会表决加权**：Tier 0 = 2 票 + task_kind 命中类别 +0.5 (cap 2.5) / 助手 = 1 票 / ≥2/3 加权通过

### Removed
- 🚫 **docs/v4-congress-simulation.md** —— v4.0 八哲学家版 demo 被 v4.2 版取代 (避免与现行 4:4:4 协议矛盾)

### Fixed
- 🐛 降级名单数据错误：原误将「梅洛庞蒂 #056」列入降级哲学家 —— 梅洛庞蒂并非独立 agent (仅 perspectivist 的参考思想家)，正确降级四位为 福柯/怀特海/老子/庄子
- 📊 全量版本同步：SKILL.md 正文 / .skill-manifest.json / README / README.en / CHANGELOG 对齐 v4.2 (修复 v4.1→v4.2 升级时机器读取层与历史层漏改的漂移)

---

## [4.1.0] —— Tier 0 议会扩为三大类 · 哲学 × 艺术 × 音乐

> Tier 0 圣人议会从「纯哲学家」扩展为三大类：哲学家 + 艺术家 + 音乐家。设计是哲思 × 视觉 × 时间律动的交点 —— 配色 / loading / 动效 / 品牌音等任务，光靠哲学家召不到对口专家。

### Added
- 🎨 **4 位艺术家 + 4 位音乐家进入 Tier 0 板凳**：达芬奇 / 米开朗基罗 / 莫奈 / 倪瓒 + 巴赫 / 贝多芬 / 凯奇 / Brian Eno
- 🗺 **task_kind 任务类型路由**：视觉 BRIEF 召艺术家、动效 BRIEF 召音乐家、哲学 BRIEF 召哲学家、mixed 三类合议；匹配类别 +0.5 先验
- 📚 **板凳扩容至 420 位思想家**：335 哲学家 + 50 艺术家 + 35 音乐家 (references/27-philosopher-bench.md)

### Changed
- 议会初版权重为「8 哲 + 2 艺 + 2 音」(8:2:2) —— v4.2 重平衡为 4:4:4 (见上)
- `agent_count`: 44 → **52** (新增 8 位艺术家/音乐家)

---

## [4.0.0] —— 圣人议会民主 · 砸地基重铺 · 撤回 v3.3 三档制

> **BREAKING CHANGE**: v3.x "Tier 0 八圣人每次固定全上" 的流水线被撤掉。 改为议会自包含: bench-matcher 评分 + Layer 1 召唤 k 位 + 自由递归邀请 (cap 15) + 议会讨论 + 陪审团 2/3 加权投票。

> "v3.3 上了'三档通道'让用户选 fast/standard/full · 用户说: 不应该有档, 应该让 301 圣人自己说话, 谁该上谁上 · 这次的改动是回应'用户不应该被迫做决策'。"

### Added

- 🏛 **agents/bench-matcher.md** (重铸) — Tier 1.6 圣人议会自包含调度器
  - Step 1 评分: Tier 0 八位优先打分 (5 维 0-10)
  - Step 2 Layer 1 召唤: 选 ≥ 7.5 分的入场, fallback top-1 保不空场
  - Step 3 自由邀请 (递归): 入场圣人从 293 板凳邀请师弟师妹 · 单人配额 3 · 总数 cap 15
  - Step 4 议会讨论: 全员三段式陈述 → 合并共识 / 调解冲突 / 主动指盲点
  - Step 5 陪审团投票: Tier 0 = 2 票 / 助手 = 1 票 / ABSTAIN 减分母 · ≥ 2/3 通过 · 修订重投 max 3 轮
- **invited_helpers** frontmatter 字段 — 8 位 Tier 0 各列 6 位关联师弟师妹 (师承网络)
  - dialectician #039 / historian #058 / futurist #091
  - wuwei-master #092 / perspectivist #093 / silence-architect #232 / holism-strategist #249 / debunk-auditor #225
- **R24 议会僵局律 (重定义)**: 3 轮投票仍 < 2/3 通过 → 输出"未达成共识"报告 + 多方案对照 → 升级用户决断

### Changed

- BRIEF 入场链从 v3.3 的 11 站三档制 → **5 站议会民主**
- `agent_count`: 45 → **44** (删除 complexity-triager · 保留 quotation-verifier)
- tier_1_6_bench_matching → **tier_1_6_sage_congress** (语义升级)
- moment-strategist upstream → `[bench-matcher, quotation-verifier]` (彻底脱离 Tier 0 八圣人直连)
- SKILL.md / README / README.en / .skill-manifest.json 全量同步 v4.0.0

### Removed (BREAKING)

- 🚫 **agents/complexity-triager.md** — v3.3 实验, v4.0 撤回 (用户拒绝档位制)
- 🚫 **Tier 0.5 layer** — 撤掉 (无档位)
- 🚫 **R24 复杂度匹配律** — 重定义为 R24 议会僵局律
- 🚫 **v3.x 固定 8 圣人必经流水线** — 改为按需召唤 k 位

### Preserved

- ✅ **agents/quotation-verifier.md** (Tier 1.7) · R25 引用真实律 — v3.3 唯一保留下来的实验产物
- ✅ R1-R23 哲学规则全保留 (触发条件为"对应圣人被议会召唤时启用")
- ✅ Tier 0 八位仍是"优先候选池", 只是不再每次全上

### Highlights

- **首个圣人议会民主设计系统** — 哲学 multi-agent 第一次真正落到"投票决议"机制
- **诚实承认 v3.3 失败** — 三档通道走错路, 不藏着掩着, 直接 BREAKING 撤回
- **递归邀请 + 加权投票** — multi-agent 系统设计中罕见的"民主"机制
- **R24 重定义为僵局律** — 把"AI 总能给答案"打破, 议会确实可以"达不成共识"并交还用户

### Philosophy

> "v3.0 想给每个 BRIEF 配 8 个老师 — 但课程不该一刀切。"
> "v4.0 改为请教学经验丰富的几位, 让他们决定要不要叫师弟师妹助阵, 大家议一议, 然后投票。"
> "这就是 v4.0 的本质: 不再供奉, 而是召集; 不再强加, 而是表决。"

### Migration Notes

- 用 v3.x 的项目: 升级即用, 无需改 BRIEF 措辞
- 用 v3.3 的项目: 不会再看到 "fast/standard/full" 提示 · 全部由议会自适应
- token 成本: 简单 BRIEF (k=1 + 无邀请) 约 ≤ 5 call · 复杂 BRIEF (cap 15 + 3 轮投票) 可达 50+ call

---

## [3.3.0] —— (已撤回 · 三档通道实验 · 仅保留 quotation-verifier)

> "v3.2 之后用户做了一次客观蓝军评估 · 戳出两个真痛点: ① 复杂度内卷 (做个按钮也要走 10 stage) ② 引用造假风险 (LLM 编圣人语录)。v3.3 不加新哲学层 · 直接补这两个洞。"

### Added

- 🚦 **agents/complexity-triager.md** — 新 Tier 0.5 agent · BRIEF 复杂度分诊员
  - 位置: 在所有 Tier 0 之前 (流程最前端)
  - 职能: 给 BRIEF 打 fast / standard / full 三档标签
  - fast (≤30 字 + 5 套高频搭配) → 跳过 Tier 0 + bench-matcher · ≤5 LLM call
  - standard (默认) → 走 Tier 0 八圣人 · 跳过 bench-matcher · ≤12 LLM call
  - full (复杂跨路径) → 全套 · 15-25 LLM call
  - 支持用户 override ("升级到 full" / "降级到 fast")

- 🔍 **agents/quotation-verifier.md** — 新 Tier 1.7 agent · 引用真实性核验员
  - 位置: bench-matcher 下游 · moment-strategist 上游
  - 职能: 核验 bench-matcher 输出的"#NNN 圣人 / 理论依据 / 设计钩子"是否真实存在于 references/27
  - 三重检查: 编号存在 / 人名匹配 / 钩子语义一致
  - 失败 → REJECT R25 + retry (max 2)

- **R24 复杂度匹配律**: 简单任务套用 full 通道 → REJECT (由 complexity-triager 判)
- **R25 引用真实律**: bench-matcher 输出虚构圣人 / 张冠李戴 / 钩子漂移 → REJECT (由 quotation-verifier 判)

### Changed

- BRIEF 入场链从 10 站重构为 **11 站三档分支** (fast / standard / full)
- `agent_count`: 43 → **45**
- tier 数量: 9 → **11** (加 tier_0_5 + tier_1_7)
- bench-matcher downstream 改为 quotation-verifier (而非直接 moment-strategist)
- SKILL.md / README / README.en / .skill-manifest.json 全量同步 v3.3.0

### Highlights

- **首次自我蓝军纠偏**: v3.3 不是加 feature, 是回应"客观评价"中暴露的两个真痛点 · 这是 skill 第一次诚实地承认"v3.2 太重 + 引用有造假风险"
- **三档通道**: 不再"一刀切让所有 BRIEF 走完整哲学层" · 因任务而异
- **引用幻觉治理**: 首次把 LLM 引用幻觉问题作为 skill 内部 REJECT 治理 · 不是"假装没事"
- **诚实定位转变**: 之前每个 release 宣称"更哲学" · v3.3 宣称"更可信 + 更轻量可用"

### Philosophy

> "蓝军不是敌人, 是另一面的自己。" — v3.3 是 v3.2 的另一面。

---

## [3.2.0] —— bench-matcher · 301 板凳从图书馆变成活师傅团

> "8 圣人议会固定必经 · 但 301 板凳的其余 293 位不应只躺着 —— 任务来了, 召唤当下最契合的师傅, 任务走了, 师傅退场。这就是'因事请师'。"

### Added

- 🎯 **agents/bench-matcher.md** — 新 Tier 1.6 agent · 301 板凳动态匹配器
  - 位置: 在 Tier 0 八圣人议会和 moment-strategist 之间
  - 职能: 读 BRIEF + 读 references/27 → 5 维评分 → 动态挑出 N 位 (通常 3-9 位 · 不固定数量)
  - 输出: 每位圣人**三段式** —— 📚 理论依据 / 🎯 设计方向 / 🔧 改造动作
  - 整合: 输出"哲学指令包" (consensus_directions / contested_directions / unified_action_list)
- BRIEF 入场链从 9 站扩展到 **10 站**
- `agent_count`: 42 → **43**
- `tier_1_6_bench_matching`: ["bench-matcher"] (新增 tier 层级)

### 评分维度 (5 维)

| 维度 | 权重 |
| --- | --- |
| 设计钩子直接命中 | 40% |
| 矛盾倾向契合 | 20% |
| 时代契合 | 15% |
| 反盲点 (填补 Tier 0 八圣人未覆盖) | 15% |
| 中西分布 (至少 1 中 + 1 西) | 10% |

### Highlights

- **首个"按任务动态召唤哲学家"的设计系统** — 不再供奉固定圣人, 召唤当下最契合的师傅
- 同样的"做 dashboard"任务, 对数据分析师可能召出王充 + 老子 + 道格拉斯; 对营销人员可能召出庄子 + 福柯 + 巴特勒
- 每位被召唤的圣人都给出"理论依据 + 设计方向 + 改造动作" — 不只是抽象观点,直接告诉用户怎么改
- 301 板凳真正"活" — 不再是静态参考文档

---

## [3.1.1] —— sage-council 圣人议会审稿模式

> "ui-auditor 审 BRIEF 出口, sage-council 审已有文件 —— 8 圣人各持一面镜子, 拼起来照出设计的全貌。"

### Added

- 🏛️ **agents/sage-council.md** — Tier 6 质量门新增议会审稿编排器, 与 ui-auditor 并列
  - 入口: 用户直接扔文件 / 组件 / 截图描述
  - 调度: 并行调度全部 8 位 Tier 0 圣人 (黑格尔 / 福柯 / 怀特海 / 老子 / 庄子 / 王弼 / 法藏 / 王充)
  - 输出: 每圣人 1 条设计观点 → 共识问题 → 立场冲突 → 优先级改进清单
  - 哲学锚: 孔子"三人行必有我师" + 法藏"一即一切"
- `agent_count`: 41 → **42**
- `tier_6_quality_gate`: ["ui-auditor"] → ["ui-auditor", "sage-council"]

### Changed

- SKILL.md / README.md / README.en.md / manifest 全量同步到 3.1.1

### Highlights

- 三种入口形成完整闭环:
  - **需求线**: BRIEF → moment-strategist → 9 站 Tier 0 → 路径 A-G → ui-auditor → 上线
  - **审稿线**: 已有文件 → sage-council → 8 圣人议会 → 改进清单 (可回流到需求线)
- 让 117 位中国哲学家 + 西方 trio 真正落到"对现有设计点评"的实战场景
- 不求合一, 但求穷尽 —— 8 立场并陈,用户自己决断

---

## [3.1.0] —— 中国 Tier 0 五位上桌 · 全球首个中国哲学驱动 design system

> "把老子 / 庄子 / 王弼 / 法藏 / 王充五位中国哲学家请入 Tier 0 实战 agent —— 不再只是references/27 板凳上的候选, 而是每一个 BRIEF 必经的关卡。"

### Added · 5 个中国 Tier 0 agent

- 🪷 **wuwei-master** (老子 · #092) — 默认减法宗师 · 触发 **R19 无为减法律** · "为道日损" · 任何新增元素必须证明"删掉它用户会死",否则 REJECT
- 🐢 **perspectivist** (庄子 · #093) — 齐物多视角专家 · 触发 **R20 齐物多视角律** · "自彼则不见" · 单视角独裁一律 REJECT,要求 ≥3 persona × scenario 覆盖
- 🧘 **silence-architect** (王弼 · #232) — 留白建筑师 · 触发 **R21 得意忘象律** · "大音希声" · 不传 intent 的装饰一律 REJECT
- 🌐 **holism-strategist** (法藏 · #249) — 一即一切整体战略家 · 触发 **R22 一即一切律** · "因陀罗网" · 局部改动未评估全局影响一律 REJECT
- 🔬 **debunk-auditor** (王充 · #225) — 疾虚妄反伪 AI 审计员 · 触发 **R23 疾虚妄律** · "实知论" · 任何"装作 AI / 装作个性化"一律 REJECT (Tier 0 最后一关)

### Added · R19-R23 新 REJECT 规则

- moment-strategist REJECT 表从 R1-R18 扩展到 R1-R23
- 每条 R 配中国哲学锚点 (`[#092 老子 · 为道日损]` 等)

### Added · BRIEF 入场链扩展

- 从 4 站 (dialectician → historian → futurist → moment-strategist) 扩展到 9 站
- 西方 trio 之后,新增中国五位逐一过堂

### Changed

- `agent_count`: 36 → **41**
- `tier_0_dialectical_philosophy`: 3 → **8**
- REJECT 规则: 18 → **23**
- SKILL.md / README.md / README.en.md / manifest 全量同步到 3.1.0

### Highlights

- 全球首个 **Chinese-philosophy-driven** design system
- 117 位中国思想家从 references/27 板凳正式升入 Tier 0 (5 人实战 + 112 候选)
- Tier 0 形成完整的"识别矛盾→定位时代→预测演进→默认减法→多视角→留白→整体性→祛魅"九步审查链
- 每一个 BRIEF 都要被这 8 位 Tier 0 agent 联合审过一遍才能进入路径分流

---

## [3.0.1] —— 301 人哲学家板凳 + v3.0 收尾打磨

> "把 117 位中国哲学家请上桌 —— 全球唯一中国哲学驱动的 design system。"

### Added

- 🆕 **references/27-philosopher-bench.md** — 301 位中外思想家板凳（117 中国 + 184 西方/全球）· 每位带"一句话核心 + design hook" · 配套援引协议
- README.md / README.en.md · 新增"301 人板凳"专门段落 + philosophers-301 徽章
- SKILL.md 三层哲学表追加"附录 · 哲学家板凳"行

### Fixed

- 🐛 `agents/ui-auditor.md` 补齐 v3.0 frontmatter 四字段（historical_era / emerged_to_solve / core_contradiction / next_evolution）—— 此前 sub-agent 批跑时被错误地排除在"已更新"清单
- 🐛 `SKILL.md` 版本号从 3.0.0 同步到 3.0.1
- 🐛 README.md / README.en.md 版本徽章 3.0.0 → 3.0.1
- 🐛 `.skill-manifest.json` reference_count 20 → 24 · 加入 v3_0_1_additions 块

### Highlights

- 36/36 agent 现在 100% 含 v3.0 四字段（之前是 35/36）
- 301 人板凳为 v3.1 中国味 Tier 0 扩展（5 个新 agent 候选）铺路
- 强推 Top 15 候选清单（5 西 + 5 中 + 5 全球）已在 27 板凳中标注 ★

---

## [3.0.0] —— 哲学升维 · 三层哲学体系 + 8 时代 + Tier 0 + R13-R18

> *"哲学理念上升到一个新的高度，只有理解了事物发展的规律，才能做好系统。"* — v3.0 立项语

### ⚠️ Breaking Changes

- **任何 BRIEF 必须先过 Tier 0 三件套**（dialectician → historian → futurist），不可绕过
- **6 tier → 8 tier**（v2.x 调用方式仍兼容，但 BRIEF 入口已加宽）
- **33 → 36 agent**（新增 Tier 0 trio）
- **R1-R6 → R1-R18**（新增 6 条哲学触发的 REJECT）
- `ui-auditor` REPORT 模板新增「辩证体检」段落 — 旧 REPORT 解析器需升级

### Added · 三层哲学体系

- 🆕 **references/24-philosophy-dialectics.md** — Layer 2 辩证 · 7 大基本矛盾（D1-D7）+ 矛盾倾向矩阵 + R18
- 🆕 **references/25-philosophy-laws.md** — Layer 3 发展规律 · 5 大律（L1 复杂度螺旋 / L2 抽象交替 / L3 控制权下移 / L4 反馈缩短 / L5 模态融合）+ R13-R17 映射
- 🆕 **references/26-historical-positioning.md** — Layer 0.5 历史定位 · 8 时代分类（E1 Pre-Web → E8 Spatial-Multimodal）+ 33 agent 时代身份证
- 🔄 **references/17-philosophy.md** — 标注为 Layer 1 价值层 · 加上三层哲学跳转表

### Added · Tier 0 辩证哲学层（3 新 agent）

- 🪙 **agents/dialectician.md** — 黑格尔 · 正反合 · 任何 BRIEF 入场识别主矛盾、选倾向、给对方留位 · 触发 R18
- 📜 **agents/historian.md** — 福柯 · 知识考古学 · 给 BRIEF 找时代坐标、识别 time-lag / overshoot · 触发 R14
- 🔭 **agents/futurist.md** — 怀特海 · 过程哲学 · 预测 now/mid/future 演进路径 + future hook 清单 · 触发 R13/R15/R16/R17

### Added · 6 条新 REJECT 规则

| 规则 | 哲学根因 | 触发 agent |
| --- | --- | --- |
| **R13** | 违反 L1 复杂度螺旋律 · Complex 阶段拒不收口 | futurist |
| **R14** | 违反 L2 抽象交替律 · 停留在过时组织形态 | historian |
| **R15** | 违反 L3 控制权下移律 · 不让 AI 该接管 / AI 越权 | futurist |
| **R16** | 违反 L4 反馈循环缩短律 · 该实时不实时 | futurist |
| **R17** | 违反 L5 模态融合律 · 该多模态强单模态 | futurist |
| **R18** | 矛盾两端都站 · 没选倾向 | dialectician |

### Changed

- `agents/moment-strategist.md` — frontmatter 加 `upstream: [dialectician, historian, futurist]`，新增「v3.0 Tier 0 上游协议」段落、REJECT 表扩展 R13-R18
- `agents/ui-auditor.md` — 模式识别新增 **mode_4 dialectical_consistency**（始终叠加）· REPORT 模板新增 🌗 辩证体检段落
- `.skill-manifest.json` — version 3.0.0 / agent_count 36 / 新 tier_0_dialectical_philosophy 字段 / v3_0_changes 全量记录
- `SKILL.md` — 三层哲学体系总览 + BRIEF 入场顺序图 · v3.0 标题
- `README.md` / `README.en.md` — badges (version/agents/tiers/rules) 全量升级 v3.0 / 36 / 8 / R1-R18 · 新增 v3.0 三层哲学体系表

### Philosophical Footnote

> *黑格尔：『真理是全体。』*
>
> 价值是真理的一极，辩证是真理的另一极，发展规律是把这对极放进时间里看。只讲价值是片面，加上辩证才完整，加上规律才动态。
>
> *毛泽东：『矛盾是事物发展的根本动力。』*
>
> 33 agent 不命名矛盾，矛盾就来命名 33 agent。

---

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
