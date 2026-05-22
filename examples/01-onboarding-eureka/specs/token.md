# 🎨 SPEC · token-keeper · Onboarding 设计 token

**作者**：token-keeper
**哲学锚点**：`[康德 · 绝对命令 — 设计 token 即立法]`

---

## 思维链

```
[识别场景 → 仪式时刻，需要"暖嗓子" token]
[康德 · 绝对命令 → 任何新增 token 必须可推广，不能 case-by-case]
[P-AC2 检查 → 仪式专属 token 必须命名空间隔离]
[铁律 1 → 暖色不流入稳态]
[结论 → 用 ceremonial-* 命名空间封装所有仪式 token]
```

---

## 颜色 token

### 主色（仪式专属）

```css
--ceremonial-primary-50:  #EFF6FF;
--ceremonial-primary-100: #DBEAFE;
--ceremonial-primary-500: #3B82F6;
--ceremonial-primary-600: #2563EB;
--ceremonial-primary-700: #1D4ED8;
```

**约束**：这些 token **只允许**在 `ceremonial-*` 组件内引用。
**Lint 规则**：CI 检查稳态视图代码中不得 import 这些 token。

### 强调色（联网检索徽章专用）

```css
--ceremonial-accent-amber: #FBBF24;
--ceremonial-accent-amber-bg: #FEF3C7;
```

**使用范围**：仅 Step 1 的 🌐 联网检索徽章。

### 中性色（复用稳态 token）

```css
--neutral-text-primary:   #111827;  /* 复用 */
--neutral-text-secondary: #6B7280;  /* 复用 */
--neutral-border:         #E5E7EB;  /* 复用 */
```

**为什么复用？** 中性色不带情感，可跨模式使用。

---

## 间距 token

```css
--ceremonial-modal-padding:   2rem;     /* 32px */
--ceremonial-step-gap:        1.5rem;   /* 24px */
--ceremonial-icon-size:       3rem;     /* 48px */
--ceremonial-button-padding-y: 0.625rem; /* 10px */
--ceremonial-button-padding-x: 1.25rem;  /* 20px */
```

---

## 圆角 token

```css
--ceremonial-radius-modal:  1rem;     /* 16px · rounded-2xl */
--ceremonial-radius-button: 0.5rem;   /* 8px */
--ceremonial-radius-badge:  9999px;   /* full · pill */
```

---

## 阴影 token

```css
--ceremonial-shadow-modal:
  0 25px 50px -12px rgb(0 0 0 / 0.25),  /* shadow-2xl */
  0 0 0 1px rgb(0 0 0 / 0.05);
```

---

## 字号 token

```css
--ceremonial-font-title:    1.5rem;    /* 24px · text-2xl */
--ceremonial-font-step:     1.125rem;  /* 18px · text-lg */
--ceremonial-font-desc:     0.9375rem; /* 15px */
--ceremonial-font-button:   0.875rem;  /* 14px */
```

---

## 康德"绝对命令"通过测试

每个 token 必须能回答："如果所有 onboarding 都用这个值会怎样？"

| Token | 答案 | 通过 |
| --- | --- | --- |
| `--ceremonial-primary-500` | 蓝色主题适配所有 onboarding 场景 | ✅ |
| `--ceremonial-accent-amber` | 仅徽章，每个 onboarding 偶尔用 | ✅ |
| `--ceremonial-modal-padding: 32px` | 所有仪式模态都 32px | ✅ |
| `--ceremonial-icon-size: 48px` | 所有仪式图标统一 48px | ✅ |

---

## 版本同步契约

```yaml
token_version: 2.2.0
bound_to_audit_ruleset: [16, 19]
breaking_change: false
```

修改本 SPEC 必须同步：
- `references/16-audit-ruleset-onboarding.md`
- `references/19-audit-ruleset-philosophy.md`

否则 ui-auditor **直接报错拒绝执行**。

---

## 哲学审查通过

- ✅ **P-TK1**：所有 token 可推广 (康德测试)
- ✅ **P-TK2**：版本同步契约写明
- ✅ **铁律 1**：命名空间隔离
- ✅ **P-G1**：引用 [康德]

---

> *"Token 不是颜色变量。Token 是设计语言的语法。"*
