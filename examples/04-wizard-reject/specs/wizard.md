# 🧙 SPEC · wizard-designer — 向导（首轮埋雷 vs 整改后）

## 首轮 SPEC（埋雷 · 已 REJECT）

```tsx
// ❌ 雷1: 矛盾两端都站 — 业务"每步1输入框"却放4个
<Step1>
  <Input placeholder="名称" />
  <Input placeholder="描述" />
  <Select>类型</Select>
  <Input placeholder="标签" />
</Step1>

// ❌ 雷2: alert 原生弹窗 (ref 14 反模式 1)
<button onClick={() => alert('创建成功!')}>完成</button>

// ❌ 雷3: HEX 硬编码 (ref 14 反模式 2)
<div style={{ color: '#3b82f6' }}>主色文字</div>

// ❌ 雷4: !important (ref 14 反模式 4)
<button className="!bg-red-500">危险</button>

// ❌ 雷5: 任意 z-index (ref 14 反模式 15 + ref 01 §8)
<Modal className="z-[99999]" />

// ❌ 雷6: 错误不透明 (ref 31)
<p className="text-red-500">错误：系统异常</p>
```

## 整改后 SPEC（R5 销项 · PASS）

### 向导结构（D1 选简洁端 · ref 08）

```tsx
<WizardShell className="flex-1 flex flex-col bg-slate-50">
  <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 flex justify-between">
    <Stepper steps={4} current={currentStep} />  {/* ref 08 §1 · 4步面包屑 */}
    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      {isLast ? '完成' : '下一步'}
    </button>
  </header>
  <main className="flex-1 overflow-y-auto custom-scrollbar">
    <div key={currentStep} className="animate-fade-in-up max-w-5xl mx-auto py-8 px-6">
      <StepComponent />  {/* 每步1输入框, 4字段分4步 */}
    </div>
  </main>
</WizardShell>
```

> D1 选简洁端：每步1输入框；全功能字段不删，分到4步（留位）。

### 成功反馈（删 alert · ref 07 模态）

```tsx
// ✅ 整改: alert → SuccessModal (ref 07)
<SuccessModal isOpen={created} onClose={goToProject}>
  <h2 className="text-lg font-bold text-slate-800">项目已创建</h2>
  <p className="text-sm text-gray-600 mt-1">{projectName} 准备就绪</p>
</SuccessModal>
```

### 主色（删 HEX · ref 01 令牌）

```tsx
// ✅ 整改: #3b82f6 → bg-blue-600 (ref 01 §1)
<button className="bg-blue-600 hover:bg-blue-700 text-white">下一步</button>
```

### 危险按钮（删 !important · ref 14 反模式 4）

```tsx
// ✅ 整改: !bg-red-500 → 限定作用域变体 (ref 14)
<button className="bg-red-600 hover:bg-red-700 text-white">删除</button>
// 或精确: [&_div]:bg-red-500 (限定子元素)
```

### z-index（删任意值 · ref 01 §8）

```tsx
// ✅ 整改: z-[99999] → z-[100] (ref 01 §8 modal backdrop 层)
<Modal className="z-[100]" />
```

### 错误三段式（删"系统异常" · ref 31）

```tsx
// ✅ 整改: "错误：系统异常" → 三段式 (ref 31 §二)
<p className="text-xs text-red-500 mt-1">
  名称不能为空 · 请填写项目名称后继续  {/* 发生什么 + 怎么做 */}
</p>

// 字段级 inline 错误 (ref 31 §一 错误6大类·校验类)
<Input invalid={errors.name} />
{errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
```

## 整改对照表

| 雷 | 首轮（REJECT） | 整改后（PASS） | ref |
| --- | --- | --- | --- |
| R18 两端站 | 4输入框+"每步1个" | 4步每步1输入框 | 47/24 |
| alert | `alert()` | SuccessModal | 07/14 |
| HEX | `#3b82f6` | `bg-blue-600` | 01/14 |
| !important | `!bg-red-500` | `bg-red-600` 或变体 | 14 |
| 任意 z | `z-[99999]` | `z-[100]` | 01/14 |
| 错误不透明 | "系统异常" | 三段式 inline | 31 |

## 状态机铁律（ref 08/31）

- 步骤切换 `key={currentStep}` 重放动画（ref 11 §6）
- 过去步可回跳，未来步禁用（ref 08 §2）
- 校验失败 inline 红字，不阻断整件（ref 31 §一）
- 等待态（依赖上步）用 ClockIcon + "等待上一步确认"（ref 08 §5）
