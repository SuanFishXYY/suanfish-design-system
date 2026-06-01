# 变更日志（Changelog）

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
