<!-- 请确保 PR 标题用 Conventional Commits 格式: feat: / fix: / docs: / refactor: -->

## What · 做了什么

<!-- 一句话总结 -->

## Why · 为什么

<!-- 解决什么问题 · 关联 issue: Closes #xxx -->

## How · 怎么改的

<!-- 关键变动点 · 设计取舍 -->

## 影响范围 · Impact

- [ ] 修改了 SKILL.md 主入口
- [ ] 新增/修改 agent（哪个 tier？）
- [ ] 修改 references/（是否同步 `bound_to_token_version`？）
- [ ] 修改 REJECT 规则集（R1-R25 / R-Cross1-4 任何一条？）
- [ ] 修改 token / design tokens
- [ ] 改动了下列任一「事实」：版本号 / agent 总数 / 议会步数 / 板凳数 / 12 圣人名册 / Tier 数
- [ ] 仅文档 / README

## Checklist

- [ ] CHANGELOG.md 已更新
- [ ] 如改 token 或 references → 同步更新了 `bound_to_token_version` 字段
- [ ] 如新增 agent → 同步更新了 SKILL.md 的 agent 列表
- [ ] **防漂移**：如改了上面「事实」类，已按 [CONTRIBUTING.md 防漂移纪律](../CONTRIBUTING.md) 的映射表同步**所有**联动文件
- [ ] **防漂移**：如改了 frontmatter `description` 的承诺，正文已兑现（铁律 0）
- [ ] **防漂移**：已跑自检 `grep` 旧数字 + `python` 校验 manifest JSON，零漏网
- [ ] 我已读过 [CONTRIBUTING.md](../CONTRIBUTING.md) 并理解 PR 规范
- [ ] 我已读过 [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md)

## Screenshots / Demo · 可选

<!-- 如果涉及视觉变化，贴对比图 -->
