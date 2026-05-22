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

### 🌗 Tier 0 · 辩证哲学层（v3.0 新增 · 3 agent）

| Agent | Emoji | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | :---: | --- | --- | --- |
| **dialectician** | 🪙 | E7 | BRIEF 模糊不选边 | D18（不选边本身） | E8 时矛盾自我命名 |
| **historian** | 📜 | E7 | 设计无历史感被趋势绑架 | D5 数据 ⟷ 直觉 | 历史 + 数据双引擎 |
| **futurist** | 🔭 | E7 | 设计落后时代 / 超前时代 | D6 即时 ⟷ 深思 | 演进路径成预测器 |

---

### 🚦 Tier 1 · 入口调度（1 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **moment-strategist** | E6 → E7 | BRIEF 直接交付，缺路径判断 | D4 引导 ⟷ 自由（强引导） | Tier 0 接管 → 路由层薄化 |

---

### 🎯 Tier 1.5 · 策略层（1 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **product-strategist** | E3 | 没有 PRD 直接做 UI | D5 数据 ⟷ 直觉（数据） | 与 dialectician 联动 |

---

### 🎨 Tier 2 · 风格层（4 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **style-curator** | E4 | 视觉风格无依据 | D3 个性化 ⟷ 一致性（一致） | AI 风格自适应 |
| **color-theorist** | E2 | 配色靠灵感 | D5 数据 ⟷ 直觉（直觉） | 数据-直觉双轨 |
| **type-master** | E1 → E4 | 字体随手抓 | D1 简洁（简洁） | 可变字体 + AI 排版 |
| **motion-director** | E4 → E5 | 动效炫技无目的 | D2 自动化 ⟷ 掌控（掌控） | 用户可关 / 可调速 |

---

### 🧱 Tier 3 · 结构层（5 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **ia-architect** | E3 | 信息无层级 | D3 个性化 ⟷ 一致性 | AI 个性化 IA |
| **layout-master** | E3 → E4 | 布局靠经验 | D1 简洁 ⟷ 可发现 | 响应式 + AI 自动布局 |
| **density-tuner** | E5 | 密度无标准 | D1 简洁 ⟷ 可发现 | 用户密度偏好持久化 |
| **whitespace-judge** | E2 → E4 | 留白被压缩 | D1 简洁 | 注意力经济学背书 |
| **rhythm-keeper** | E4 | 节奏紊乱 | D6 即时 ⟷ 深思 | AI 动态调节 |

---

### 🧩 Tier 4 · 组件层（5 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **component-architect** | E3 | 组件无系统 | D3 一致性 | Headless + 主题切换 |
| **form-doctor** | E2 | 表单地狱 | D4 引导 ⟷ 自由（引导） | AI 自动填充 + 校验 |
| **table-master** | E1 → E3 | 表格不可读 | D1 可发现 | 虚拟滚动 + AI 摘要 |
| **chart-designer** | E2 → E4 | 图表说谎 | D5 数据 | 交互式数据故事 |
| **dialog-doctor** | E3 | 弹窗滥用 | D4 引导（节制） | 非阻塞 inline 替代 |

---

### 💬 Tier 5 · 交互层（6 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **gesture-designer** | E3 → E5 | 触屏交互失语 | D2 自动化 ⟷ 掌控 | AR 手势 |
| **micro-interaction** | E4 | 反馈缺失 | D6 即时 | 情感化 + 个性化 |
| **error-doctor** | E2 → E4 | 错误信息恐吓用户 | D7 透明 | 自动恢复 + 友好引导 |
| **empty-state-designer** | E4 | 空状态被遗忘 | D7 透明 ⟷ 神秘（透明） | 个性化 + AI 推荐 |
| **loading-designer** | E5 | 加载即痛苦 | D6 即时 | Skeleton + 流式 |
| **onboarding-designer** | E3 | 新手不知所措 | D4 引导 | 进度式 + 可跳过 |

---

### 🤖 Tier 6 · AI-native 层（Path G · 4 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **streaming-ui-designer** | E7 | LLM 长等待死寂 | D6 即时 | Predictive prefetch |
| **tool-call-visualizer** | E7 | Agent 黑箱 | D7 透明（透明） | 用户可干预中间步 |
| **reasoning-display-master** | E7 | 思考过程不可见 | D7 透明 | 用户可调思考深度 |
| **citation-anchor-designer** | E7 | 答案无来源 | D7 透明 + D5 数据 | 多源比对可视化 |

---

### 🧪 Tier 6+ · 审核与协作（4 agent）

| Agent | Era | Emerged To Solve | Core Contradiction | Next Evolution |
| --- | :---: | --- | --- | --- |
| **artifact-render-designer** | E7 | AI 产物只能复制粘贴 | D2 自动化 ⟷ 掌控 | 直接可编辑 in-place |
| **a11y-guardian** | E3 → E4 | 可访问性事后补救 | D3 一致性（普惠） | 默认 AAA + AI 字幕 |
| **i18n-specialist** | E3 | 国际化爆炸 | D3 一致性 ⟷ 个性化 | AI 实时翻译 + 文化适配 |
| **ui-auditor** | E6 → E7 | UI 上线即翻车 | D5 数据 + D7 透明 | 加 mode_4 辩证体检 |

---

## 三、时代 ⟷ Path 对应

| Path | 主导 Era | 哲学倾向 | 默认 Tier 0 处理 |
| --- | :---: | --- | --- |
| A 仪式 | E3 → E5 | 引导强 / 神秘 | dialectician 警惕过强引导 |
| B 稳态 | E3 → E4 | 一致 / 透明 | historian 检查"是否回到 folder 时代" |
| C 聊天 | E6 → E7 | 即时 / 透明 | futurist 预测从 chat 到 agent 的演进 |
| D 通知 | E4 → E7 | 简洁 / 即时 | dialectician 检查节制 |
| E 移动 | E3 → E5 | 简洁 / 自动 | historian 检查移动惯例时代性 |
| F 嵌入 | E3 → E6 | 一致 / 掌控 | futurist 评估嵌入容器演进 |
| G AI-native | E7 → E8 | 透明 / 个性化 | 全 3 个 Tier 0 满负荷 |

---

## 四、agent 的"代际冲突"

新老 agent 在同一 BRIEF 上可能冲突——历史定位让冲突可被命名：

```
案例：BRIEF「为 Path A 仪式做新手引导」
  ├ onboarding-designer (E3) 提案：6 步强 wizard
  ├ streaming-ui-designer (E7) 提案：边走边讲 + 跳过
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
