# 算鱼设计系统 · Antigravity (Google IDE) 集成指南

> v4.2.0 起官方支持 Google Antigravity 一键安装。

## 一键安装 (推荐)

```bash
# 在终端执行 — 自动检测 ~/.antigravity 并 symlink
npx -y github:SuanFishXYY/suanfish-design-system
```

安装器会在 `~/.antigravity/skills/suanfish-design-system` 建立 symlink, Antigravity 启动后自动发现 52 个 agent + 27 份规范 + 420 思想家板凳。

## 手动安装 (掌控派)

### macOS / Linux

```bash
git clone https://github.com/SuanFishXYY/suanfish-design-system.git ~/.suanfish-design-system
mkdir -p ~/.antigravity/skills
ln -sf ~/.suanfish-design-system ~/.antigravity/skills/suanfish-design-system

# 验证
ls ~/.antigravity/skills/suanfish-design-system/agents/ | wc -l   # 应该 52
```

### Windows (PowerShell · 管理员)

```powershell
git clone https://github.com/SuanFishXYY/suanfish-design-system.git $HOME\.suanfish-design-system
New-Item -ItemType Directory -Force $HOME\.antigravity\skills | Out-Null
New-Item -ItemType Junction -Path $HOME\.antigravity\skills\suanfish-design-system -Target $HOME\.suanfish-design-system
```

## 在 Antigravity 中触发议会

### 方式 1 · 自然语言直接说

> "我要做一个 dashboard 的登录页 hero 区, polymath 气质 + 0.8s 命运动效 + 文人极简底色 (task_kind: mixed)"

Antigravity 的 Gemini 议程会自动加载本 skill 的 SKILL.md, 启动 v4.2 议会五步协议。

### 方式 2 · 显式 @ agent

```
@bench-matcher 这个 BRIEF · ...
@polymath-bridger 帮我看下跨学科可行性
@tension-composer 设计 0.8s 命运四音节律
```

### 方式 3 · 引用具体 sage

```
@dialectician 这个方案的辩证矛盾在哪?
@silence-architect 留白比例够不够?
```

## v4.2 Antigravity 特性增强

Antigravity 的 multi-agent 视图天然适配 v4.2 议会模式 — 可以在侧边栏看到:

- 🏛 入场 Tier 0 圣人列表 (3-5 位)
- 🎭 被邀请的助手 (cap 15 内)
- 🗳 投票进度条 (≥2/3 通过门槛)
- 🔍 R25 + R-Cross1-4 核验状态

## 验证安装

启动 Antigravity, 在 prompt 中输入:

```
@bench-matcher 你是哪个版本?
```

期望回复包含: `v4.2.0 三大类 4:4:4 均权议会 · 12 位 Tier 0 (4 哲+4 艺+4 音)`。

## 更新 / 卸载

```bash
# 更新
npx -y github:SuanFishXYY/suanfish-design-system update

# 卸载 (移除所有 CLI 的 symlink, 保留克隆库)
npx -y github:SuanFishXYY/suanfish-design-system uninstall

# 完全清除
rm -rf ~/.suanfish-design-system
```

## 常见问题

**Q: Antigravity 没有自动发现 skill?**
A: 重启 Antigravity, 或在设置中"重新扫描 skills 目录"。

**Q: agent 太多影响 token 预算?**
A: v4.2 议会动态召唤, 简单 BRIEF 仅 2 位入场 (省 80% token), 复杂才 5-12 位。

**Q: 如何关闭议会投票, 只用单 agent?**
A: 在 BRIEF 显式指定 `@<agent 名>`, bench-matcher 会跳过议会协议。
