# 🧠📑 SPEC · reasoning-visualizer + citation-keeper — 思维链与引用（ref 39 + ref 41）

> D7 透明（思维链/引用可见）+ 神秘留位（折叠默认不压倒答案）。ref 39 + ref 41。

## 思维链可视化（ref 39）

### 三态（ref 39 §1）

| 形态 | 触发 | 视觉 |
| --- | --- | --- |
| 折叠（默认） | thinking 字段存在 | `💭 已思考 8.3 秒 · 1.2k tokens ▼` |
| 展开 | 用户点击 | 灰底浅缩进 · markdown · 不可选中复制（默认） |
| 实时流式 | 思考中 | 浅灰柔和流式 + cursor breathe · 可"跳过先看答案" |

```tsx
<details className="group mb-2">
  <summary className="cursor-pointer text-xs text-gray-500 hover:text-gray-700
    flex items-center gap-1">
    💭 已思考 {duration}秒 · {tokens}k tokens
    <ChevronDownIcon className="w-3 h-3 group-open:rotate-180 transition-transform" />
  </summary>
  <div className="mt-2 ml-4 pl-3 border-l-2 border-gray-200
    text-sm text-gray-500 bg-gray-50/50 rounded-r p-2
    select-none">  {/* select-none: 防泄露 system prompt 痕迹（ref 39 §5） */}
    {reasoningMarkdown}
  </div>
</details>
```

### 嵌套步进（ref 39 §2）

- 检测 `Step 1` / `Plan` / `Verify` / `<thinking>` 标记 → 可折叠子节点
- 序号用 `①②③` 不用 1./2.（ref 39 §2）

### 用时文案（ref 39 §4 · copy-writer）

| 耗时 | 文案 |
| --- | --- |
| <3s | `已思考 N 秒` |
| 3-30s | `深度思考 N 秒` |
| >30s | `extended thinking · N 秒` |

### 与答案关系（ref 39 §3）

- 答案区右上角 `💭 基于上方思考` 浮标，hover 展开摘要
- 用户点 👎 → "是否查看思考过程帮我们改进？"

### 隐私（ref 39 §5）

- 默认 `select-none`（不可复制，防 system prompt 泄露）
- "以 markdown 复制思考"入口 → 去私密标记

### REJECT（ref 39 §7）

- thinking 完全隐藏假装秒回 → REJECT（R25 + 欺骗）
- thinking 不能折叠永占 50% → REJECT（压倒答案）
- thinking 与答案同视觉重量 → REJECT（分不清主次）

## 引用与来源（ref 41）

### Inline 三形态（ref 41 §1）

| 形态 | 视觉 |
| --- | --- |
| 角标（默认） | `<sup>[1]</sup>` 蓝·可点·可 hover |
| 段落级 | 段尾灰小字 `来源：{title} · {domain}` |
| 嵌入式 | 行内 `（[title]({url})）` |

```tsx
// 角标
<sup>
  <button className="text-blue-600 hover:text-blue-800"
    aria-describedby={`cite-${n}`}  // a11y（ref 34/41）
    onMouseEnter={() => preview(n)}>
    [{n}]
  </button>
</sup>
```

严禁裸 URL 平铺（ref 41 §1）。

### 引用列表区（ref 41 §2）

```tsx
<details className="mt-3 border-t border-gray-100 pt-2">
  <summary className="text-xs text-gray-500">📚 参考来源 ({n})</summary>
  {citations.map(c => (
    <div key={c.n} className="mt-2 text-xs">
      <span className="font-medium">[{c.n}]</span>
      <span className="text-blue-600 hover:underline">{c.title}</span>
      <span className="text-gray-400"> · {c.domain} · {c.date}</span>
      <ConfidenceBadge tier={c.tier} />  {/* 🟢高/🟡中/⚪未知 */}
      <p className="text-gray-500">{c.snippet}</p>
    </div>
  ))}
</details>
// 排序: 引用次数 desc · 置信度 desc
```

### Hover 预览（ref 41 §3）

```tsx
{createPortal(
  <div className="fixed z-[9999] pointer-events-none w-80
    bg-white rounded-lg shadow-xl border p-3 animate-fade-in"
    style={{ left: x, top: y }}>
    <img src={ogImage} className="w-full h-32 object-cover rounded" />
    <h4 className="font-medium text-sm mt-2">{title}</h4>
    <p className="text-xs text-gray-500">{domain}</p>
    <p className="text-xs text-gray-600 mt-1">{highlightedExcerpt}</p>
  </div>, document.body)}
// hover ≥200ms 触发 · pointer-events-none 不抢交互 · Portal 防裁切
```

### 可信度三档（ref 41 §4）

| 档 | 图标 | 域名 |
| --- | --- | --- |
| 高 | 🟢 | 官方/学术/政府 |
| 中 | 🟡 | 主流媒体/百科 |
| 未知 | ⚪ | 普通网页 |

不展示具体打分（避免争议）。

### 断链（ref 41 §5）

- 404/撤回/付费墙 → `⚠ 链接失效` + "查看 Web Archive 缓存"
- **不删引用**（删=篡改历史）

### AI 生成标记（ref 41 §7）

源疑似 AI 生成（域名+内容启发式）→ `🤖 疑似 AI 生成内容`——不解决循环知识，让问题可见。
