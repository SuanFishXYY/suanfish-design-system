<div align="center">

# 🐟 Suanfish Design System

### *The multi-agent design AI that can say "No" to your boss*

![version](https://img.shields.io/badge/version-4.2.6-blueviolet)
![thinkers](https://img.shields.io/badge/thinkers-420-9cf)
![agents](https://img.shields.io/badge/agents-52-purple)
![congress](https://img.shields.io/badge/sage_congress-3--category-yellow)
![tiers](https://img.shields.io/badge/tiers-8-orange)
![paths](https://img.shields.io/badge/paths-7-teal)
![philosophy](https://img.shields.io/badge/philosophy-3--layer-darkblue)
![ai-native](https://img.shields.io/badge/AI--native-Path%20G-ff69b4)
![rules](https://img.shields.io/badge/rules-R1--R25%20%2B%20R--Cross1--4-red)
![license](https://img.shields.io/badge/license-MIT-green)
![SKILL.md](https://img.shields.io/badge/SKILL.md-standard-black)

**99% of AI assistants always say "Sure!" — this one asks "Should we even do this?" first.**

25 hard rules plus 4 cross-category anchors built in. Boss wants a 10-second brand splash every visit? Refused — predicts 4% DAU drop in 30 days.

**New in v4.2**: Tier 0 is rebalanced from v4.1's philosopher-heavy 8:2:2 into a strict **4:4:4 equal-voice council** (4 philosophers + 4 artists + 4 musicians). User-declared task_kind routes first (LLM inference only as fallback), category matches add +0.5, reductive [-] and additive [+] voices debate inside the council, no single sage gets veto power, and R-Cross1-4 anchors art/music rules.

```
Stakeholder: "Add a 10s brand animation on the login page, play every visit."
🛡 REJECT — R1 + R2 triggered: forced animation + high-frequency interruption.
   Predicted DAU drop ≈ 4% in 30 days. Returning to PM for re-scoping.

Stakeholder: "We need 100% AI automation AND user-controlled every step."
🛡 REJECT — R18 triggered: contradiction-without-lean (D2 has no chosen side).
   Pick a lean and define escape hatches.
```

[中文 README](./README.md) · [Quick Install](#-one-line-install) · [Why v4.2](#why-v42) · [Congress Protocol](#five-step-congress-protocol-v42--444) · [5 TC Demo](docs/v4.2-congress-simulation.md)

</div>

---

## ⚡ One-line Install

> Auto-detects which CLIs you have (`.copilot` / `.claude` / `.agents` / `.codex` / `.gemini`), auto-symlinks, supports `update` / `uninstall`.

### 🚀 Method 0 · One liner (recommended · cross-platform)

```bash
# Anywhere with Node 18+ (Mac / Linux / Windows / WSL)
npx -y github:SuanFishXYY/suanfish-design-system
```

```bash
# Mac / Linux (no Node required)
curl -sSL https://raw.githubusercontent.com/SuanFishXYY/suanfish-design-system/main/installer/install.sh | bash
```

```powershell
# Windows PowerShell (no Node required)
iwr -useb https://raw.githubusercontent.com/SuanFishXYY/suanfish-design-system/main/installer/install.ps1 | iex
```

Lifecycle:

```bash
npx -y github:SuanFishXYY/suanfish-design-system update      # pull latest
npx -y github:SuanFishXYY/suanfish-design-system uninstall   # remove all symlinks
```

### Method A · Claude Code Plugin Marketplace

```bash
# Inside Claude Code
/plugin marketplace add SuanFishXYY/suanfish-marketplace
/plugin install suanfish-design-system
```

### Method B · Manual git clone + symlink

<details>
<summary>Expand for manual steps</summary>

```bash
git clone https://github.com/SuanFishXYY/suanfish-design-system.git ~/.suanfish-design-system
ln -sf ~/.suanfish-design-system ~/.copilot/skills/suanfish-design-system   # GitHub Copilot CLI
ln -sf ~/.suanfish-design-system ~/.claude/skills/suanfish-design-system    # Claude Code
ln -sf ~/.suanfish-design-system ~/.codex/skills/suanfish-design-system     # Codex CLI
ln -sf ~/.suanfish-design-system ~/.agents/skills/suanfish-design-system    # Generic
ls ~/.copilot/skills/suanfish-design-system/agents/ | wc -l   # should print 52
```

On Windows PowerShell use `New-Item -ItemType Junction` instead of `ln -sf`.

</details>

### How to trigger

Just talk to your AI normally. **Auto-activates** on keywords like:

> UI · design · component · animation · copywriting · a11y · modal · onboarding · dashboard · chart · chat · notification · mobile · AI assistant interface

### Example BRIEF → Congress flow

```
You: "Design a glassmorphism data card for an enterprise dashboard."

Suanfish: 🏛 Convening congress...
          ① Score: silence-architect (8.5) / holism-strategist (7.85) / light-impressionist (7.7) enter
          ② Invite: Nishida / Heidegger / Da Vinci / Bach / Brian Eno (5 helpers)
          ③ Discuss: blur dialectics (structure + light + ambient feedback) + dark mode auto-invert
          ④ Vote: 7/10 = 70% ≥ 67% ✓ Round 1 passes
          → 5 concrete decisions + citation audit + Path B recommendation
```

Full 5 TC demo → [docs/v4.2-congress-simulation.md](docs/v4.2-congress-simulation.md)

---

## Why v4.2?

v3.x had **"all 8 Tier 0 sages mandatorily on every BRIEF"** as bedrock.
v3.3 experimented with "let users pick fast/standard/full mode" — but **users shouldn't be forced to make that decision**.
v4.0 rebuilt the system around congress democracy: let the bench **speak for itself**, and let voting decide who's relevant.
v4.1 then expanded beyond philosophers but stayed philosopher-heavy (**8:2:2**). v4.2 fixes that drift: **strict 4:4:4 equal democracy** across philosophy / art / music, with a built-in reductive [-] ↔ additive [+] dialectic and no single-sage veto.

### Comparison

| Dimension | v3.0 | v3.2 | v4.0 | v4.1 | **v4.2** |
| --- | --- | --- | --- | --- | --- |
| Tier 0 attendance | fixed 3 all-on | fixed 8 all-on | dynamic k of 8 (philosophers only) | dynamic k of 12, but 8:2:2 | **dynamic k of 12, strict 4:4:4** |
| Tier 0 categories | philosophy only | philosophy only | philosophy only | philosophy + art + music | **4 philosophers + 4 artists + 4 musicians** |
| Voice balance | philosopher-led | philosopher-led | philosopher-only | philosopher-heavy | **equal weight, 2 votes each** |
| Task routing | none | none | none | LLM-inferred task_kind | **user-declared task_kind first; LLM fallback only** |
| Dialectic | implicit | implicit | philosopher-only | cross-category but lopsided | **reductive [-] ↔ additive [+] built in** |
| Veto model | pipeline gate | pipeline gate | congress vote | silence-composer could over-reject | **no single veto; ≥2/3 weighted vote** |
| Token cost (simple BRIEF) | medium | high | ~5 calls | ~5 calls | ~5 calls |
| Token cost (complex BRIEF) | high | very high | up to 50+ | up to 50+ | up to 50+ |

---

## Five-Step Congress Protocol (v4.2 · 4:4:4)

```
BRIEF
  ↓
🏛 bench-matcher · self-contained congress (5 unified steps)
  ① Route+Score — user-declared task_kind first; LLM inference only as fallback
                  task_kind ∈ {visual, motion, structural, philosophical, mixed}
                  visual → +0.5 to artists · motion → +0.5 to musicians
                  structural/philosophical → +0.5 to philosophers (cap 2.5 voting weight)
                  score all 12 Tier 0 sages (strict 4:4:4) on 5 dims (40/20/15/15/10)
  ② Summon    — those scoring ≥7.5 enter (k sages, typically 1-4 of 12)
                  fallback: top-1 if none clear threshold
  ③ Invite    — entered sages recursively invite helpers from cross-category bench
                  (philosophers #NNN / artists #ANNN / musicians #MNNN)
                  per-sage quota 3 · total cap 15
  ④ Discuss   — all state positions → consensus merge / mediate / surface blind spots
  ⑤ Vote      — Tier 0 = 2 votes (+0.5 category match, cap 2.5) · helpers = 1 vote
                  ABSTAIN reduces denominator · ≥ ⌈total × 2/3⌉ to pass
                  no single sage gets veto power · revise & re-vote up to 3 rounds
                  3-round failure → R24 Congress-Deadlock → escalate to user
  ↓
🔍 quotation-verifier (audit all citations against 27-bench · R25)
  ↓
🧭 moment-strategist → Path A-G → ui-auditor
```

### Voting math example A · glassmorphism component (v4.2 structural)

- User-declared task_kind = structural → philosophers get +0.5 category-match cap
- Layer 1: Wang Bi #232 (8.7) · Fazang #249 (8.0) · Monet #A019 (7.7) enter
- Layer 2: Wang Bi → Nishida / Fazang → Heidegger / Monet → Rothko
- N = 6 sages · total votes = 2.5 + 2.5 + 2 + 3×1 = 10 · threshold = ⌈10 × 2/3⌉ = 7
- Result: 7 APPROVE / 1 ABSTAIN (reduces denom to 9) / 0 REJECT → 7/9 ≥ ⌈9 × 2/3⌉=6 → **Round 1 passes** ✓

### Voting math example B · login success toast (v4.2 mixed)

- task_kind = mixed → all 3 categories compete without category prior
- Layer 1: Beethoven #M005 (8.4) · Wang Bi #232 (7.8) · Da Vinci #A001 (7.6) enter
- Layer 2 cross-category: Beethoven → Reich #M023 / Wang Bi → Ni Zan #A045 / Da Vinci → Bach #M001
- N = 6 sages (1 philosopher + 2 artists + 3 musicians) · total votes = 3×2 + 3×1 = 9
- Result: 6 APPROVE / 1 ABSTAIN → 6/8 ≥ ⌈8 × 2/3⌉=6 → **Round 1 passes** ✓ (cross-category consensus)

---

## 📚 v4.2 · 420-Thinker Bench (335 philosophers + 50 artists + 35 musicians)

> 420 thinkers cataloged in `references/27-philosopher-bench.md`:
> - **Part I · 335 Philosophers** (117 Chinese + 218 Western/global, includes Don Norman / Christopher Alexander / Byung-Chul Han / 蒋勋 / 王澍 / 陈嘉映)
> - **Part II · 50 Artists** (Renaissance → Contemporary + Chinese painting, includes Leonardo / Michelangelo / Ni Zan / 陈丹青 / 木心)
> - **Part III · 35 Musicians** (Baroque → Ambient + Chinese, includes Bach / Beethoven / Cage / Brian Eno / Ryuichi Sakamoto)
>
> Each entry: one-line core idea + design-system hook.
> Any new agent / R rule **MUST anchor to ≥ 1 thinker from the bench**.

```
✅ Tier 0 deployed (v4.2, 12 sages · 4:4:4 strict balance):
   Philosophers ×4:  #039 Hegel (dialectician) · #232 Wang Bi (silence-architect)
                     #249 Fazang (holism-strategist) · #225 Wang Chong (debunk-auditor)
   Artists ×4:       #A001 Leonardo da Vinci ⭐ (polymath-bridger · cross-disciplinary [+])
                     #A002 Michelangelo (form-liberator · reductive [-])
                     #A019 Claude Monet (light-impressionist · color revolution [+])
                     #A045 Ni Zan (void-painter · Chinese void [-])
   Musicians ×4:     #M001 J.S. Bach (counterpoint-architect · structure [~])
                     #M005 Beethoven ⭐ (tension-composer · emotional climax [+])
                     #M020 John Cage (silence-composer · 4'33" [-] · NO single-veto)
                     #M025 Brian Eno (ambient-architect · generative companion [~])

🔁 Once Tier-0 seeds (v4.2.6 default-seed council, no longer fixed): all 420 thick
   thinkers compete by task-kind score; #058 Foucault · #091 Whitehead ·
   #092 Laozi · #093 Zhuangzi now run for council like everyone else

🎭 v4.2 dialectic built-in: [-] reductive trio (Wang Bi/Ni Zan/Cage)
                          ⟷ [+] additive trio (Da Vinci/Monet/Beethoven)
   Music three-gradient: Cage (silence) ↔ Eno (ambient) ↔ Beethoven (climax)

🌐 Schools covered: Pre-Socratic → Analytic → Post-structural → Pre-Qin → Neo-Confucian →
                    Modern → Contemporary design (Norman/Alexander/Rams) →
                    Renaissance/Baroque/Modern art → Baroque/Romantic/Ambient music
```

📖 **[Browse all 420 thinkers →](references/27-philosopher-bench.md)**

### Sage Network (invited_helpers field)

This is the helper-invitation network, **not** the council roster. Since v4.2.6 the council is **dynamically elected** from the whole 420-thinker bench (the 12 seats above are default seeds / anchors / tie-breakers, not a fixed roster). The four formerly-demoted philosophers now compete for council like everyone else. Only rows with real frontmatter `invited_helpers` are listed here; no artist/musician invitees are invented.

| Status | Sage / helper agent | Top invitees declared in frontmatter |
| --- | --- | --- |
| **Tier 0 philosopher** | **dialectician** (#039 Hegel) | Hume · Popper · Averroes · Da Vinci · Beethoven · Goya |
| **Tier 0 philosopher** | **silence-architect** (#232 Wang Bi) | Nishida (ma) · Heidegger · Fazang · Ni Zan · Cage · Brian Eno |
| **Tier 0 philosopher** | **holism-strategist** (#249 Fazang) | Whitehead · Wiener · Wang Bi · Da Vinci · Bach · Brian Eno |
| **Tier 0 philosopher** | **debunk-auditor** (#225 Wang Chong) | Popper · Hume · Bacon · Da Vinci · Michelangelo · Bach |
| **Formerly demoted (now competes)** | **historian** (#058 Foucault) | Hegel · Arendt · Fanon · Spivak · Machiavelli · Whitehead |
| **Formerly demoted (now competes)** | **futurist** (#091 Whitehead) | Wiener · Heidegger · Bostrom · Plotinus · Wittgenstein · Foucault |
| **Formerly demoted (now competes)** | **wuwei-master** (#092 Laozi) | Epicurus · Diogenes · Ockham · Wang Bi · Zhuangzi · Augustine |
| **Formerly demoted (now competes)** | **perspectivist** (#093 Zhuangzi) | Merleau-Ponty · Spivak · Fanon · Arendt · Dai Zhen · Laozi |

---

## Why

If you've built products with AI assistants, you know the real problem isn't capability — it's that **they always say Yes**.

> Boss: "Add a 3D-flip popup."
> AI: "Sure, no problem."
> Boss: "Plus 8 CTAs on the home page."
> AI: "Got it."

Result? Shipped UX garbage.

**Suanfish Design System** is an opinionated multi-agent design SKILL with a **REJECT mechanism** — R1-R25 plus R-Cross1-4 anchors that agents can refuse on sight, then propose alternatives anchored to real philosophy.

As of **v2.5** Suanfish covers the entire **AI-native UI surface** — streaming, tool calls, reasoning panels, citations, artifacts, prompt input, rate-limit communication, model switchers, multi-turn thread architecture — through a **Path G overlay**.

As of **v4.2** sage selection is democratized across 3 equal categories — 4 philosophers + 4 artists + 4 musicians, equal-weight, no single veto.

---

## Architecture

**52 specialized agents** organized across **8 tiers** and **7 design paths**:

| Tier | Role | Sample agents |
|------|------|---------------|
| **0 · 4:4:4 Sage Council** | 12-sage congress · scoring + summoning + voting | 4 philosophers (`dialectician` · `silence-architect` · `holism-strategist` · `debunk-auditor`) + 4 artists + 4 musicians |
| **1 · Dispatch** | Decide what to do · can REJECT | `moment-strategist` |
| **1.5 · Coordination** | Cross-path orchestration | `flow-coordinator` |
| **1.6 · Sage Congress** | Schedule + invite + vote | `bench-matcher` |
| **1.7 · Citation Audit** | Verify quotes against 27-bench | `quotation-verifier` |
| **2 · Lead (×4)** | One per major path | `onboarding-director` · `ui-architect` · `conversation-director` · `notification-director` |
| **3 · Container Specialist (×10)** | Build the surface | `modal` · `wizard` · `data-viz` · `table` · `chat-ui` · `stream` · `tool-call-presenter` · `agent-thread-architect` · `artifact-architect` · `prompt-input-craftsman` |
| **4 · Content Specialist (×10)** | Words · icons · states · reasoning | `copy-writer` · `icon-curator` · `empty-state` · `responsive` · `persona` · `info-architect` · `error-recovery` · `reasoning-visualizer` · `citation-keeper` · `rate-limit-communicator` |
| **5 · Crosscutting Consult (×6)** | Tokens · motion · a11y · brand · i18n · model | `token-keeper` · `animation` · `a11y-guardian` · `brand-keeper` · `i18n-strategist` · `model-switcher-stylist` |
| **6 · Quality Gate** | Independent audit · 52-agent coverage | `ui-auditor` · `sage-council` |

### 7 design paths

| Code | Path | Lead |
|------|------|------|
| A | Ceremonial (first-impression rituals) | `onboarding-director` |
| B | Steady (daily ops / dashboards) | `ui-architect` |
| C | Conversational (chat / agent UI) | `conversation-director` |
| D | Notification (alerts / toasts) | `notification-director` |
| E | Mobile (touch-first) | `ui-architect` + `responsive-strategist` |
| F | Embedded (widget / iframe) | `ui-architect` (variant) |
| **G** | **AI-native overlay** *(v2.5)* | `conversation-director` overlays C/B/F |

---

## REJECT Rules (R1-R25 + R-Cross1-4)

| Family | Range | Theme |
| --- | --- | --- |
| Heuristic | R1-R6 | Forced animation · interrupt · CTA flood · first-time intrusion · destructive-no-undo · long onboarding |
| Value-tension | R7-R12 | 6 value-tension rules |
| Development laws | R13-R17 | Complexity · abstraction · control-handoff · feedback-loop · modal-fusion |
| Dialectical | R18 | Contradiction-without-lean |
| Anti-AI-bullshit | R19-R23 | Philosophy-as-Lint family |
| Congress | R24 | **Congress-Deadlock** (3-round vote failure) |
| Citation | R25 | **Anti-hallucinated-quote** (must trace to 27-bench) |
| Cross-category | R-Cross1-R-Cross4 | Da Vinci cross-disciplinary · Monet sensory completeness · Beethoven emotional tension · Eno ambient companionship |

Full definitions:
- [`references/15-audit-ruleset-steady.md`](./references/15-audit-ruleset-steady.md)
- [`references/16-audit-ruleset-onboarding.md`](./references/16-audit-ruleset-onboarding.md)
- [`references/19-audit-ruleset-philosophy.md`](./references/19-audit-ruleset-philosophy.md)

---

## Honest Limitations

- 🎭 Voting is LLM-simulated, no true multi-agent runtime
- 🔢 Invitation reasons may be LLM-fabricated; `quotation-verifier` only checks numeric ID truthfulness
- 💬 "Congressional discussion" is prompt engineering, not real multi-agent debate
- 📚 We only audit against `references/27-philosopher-bench.md`, not external academic sources (Wikidata / SEP integration remains future work)
- 🌊 Bench itself may have inaccuracies (e.g. hook mappings); fixes go into 27-bench, not the verifier

Still one rung more honest than v3.x's fixed all-on council — and v4.2 fixes v4.1's philosopher-heavy 8:2:2 drift.

> v4.2 balances the council at 4:4:4: visual tasks can summon artists (Da Vinci / Michelangelo / Monet / Ni Zan), motion tasks can summon musicians (Bach / Beethoven / Cage / Eno), and all categories vote as equals. The "void-master triangle" (Wang Bi #232 + Ni Zan #A045 + Cage #M020) now debates against additive voices (Da Vinci / Monet / Beethoven) instead of owning a veto.

---

## Philosophy

> "v3.0 wanted 8 teachers per BRIEF — but classrooms shouldn't be one-size-fits-all."
> "v4.2: convene a strict 4:4:4 council across philosophy/art/music, then let relevant sages invite helpers, debate, and vote."
> "Not enshrinement, but convening. Not a single veto, but democratic resolution."

**Anchored to**: Confucius (三人行必有我师 · "among any three walking, one will be my teacher") + Habermas (communicative rationality) + Arendt (public action) + Wang Chong (anti-hallucination)

---

## Links

- 🏠 Main repo: https://github.com/SuanFishXYY/suanfish-design-system
- 🏪 Marketplace: https://github.com/SuanFishXYY/suanfish-marketplace (v2.0.0)
- 🏛 Congress demo: [docs/v4.2-congress-simulation.md](docs/v4.2-congress-simulation.md)
- 📖 Chinese README: [README.md](./README.md)
- 📜 Changelog: [CHANGELOG.md](./CHANGELOG.md)

---

*MIT License · Built with rejection-first philosophy by [@SuanFishXYY](https://github.com/SuanFishXYY)*
