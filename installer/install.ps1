# 算鱼设计系统 · 一键安装 (Windows PowerShell)
# usage: iwr -useb https://raw.githubusercontent.com/SuanFishXYY/suanfish-design-system/main/installer/install.ps1 | iex
$ErrorActionPreference = 'Stop'

$Repo   = 'https://github.com/SuanFishXYY/suanfish-design-system.git'
$Name   = 'suanfish-design-system'
$Target = if ($env:SUANFISH_HOME) { $env:SUANFISH_HOME } else { Join-Path $HOME ".$Name" }

function Cyan($s) { Write-Host $s -ForegroundColor Cyan }
function Ok($s)   { Write-Host "  $([char]0x2713) $s" -ForegroundColor Green }
function Info($s) { Write-Host "  - $s" -ForegroundColor DarkGray }
function Warn($s) { Write-Host "  $([char]0x26A0) $s" -ForegroundColor Yellow }
function Err($s)  { Write-Host "  $([char]0x2717) $s" -ForegroundColor Red }

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Err '需要 git: https://git-scm.com/download/win'; exit 1
}

Cyan "`n🐟 算鱼设计系统 · 一键安装"

if (Test-Path (Join-Path $Target '.git')) {
  Info "已存在 $Target, git pull"
  try { git -C $Target pull --ff-only --quiet | Out-Null; Ok '已更新' }
  catch { Warn 'pull 失败, 跳过' }
} else {
  Info "克隆到 $Target"
  git clone --depth=1 --quiet $Repo $Target
  Ok '克隆完成'
}

Cyan "`n🔌 检测 CLI"
$CLIs = @(
  @{ Dir = '.copilot'; Label = 'GitHub Copilot CLI' },
  @{ Dir = '.claude';  Label = 'Claude Code' },
  @{ Dir = '.agents';  Label = '通用 agents 目录' },
  @{ Dir = '.codex';   Label = 'Codex CLI' },
  @{ Dir = '.gemini';  Label = 'Gemini CLI' }
)
$Linked = 0
foreach ($cli in $CLIs) {
  $cliRoot = Join-Path $HOME $cli.Dir
  if (-not (Test-Path $cliRoot)) { continue }
  $skillsDir = Join-Path $cliRoot 'skills'
  if (-not (Test-Path $skillsDir)) { New-Item -ItemType Directory -Path $skillsDir | Out-Null }
  $link = Join-Path $skillsDir $Name

  if (Test-Path $link) {
    $item = Get-Item $link -Force
    if ($item.LinkType) { Remove-Item $link -Force }
    else { Warn "$link exists and is not a symlink, skip"; continue }
  }

  try {
    New-Item -ItemType Junction -Path $link -Target $Target | Out-Null
    Ok ("{0} -> ~\{1}\skills\{2}" -f $cli.Label, $cli.Dir, $Name)
    $Linked++
  } catch {
    Err "symlink failed: $_"
  }
}

if ($Linked -eq 0) {
  Warn '未检测到任何 CLI 目录'
  Info "手动: cmd /c mklink /J `"<your-dir>\skills\$Name`" `"$Target`""
}

Cyan "`n✅ 完成"
Info '更新: 重新执行同样的 iwr 命令即可'
