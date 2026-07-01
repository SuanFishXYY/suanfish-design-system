---
ref: 32
title: 通知系统 · Path D 通知流规范
owner: notification-director (通知流总监)
audited_by: ui-auditor
---

# 🔔 ref 32 · 通知系统

> *每多发一个通知，用户就少信你一分。*
>
> notification-director 主理 Path D · 通知流。从顶部 banner 到右下 toast，从系统 push 到红点 badge，所有"主动打扰用户"的界面归此。哲学锚：海德格尔 · 烦（Sorge）——通知是制造烦的工具，须节制。

## 1. 四种载体

| 载体 | 触发 | 时长 | 默认位置 |
| --- | --- | --- | --- |
| **Toast** | 操作反馈 | 3-5s 自消 | 右下 |
| **Banner** | 全局状态 | 持久至 dismiss | 顶部 |
| **Badge** | 异步计数 | 持久 | 图标/导航项上 |
| **Push** | 系统级 | 进入通知中心 | OS 控制 |

## 2. 触发哲学（烦的节制）

每个通知问 3 个问题：

1. **不发会怎样？** — 答不上来 = 不发。
2. **能不能聚合？** — 5 个同类 = 1 条聚合。
3. **能否非阻断？** — 能 = 必须用非阻断。

❌ 失败案例：「保存成功」toast（用户的预期就是成功，发通知 = 噪音）。
✅ 成功案例：「保存失败 — 网络错误，重试」toast（不发用户会丢数据）。

## 3. 视觉优先级

| 级别 | 色 | 图标 | 自消 |
| --- | --- | --- | --- |
| 信息 | blue | ℹ️ | ✅ |
| 成功 | green | ✅ | ✅（**只用于关键操作**） |
| 警告 | amber | ⚠️ | ✅ |
| 危险 | red | 🚨 | ❌ **不可静默自消**（须 user 主动 dismiss） |

颜色走 ref 01 §1 语义色（blue/emerald/amber/red）。

## 4. 聚合协议

- 同类通知 ≥ 3 → 折叠为"N 条 \<类型> 通知"。
- 危险级永不聚合。
- 单页面同时通知 ≤ 3（超过 3 = 设计失败）。

## 5. 通知 PLAN 模板

```markdown
## 🔔 通知 PLAN

### 触发清单（先穷尽再筛）
| 事件 | 载体 | 不发后果 | 决定 |
| --- | --- | --- | --- |
| <event 1> | toast | <data loss> | ✅ 发 |
| <event 2> | (none) | <无后果> | ❌ 不发 |

### 文案契约
- 主语：<who 影响了 user>
- 动作：<what happened>
- 用户下一步：<具体动作 or 等待>

### 视觉优先级
- 信息级：blue · ℹ️
- 成功级：green · ✅（**只用于关键操作**）
- 警告级：amber · ⚠️
- 危险级：red · 🚨（**不可静默自消**）

### 聚合协议
- 同类通知 ≥ 3 → 折叠为"N 条 <类型> 通知"
- 危险级永不聚合
```

## 6. Toast 规范

操作反馈主力载体。3-5s 自消（危险级除外），右下角堆叠：

```tsx
<div className="fixed bottom-4 right-4 z-[70] flex flex-col gap-2 items-end">
  <div className={`px-4 py-3 rounded-xl shadow-lg text-sm flex items-center gap-2 animate-slide-up
    ${sevColor}`} role="status" aria-live="polite">
    <Icon className="w-4 h-4" />
    <span>{message}</span>
    {action && <button className="underline">{action}</button>}
  </div>
</div>
```

- `role="status"` + `aria-live="polite"`（a11y-guardian 要求）。
- z-[70]（ref 01 §8 toast 层）。
- 危险级不自动 dismiss，须显式关闭按钮。

## 7. Banner 规范

全局状态（如系统维护、版本公告），顶部持久，至 user dismiss：

```tsx
<div className={`sticky top-0 z-[50] px-4 py-2 text-sm flex items-center justify-between ${sevBg}`}>
  <div className="flex items-center gap-2">
    <Icon className="w-4 h-4" />
    <span>{message}</span>
  </div>
  <button onClick={onDismiss} aria-label="关闭"><XMarkIcon className="w-4 h-4" /></button>
</div>
```

## 8. Badge 规范

异步计数（未读消息/待办），图标右上角红点或数字：

```tsx
<span className="relative inline-flex">
  <Icon className="w-5 h-5" />
  {count > 0 && (
    <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
      {count > 99 ? '99+' : count}
    </span>
  )}
</span>
```

- `bg-red-500` 危险色（ref 01）。
- \> 99 显示 `99+`。
- 持久，不自消。

## 9. 不可妥协

- ✅ 单页面同时通知 ≤ 3（超过 3 = 设计失败）。
- ✅ 危险级必须 user 主动 dismiss，不可自消。
- ✅ 必须支持「不再提示」——控制权交还用户。
- ❌ 不用通知做引导（那是 Path A onboarding 的活）。
- ❌ 不用通知催促（违反海德格尔尊重原则 → REJECT）。

## 变更日志

| 版本 | 变更 |
| --- | --- |
| 1.0.0 | 初版通知系统：四载体 + 触发哲学 + 视觉优先级 + 聚合 + PLAN 模板 + Toast/Banner/Badge 规范 + 铁律。对齐 notification-director 依赖。 |
