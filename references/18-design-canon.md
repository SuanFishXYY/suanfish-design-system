# 📐 设计经典法典 · Design Canon

> *汇集 20 条跨越时代仍生效的设计原则。所有 agent 决策应可追溯至 Canon 编号。*

引用格式：`[Canon-XX]`，如 `[Canon-D5]`。

---

## 一、Dieter Rams · 好设计十诫（D1-D10）

德国设计师 Dieter Rams 在 1970s-80s 总结的十条原则，是现代极简主义工业设计与软件设计的共同基石。

### D1 · Good design is innovative
> 好设计是创新的

**适用**：拒绝抄袭、跟风。但创新不是为了不同而不同——必须服务功能。

### D2 · Good design makes a product useful
> 好设计让产品有用

**适用**：任何"为了好看牺牲功能"的提案立即 REJECT。

### D3 · Good design is aesthetic
> 好设计是美的

**适用**：美 ≠ 装饰。美是结构、比例、克制的产物。

### D4 · Good design makes a product understandable
> 好设计让产品易于理解

**适用**：用户看一眼就知道"这是什么 / 怎么用"。需要说明书的 UI 是失败的 UI。

### D5 · Good design is unobtrusive
> 好设计是隐而不见的

**适用**：UI 应当成为用户达成目标的透明媒介。注意力分散到 UI 本身 = 设计失败。
**经典引用场景**：弹窗 / 通知 / 动画 / 装饰元素决策。

### D6 · Good design is honest
> 好设计是诚实的

**适用**：禁止视觉欺骗——按钮看起来可点其实不可点 / 进度条假装在转其实卡死 / 数字看似精确实则模糊。

### D7 · Good design is long-lasting
> 好设计是经久不衰的

**适用**：拒绝"今年流行 neumorphism / 明年 glassmorphism"。设计语言必须 5 年后依然合理。

### D8 · Good design is thorough down to the last detail
> 好设计连最后一个细节都讲究

**适用**：1px 错位、0.5s 延迟、半透明遮罩的透明度——每个细节都是决策。

### D9 · Good design is environmentally friendly
> 好设计是环境友好的

**软件延伸**：
- 不浪费用户时间（性能 / 等待）
- 不浪费用户注意力（弹窗 / 红点）
- 不浪费用户存储（缓存 / 数据）

### D10 · Good design is as little design as possible
> 好设计就是尽可能少的设计

**适用**：减法是默认动作。每次想加东西时，先问"能不能改成删东西"。
**经典引用场景**：feature creep / UI 堆砌。

---

## 二、包豪斯三原则（B1-B3）

### B1 · Form follows function
> 形式追随功能

**出处**：Louis Sullivan（1896），包豪斯继承并发扬

### B2 · Ornament is crime
> 装饰即罪恶

**出处**：Adolf Loos（1908）
**适用**：纯装饰性的视觉元素必须能证明其功能价值，否则删除。

### B3 · Less is more
> 少即是多

**出处**：Ludwig Mies van der Rohe
**适用**：作为 D10 的姊妹原则，强调"少"不是简陋，是精炼。

---

## 三、信息可视化经典（V1-V3）

### V1 · Data-Ink Ratio
> 数据墨水比应当最大化

**出处**：Edward Tufte
**适用**：图表中删除每一滴不直接编码数据的墨水。

### V2 · Chartjunk must die
> 图表垃圾必须消灭

**出处**：Edward Tufte
**适用**：3D 效果、装饰性边框、过度图例、阴影、渐变背景——一律删除。

### V3 · Small Multiples
> 小型多元图

**出处**：Edward Tufte
**适用**：比较多个变量时，用一组小图代替一个复杂图。

---

## 四、可访问性 / 普世原则（A1-A2）

### A1 · WCAG 2.2 AA
> Web Content Accessibility Guidelines 2.2 Level AA

**适用**：对比度 ≥ 4.5:1（普通文字）/ 3:1（大文字）。键盘可达。Focus 可见。语义化标签。这是底线，不是加分项。

### A2 · Inclusive Design
> 包容性设计

**出处**：Kat Holmes《Mismatch》
**适用**：设计应当扩展可参与人群，而非排除。
**经典引用场景**：表单 / 错误提示 / 颜色编码决策。

---

## 五、东方设计哲学（E1-E2）

### E1 · 间（Ma）
> 留白即存在

**出处**：日本传统美学
**适用**：留白不是没有内容，而是为感知留出位置。元素之间的"间"承载呼吸感。

### E2 · 物哀（Mono no Aware）
> 对事物易逝的敏感

**出处**：本居宣长
**适用**：仪式性界面（庆祝 / 告别 / 里程碑）应当短暂、克制、留余韵——不是煽情。

---

## 六、引用矩阵 · agent × Canon

| Agent | 高频引用 Canon |
| --- | --- |
| moment-strategist | D10, B3 |
| onboarding-director | D5, D4 |
| wizard-designer | D4, E1 |
| ui-architect | B1, D2 |
| modal-craftsman | D10, D5, B2 |
| copy-writer | D4, D6 |
| icon-curator | D4, D8 |
| empty-state-storyteller | D5, E1 |
| data-viz-engineer | V1, V2, V3 |
| animation-choreographer | D5, E2, D7 |
| token-keeper | D7, D8 |
| a11y-guardian | A1, A2 |
| responsive-strategist | D4, B1 |
| ui-auditor | 全部（审计 = 全量校验） |

---

## 七、违反 Canon 的常见反例

| 反例 | 违反 | 修正方向 |
| --- | --- | --- |
| 全屏强制广告弹窗 | D5, D10 | 改为非阻塞 toast 或 inline 提示 |
| 3D 立体饼图 | V1, V2 | 改为 2D 横条图 |
| 用红色表示"完成"，绿色表示"未完成" | D6, A2 | 反直觉，违反诚实原则 |
| 「亲，您好哦~」客服式文案 | D6, B2 | 改为直白、平等的语气 |
| Neumorphism 整站铺开 | D7, A1 | 经不起 5 年考验，对比度不达标 |
| 每个表单字段加炫光动画 | D5, D10 | 动画必须服务于反馈，不是装饰 |

---

> *"Canon 不是镣铐，是杠杆。当业务方拍脑袋时，你不是凭感觉拒绝——你引用 [Canon-D5]。"*
