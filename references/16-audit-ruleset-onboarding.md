---
ref: 16
title: 仪式模式审计规则集
ruleset_version: 1.0.0
bound_to_token_version: 1.0.0
owner: token-keeper（颜色相关）、animation-choreographer（动画相关）、onboarding-director（流程相关）
audited_by: ui-auditor
---

# 📋 ref 16 · 仪式模式审计规则集 v1.0.0

> *本规则集独立于 ui-auditor。规则的新增 / 修改 / 删除必须由对应 owner 提 PR，并同步更新 `bound_to_token_version` 字段。*

## 版本同步契约

| 字段 | 说明 |
| --- | --- |
| `ruleset_version` | 本规则集的 semver |
| `bound_to_token_version` | 对应 `references/01-design-tokens.md` 的版本号 |

**ui-auditor 在加载本文件时会检查两者是否同步**。如果不同步，审计直接拒绝执行。

---

## 🟥 严重规则（命中必拦 · 拒绝合并）

| 编号 | 规则 | Owner | 检测建议 |
| --- | --- | --- | --- |
| R-01 | 主视觉使用了冷色谱（blue / slate / emerald / red） | token-keeper | grep 冷色 token |
| R-02 | 缺少 `prefers-reduced-motion` 降级 | a11y-guardian | 检查媒体查询 |
| R-03 | 没有 `localStorage` dismiss key / 没有 `ONBOARDING_VERSION` 常量 | onboarding-director | grep `ONBOARDING_VERSION` |
| R-04 | 出现「跳过」按钮（仪式必须看完） | copy-writer | grep "跳过\|Skip" |
| R-05 | 版本介绍模态步骤数 > 3 | onboarding-director | 检查 steps schema 长度 |
| R-06 | 引用了稳态调色板（slate / blue / emerald 作为主色） | token-keeper | grep 主视觉 token |

## 🟧 警告规则（应改 · 带警告可放行）

| 编号 | 规则 | Owner |
| --- | --- | --- |
| W-01 | 入场动画总时长 > 1500ms | animation-choreographer |
| W-02 | 步骤激活胶囊宽度超过 `w-5` | onboarding-director |
| W-03 | 「不再显示」出现在非末步 | copy-writer / onboarding-director |
| W-04 | 引导文案出现了具体数字（如 "12K 条"、"8 个"） | copy-writer |
| W-05 | Footer 使用了 `flex-wrap`（必须 `flex-nowrap`） | onboarding-director |
| W-06 | 仪式模态在移动端未全屏化 | responsive-strategist |

## 🟨 提示规则（观察 · 不阻断）

| 编号 | 规则 | Owner |
| --- | --- | --- |
| H-01 | 标题字号超出 3.4-4.4rem 区间 | token-keeper |
| H-02 | 暖色装饰图标用 outline 而非 solid（大尺寸 ≥ 32px） | icon-curator |
| H-03 | 没有粒子 / 拍立得装饰（Eureka 模式建议保留） | onboarding-director |

## 变更日志

### v1.0.0 —— 从 ui-auditor 中拆出
- 13 条规则全部从 v2.0 的 ui-auditor.md 迁移过来
- 新增 R-06（冷色谱明确禁入）
- 新增 W-06（仪式模态移动端全屏要求）
- 新增 H-03（Eureka 装饰建议）
