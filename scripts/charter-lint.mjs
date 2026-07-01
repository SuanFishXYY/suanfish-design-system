#!/usr/bin/env node
// 🎼 charter-lint · 三道门制度 + 元数据一致性 lint
// ─────────────────────────────────────────────────────────────────────────────
// 把 ref 28-30 章程里能 grep 的硬约束 + manifest/agent/规则数同步，变成机器可检。
// 仿 ui-auditor 出分级 REPORT（🟥 严重 / 🟧 警告）；🟥 > 0 时退出码非零。
//
// 这脚本是 review-orchestrator §5「制度自检指标采集」的自动化落地——
// 制度不靠人记，靠编排执行（荀子 · 隆礼重法）。
//
// 用法： node scripts/charter-lint.mjs
// 详见 CONTRIBUTING.md「改完必跑的自检」段。
// ─────────────────────────────────────────────────────────────────────────────

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SEV = { BLOCK: '🟥', WARN: '🟧' };
const findings = [];
const block = (code, msg) => findings.push({ sev: SEV.BLOCK, code, msg });
const warn = (code, msg) => findings.push({ sev: SEV.WARN, code, msg });

// ── helpers ──────────────────────────────────────────────────────────────────
const readText = (p) => fs.readFileSync(p, 'utf8');
const readJSON = (p) => JSON.parse(readText(p));
const exists = (p) => fs.existsSync(p);
const join = (...s) => path.join(ROOT, ...s);

/** 列目录下某扩展名文件（相对 ROOT 的路径） */
function listMd(dir) {
  if (!exists(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.join(dir, f));
}

/** 递归列某目录下所有 .md（相对 ROOT） */
function listMdRecursive(dir) {
  if (!exists(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listMdRecursive(full));
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

/** 解析 markdown frontmatter（不引 YAML，够用即可）。返回 {} 若无。
 *  支持 `[a.md, b.md]` 数组值 → 解析为字符串数组。 */
function frontmatter(relPath) {
  const p = join(relPath);
  if (!exists(p)) return null;
  let text = readText(p);
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1); // 吃掉 UTF-8 BOM
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!kv) continue;
    let val = kv[2].trim();
    // 数组值：[a.md, b.md] → ['a.md','b.md']
    const arr = val.match(/^\[(.*)\]$/);
    if (arr) {
      val = arr[1].split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
    }
    fm[kv[1]] = val;
  }
  return fm;
}

const rel = (p) => path.relative(ROOT, p).replace(/\\/g, '/');

// ── 加载 manifest ─────────────────────────────────────────────────────────────
const manifestPath = join('.skill-manifest.json');
if (!exists(manifestPath)) {
  console.error('✗ 找不到 .skill-manifest.json');
  process.exit(2);
}
const manifest = readJSON(manifestPath);
const M_VERSION = String(manifest.version);
const M_AGENT_COUNT = Number(manifest.agent_count);
const M_REF_COUNT = Number(manifest.reference_count);

// ════════════════════════════════════════════════════════════════════════════
// A. 元数据一致性（防 agent 数 / 规范数 / 版本号 漂移 —— v4.2.7 曾漏改多处）
// ════════════════════════════════════════════════════════════════════════════

// A1 · agents/*.md 实际文件数 == manifest.agent_count
{
  const actual = listMd('agents');
  if (actual.length !== M_AGENT_COUNT) {
    block('A1', `agents/*.md 实际 ${actual.length} 个 ≠ manifest.agent_count ${M_AGENT_COUNT}`);
  }
}

// A2 · manifest.agents[] 与实际 agents/*.md 双向对齐（无遗漏无多余）
{
  const manifestAgents = (manifest.agents || []).map((a) => a.replace(/^agents\//, ''));
  const actualAgents = listMd('agents').map((p) => path.basename(p));
  const missing = manifestAgents.filter((a) => !actualAgents.includes(a));
  const extra = actualAgents.filter((a) => !manifestAgents.includes(a));
  if (missing.length) block('A2', `manifest.agents[] 列了但文件不存在: ${missing.join(', ')}`);
  if (extra.length) block('A2', `agents/*.md 存在但 manifest 未列: ${extra.join(', ')}`);
}

// A3 · manifest.tiers.tier_6_quality_gate 列出的 agent 文件存在
{
  const t6 = manifest.tiers?.tier_6_quality_gate || [];
  for (const name of t6) {
    if (!exists(join('agents', `${name}.md`))) {
      block('A3', `tier_6_quality_gate 列出 ${name} 但 agents/${name}.md 不存在`);
    }
  }
}

// A4 · references/*.md 实际文件数 == manifest.reference_count
{
  const actual = listMd('references');
  if (actual.length !== M_REF_COUNT) {
    block('A4', `references/*.md 实际 ${actual.length} 个 ≠ manifest.reference_count ${M_REF_COUNT}`);
  }
}

// A5 · 全库 prose 当前态数字漂移（CONTRIBUTING.md:76 那条手工 grep 的自动升级版）
//    扫描 README/SKILL/CONTRIBUTING/docs/.github 里的「N agent / N 位匠人 / N 份规范 / version-x.y.z」
//    当前态数字 ≠ manifest 当前值 = 🟥 drift。
//    精度：行级排除「历史叙述」（v1-v3 / 历史图）与「子集语义」（哲学锚点 / 案例库 / 各 N 正反 /
//    主审 agent）——这些行的 N agent 指历史值或子集数，非当前总 agent 数，不报。
{
  const targets = [
    ...['README.md', 'README.en.md', 'README.dev.md', 'SKILL.md', 'CONTRIBUTING.md'].map((f) => join(f)),
    ...listMdRecursive('docs'),
    ...listMdRecursive('.github'),
  ];
  // 模式 → 期望值（来自 manifest）
  const patterns = [
    { re: /(\d+)\s*个\s*agent/g, want: M_AGENT_COUNT, label: 'N 个 agent' },
    { re: /(\d+)\s+agent\b(?!s)/g, want: M_AGENT_COUNT, label: 'N agent' },          // 54 agent（非 agents）
    { re: /(\d+)-agent\b/g, want: M_AGENT_COUNT, label: 'N-agent' },                 // 54-agent coverage
    { re: /(\d+)\s*specialized\s+agents?/gi, want: M_AGENT_COUNT, label: 'N specialized agents' },
    { re: /(\d+)\s*位\s*(?:匠人|[Aa]gent)/g, want: M_AGENT_COUNT, label: 'N 位匠人/agent' },
    { re: /(\d+)\s*agents?\s*total/gi, want: M_AGENT_COUNT, label: 'N agents total' },
    { re: /should\s+print\s+(\d+)/g, want: M_AGENT_COUNT, label: 'wc -l should print N' },
    { re: /(\d+)\s*份\s*规范/g, want: M_REF_COUNT, label: 'N 份规范' },
    { re: /version-(\d+\.\d+\.\d+)/g, want: M_VERSION, label: 'version-x.y.z badge' },
  ];
  // 行级排除：命中任一则跳过整行（这些行的数字是历史值或子集数，非当前总数）
  const skipLine = (line) =>
    /grep\s+-rn/.test(line) ||                                              // 自检 grep 行本身（含待查陈旧串，合法）
    /v[1-3](?:\.\d)?\b|历史(?:图|架构|段|表|版本)|v3\s*时代/.test(line) ||   // 历史叙述（v1-v3 / 历史图 · v4 不排）
    /哲学锚点|案例库|各\s*\d+\s*[正反]|主审\s*[Aa]gent|该维主审|位主审/.test(line); // 子集语义（非总 agent 数）
  for (const file of targets) {
    if (!exists(file)) continue;
    const lines = readText(file).split(/\r?\n/);
    lines.forEach((line, i) => {
      if (skipLine(line)) return;
      for (const { re, want, label } of patterns) {
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(line)) !== null) {
          const got = m[1];
          if (String(got) !== String(want)) {
            block('A5', `${rel(file)}:${i + 1} 「${label}」= ${got} ≠ manifest ${want}　│ ${line.trim().slice(0, 80)}`);
          }
        }
      }
    });
  }
}

// A6 · package.json version == manifest version
{
  const pkgPath = join('package.json');
  if (exists(pkgPath)) {
    const pkg = readJSON(pkgPath);
    if (String(pkg.version) !== M_VERSION) {
      block('A6', `package.json version ${pkg.version} ≠ manifest version ${M_VERSION}`);
    }
  }
}

// ════════════════════════════════════════════════════════════════════════════
// B. 章程 frontmatter 契约（ref 28-30 同步字段 / ref 15-16 同步字段）
// ════════════════════════════════════════════════════════════════════════════

// B1 · ref 28/29/30 必含 charter_version + bound_to_ruleset_version
for (const refFile of ['28-content-review-charter.md', '29-remediation-loop-charter.md', '30-posthoc-governance-charter.md']) {
  const fm = frontmatter(`references/${refFile}`);
  if (fm == null) { block('B1', `references/${refFile} 不存在`); continue; }
  for (const key of ['charter_version', 'bound_to_ruleset_version']) {
    if (!fm[key]) block('B1', `references/${refFile} frontmatter 缺 ${key}`);
  }
}

// B2 · ref 15/16 必含 ruleset_version + bound_to_token_version
for (const refFile of ['15-audit-ruleset-steady.md', '16-audit-ruleset-onboarding.md']) {
  const fm = frontmatter(`references/${refFile}`);
  if (fm == null) { block('B2', `references/${refFile} 不存在`); continue; }
  for (const key of ['ruleset_version', 'bound_to_token_version']) {
    if (!fm[key]) block('B2', `references/${refFile} frontmatter 缺 ${key}`);
  }
}

// B2b · ref 15/16 的 bound_to_token_version 不得悬空 —— 指向的 ref 01 必须有 version 可对
//      ref 01 当前是占位模板无 version → 此契约悬空（与 B3 同源，但角度不同：
//      B3 报源文档缺版本，B2b 报引用方契约悬空。修法不同故分别报。）
//      扩展：ref 01 有 version 时，再检 bound_to_token_version 是否 == ref 01 version（版本号漂移）。
{
  const ref01Fm = frontmatter('references/01-design-tokens.md');
  const ref01Version = ref01Fm && ref01Fm.version;
  for (const refFile of ['15-audit-ruleset-steady.md', '16-audit-ruleset-onboarding.md']) {
    const fm = frontmatter(`references/${refFile}`);
    if (!fm || !fm.bound_to_token_version) continue;
    if (!ref01Version) {
      warn('B2b', `references/${refFile} bound_to_token_version=${fm.bound_to_token_version} 悬空 → 指向的 references/01-design-tokens.md 无 version 字段，契约无法兑现。`);
    } else if (fm.bound_to_token_version !== ref01Version) {
      block('B2b', `references/${refFile} bound_to_token_version=${fm.bound_to_token_version} ≠ ref 01 version=${ref01Version} → 规则集与令牌库版本脱节，审计应输出 RULESET_OUT_OF_SYNC（ref 15 契约）。须同步。`);
    }
  }
}

// B3 · ref 01 必须有 version（防退化哨兵 · ref 01 已填实为真令牌库 v1.0.0）
//    若被改回无 version / 占位态 → B2b+B3 重新报警，防 token 契约再次悬空。
{
  const fm = frontmatter('references/01-design-tokens.md');
  if (!fm || !fm.version) {
    block('B3', 'references/01-design-tokens.md 丢失 version frontmatter → ref 15/16 bound_to_token_version 契约悬空。ref 01 已于 v4.2.7 填实为真令牌库，不得退化回占位。');
  }
}

// ════════════════════════════════════════════════════════════════════════════
// C. agent references 悬空检测（agent 声明"按 ref X 出 SPEC"，ref X 含占位符 = 承诺悬空）
//    与 ref 01 同类问题：02-14 + patterns 非纯占位（有真实数据骨架，占位符 1-28%），
//    但 agent frontmatter references: 把它们列为正式依赖 → 占位部分 = 依赖悬空。
//    🟧 警告（不阻断，因部分内容真实；但必须可见可追踪）。
// ════════════════════════════════════════════════════════════════════════════
const PLACEHOLDER = /说明：本条描述/;
// 预扫各 ref 占位符行数，缓存（C1/C2 共用）
const refPlaceholderCount = {};
for (const f of listMd('references')) {
  refPlaceholderCount[path.basename(f)] = (readText(f).match(new RegExp(PLACEHOLDER.source, 'g')) || []).length;
}
{
  for (const agentFile of listMd('agents')) {
    const fm = frontmatter(`agents/${path.basename(agentFile)}`);
    if (!fm || !Array.isArray(fm.references)) continue;
    for (const ref of fm.references) {
      // ref 形如 "07-modal-system.md" 或带路径；取 basename 查
      const base = path.basename(ref);
      const cnt = refPlaceholderCount[base];
      if (cnt > 0) {
        warn('C1', `agents/${path.basename(agentFile)} references:${ref} 含 ${cnt} 处占位符（"说明：本条描述"）→ 该 agent 声明按此 ref 出 SPEC，但 ref 部分内容悬空。`);
      }
    }
  }
}

// C2 · agent 正文 prose 引用占位 ref（补 C1 盲区：frontmatter references 没列但正文提了）
//    如 ui-architect 正文 "见 references/05-icon-sidebar" 但没进 frontmatter。
{
  for (const agentFile of listMd('agents')) {
    const base = path.basename(agentFile);
    const text = readText(agentFile);
    // 找正文引用的 references/XX-*.md 或 component/interaction-patterns.md / steps-schema.md
    const refMatches = text.matchAll(/references\/([a-z0-9-]+\.md)/gi);
    const referenced = new Set();
    for (const m of refMatches) referenced.add(m[1]);
    // 也查 frontmatter 已列的（避免与 C1 重复报）
    const fm = frontmatter(`agents/${base}`);
    const fmSet = new Set((Array.isArray(fm?.references) ? fm.references : []).map((r) => path.basename(r)));
    for (const ref of referenced) {
      if (fmSet.has(ref)) continue; // C1 已覆盖
      const cnt = refPlaceholderCount[ref];
      if (cnt > 0) {
        warn('C2', `agents/${base} 正文引用 references/${ref}（未进 frontmatter references）含 ${cnt} 处占位符 → prose 依赖悬空。建议补进 frontmatter 或填实 ref。`);
      }
    }
  }
}

// ════════════════════════════════════════════════════════════════════════════
// D. ref 间引用网络校验（防断链 · ref 48 推演链每步可追溯的机器保障）
//    扫描每份 ref 正文 "ref N" 引用，N 必须对应一份有 frontmatter ref: 的文件。
//    哲学层 ref (00/17/18/19/24/25/26/27) 曾无 frontmatter 致 28 条假断链，已修。
// ════════════════════════════════════════════════════════════════════════════
{
  // 建 ref编号 → 文件名 映射（仅有 frontmatter ref: 字段的）
  const refMap = {};
  for (const f of listMd('references')) {
    const fm = frontmatter(`references/${path.basename(f)}`);
    if (fm && fm.ref) refMap[fm.ref] = path.basename(f);
  }
  // 扫描每份 ref 正文 "ref N" 引用
  for (const f of listMd('references')) {
    const base = path.basename(f);
    const text = readText(f);
    const seen = new Set();
    for (const m of text.matchAll(/ref\s+(\d+)/g)) {
      const num = m[1];
      if (seen.has(num)) continue; // 同一 ref 重复引用只报一次
      seen.add(num);
      if (!refMap[num]) {
        block('D1', `references/${base} 引用 ref ${num} 但无对应 frontmatter ref: 文件 → 推演链断链。`);
      }
    }
  }
}

// ════════════════════════════════════════════════════════════════════════════
// C. 输出 REPORT（仿 ui-auditor 分级）
// ════════════════════════════════════════════════════════════════════════════
const blocks = findings.filter((f) => f.sev === SEV.BLOCK);
const warns = findings.filter((f) => f.sev === SEV.WARN);

console.log('');
console.log('🎼 CHARTER-LINT REPORT · 三道门制度 + 元数据一致性 lint');
console.log('─'.repeat(72));
console.log(`  manifest: v${M_VERSION} · agents ${M_AGENT_COUNT} · references ${M_REF_COUNT}`);
console.log('─'.repeat(72));

if (findings.length === 0) {
  console.log('✅ 零漂移 · 制度元数据与 manifest 全量同步 · 章程 frontmatter 契约齐全。');
} else {
  for (const f of blocks) console.log(`${f.sev} [${f.code}] ${f.msg}`);
  for (const f of warns) console.log(`${f.sev} [${f.code}] ${f.msg}`);
  console.log('─'.repeat(72));
  console.log(`合计: ${blocks.length} 🟥 严重 / ${warns.length} 🟧 警告`);
}

const exitCode = blocks.length > 0 ? 1 : 0;
if (exitCode) {
  console.log('');
  console.log('⛔ 存在 🟥 严重漂移 —— 见上。修完重跑 `node scripts/charter-lint.mjs`。');
}
console.log('');
process.exit(exitCode);
