#!/usr/bin/env node
// suanfish-design-system one-shot installer
// usage: npx github:SuanFishXYY/suanfish-design-system
//        npx -y github:SuanFishXYY/suanfish-design-system update
//        npx -y github:SuanFishXYY/suanfish-design-system uninstall

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, symlinkSync, lstatSync, unlinkSync } from 'node:fs';
import { homedir, platform } from 'node:os';
import { join } from 'node:path';

const REPO = 'https://github.com/SuanFishXYY/suanfish-design-system.git';
const NAME = 'suanfish-design-system';
const HOME = homedir();
const TARGET = process.env.SUANFISH_HOME || join(HOME, '.' + NAME);
const IS_WIN = platform() === 'win32';
const CLIS = [
  { name: 'GitHub Copilot CLI', dir: '.copilot'      },
  { name: 'Claude Code',        dir: '.claude'       },
  { name: '通用 agents 目录',    dir: '.agents'       },
  { name: 'Codex CLI',           dir: '.codex'        },
  { name: 'Gemini CLI',          dir: '.gemini'       },
  { name: 'Antigravity (Google)', dir: '.antigravity' },
];

const c = (s, code) => `\x1b[${code}m${s}\x1b[0m`;
const ok    = s => console.log(c('  ✓ ', 32) + s);
const warn  = s => console.log(c('  ⚠ ', 33) + s);
const err   = s => console.log(c('  ✗ ', 31) + s);
const info  = s => console.log(c('  · ', 90) + s);
const head  = s => console.log('\n' + c(s, '1;36'));

const sh = (cmd) => execSync(cmd, { stdio: 'inherit' });
const shq = (cmd) => execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();

function checkGit() {
  try { shq('git --version'); }
  catch { err('需要安装 git: https://git-scm.com/downloads'); process.exit(1); }
}

function cloneOrPull() {
  if (existsSync(join(TARGET, '.git'))) {
    info(`已存在 ${TARGET}, 执行 git pull`);
    try { sh(`git -C "${TARGET}" pull --ff-only --quiet`); ok('已更新到最新版'); }
    catch { warn('git pull 失败 (可能本地有改动), 跳过更新'); }
  } else {
    info(`克隆到 ${TARGET}`);
    sh(`git clone --depth=1 --quiet ${REPO} "${TARGET}"`);
    ok('克隆完成');
  }
}

function isSymlink(p) {
  try { return lstatSync(p).isSymbolicLink(); } catch { return false; }
}

function linkInto(cliDir) {
  const skillsDir = join(HOME, cliDir, 'skills');
  const link = join(skillsDir, NAME);
  mkdirSync(skillsDir, { recursive: true });

  if (existsSync(link) || isSymlink(link)) {
    if (isSymlink(link)) {
      try { unlinkSync(link); } catch {}
    } else {
      warn(`${link} 已存在且不是 symlink, 跳过 (手动删除后重试)`);
      return false;
    }
  }

  try {
    symlinkSync(TARGET, link, IS_WIN ? 'junction' : 'dir');
    return true;
  } catch (e) {
    err(`symlink 失败: ${e.message}`);
    return false;
  }
}

function unlinkFrom(cliDir) {
  const link = join(HOME, cliDir, 'skills', NAME);
  if (isSymlink(link)) {
    try { unlinkSync(link); return true; } catch { return false; }
  }
  return false;
}

function detect() {
  return CLIS.filter(cli => existsSync(join(HOME, cli.dir)));
}

function cmdInstall() {
  head('🐟 算鱼设计系统 · 一键安装');
  checkGit();
  cloneOrPull();

  head('🔌 检测已安装的 CLI');
  const found = detect();
  if (found.length === 0) {
    warn('未检测到 .copilot / .claude / .agents / .codex / .gemini / .antigravity');
    info('如已安装某 CLI 但目录名不同, 手动 symlink:');
    info(IS_WIN
      ? `  cmd /c mklink /J "<你的目录>\\skills\\${NAME}" "${TARGET}"`
      : `  ln -sf "${TARGET}" ~/<你的目录>/skills/${NAME}`);
    process.exit(0);
  }

  for (const cli of found) {
    const ok_ = linkInto(cli.dir);
    if (ok_) ok(`${cli.name.padEnd(18)} ← ~/${cli.dir}/skills/${NAME}`);
  }

  head('✅ 安装完成');
  info('试一下:');
  info('  Claude Code   →  /plugin (查看)  或  直接说 "我要做一个 dashboard"');
  info('  Copilot CLI   →  /skills');
  info('  Antigravity   →  侧边栏 skills · 或在 prompt 中 @ 调用 agent');
  info('  更新          →  npx -y github:SuanFishXYY/suanfish-design-system update');
  info('  卸载          →  npx -y github:SuanFishXYY/suanfish-design-system uninstall');
  console.log();
}

function cmdUpdate() {
  head('🔄 更新算鱼设计系统');
  checkGit();
  cloneOrPull();
  ok('完成');
}

function cmdUninstall() {
  head('🗑  卸载算鱼设计系统');
  let removed = 0;
  for (const cli of CLIS) if (unlinkFrom(cli.dir)) { ok(`已移除 ~/${cli.dir}/skills/${NAME}`); removed++; }
  if (removed === 0) warn('未发现 symlink');
  info(`仓库目录 ${TARGET} 仍保留 (手动删除: rm -rf "${TARGET}")`);
}

const arg = (process.argv[2] || 'install').toLowerCase();
({
  install:   cmdInstall,
  update:    cmdUpdate,
  upgrade:   cmdUpdate,
  uninstall: cmdUninstall,
  remove:    cmdUninstall,
}[arg] || cmdInstall)();
