# 🌊 SPEC · stream-craftsman — 流式渲染（ref 36 落地）

> D7 透明（流式可见）+ D2 掌控（可中断）+ R-Cross4 陪伴（cursor 温和）。ref 36 §二。

## 首 token 契约

- ≤ 400ms 首 token 可见，否则补骨架（ref 36 §二 ①）
- > 800ms 未首 token → cursor `·` 三连点（等待网络）
- > 1500ms → cursor `█` breathe + `thinking` label（ref 39 联动）

## Cursor 三态（ref 36 §二 ①）

```tsx
const cursor = streaming ? '▍' : thinking ? '█' : waiting ? '·' : null;
// ▍ blink 530ms（生成中）· █ breathe（thinking）· · 三连点（等待）
// 不绑死 CSS animation，父组件可随时停（防 Stop 后还闪）
```

> R-Cross4 裁定（Eno）：blink 530ms 而非 100ms 闪——温和可忽略，不逼用户盯（ref 46 §四）。

## 增量 markdown 稳态边界（ref 36 §二 ②）

```tsx
// 怀特海×Reich 调解：前 3 字 per-token 仪式感，之后 per-block
if (charCount < 3) commitPerToken(chunk);
else commitPerMarkdownBlock(chunk);  // 段落/列表项/代码块闭合才提交 DOM
```

- 进行中代码块：`monospace + 灰底 + 无语法高亮`，闭合后才上 highlight
- 表格：`|---|` 分隔行出现才开始 table 渲染

## 工具调用四态卡（ref 36 §三 ①）

```tsx
<ToolCallCard state={state} tool={tool}>
  {/* pending: 灰边+等待图标 · 可取消 */}
  {/* running: 蓝脉动边+旋转 · 可中断 */}
  {/* success: 绿细边+✓ · 可展开 IO */}
  {/* error: 红细边+⚠ · 可展开+重试 */}
</ToolCallCard>
```

敏感工具（联网搜索/代码执行）走二阶段：先"即将调用+参数预览+确认/修改/取消"，确认后才 running（ref 36 §三 ④）。

## 中断与重生（ref 36 §二 ④ · D2 掌控）

```tsx
{/* Stop 固定输入区右上角，不在流末尾（流末会跳） */}
<button className="absolute top-2 right-2" onClick={stop}>
  {streaming ? '⏹ Stop' : '↑'}
</button>
// Stop ≤ 100ms 响应 · 已生成内容保留 · 灰尾注"（已停止）" + 重新生成入口
```

## 完成情感曲线（R-Cross3 · ref 46 §三）

流末 1 次主色脉冲（命运四音式动机），不循环：

```tsx
{justFinished && <span className="animate-pulse-once ring-2 ring-blue-400" />}
// 0.8s 渐进 + 1 次脉冲，完成态稳定
```

## 长输出渐进披露（ref 36 §二 ③）

- > 30 行：顶部"⬆ 回到顶部"浮标
- > 500 行：折叠中间段 + 首尾 + "展开全文"

## a11y（ref 34）

- `aria-live="polite"` + 屏幕阅读器节流（ref 36 §二铁律）
- cursor `aria-hidden="true"`（装饰，不朗读）

## REJECT 触发（ref 36）

- per-token 打字机 > 200 字 → REJECT（卡 90% 设备），改 per-block
- 不允许用户停止 → REJECT（违反 D2 掌控）
- thinking 完全隐藏假装秒回 → REJECT（R25 疾虚妄 + 欺骗 UX）
