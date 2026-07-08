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

# v4.2.2: 把 ~/.<cli>/skills 注册到 CLI 的 skillDirectories (移植自 install.mjs)
function Register-SkillDir($cliDir) {
  $settingsPath = Join-Path $HOME "$cliDir\settings.json"
  $skillsParent = Join-Path $HOME "$cliDir\skills"
  try {
    if (Test-Path $settingsPath) {
      $raw = Get-Content $settingsPath -Raw -Encoding UTF8
      $raw = $raw -replace '^﻿', ''
      if ($raw.Trim()) { $cfg = $raw | ConvertFrom-Json }
      else { $cfg = [PSCustomObject]@{} }
    } else { $cfg = [PSCustomObject]@{} }
    if (-not ($cfg.PSObject.Properties.Name -contains 'skillDirectories')) {
      $cfg | Add-Member -MemberType NoteProperty -Name 'skillDirectories' -Value @()
    }
    $dirs = @($cfg.skillDirectories)
    if ($dirs -notcontains $skillsParent) {
      $cfg.skillDirectories = @($dirs) + $skillsParent
      $json = $cfg | ConvertTo-Json -Depth 10
      [System.IO.File]::WriteAllText($settingsPath, $json, [System.Text.UTF8Encoding]::new($false))
      return $true
    }
    return $false
  } catch {
    Warn "无法注册到 $cliDir/settings.json: $_"
    return $false
  }
}

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
  @{ Dir = '.gemini';      Label = 'Gemini CLI' },
  @{ Dir = '.antigravity'; Label = 'Antigravity (Google)' }
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
    else {
      # v4.2.1 修: 真实目录如果为空 (空文件夹), 删除并建 junction
      $children = @(Get-ChildItem -Path $link -Force -ErrorAction SilentlyContinue)
      if ($children.Count -eq 0) {
        Remove-Item $link -Force
        Info "$link 是空目录, 已清理并将建立 junction"
      } else {
        Warn "$link exists and is not a symlink ($($children.Count) items), skip"; continue
      }
    }
  }

  try {
    New-Item -ItemType Junction -Path $link -Target $Target | Out-Null
    Ok ("{0} -> ~\{1}\skills\{2}" -f $cli.Label, $cli.Dir, $Name)
    $Linked++
    if (Register-SkillDir $cli.Dir) {
      Info "  └─ 已注册 ~\$($cli.Dir)\skills 到 settings.json skillDirectories"
    }
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
