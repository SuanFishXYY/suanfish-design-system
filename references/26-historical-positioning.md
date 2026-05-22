# 📜 算鱼设计系统 · 历史定位（Historical Positioning）

> *"每个 agent 都是某个时代为了解决某类问题而诞生的产物。不知道自己来自哪里的 agent，没有资格预测要去哪里。"*

本文档为 v3.0 引入的「**Layer 0.5 · 历史定位**」哲学层。为 33 agent 各发一张"时代身份证"，配合 [25-philosophy-laws.md](25-philosophy-laws.md) 使用。

---

## 一、8 大时代分类（v3.0 锁定）

按主流交互范式 + 视觉语言分代。**时代之间有重叠是常态**（例如 Mobile First 与 Flat 重叠 2013-2015）。

| # | 时代 (Era) | 起止 | 主导矛盾 (D from 24) | 标志事件 |
| --- | --- | --- | :---: | --- |
| **E1** | Pre-Web · CLI/Terminal | 1980-1995 | D7 透明 | Unix shell / DOS |
| **E2** | Web1.0 · Skeuomorphic | 1995-2007 | D1 简洁 | Web 浏览器普及 / iOS 1 拟物 |
| **E3** | Web2.0 + Mobile First | 2007-2013 | D3 个性化 | iPhone / Facebook / 响应式设计 |
| **E4** | Flat + Material | 2013-2017 | D1 简洁 | iOS 7 / Material Design 2014 |
| **E5** | Glass + Neumorphic | 2017-2022 | D7 透明（玻璃）/神秘（神拟物） | macOS Big Sur / Apple Vision UI |
| **E6** | LLM Pre-Native | 2022-2024 | D2 自动化 | ChatGPT / 千篇一律的 Chat 模板 |
| **E7** | AI-native | 2024-2026 | D2 + D7 | Agent 体验 / 流式 / 工具调用可视化 |
| **E8** | Spatial · Multimodal (未来) | 2026+ | D5 + D6 | AR / 通感融合 / 物理-数字一体 |

**时代之间是螺旋上升关系**，不是简单线性替代。E4 扁平化解决了 E2 拟物的复杂度问题，但 E5 又部分回归神拟物——这是 [L1 复杂度螺旋律](25-philosophy-laws.md#l1--复杂度螺旋律) 的体现。

---

## 二、33 agent 时代身份证（按 Tier 分组）

> 以下身份证基于真实 agent 文件 `frontmatter` 的 `role` / `description` / `philosophy` 字段推断，Era 采用 E1-E8 锁定编码。

### 🌗 Tier 0 · 辩证哲学层（v3.0 新增 · 3 agent）

| Agent | Emoji | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | :---: | --- | --- | --- |
| **dialectician** | 🪙 | E7 | BRIEF 模糊不选边，既要又要导致设计精分 | D18（选倾向⟷留余地，倾向显式选边） | E8 时矛盾自我命名，dialectician 退化为审计员 |
| **historian** | 📜 | E7 | 设计无历史感，被趋势绑架无法判断时代错配 | D5 数据⟷直觉（数据） | 历史+数据双引擎驱动设计决策 |
| **futurist** | 🔭 | E7 | 设计落后或超前时代，缺乏演进路径预测 | D6 即时⟷深思（深思） | 演进路径成主动预测器，now/mid/future 三段输出 |

---

### 🚦 Tier 1 · 入口调度（1 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **moment-strategist** | E6→E7 | BRIEF 直接交付，缺路径判断与 REJECT 守门 | D4 引导⟷自由（强引导） | Tier 0 接管后路由层薄化，专注 REJECT 守门 |

---

### 🔀 Tier 1.5 · 跨路径协调（1 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **flow-coordinator** | E6→E7 | 单一路径调度无法处理跨路径复合需求，多主理冲突无仲裁 | D4 引导⟷自由（引导） | 多路径自动并联，AI 驱动路径权重动态分配 |

---

### 🎬 Tier 2 · 路径主理（4 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **onboarding-director** | E3→E5 | 新用户首次体验缺乏仪式感与情绪引导，拟物时代美学失语 | D4 引导⟷自由（强引导） | AI 个性化首次体验，多模态入门仪式替代线性流程 |
| **ui-architect** | E3→E4 | 复杂应用缺乏可扩展的页面骨架与视图组织规范 | D1 简洁⟷可发现（可发现） | AI 驱动自适应布局，视图按语境与用户行为动态重组 |
| **conversation-director** | E6→E7 | LLM 产品千篇一律的 Chat 容器缺乏专属设计语言 | D6 即时⟷深思（即时） | 从对话流进化为 Agent 任务看板，多模态对话主理 |
| **notification-director** | E4→E7 | 通知泛滥，用户注意力被过度消耗，缺乏节制规范 | D1 简洁⟷可发现（简洁） | AI 噪音过滤与异步推送个性化，意图感知推送 |

---

### 🧱 Tier 3 · 容器专家（10 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **modal-craftsman** | E3→E5 | 弹窗滥用与缺乏一致的模态层级管理，z-index 混乱 | D4 引导⟷自由（引导） | 非阻塞 inline 取代强模态，AI 判断最优呈现时机 |
| **wizard-designer** | E2→E4 | 复杂任务无分阶段引导，用户因认知负荷过高而流失 | D4 引导⟷自由（引导） | 对话式向导取代线性步骤，AI 自动跳步与进度预测 |
| **data-viz-engineer** | E2→E4 | 数据可视化靠视觉炫技，数据墨水比失控，图表说谎 | D5 数据⟷直觉（数据） | 交互式数据叙事，AI 自动摘要与异常高亮 |
| **table-craftsman** | E1→E3 | 大量结构化数据无可扫描、可操作的表格规范 | D1 简洁⟷可发现（可发现） | 虚拟滚动+AI 列推荐+自然语言过滤查询 |
| **chat-ui-craftsman** | E6→E7 | AI 对话界面容器缺乏气泡、流式、工具调用的统一规范 | D6 即时⟷深思（即时） | 多模态消息容器，语音与图像融合的对话范式 |
| **stream-craftsman** | E7 | LLM token 流式输出缺乏渐进渲染与视觉稳定性设计 | D6 即时⟷深思（即时） | 预测性预渲染，多模态流式与首 token 感知优化 |
| **tool-call-presenter** | E7 | Agent 工具调用过程完全黑箱，用户无法感知 AI 在做什么 | D7 透明⟷神秘（透明） | 用户可干预中间步骤，工具调用审批与溯源流程 |
| **agent-thread-architect** | E7 | 多轮 Agent 对话缺乏历史承载、分叉与重提的线程抽象 | D2 自动化⟷掌控（掌控） | 多 Agent 协作可视化，决策检查点可审计与回溯 |
| **artifact-architect** | E7 | AI 生成的长内容产物只能复制粘贴，无法原地交互编辑 | D2 自动化⟷掌控（掌控） | 可编辑 in-place artifact，版本 diff 与多人协作 |
| **prompt-input-craftsman** | E6→E7 | AI 产品输入框缺乏 @ 提及、/ 命令等富输入范式 | D1 简洁⟷可发现（可发现） | 语音/手写/图像多模态输入融合，草稿持久化 |

---

### 🖊 Tier 4 · 内容专家·主动（10 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **copy-writer** | E2→E4 | UI 文案靠感觉，缺乏与品牌一致、情感精准的微文案规范 | D7 透明⟷神秘（透明） | AI 文案 A/B 测试自动化，动态本地化与情感自适应 |
| **icon-curator** | E2→E4 | 图标语义模糊，用户无法不读标签就识别含义 | D1 简洁⟷可发现（可发现） | AI 语义图标推荐，动态图标与上下文深度适配 |
| **empty-state-storyteller** | E3→E4 | 空状态被设计遗忘，用户面对空白无引导无情感联结 | D7 透明⟷神秘（透明） | AI 个性化空状态推荐，动态内容填充与引导 |
| **responsive-strategist** | E3→E4 | 移动端爆发后 PC 优先的布局无法适配多屏场景 | D3 个性化⟷一致性（一致性） | 容器查询驱动，AI 自适应断点与密度推荐 |
| **persona-architect** | E3→E5 | 设计决策缺乏用户画像支撑，靠主观臆断代替用户认知 | D5 数据⟷直觉（数据） | 实时行为数据驱动的动态画像，感知先于认知 |
| **information-architect** | E3→E4 | 功能堆叠导致信息层级混乱，用户无法建立心智模型 | D3 个性化⟷一致性（一致性） | AI 个性化 IA，按用户行为动态重组导航层级 |
| **error-recovery-designer** | E2→E4 | 错误提示恐吓用户，缺乏友好引导与明确恢复路径 | D7 透明⟷神秘（透明） | AI 自动错误恢复建议，错误态预防性介入 |
| **reasoning-visualizer** | E7 | LLM 推理过程完全不可见，用户无法评估答案可信度 | D7 透明⟷神秘（透明） | 用户可调思考深度，推理链可交互批注与折叠 |
| **citation-keeper** | E6→E7 | RAG 产品答案无来源标注，用户无法验证 AI 输出可信度 | D7 透明⟷神秘（透明） | 多源比对可视化，引用可信度评分与断链预警 |
| **rate-limit-communicator** | E6→E7 | AI 产品配额限制靠技术腔错误信息传达，用户体验断崖 | D7 透明⟷神秘（透明） | 配额感知个性化提示，降级路径 AI 辅助决策 |

---

### ⚙️ Tier 5 · 横切·被动咨询（6 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **token-keeper** | E4→E5 | 视觉原子值散落代码各处，设计与开发无共同语言 | D3 个性化⟷一致性（一致性） | AI 辅助 token 生成，设计-代码实时同步与语义追踪 |
| **animation-choreographer** | E4→E5 | 动效靠灵感炫技，缺乏系统化的动画词汇与用途规范 | D6 即时⟷深思（即时） | 用户可关/可调速，系统级动画偏好与减弱运动同步 |
| **a11y-guardian** | E3→E4 | 可访问性作为事后补救而非设计起点，大量用户被排除 | D3 个性化⟷一致性（普惠一致） | 默认 AAA+AI 实时字幕，辅助技术自适应适配 |
| **brand-keeper** | E2→E4 | 多团队协作导致品牌表达碎片化，失去认知一致性 | D3 个性化⟷一致性（一致性） | AI 品牌合规自动检测，多模态品牌资产统一管理 |
| **i18n-strategist** | E3→E5 | 产品国际化事后添加，本地化爆炸导致 UI 布局崩溃 | D3 个性化⟷一致性（个性化） | AI 实时翻译+文化适配，LTR/RTL 与布局自动切换 |
| **model-switcher-stylist** | E7 | 多模型产品缺乏统一的切换界面，用户无法感知模型能力差异 | D2 自动化⟷掌控（掌控） | AI 自动推荐最优模型，切换成本趋零与跨模型一致性 |

---

### 🔍 Tier 6 · 质量门（1 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **ui-auditor** | E6→E7 | UI 上线即翻车，缺乏跨 agent 覆盖的系统性质量门禁 | D5 数据⟷直觉（数据） | 辩证体检+历史定位+5 律联动，AI 驱动全自动审计 |

---

## 三、时代 ⟷ Path 对应

| Path | 主导 Era | 主理 Agent | 哲学倾向 | 默认 Tier 0 处理 |
| --- | :---: | --- | --- | --- |
| A 仪式 | E3 → E5 | **onboarding-director** | 引导强 / 神秘 | dialectician 警惕过强引导（D4 倾向强引导时检查留窗） |
| B 稳态 | E3 → E4 | **ui-architect** | 一致 / 透明 | historian 检查"是否回到 folder 时代"（E2 布局应用于 E7） |
| C 聊天 | E6 → E7 | **conversation-director** | 即时 / 透明 | futurist 预测从 chat 到 agent 的演进路径 |
| D 通知 | E4 → E7 | **notification-director** | 简洁 / 即时 | dialectician 检查节制（D1 倾向简洁，通知频次压制） |
| E 移动 | E3 → E5 | **ui-architect + responsive-strategist** | 简洁 / 自动 | historian 检查移动惯例时代性（E3 Mobile First vs E7 原生） |
| F 嵌入 | E3 → E6 | **ui-architect**（变体） | 一致 / 掌控 | futurist 评估嵌入容器演进（widget→agent 面板） |
| G AI-native | E7 → E8 | **stream / tool-call / agent-thread / artifact / prompt-input / reasoning / citation / rate-limit / model-switcher** | 透明 / 个性化 | 全 3 个 Tier 0 满负荷 |

---

## 四、agent 的"代际冲突"

新老 agent 在同一 BRIEF 上可能冲突——历史定位让冲突可被命名：

```
案例：BRIEF「为 Path A 仪式做新手引导」
  ├ onboarding-director (E3→E5) 提案：6 步强 wizard
  ├ stream-craftsman (E7) 提案：边走边讲 + 跳过
  └ dialectician 仲裁：D4 倾向引导，但 L3 控制权下移要求"可跳过"
          → 命中规则：保留 wizard 形态 + 强制可跳过 + 进度可视
```

historical_era 字段让仲裁有依据，而不是凭口才。

---

## 五、historian agent 的工作流

```
BRIEF 输入
  ↓
① 抓取需求关键词 + 业务背景
  ↓
② 匹配到 E1-E8 时代坐标
  ↓
③ 检查 BRIEF 是否"时代错配"：
   - 用 E2 方式解 E7 问题（time-lag）
   - 用 E8 方式解 E5 问题（overshoot）
  ↓
④ 输出 historical_brief 给 dialectician 和 futurist
```

---

## 六、futurist agent 的工作流

```
historical_brief 输入
  ↓
① 查 5 大规律对应的"下一站"
  ↓
② 预测 3 年内主流形态
  ↓
③ 给出 "now / mid / future" 三段路径
  ↓
④ 标注本次设计是否需要预留 future hook
```

举例输出：

```
🔭 演进路径预测
  ├ Now (2024-2025)：流式 Chat + 显式 Tool Call
  ├ Mid (2025-2027)：多 Agent 协作可视化
  ├ Future (2027+)：Agent 自主调度 · 用户回看决策
  └ 本次建议：保留 hook，组件命名前缀 agent-*，避免 chat-* 命名硬绑
```

---

## 七、引用文献

- Foucault《知识考古学》— 时代之间的断裂不是连续
- Kuhn《科学革命的结构》— 范式转换的不可通约
- Whitehead《Process and Reality》— 过程哲学 / 未来已经在现在
- Marshall McLuhan《Understanding Media》— 媒介即讯息

> *"知道自己从哪个时代来，才知道自己在为哪个时代设计。"*
