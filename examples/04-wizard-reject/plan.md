# 🏗 PLAN — 向导首轮方案（埋雷）+ 议会 REJECT 推演

## 首轮组件树（wizard-designer · 故意埋雷）

```
<WizardShell>
  <Stepper />                        {/* ref 08 §1 面包屑 */}
  <Step1 项目信息>
    <Input 名称 /> <Input 描述 /> <Select 类型 /> <Input 标签 />
    {/* 雷: 业务说"每步1个输入框"却放了4个 = 矛盾两端都站 */}
  </Step1>
  <Step2 成员邀请> ... </Step2>
  <Step3 确认>
    <button onClick={() => alert('创建成功!')} />  {/* 雷: ref 14 反模式 1 alert */}
  </Step3>
</WizardShell>
```

## 首轮埋雷清单（故意触发 REJECT）

| # | 雷 | 命中 | 严重度 |
| --- | --- | --- | --- |
| 1 | "既要极简又要全功能" | R18 矛盾两端都站（ref 47/24） | 🟥 病因级 |
| 2 | `alert('创建成功!')` | ref 14 反模式 1（原生弹窗） | 🟥 |
| 3 | `color: '#3b82f6'` | ref 14 反模式 2（HEX 硬编码） | 🟥 |
| 4 | `className="!bg-red-500"` | ref 14 反模式 4（!important） | 🟥 |
| 5 | `z-[99999]` | ref 14 反模式 15 + ref 01 §8（任意 z-index） | 🟥 |
| 6 | 校验失败"错误：系统异常" | ref 31 错误不透明 + ref 47 §D7 | 🟥 |

## 议会推演（ref 48 六步 · 首轮 REJECT）

### Step 1 路由
task_kind=structural → 哲学家主板凳。

### Step 2-3 常委
| 思想家 | 类 | 得分 | 当选 |
| --- | --- | --- | --- |
| #039 黑格尔（R18 锚） | 哲 | 9.2 | ✓ dialectician |
| #225 王充（R25 疾虚妄） | 哲 | 8.8 | ✓ debunk-auditor |
| #232 王弼（留白·D1 简洁端） | 哲 | 8.5 | ✓ silence-architect |
| #A002 米开朗基罗（减法·D1 简洁端） | 艺 | 7.9 | ✓ form-liberator |

→ k=4 常委，全减法/简洁端（D1 简洁侧），加法端缺→递补 #A019 莫奈（防过度极简盲点）。

### Step 5 议会讨论（三段式）

| 圣人 | 📚 理论 | 🎯 发现 | 🔧 动作 |
| --- | --- | --- | --- |
| 黑格尔 | R18 矛盾两端都站 | "既要极简又要全功能"没选倾向 | **REJECT 返回 BRIEF**（ref 47 §R18） |
| 王充 | R25 疾虚妄 | alert/HEX/!important/"系统异常" | **REJECT**（ref 14 多条 🟥） |
| 王弼 | D1 简洁·留白 | 4 个输入框与"每步1个"矛盾 | 要求选倾向：简洁→拆步 / 全功能→承认不简洁 |
| 米开朗基罗 | 减法·形从石中 | alert 是堆砌 | 删 alert 用 modal-craftsman 模态 |
| 莫奈（递补） | R-Cross2 感官 | HEX 无氛围 | 改 token blue-600 |

### Step 6 投票（首轮）

| 圣人 | 票权 | 票 | 理由 |
| --- | --- | --- | --- |
| 黑格尔 | 2 | 👎 REJECT | R18 矛盾两端都站 |
| 王充 | 2 | 👎 REJECT | ref 14 反模式 4 条 🟥 |
| 王弼 | 2 | 👎 REJECT | D1 未选倾向 |
| 米开朗基罗 | 2 | 👎 REJECT | alert 堆砌 |
| 莫奈 | 2 | 👎 REJECT | HEX 无感官 |

- REJECT 票权 10，有效票权 10，门槛 ⌈10×2/3⌉=7
- **APPROVE 0 < 7 → 首轮 REJECT ✓**
- R18 触发 → 返回 BRIEF 要求选倾向

## REJECT 后整改（ref 29 整改闭环）

### R1 开单（ref 29 §R1）

| ticket | defect_id | severity | owner | acceptance |
| --- | --- | --- | --- | --- |
| ticket-1 | D-004-1 | P0 | wizard-designer | BRIEF 选 D1 倾向（简洁 or 全功能），不再两端站 |
| ticket-2 | D-004-2 | P0 | wizard-designer | 删 alert，改 modal-craftsman 模态（ref 07） |
| ticket-3 | D-004-3 | P1 | wizard-designer | HEX → token blue-600（ref 01） |
| ticket-4 | D-004-4 | P1 | wizard-designer | 删 !important，用 token 变体（ref 14 反模式 4） |
| ticket-5 | D-004-5 | P1 | wizard-designer | z-[99999] → z-[100]（ref 01 §8） |
| ticket-6 | D-004-6 | P0 | error-recovery-designer | "系统异常"→三段式（ref 31） |

### R2-R5 整改

业务方补全倾向：**选 D1 简洁端**（每步1输入框，全功能字段分到更多步）。
- ticket-1：BRIEF 改"每步1输入框，4字段分4步"✓
- ticket-2：alert → `<SuccessModal>`（ref 07）✓
- ticket-3：`#3b82f6` → `bg-blue-600`（ref 01）✓
- ticket-4：`!bg-red-500` → `[&_div]:bg-red-500`（ref 14）✓
- ticket-5：`z-[99999]` → `z-[100]`（ref 01 §8 modal 层）✓
- ticket-6："系统异常"→"名称不能为空 · 请填写项目名称"（ref 31 三段式）✓

### Round 2 复审（R4）

整改后方案重投：D1 已选倾向（简洁）、反模式全清、错误三段式。
→ APPROVE 10/10 → **Round 2 PASS ✓**

## 哲学映射追溯（ref 47）

```
首轮: D1 简洁⟷可发现 两端都站 → R18 REJECT (ref 47 §R18)
整改: D1 选简洁端 + 留位(全功能字段分步不删) → 通过 (ref 47 §D1 留位)
```
