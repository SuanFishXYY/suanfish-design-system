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
