# 🎬 SPEC · animation-choreographer · Onboarding 动效

**作者**：animation-choreographer
**哲学锚点**：`[老子 · 大象无形，大音希声]`

---

## 思维链

```
[识别场景 → 这是路径 A 仪式时刻，允许 > 200ms 动效]
[老子 · 大象无形 → 即使是仪式，也不抢焦点，让欢迎感"自然流出"]
[Canon-E2 · 物哀 · 余韵 → 完成态要有"恰好结束"的留白]
[P-AC1 检查 → 这不是高频路径，时长约束放宽]
[P-AC2 检查 → 必须用 ceremonial-* 命名空间隔离]
[结论 → 4 段动效，进入慢、切换中、退出快]
```

---

## 4 段动效定义

### 1. 模态进入

| 属性 | 值 |
| --- | --- |
| 触发 | 首次登录 / 点击「查看新版」 |
| 时长 | 400ms |
| 缓动 | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 关键帧 | `opacity: 0→1`, `scale: 0.95→1`, `translateY: 20px→0` |
| 命名空间 | `ceremonial-modal-enter` |

```css
@keyframes ceremonial-modal-enter {
  from { opacity: 0; transform: scale(0.95) translateY(20px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);    }
}
```

### 2. 步骤切换

| 属性 | 值 |
| --- | --- |
| 触发 | 点击「下一步」 |
| 时长 | 300ms |
| 缓动 | `ease-out` |
| 关键帧 | 旧 step `slide-out-left`, 新 step `slide-in-right` |
| 命名空间 | `ceremonial-step-shift` |

### 3. 步骤图标进入（弹性）

| 属性 | 值 |
| --- | --- |
| 时长 | 600ms |
| 缓动 | Spring (stiffness: 200, damping: 18) |
| 关键帧 | `scale: 0→1.1→1` 弹性回弹 |
| 命名空间 | `ceremonial-icon-pop` |
| 延迟 | 切换完成后 +100ms |

### 4. 模态退出（最短）

| 属性 | 值 |
| --- | --- |
| 时长 | 200ms |
| 缓动 | `ease-in` |
| 关键帧 | `opacity: 1→0`, `scale: 1→0.98` |
| 命名空间 | `ceremonial-modal-exit` |

**为什么退出最快？**
- `[Canon-E2 · 余韵]` — 留白发生在"动画结束之后"，不是"动画过程中"
- 用户已经看完 3 步，再看长动画 = 浪费时间

---

## 三条铁律检查

| 铁律 | 验证 |
| --- | --- |
| 1 仪式 keyframes 不流入稳态 | ✅ 全部 `ceremonial-*` 前缀，CSS module 隔离 |
| 2 稳态 keyframes 不裹仪式 | ✅ 未使用任何 `steady-*` 动画 |
| 3 路径 B 4 项硬条件 | N/A（本任务是路径 A） |

---

## P-AC1 检查（高频动画时长）

| 动画 | 时长 | 高频？ | 通过 |
| --- | --- | --- | --- |
| 模态进入 | 400ms | ❌ 首次登录 | ✅ |
| 步骤切换 | 300ms | ❌ ≤ 2 次/会话 | ✅ |
| 图标弹入 | 600ms | ❌ 仪式时刻 | ✅ |
| 模态退出 | 200ms | ❌ 一次性 | ✅ |

---

## 性能预算

- 不使用 `box-shadow` 动画（GPU 不友好）
- 优先 `opacity` + `transform`（合成层）
- `will-change: transform` 仅在动画期间添加

---

## 无障碍

```js
if (prefers-reduced-motion: reduce) {
  // 关闭所有 ceremonial-* 动画
  // 改为 opacity 瞬切（< 50ms）
}
```

---

## 哲学审查通过

- ✅ **P-AC1**：所有时长合规
- ✅ **P-AC2**：仪式动画完全隔离
- ✅ **P-G1**：引用 [老子] + [Canon-E2]
- ✅ **P-G3**：思维链 5 步完整

---

> *"用户从模态里走出来，应该感觉是"刚被一阵微风带过"——而不是"刚被一阵烟花炸过"。"*
