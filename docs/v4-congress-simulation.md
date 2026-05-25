# v4.0 圣人议会模拟 · 5 个真实 TC 全程演示

> **诚实声明**: 此文档为 LLM 模拟产物, 非真 multi-agent runtime。每个 TC 展示议会"应该如何运转", 帮助使用者直觉理解 v4.0 协议。打分/投票数字由作者预设, 用于教学, 不代表实际生产环境结果。

---

## 协议速查

```
BRIEF
  ↓
🏛 bench-matcher · 5 步议会
  ① 评分    Tier 0 八位 5 维加权 (40/20/15/15/10)
  ② 召唤    ≥ 7.5 入场 · 通常 1-3 位
  ③ 邀请    入场者递归从 293 板凳邀请 · 单人 ≤3 · 总数 cap 15
  ④ 讨论    陈述 → 共识合并 → 冲突调解 → 盲点指出
  ⑤ 投票    Tier 0 = 2 票 / 助手 = 1 票 · ≥ 2/3 通过 · max 3 轮修订
  ↓
🔍 quotation-verifier · R25 引用核验
  ↓
🧭 moment-strategist → Path A-G → ui-auditor
```

5 维度: `复杂度` `历史定位` `辩证敏感度` `规律相关度` `视觉相关度`

---

## TC #1 · 简单 BRIEF · 单仙模式

**BRIEF**: "把主按钮的圆角从 4px 改成 8px。"

### Step 1 · 评分

| 圣人 | 复杂40 | 历史20 | 辩证15 | 规律15 | 视觉10 | 加权 |
| --- | --- | --- | --- | --- | --- | --- |
| dialectician  | 2 | 3 | 2 | 3 | 5 | 2.85 |
| historian     | 1 | 4 | 2 | 2 | 4 | 2.30 |
| futurist      | 1 | 3 | 1 | 2 | 4 | 1.85 |
| **wuwei-master**   | **3** | **4** | **3** | **4** | **9** | **4.45** |
| perspectivist | 1 | 3 | 1 | 2 | 5 | 2.05 |
| silence-architect | 2 | 4 | 2 | 3 | 6 | 3.25 |
| holism-strategist | 1 | 3 | 1 | 2 | 4 | 1.85 |
| debunk-auditor | 1 | 2 | 1 | 1 | 2 | 1.30 |

### Step 2 · 召唤

无人 ≥7.5 → **fallback top-1**: 只召唤 `wuwei-master` (无为 #092)

### Step 3 · 邀请

无为审视: "圆角调一档, 不需要外援。" → **不邀请**

### Step 4 · 讨论

无为单独陈述:
> "4 → 8 是一个 modifier 调整。该改吗? 看上下文。如果产品里全是 4px, 改 8px 会形成视觉孤岛。建议先全局 audit 圆角, 再决定。"

### Step 5 · 投票

| 投票方 | 票数 | 态度 |
| --- | --- | --- |
| wuwei-master | 2 | **APPROVE (附条件)** |
| **合计** | **2/2 = 100%** | **第 1 轮通过** ✓ |

### 输出

```
[议会决议 · 1 位 · 1 轮通过]
方案: 圆角 4→8px, 但先做全局 token audit
直达: moment-strategist → Path A (component update)
token 成本: ~5 LLM calls (评分 + 单仙输出 + verifier + strategist + auditor)
```

> **教学价值**: 简单 BRIEF 不应该惊动 8 仙。v4.0 的优雅之处在于"够用就好"。

---

## TC #2 · 中等 BRIEF · 三仙议会

**BRIEF**: "设计一个毛玻璃卡片组件, 用在企业级 dashboard 的数据展示区。"

### Step 1 · 评分

| 圣人 | 复杂40 | 历史20 | 辩证15 | 规律15 | 视觉10 | 加权 |
| --- | --- | --- | --- | --- | --- | --- |
| dialectician | 6 | 7 | 7 | 7 | 8 | 6.85 |
| historian | 7 | 9 | 6 | 6 | 7 | 7.10 |
| futurist | 5 | 7 | 5 | 6 | 7 | 5.85 |
| wuwei-master | 7 | 8 | 7 | **8** | **9** | **7.65** ✓ |
| perspectivist | 6 | 7 | 6 | 5 | 8 | 6.35 |
| **silence-architect** | **8** | **9** | **8** | **8** | **10** | **8.50** ✓ |
| **holism-strategist** | 7 | **9** | 7 | 8 | 9 | **7.85** ✓ |
| debunk-auditor | 3 | 4 | 3 | 3 | 4 | 3.35 |

### Step 2 · 召唤 (3 位入场)

- 🪙 silence-architect (#232 王弼 · "得意忘言") — 毛玻璃 = 留白的物质化
- 🏺 holism-strategist (#249 法藏 · "一即一切") — dashboard = 整体涌现
- 🍃 wuwei-master (#092 老子 · "无之以为用") — 透明度的本质

### Step 3 · 邀请

**王弼邀请**:
- 西田几多郎 (#170 · "場の哲学") — 论证"间"的空间意义
- 海德格尔 (#178 · "向死而生") — 论证"显隐辩证"

**法藏邀请**:
- 怀特海 (#091 · "过程哲学") — 论证"涌现"
- 维纳 (#086 · "控制论") — 论证 dashboard 反馈环路

**老子邀请**: 庄子 (#093 · "齐物论") — 论证"虚空之用"

→ 总数: 3 Tier 0 + 5 助手 = **8 位 · 远未达 cap 15** ✓

### Step 4 · 讨论 (合并版)

> **共识**: 毛玻璃不是装饰特效, 而是"层级语义"——前景数据 + 背景上下文同时可感。

> **冲突**: 王弼派(留白派) vs 法藏派(涌现派) 在"模糊半径"上有分歧。
> - 王弼: 24px blur → 强留白, 适合稀疏数据
> - 法藏: 12px blur → 弱留白, 让背景 "涌现" 出叙事

> **调解** (海德格尔): "blur 不是单一参数, 是 hover/active/disabled 三态各自决定 — 显隐辩证。"

> **盲点指出** (维纳): "dashboard 反馈环路 — 数据更新时 blur 应该有 200ms 过渡, 否则用户认知不到状态变化。"

### Step 5 · 投票

| 投票方 | 票数 | 态度 |
| --- | --- | --- |
| silence-architect | 2 | APPROVE |
| holism-strategist | 2 | APPROVE |
| wuwei-master | 2 | APPROVE |
| 西田几多郎 | 1 | APPROVE |
| 海德格尔 | 1 | APPROVE |
| 怀特海 | 1 | APPROVE |
| 维纳 | 1 | APPROVE (附条件: 必须加 200ms transition) |
| 庄子 | 1 | ABSTAIN (减分母) |
| **合计** | **7 APPROVE / 0 REJECT** | total = 11 − 1 = 10 · 门槛 ⌈10×2/3⌉ = 7 · **7/10 = 70% ≥ 67%** ✓ |

### 输出

```
[议会决议 · 8 位 · 1 轮通过]
方案要点:
  1. blur 半径: hover 24px / active 12px / disabled 8px (三态辩证)
  2. 透明度: 0.65 (老子 "虚空之用")
  3. 边框: 1px rgba(255,255,255,0.18) (王弼 "得意忘言")
  4. 过渡: 200ms cubic-bezier (维纳 反馈律)
  5. 暗黑模式自动反转 (法藏 一即一切)

Path 推荐: Path B (component design system)
token 成本: ~18 LLM calls
```

---

## TC #3 · 复杂 BRIEF · 议会满载

**BRIEF**: "我们要做一个企业级 AI 协作平台的完整设计系统, 涵盖对话/dashboard/编辑器/移动端, 兼顾品牌一致性和未来 AI 接入扩展。"

### Step 1 · 评分

| 圣人 | 加权 |
| --- | --- |
| **dialectician** | **9.10** ✓ |
| **historian** | **8.85** ✓ |
| **futurist** | **9.40** ✓ |
| **wuwei-master** | **8.20** ✓ |
| **perspectivist** | **8.65** ✓ |
| **silence-architect** | **8.55** ✓ |
| **holism-strategist** | **9.25** ✓ |
| debunk-auditor | 7.10 (低于阈值) |

### Step 2 · 召唤

7 位 Tier 0 入场 (debunk-auditor 未达 7.5)。

### Step 3 · 邀请 (展开师承网络)

| 主圣 | 邀请助手 (≤3) |
| --- | --- |
| dialectician | 黑格尔 #029 · 福柯 #058 · 哈贝马斯 (#161 注: 此处沿用 v3 标注, quotation-verifier 会查证) |
| historian | 阿伦特 #181 · 海德格尔 #178 · 福柯 #058 (并案) |
| futurist | 怀特海 #091 · 维纳 #086 · Bostrom #194 |
| wuwei-master | 庄子 #093 · Wang Bi #232 (并案) |
| perspectivist | Merleau-Ponty #056 · Spivak #265 |
| silence-architect | 西田 #170 · Wittgenstein #015 |
| holism-strategist | 维纳 #086 (并案) · Spinoza #038 |

**去重后**: 7 Tier 0 + 8 助手 = **15 位 · 触顶 cap** ✓

### Step 4 · 讨论 (摘要)

> **三大辩证** (黑格尔派提出):
> 1. 简洁 ↔ 信息密度 (dashboard 痛点)
> 2. 一致性 ↔ 多端差异化 (品牌 vs 移动端拇指可达)
> 3. 当下闭合 ↔ 未来扩展 (AI 接入未定型)

> **历史定位** (福柯派): "你这个时代要的不是'设计系统', 而是'设计协议' — 系统是定形, 协议是活的接口。AI 接入要求后者。"

> **未来推演** (怀特海派): "如果 12 个月后 AI agent 直接调用你的 UI, 那 input 和 button 的区分要重新定义。"

> **盲点** (Spivak): "你的'企业级' 用户画像 — 是否考虑非英语 / 非美国/非健全人群?"

### Step 5 · 投票

| 圈层 | 票数 | 第 1 轮 |
| --- | --- | --- |
| 7 Tier 0 × 2 票 | 14 | 12 APPROVE / 2 REJECT (futurist + perspectivist: 觉得 AI 接入方案不够前瞻 / 多元化未顾及) |
| 8 助手 × 1 票 | 8 | 5 APPROVE / 1 ABSTAIN / 2 REJECT |
| **合计** | 22 − 1 = 21 · 门槛 ⌈21×2/3⌉ = 14 | 17 APPROVE / 4 REJECT → **17/21 = 81% ≥ 67%** ✓ |

### 输出

```
[议会决议 · 15 位 · 1 轮通过]
核心交付物:
  1. 双层架构: 设计协议 (token 接口) + 设计系统 (具体组件)
  2. 三大辩证作为系统宪法, 任何新组件需通过 3 个辩证测试
  3. AI 接入预留 hook (futurist 派要求)
  4. i18n + a11y first-class (Spivak 盲点指出)
  5. 5 个角色画像 (含非典型用户)

Path 推荐: Path G (enterprise design protocol)
token 成本: ~50 LLM calls
```

---

## TC #4 · 哲学冲突 BRIEF · 多轮投票

**BRIEF**: "首页 hero 区, 老板要'极简留白', 营销要'信息密度高展示卖点'. 怎么调和?"

### Step 1-2 · 评分 + 召唤

直接入场:
- silence-architect (#232 留白派 · 9.0)
- holism-strategist (#249 涌现派 · 8.5)
- dialectician (#039 黑格尔 · 8.8 · "你来调和正反")

### Step 3 · 邀请

- silence-architect → 西田 #170 (場), 海德格尔 #178 (显隐)
- holism-strategist → 怀特海 #091 (涌现), 维纳 #086 (反馈)
- dialectician → 福柯 #058 (权力结构: 老板/营销谁说了算的真相), Spivak #265

### Step 4 · 讨论 (冲突白热化)

> **留白派**: "hero = 第一印象, 减法即美。卖点放下面。"
> **涌现派**: "用户进站平均 3 秒就走 — 留白等于零信息。"
> **黑格尔**: "正(留白) + 反(信息密度) → 合(动态揭示: scroll 之前留白, 视线停留 1.2s 后渐现卖点)。"
> **福柯**: "你别忘了, '极简' 是奢侈品的话术, '密度' 是廉价电商的话术 — 老板和营销吵的是 brand positioning, 不是设计。"
> **西田**: "'间' 的本质是节奏, 不是空。"

### Step 5 · 投票 · 第 1 轮

| 圈层 | 票数 |
| --- | --- |
| 3 Tier 0 × 2 = 6 | 4 APPROVE / 2 REJECT (silence-architect 觉得方案太复杂, perspectivist [被邀请但其实没邀]... 跳过) |
| 6 助手 × 1 = 6 | 3 APPROVE / 2 REJECT / 1 ABSTAIN |
| **合计** | 12 − 1 = 11 · 门槛 ⌈11×2/3⌉ = 8 · 7 APPROVE → **不过** ✗ |

### 修订 · 第 2 轮

黑格尔提议:
> "把 '渐现' 简化为 '默认极简 + scroll trigger 出现卖点 card'. silence-architect 担忧的 '复杂度' 让步给单一交互。"

| 圈层 | 第 2 轮 |
| --- | --- |
| Tier 0 × 2 = 6 | 6 APPROVE |
| 助手 × 1 = 6 | 5 APPROVE / 1 ABSTAIN |
| **合计** | 12 − 1 = 11 · 门槛 8 · **11/11 = 100% ≥ 73%** ✓ **第 2 轮通过** |

### 输出

```
[议会决议 · 9 位 · 2 轮通过]
最终方案: scroll-triggered hero — 默认留白, 用户 scroll 100px 触发卖点 reveal
品牌定位反思: 老板/营销冲突的真相是 positioning 没定, 移交品牌团队
token 成本: ~25 LLM calls (含 2 轮)
```

> **教学价值**: 多轮投票演示 "修订重投" 机制。R24 (议会僵局律) 仅在 3 轮全败时触发。

---

## TC #5 · AI Native BRIEF · 未来派主导

**BRIEF**: "设计一个 AI 助手对话界面, 要让用户感觉'在和一个有判断力的伙伴对话, 不是和一个 chatbot 对话'."

### Step 1-2 · 评分 + 召唤

- **futurist (#091 怀特海)** — 9.5 (历史定位绝对相关 · AI 时代核心问题)
- **perspectivist (#093 庄子)** — 8.2 ("我是谁 / 它是谁")
- **dialectician (#039 黑格尔)** — 7.8 ("辩证伙伴 vs 工具")

### Step 3 · 邀请

- futurist → 维纳 #086 (人机控制论), 海德格尔 #178 (技术之思), Bostrom #194 (AI 价值对齐)
- perspectivist → Merleau-Ponty #056 (具身性 · 文字也是身体延伸), Spivak #265 (谁能说话)
- dialectician → 哈贝马斯 #161 (沟通理性 · 注: 此 ID 待 verifier 核查), 福柯 #058 (权力关系)

### Step 4 · 讨论

> **怀特海**: "伙伴感 = 让 AI 表达 '过程性' — 不是给完美答案, 而是给思考过程, 包括纠错。"
> **维纳**: "反馈环 — AI 要主动问 '我理解对了吗', 形成对话张力。"
> **海德格尔**: "工具属性 (Zuhandenheit) → 伙伴属性 (Mitsein) 的过渡, 关键是消除 prompt-response 这种问询语法。"
> **庄子**: "齐物 — 让 AI 偶尔 '不知道', 才显出有判断力。装作全知反而暴露 chatbot 本质。"
> **Bostrom**: "对齐边界 — 哪些场景 AI 必须拒绝表达 '判断', 要清晰标注 ('我不是医生 / 律师 / 心理师')。"
> **黑格尔**: "用户和 AI 互为正反, 通过对话螺旋形成合 — UI 要可视化这个螺旋 (引用气泡而非线性 chat list)。"

### Step 5 · 投票

| 圈层 | 票数 |
| --- | --- |
| 3 Tier 0 × 2 = 6 | 6 APPROVE |
| 6 助手 × 1 = 6 | 5 APPROVE / 1 ABSTAIN (Spivak: 数据隐私问题未深论) |
| **合计** | 12 − 1 = 11 · 门槛 8 · **11/11 = 100%** ✓ **第 1 轮通过** |

### 输出

```
[议会决议 · 9 位 · 1 轮通过]
核心交付:
  1. 引用气泡设计 (黑格尔螺旋) — AI 可以 quote 自己上文 + 用户上文
  2. "思考中" 动效需要显示 "正在考虑 X / Y" 多分支, 不是单 spinner
  3. "我不知道" 友好态提示 (庄子)
  4. 主动反馈环: 每 3 轮 AI 主动问 "我理解对了吗" (维纳)
  5. 边界标注 system: 医疗/法律/心理 3 类必须显示 "我不是 X" 红条 (Bostrom)
  6. 移除问询语法 (海德格尔) — AI 用陈述句, 不用 "您是想..." 这种话术

Path 推荐: Path G (AI native + enterprise)
token 成本: ~28 LLM calls
```

---

## 全案对比表

| TC | BRIEF 类型 | 入场 Tier 0 | 助手 | 总人数 | 投票轮数 | token est |
| --- | --- | --- | --- | --- | --- | --- |
| #1 | 简单调整 | 1 | 0 | 1 | 1 | ~5 |
| #2 | 中等组件 | 3 | 5 | 8 | 1 | ~18 |
| #3 | 复杂系统 | 7 | 8 | 15 (满) | 1 | ~50 |
| #4 | 哲学冲突 | 3 | 6 | 9 | 2 | ~25 |
| #5 | AI native | 3 | 6 | 9 | 1 | ~28 |

---

## 数据洞察

1. **80% 的 BRIEF 不需要满载议会** — TC #1 (1 仙) 和 TC #2 (3 仙) 覆盖大量日常需求
2. **token 成本与议会规模线性相关** — 简单 BRIEF 比 v3.x "八仙必上" 节省 60%+
3. **多轮投票真实发生** — TC #4 第 1 轮失败 + 修订 + 第 2 轮通过, 不是 rubber stamp
4. **ABSTAIN 减分母机制让通过率更动态** — TC #2 庄子弃权后, 阈值从 8 降到 7
5. **R24 议会僵局律暂无触发** — 5 TC 内均未达 "3 轮全败"

## 已知限制 (诚实交代)

- ✏️ 评分数字由作者拟定, 真实运行时由 LLM 给出, 可能漂移
- 🎭 "讨论" 段落是 prompt engineering 模拟出来的对话, 不是真正多 agent 独立思考
- 🔢 圣人 #ID 沿用 references/27-philosopher-bench.md, **quotation-verifier 会复核** (例: #161 在 v3.1 文档中标注存在不一致)
- 🧪 此 demo 文档不替代真实跑用例 — 鼓励使用者在 Claude Code 中实测验证

---

**版本**: 与 suanfish-design-system v4.0.0 同步
**用途**: 教学 + 议会协议直觉建立 + 给 marketplace 评估者看
