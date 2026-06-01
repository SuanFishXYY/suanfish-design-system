# Contributing to Suanfish Design System

🐟 感谢你愿意为「算鱼设计系统」贡献力量。

## 贡献方式 · How to Contribute

### 1. 报告 Bug · Report a Bug

- 使用 [Bug Report 模板](.github/ISSUE_TEMPLATE/bug_report.md)
- 描述你期望的行为 vs 实际行为
- 附上复现步骤（环境 / SKILL 版本 / 调用上下文）

### 2. 提议新 Agent · Propose a New Agent

打开 issue 之前请先回答 3 个问题：

1. **它属于哪个 tier？** Tier 0 议会 / 1 调度 / 1.5 协调 / 2 主导 / 3 容器 / 4 内容 / 5 横切 / 6 质量门
2. **它能拒绝什么？** 如果是 `ui-auditor` 类，给出至少 3 条 REJECT 规则
3. **它与现有 52 个 agent 边界在哪？** 不能有职责重叠（边界写进 SKILL.md「关键边界」表 + agent 自身正文互指）

满足以上 3 点再提 PR。

### 3. 改进 References · Improve References

References 是设计规则的源头。改动 `references/` 下任何文件，**必须同步**：

- `references/15-audit-ruleset-steady.md` 的 `bound_to_token_version` 字段
- `references/16-audit-ruleset-onboarding.md` 的 `bound_to_token_version` 字段
- `CHANGELOG.md` 增加条目

### 4. 翻译 · Translations

目前主语言是中文，英文版在 `README.en.md`。新增其他语言：

- 命名 `README.<lang>.md`
- 翻译 README 主体，**不翻译** SKILL.md / references（保持单一真实源）

## PR 规范 · PR Guidelines

- 一个 PR 只解决一个问题
- Commit 信息用 [Conventional Commits](https://www.conventionalcommits.org/) 格式
- 标题用英文，正文中英文都行
- PR 模板见 [`.github/pull_request_template.md`](.github/pull_request_template.md)

## 🔴 防漂移纪律 · Anti-Drift Discipline（v4.2 新增 · 必读）

> **历史教训**：v4.1→v4.2 升级时只改了「展示层」(README/agents/docs)，漏改了「机器读取层」(SKILL.md 正文 + manifest) 和「历史层」(CHANGELOG/README.en)，导致 frontmatter 承诺 4:4:4，正文却还跑 8 哲学家——**门面升级，发动机没动**。下表是为了让这种事永不再发生。

### 铁律 0 · description 是承诺，正文是兑现

**改任何 agent / SKILL.md 的 frontmatter `description` 字段，必须同步该承诺在正文里的定义与执行说明。**
description 里出现的每一个名词（如「4:4:4」「R-Cross」「12 圣人」），正文必须能查到它怎么被执行。description 改了正文没改 = 漂移，PR 直接打回。

### 单一信源 × 联动文件映射表

改下列任一「事实」，**必须同步更新右列所有文件**（一处不漏）：

| 事实 | 单一信源(SOURCE OF TRUTH) | 必须同步的联动文件 |
| --- | --- | --- |
| **版本号** | `package.json` | `.skill-manifest.json` · `SKILL.md` frontmatter · `README.md` badge · `README.en.md` badge · `bench-matcher.md` desc · `CHANGELOG.md` 新条目 |
| **agent 总数(52)** | `agents/` 实际文件数 | `SKILL.md`(frontmatter desc + 正文表 + 架构图) · `.skill-manifest.json`(agent_count + agents[]) · `README.md` · `README.en.md` · `README.dev.md` · `docs/antigravity-integration.md` |
| **议会协议步数(6 步)** | `agents/bench-matcher.md` | `SKILL.md` · `.skill-manifest.json` · `README.md` · `docs/test-cases.md` · `docs/v4.2-congress-simulation.md` · `quotation-verifier.md` · `docs/antigravity-integration.md` |
| **板凳数(420=335 哲+50 艺+35 音)** | `references/27-philosopher-bench.md` | `SKILL.md` · `README.md` · `README.en.md` · `README.dev.md` · `bench-matcher.md` · `docs/test-cases.md` · `docs/antigravity-integration.md` · `CHANGELOG.md` |
| **12 默认种子席 4:4:4 名册** | `agents/bench-matcher.md`(`default_seeds` 区) | `agents/sage-council.md` · `.skill-manifest.json`(twelve_sage_congress) · `SKILL.md`(默认种子席一览表) |
| **常委选拔机制(全动态/厚仙人门槛)** | `agents/bench-matcher.md`(Step 3 `layer_1_rules`) | `SKILL.md`(六步协议②③ + 可达性红线) · `agents/sage-council.md`(frontmatter + 正文) · `references/27`(§0 schema) · `CHANGELOG.md` |
| **REJECT 规则集(R1-R25 + R-Cross1-4)** | `references/17` · `references/19` · `references/27` | `SKILL.md`(规则说明) · 引用该规则的 agent 正文 |
| **Tier 数(8 个)** | `SKILL.md` 架构图 | `.skill-manifest.json` · `README.dev.md` |

### 改完必跑的自检（任选其一验证零漏网）

```bash
# 1. 旧数字全库搜（确认没有残留 v 旧版数字裸露在当前态文字里）
grep -rn "14 个 agent\|44 agent\|301 板凳\|八圣人\|5 步议会\|8:2:2" . --include=*.md
# 命中只允许出现在 CHANGELOG / manifest 的历史块里，正文/当前态命中 = 漂移

# 2. manifest JSON 合法性（UTF-8 no-BOM，勿用 PowerShell Get-Content）
python -c "import io,json; json.load(io.open('.skill-manifest.json',encoding='utf-8')); print('JSON OK')"
```

> ⚠️ **编码红线**：本仓库所有文件是 **UTF-8 无 BOM**。编辑含中文的文件请用编辑器/工具直接改，**勿经 PowerShell 命令串传中文**（乱码），**勿用 `Get-Content`/`ConvertFrom-Json` 读**（按 GBK 误读成乱码 + 假 JSON 报错）。批量替换写 Python 脚本 + `io.open(..., encoding="utf-8")`。

## 不接受的 PR · What We Won't Merge

- 删除 REJECT 规则的 PR（核心机制不动）
- 在 `agents/` 增删 agent 但**没同步**「防漂移纪律」映射表中 agent 总数所有联动文件的 PR（先开 issue 讨论 tier 归属）
- 改了 frontmatter `description` 的承诺、却没在正文兑现的 PR（违反铁律 0）
- 把 SKILL.md 中英文混排打破现有结构的 PR
- 没有同步更新 `bound_to_token_version` 的 token 改动

## 行为准则 · Code of Conduct

参与本项目即代表你同意遵守 [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)。

## License

提交的所有代码默认采用 MIT 协议授权（与项目 LICENSE 一致）。
