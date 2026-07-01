# ⏳🔀 SPEC · rate-limit + model-switcher — 配额与模型切换（ref 40 落地）

> D7 透明（配额/降级明示）+ 正义论（规则公开一致）。ref 40。

## 配额可见性三层（ref 40 §一 ①）

```tsx
<TopBar>
  {/* 始终可见 · 输入区右下小字 */}
  <span className="text-xs text-gray-400">今日还剩 {remaining} 条</span>
</TopBar>

{/* 预警 ≤20% · 输入区上方黄 banner */}
{remaining <= total * 0.2 && (
  <Banner severity="warning">
    今日还剩 {remaining} 条 · <a>升级套餐 →</a>
  </Banner>
)}

{/* 触发上限 · 输入禁用 + 弹窗三选项 */}
{remaining === 0 && (
  <Modal>
    <p>今日额度已用完</p>
    <Button>升级 Pro</Button>
    <Button>等待 6:00 重置</Button>
    <Button>切换轻量模型</Button>
  </Modal>
)}
```

## 用量文案（去技术腔 · ref 40 §一 ②）

| 别说 | 要说 |
| --- | --- |
| Rate limit exceeded | 今天聊得有点多了，明早 6 点重新满血 |
| Quota: 87/100 | 还能聊 13 条 |
| 429 Too Many Requests | 大家都在用，稍等 20 秒就好 |

## 模型降级明示（ref 40 §一 ③ · D7 透明铁律）

```tsx
{downgraded && (
  <Banner severity="warning" persistent>
    ⚡ 当前模型繁忙，已切换到 {fallbackModel} · 部分能力可能减弱
    <Button onClick={waitPrimary}>等待主模型</Button>
    <Button onClick={continueFallback}>继续用 {fallbackModel}</Button>
  </Banner>
)}
// 绝对不允许: 用户不知道被切换了模型（ref 40 REJECT · 信任崩塌）
```

## 排队（ref 40 §一 ④）

```tsx
{queued && (
  <div className="text-center py-4">
    <p className="text-sm text-gray-600">排队第 {position} 位 · 预计 {eta} 秒后开始</p>
    {eta > 30 && <Button>换个轻量模型立即开始</Button>}
  </div>
)}
// aria-live="polite" 倒计时（a11y · ref 34）
```

## 模型切换器（ref 40 §二 · 顶部 chip 形态）

```tsx
<div className="flex items-center gap-1">
  {models.slice(0, 4).map(m => (
    <button key={m.id}
      className={`px-3 py-1 rounded-full text-xs transition-all
        ${m.active ? 'bg-blue-50 text-blue-700 border border-blue-200'
                   : 'text-gray-500 hover:bg-gray-100'}`}
      onClick={() => switchModel(m)}>
      {m.name}
    </button>
  ))}
</div>
```

### 模型卡字段（ref 40 §二 ②）

```
🏷 GPT-4 · OpenAI · v4
⚡ 速度 ★★★☆☆  💰 价格 ★★★★☆
🧠 智力 ★★★★★  📏 上下文 128k
🛠 能力：图 · 工具 · 联网
一句话适合：复杂推理 / 长文档
```

### 温度差提示（ref 40 §二 ③）

| 切换 | 提示 |
| --- | --- |
| 切到更弱模型 | ⚠ banner「已切到 {m}，可能无法处理图片附件」 |
| 切到更强模型 | 底部小字「✨ 已升级到 {m}」（不打扰） |
| 切不同厂商 | 首次 tooltip「不同厂商回答风格可能差异较大」 |

### 跨模型一致性（ref 40 §二 ④）

- 不同模型回答气泡**不用不同颜色**（污染对话流）
- 仅左上角 12×12 厂商 logo 小角标
- hover logo → 显示模型名

## REJECT（ref 40）

- 不告诉用户用量、用完就拒 → REJECT（违反正义透明）
- 模型降级不通知 → REJECT（信任崩塌）
- 付费墙默认勾选自动续费 → REJECT（dark pattern）
- 30 模型不分类不筛选不推荐 → REJECT（选择瘫痪）
