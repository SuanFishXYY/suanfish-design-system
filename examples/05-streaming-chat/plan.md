# 🏗 PLAN — 流式聊天界面（conversation-director）

## 组件树

```
<ChatShell h-screen flex flex-col>
  <TopBar>
    <ModelSwitcher />          {/* ref 40 §二 · 顶部 chip · 温度差提示 */}
    <QuotaIndicator />         {/* ref 40 §一 · 右下小字 · 始终可见 */}
  </TopBar>

  <MessageStream flex-1 overflow-y-auto>   {/* ref 36 §一 · 滚动锚底 */}
    <Message role=user />      {/* ref 36 · 右 · bg-blue-500 */}
    <Message role=assistant>   {/* ref 36 · 左 · bg-gray-100 */}
      <ReasoningBlock />       {/* ref 39 · 折叠默认 · 💭 已思考 N秒 ▼ */}
      <StreamContent />        {/* ref 36 §二 · cursor blink · 增量 markdown */}
      <ToolCallCard />         {/* ref 36 §三 · 四态卡 · 敏感二阶段 */}
      <CitationList />         {/* ref 41 · 📚 参考来源折叠区 */}
    </Message>
  </MessageStream>

  <PromptInput>                {/* ref 37 §二 · 自适应增高 */}
    <MentionChip />            {/* ref 37 §二 ③ · @ 提及 */}
    <CommandPanel />           {/* ref 37 §二 ④ · / 命令 */}
    <AttachmentBar />          {/* ref 37 §二 ⑤ · 附件进度 */}
    <SendButton />             {/* ref 37 §二 ⑥ · 四态: 空/可发/发送中/Stop */}
  </PromptInput>

  <ArtifactCanvas />           {/* ref 37 §三 · 侧抽屉 · >30行代码脱出 */}
</ChatShell>
```

## 议会推演（ref 48 六步实跑）

### Step 1 路由
task_kind=mixed → 三大类全开。

### Step 2 评分（420 板凳 5 维，仅列 top）
| 思想家 | 类 | 得分 | 当选常委 |
| --- | --- | --- | --- |
| #052 海德格尔（zuhanden·透明工具） | 哲 | 8.9 | ✓（D7 透明锚） |
| #039 黑格尔（D2 矛盾辩证） | 哲 | 8.7 | ✓ dialectician |
| #M005 贝多芬（回答完成张力） | 音 | 8.4 | ✓ tension-composer |
| #M025 Eno（流式陪伴灰度） | 音 | 8.3 | ✓ ambient-architect |
| #225 王充（疾虚妄·防假装秒回） | 哲 | 8.1 | ✓ debunk-auditor |
| #A019 莫奈（流式光色氛围） | 艺 | 7.8 | ✓ light-impressionist |

→ k=6 常委，含哲学(3)+音乐(2)+艺术(1)，4:4:4 骨架内（每类≥1）。

### Step 3-4 邀请
- 海德格尔邀 #091 怀特海（过程·流式即流变）
- 贝多芬邀 #M023 Steve Reich（相位·token 节奏）
- Eno邀 #M020 凯奇（沉默·默认不打扰边界）
→ N=9 入场。

### Step 5 议会讨论（三段式）

| 圣人 | 📚 理论 | 🎯 方向 | 🔧 动作 |
| --- | --- | --- | --- |
| 海德格尔 | D7 透明·工具 zuhanden | 思维链/工具/引用可见 | 三律透明但默认折叠（ref 47 §D7） |
| 黑格尔 | D2 自动化⟷掌控 | 流式自动+可中断 | Stop ≤100ms + regenerate（ref 47 §D2） |
| 贝多芬 | R-Cross3 回答完成张力 | 完成有曲线 | 流末主色脉冲 1 次（ref 46 §三） |
| Eno | R-Cross4 流式 ignorable | cursor 温和不逼 | blink 530ms 非 100ms 闪（ref 46 §四） |
| 王充 | R25 疾虚妄 | 防假装秒回 | thinking 必须真显示（ref 36 REJECT） |
| 莫奈 | R-Cross2 光色 | 流式有氛围 | assistant 气泡微光晕（ref 46 §二） |
| 怀特海 | 过程流变 | token 即流 | 按 markdown 块提交非 per-token（ref 36 §二②） |
| Reich | 相位节奏 | token 节奏 | 块间 60ms 对位（ref 46 §六） |
| 凯奇 | 沉默边界 | 不打扰 | 非关键节点零音效（ref 46 §五） |

**共识**：流式透明（D7）+ 可中断（D2）+ 完成张力（R-Cross3）+ 温和陪伴（R-Cross4）+ 防虚妄（R25）。
**争议**：Reich 主张 per-token 节奏更细，怀特海主张 per-block 防 90% 设备卡 → 调解：前 3 字 per-token 仪式感 + 之后 per-block（ref 36 §二反诘正解）。

### Step 6 投票
9 常委 + 3 助手 = 有效票权 21，门槛 ⌈21×2/3⌉=14，APPROVE 21 ≥ 14 → **通过 Round 1**。

## 哲学映射追溯（ref 47 §三 三维）

```
BRIEF: AI 流式聊天
  ├ 矛盾 (ref 24): D2 自动化⟷掌控 + D7 透明⟷神秘
  ├ 倾向: 自动化(流式)+透明(三律可见) + 留位: Stop/regenerate + 折叠默认
  ├ 规律 (ref 25): L3 控制权下移(AI生成·可回看) + L4 反馈缩短(流式) ✓
  ├ 路径: G AI-native 默认透明+掌控 ✓
  ├ 历史 (ref 26): E7 AI-native ✓
  ├ 美学 (ref 46): R-Cross3 完成张力 + R-Cross4 陪伴 + 对位节奏 ✓
  └ 底线: a11y(aria-live)/错误透明/不可逆确认 ✓
三维对齐 ✓
```
