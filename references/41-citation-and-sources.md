---
ref: 41
title: 引用与来源标注 · RAG 引用规范
owner: citation-keeper (引用守护人)
audited_by: ui-auditor
---

# 📑 ref 41 · 引用与来源标注

> *一个没有引用的 AI 答案，本质上和谣言无异。*
>
> citation-keeper 主理 RAG / 联网搜索 / 知识库召回时的引用展示。哲学锚：福柯·作者功能——知识合法性来自"作者功能"，某句话被归属于某源时才有被检验的可能。AI 输出本质匿名生成，引用是恢复其可检验性的唯一手段。引用要**显眼但不喧宾夺主**、**可核查但不强迫**。

## 1. Inline 引用三形态

| 形态 | 适用 | 视觉 |
| --- | --- | --- |
| **角标**（默认） | 紧跟被引用语句之后 | `<sup>[1]</sup>` 蓝色 · 可点击 · 可 hover |
| **段落级** | 整段来自同一源 | 段尾灰色小字：`来源：{title} · {domain}` |
| **嵌入式** | 短文章风格 | 行内 `（[title]({url})）` 真链接 |

**严禁裸 URL 平铺**。默认用角标。

## 2. 引用列表区

- 答案末尾自动生成「📚 参考来源」折叠区。
- 每条：`[N] 标题（含粗体匹配关键词） · 域名 · 时间 · 摘要 1 句`。
- 排序：被引用次数 desc · 然后置信度 desc。

## 3. Hover 预览卡

- 触发：角标 hover ≥ 200ms。
- 内容：网页 OG 图（128×72） + 标题 + 域名 + 被引用具体段落（高亮）。
- 失败兜底：仅显示 URL + favicon + 「无法预览，点击访问」。
- Portal 挂载 z-[9999]（ref 01 §8），防被裁切。

## 4. 可信度指示器（实验性）

每个源卡角标三档（不展示具体打分，避免争议）：

| 档 | 图标 | 域名匹配 |
| --- | --- | --- |
| 高 | 🟢 | 官方 / 学术 / 政府 |
| 中 | 🟡 | 主流媒体 / 百科 |
| 未知 | ⚪ | 普通网页 |

来源域名匹配预设白名单决定档位。

## 5. 断链处理

- 链接 404 / 已撤回 / 付费墙：源卡标 `⚠ 链接失效` + 「查看 Web Archive 缓存」按钮。
- **仍允许保留为引用**（用户可判断其历史存在）——断链直接删除 = 篡改历史。

## 6. 用户辅助

- 答案区可勾选「只看带引用的段落」→ 未引用段落降低对比度。
- 复制答案时可选「附带引用 markdown」/「纯文本无引用」。

## 7. 疑似 AI 生成内容标记

引用源本身可能是 AI 生成（AI 写的博客被搜索引擎收录）——基于域名 + 内容模式启发式判断，源卡标 `🤖 疑似 AI 生成内容`。**不解决循环知识问题，但让问题可见。**

## 8. SPEC

```yaml
citation:
  inline:
    default_form: sup-bracket  # <sup>[N]</sup>
    color: link-primary
    hover_delay_ms: 200
  list_section:
    auto_generated: true
    sort: [cited_count_desc, confidence_desc]
    item_fields: [title, domain, date, snippet]
  hover_preview:
    width_px: 320
    show_og_image: true
    show_excerpt_highlighted: true
  confidence_tiers:
    high: official|academic|gov
    medium: mainstream-media|encyclopedia
    unknown: default
  broken_link:
    show_warning: true
    archive_fallback: true
  user_options:
    only_cited_paragraphs: toggle
    copy_with_citations: option
  ai_generated_flag: heuristic-domain-plus-content
```

## 9. 铁律

- 答案不显示引用求"干净" → REJECT（违反作者功能 / 无法验证）。
- 引用展开成长列表占整屏 → REJECT（喧宾夺主）。
- 断链直接删除该引用 → REJECT（隐藏失效证据 = 篡改历史）。
- 角标 `aria-describedby` = 引用 id（a11y-guardian）。
- 链接色板走 token-keeper（ref 01 链接色）。
- reasoning 内的引用也走本规范（reasoning-visualizer 协作）。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版引用与来源标注：inline 三形态 + 引用列表区 + hover 预览 + 可信度三档 + 断链处理 + 用户辅助 + AI 生成标记 + SPEC + 铁律。对齐 citation-keeper 依赖。 |
