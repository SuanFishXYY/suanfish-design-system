# 🧵 SPEC · prompt-input + agent-thread — 输入与线程（ref 37 落地）

> D2 掌控（线程可回溯）+ D1 简洁⟷可发现（@ / 命令可发现）。ref 37。

## 输入区（ref 37 §二）

### 容器与增高

```tsx
<textarea
  className="w-full resize-none rounded-xl border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 transition-all"
  style={{ maxHeight: '50vh' }}
  rows={1}  // 自适应增高，max 50% 视口
/>
```

| 状态 | 高度 | 视觉 |
| --- | --- | --- |
| 空闲 | 单行 + 占位符 | 浅边框 |
| 输入中 | 自适应 max 50vh | 边框深化 |
| 超出 | 内部滚动 | 顶部"↑ 滚动查看" |
| 禁用(AI生成中) | 保留高度 | 半透明+等待 · Stop 替代 send |

### 键盘（IME 安全 · ref 37 §二 ② 铁律）

| 键 | 行为 |
| --- | --- |
| Enter | 发送（除非 Shift / **IME 选词中** / 命令面板开） |
| Shift+Enter | 换行 |
| Cmd/Ctrl+Enter | 强制发送 |
| Esc | 关命令面板/取消上传 |
| ↑（空框） | 编辑上一条用户消息 |

> IME 选词 Enter 不发送——中国用户最大的痛，REJECT 违反（ref 37）。

### @ 提及（ref 37 §二 ③）

```tsx
// @ 触发 → 弹知识库/历史/文件/成员面板 → 选中插 @[显示名](id) 彩色 chip
// 光标在 chip 后退格 → 整 chip 删（非字符删）
```

### / 命令（ref 37 §二 ④）

- 行首 `/` → 弹命令面板（图标+名+描述+快捷键）
- 立即命令（`/clear` `/new`）→ 直接执行不进输入
- 填充命令（`/translate` `/summarize`）→ 填模板+光标移 placeholder

### 附件（ref 37 §二 ⑤）

- 图片 Ctrl+V 粘贴/拖拽/点击 → 缩略图卡可删
- 文件拖拽/点击 → 文件卡（icon+名+大小+类型徽标）
- 单次 ≤10 · 上传中进度条+取消

### Send 状态机（ref 37 §二 ⑥）

| 状态 | 视觉 | 触发 |
| --- | --- | --- |
| 空 | 半透明不可点 | 无内容无附件 |
| 可发 | 主色实心+↑ | 有内容 |
| 发送中 | 旋转 spinner | 已点未首 token |
| 流式中 | ⏹ Stop 警示色 | AI 输出中（D2 掌控） |

### 草稿持久化（ref 37 §二 ⑦）

- 切路由/刷新 → localStorage 保留
- 进入若有草稿 → "📝 上次未发送（X 分钟前）"+ 恢复/丢弃

## 对话线程（ref 37 §一 · D2 掌控）

### 线程树（非 list）

```
Message N (user)
├─ Response A (assistant) ← 当前活跃
├─ Response A' (regenerate 1)
└─ Response A'' (regenerate 2)
```

每个节点带 `id, parent_id, branch_id, created_at, model, tokens`。

### Regenerate 视觉（ref 37 §一 ②）

```tsx
<div className="flex items-center gap-2 text-xs text-gray-400">
  <button onClick={prev}>◀</button>
  <span>1/3</span>  {/* 当前是 3 版本第 1 */}
  <button onClick={next}>▶</button>
</div>
// 切换保留位置不滚动 · crossfade 200ms · 旧版本不消失（R: 删旧=REJECT）
```

### Edit-Resubmit（ref 37 §一 ③）

- 用户消息 hover → ✏️ 编辑入口
- 编辑后弹确认"重新提交进入新分支，旧分支 ⋮ 可回"
- 旧分支折叠右侧细栏 + "从此处分叉过 1 次"

### Checkpoint（ref 37 §一 ④）

- > 20 轮自动每 5 轮打 checkpoint
- 右栏目录"第 1 段·AI 总结标题·第 5 段..."
- 点击 → 折叠之后 + "从此处重新开始"

## 产物画布（ref 37 §三）

- 代码 ≥30 行 / md ≥1500 字 / SVG 完整 → 脱出到 ArtifactCanvas（侧抽屉 50/50）
- 不达阈值留在气泡（ref 36 chat-ui）
- 画布可编辑 + 版本 diff + "问 AI 关于这段"双向桥接
