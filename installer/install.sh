#!/usr/bin/env bash
# 算鱼设计系统 · 一键安装 (Mac / Linux)
# usage: curl -sSL https://raw.githubusercontent.com/SuanFishXYY/suanfish-design-system/main/installer/install.sh | bash
set -e

REPO="https://github.com/SuanFishXYY/suanfish-design-system.git"
NAME="suanfish-design-system"
TARGET="${SUANFISH_HOME:-$HOME/.$NAME}"

cyan(){ printf "\033[1;36m%s\033[0m\n" "$1"; }
ok(){ printf "  \033[32m✓\033[0m %s\n" "$1"; }
info(){ printf "  \033[90m·\033[0m %s\n" "$1"; }
warn(){ printf "  \033[33m⚠\033[0m %s\n" "$1"; }
err(){ printf "  \033[31m✗\033[0m %s\n" "$1"; }

command -v git >/dev/null 2>&1 || { err "需要 git: https://git-scm.com/downloads"; exit 1; }

cyan "🐟 算鱼设计系统 · 一键安装"

if [ -d "$TARGET/.git" ]; then
  info "已存在 $TARGET, git pull"
  git -C "$TARGET" pull --ff-only --quiet || warn "pull 失败, 跳过"
  ok "已更新"
else
  info "克隆到 $TARGET"
  git clone --depth=1 --quiet "$REPO" "$TARGET"
  ok "克隆完成"
fi

cyan "🔌 检测 CLI"
LINKED=0
for pair in ".copilot:GitHub Copilot CLI" ".claude:Claude Code" ".agents:通用 agents 目录" ".codex:Codex CLI" ".gemini:Gemini CLI" ".antigravity:Antigravity (Google)"; do
  DIR="${pair%%:*}"; LABEL="${pair##*:}"
  [ -d "$HOME/$DIR" ] || continue
  mkdir -p "$HOME/$DIR/skills"
  LINK="$HOME/$DIR/skills/$NAME"
  [ -L "$LINK" ] && rm "$LINK"
  if [ -e "$LINK" ]; then warn "$LINK 已存在且非 symlink, 跳过"; continue; fi
  ln -sf "$TARGET" "$LINK"
  ok "$LABEL → ~/$DIR/skills/$NAME"
  LINKED=$((LINKED+1))
done

if [ "$LINKED" = "0" ]; then
  warn "未检测到任何 CLI 目录"
  info "手动: ln -sf \"$TARGET\" ~/<你的 CLI 目录>/skills/$NAME"
fi

cyan "✅ 完成"
info "更新: 重新执行同样的 curl 命令即可"
