# Contributing to Suanfish Design System

🐟 感谢你愿意为「算鱼设计系统」贡献力量。

## 贡献方式 · How to Contribute

### 1. 报告 Bug · Report a Bug

- 使用 [Bug Report 模板](.github/ISSUE_TEMPLATE/bug_report.md)
- 描述你期望的行为 vs 实际行为
- 附上复现步骤（环境 / SKILL 版本 / 调用上下文）

### 2. 提议新 Agent · Propose a New Agent

打开 issue 之前请先回答 3 个问题：

1. **它属于哪个 tier？** Strategy / Architecture / Content / Visual / Horizontal / Audit
2. **它能拒绝什么？** 如果是 `ui-auditor` 类，给出至少 3 条 REJECT 规则
3. **它与现有 14 个 agent 边界在哪？** 不能有职责重叠

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

## 不接受的 PR · What We Won't Merge

- 删除 REJECT 规则的 PR（核心机制不动）
- 在 `agents/` 增加超过 14 个 agent 的 PR（先开 issue 讨论 tier 归属）
- 把 SKILL.md 中英文混排打破现有结构的 PR
- 没有同步更新 `bound_to_token_version` 的 token 改动

## 行为准则 · Code of Conduct

参与本项目即代表你同意遵守 [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)。

## License

提交的所有代码默认采用 MIT 协议授权（与项目 LICENSE 一致）。
