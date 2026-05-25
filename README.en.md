<div align="center">

# 🐟 Suanfish Design System

### *The multi-agent design AI that can say "No" to your boss*

![version](https://img.shields.io/badge/version-4.1.0-blueviolet)
![thinkers](https://img.shields.io/badge/thinkers-420-9cf)
![agents](https://img.shields.io/badge/agents-48-purple)
![congress](https://img.shields.io/badge/sage_congress-3--category-yellow)
![tiers](https://img.shields.io/badge/tiers-8-orange)
![paths](https://img.shields.io/badge/paths-7-teal)
![philosophy](https://img.shields.io/badge/philosophy-3--layer-darkblue)
![ai-native](https://img.shields.io/badge/AI--native-Path%20G-ff69b4)
![rules](https://img.shields.io/badge/REJECT-R1--R25-red)
![license](https://img.shields.io/badge/license-MIT-green)
![SKILL.md](https://img.shields.io/badge/SKILL.md-standard-black)

**99% of AI assistants always say "Sure!" — this one asks "Should we even do this?" first.**

25 hard rules built in. Boss wants a 10-second brand splash every visit? Refused — predicts 4% DAU drop in 30 days.

**New in v4.1**: Tier 0 sages expand from 8 philosophers to **12 across 3 categories** (8 philosophers + 2 artists + 2 musicians). Task-type routing: visual briefs summon artists (Michelangelo / Ni Zan), motion briefs summon musicians (Bach / Cage), philosophical briefs summon philosophers, mixed briefs convene all three. Simple task = 1 sage (saves ~80% tokens). Complex task = cross-category debate + 2/3 majority vote.

```
Stakeholder: "Add a 10s brand animation on the login page, play every visit."
🛡 REJECT — R1 + R2 triggered: forced animation + high-frequency interruption.
   Predicted DAU drop ≈ 4% in 30 days. Returning to PM for re-scoping.

Stakeholder: "We need 100% AI automation AND user-controlled every step."
🛡 REJECT — R18 triggered: contradiction-without-lean (D2 has no chosen side).
   Pick a lean and define escape hatches.
```

[中文 README](./README.md) · [Quick Install](#-one-line-install) · [Why v4.1](#why-v41) · [Congress Protocol](#five-step-congress-protocol) · [5 TC Demo](docs/v4-congress-simulation.md)

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
ls ~/.copilot/skills/suanfish-design-system/agents/ | wc -l   # should print 44
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
          ① Score: silence-architect (8.5) / holism-strategist (7.85) / wuwei-master (7.65) enter
          ② Invite: Nishida / Heidegger / Whitehead / Wiener / Zhuangzi (5 helpers)
          ③ Discuss: blur dialectics (3 states) + 200ms feedback loop + dark mode auto-invert
          ④ Vote: 7/10 = 70% ≥ 67% ✓ Round 1 passes
          → 5 concrete decisions + citation audit + Path B recommendation
```

Full 5 TC demo → [docs/v4-congress-simulation.md](docs/v4-congress-simulation.md)

---

## Why v4.0?

v3.x had **"all 8 Tier 0 sages mandatorily on every BRIEF"** as bedrock.
v3.3 experimented with "let users pick fast/standard/full mode" — but **users shouldn't be forced to make that decision**.
v4.0 is the fundamental rebuild: let the 301 sages **speak for themselves**, congress decides who's relevant.

### Comparison

| Dimension | v3.0 | v3.2 | v4.0 | **v4.1** |
| --- | --- | --- | --- | --- |
| Tier 0 attendance | fixed 3 all-on | fixed 8 all-on | dynamic k of 8 (philosophers only) | **dynamic k of 12 across 3 categories** |
| Tier 0 categories | philosophy only | philosophy only | philosophy only | **philosophers + artists + musicians** |
| Task routing | none | none | none | **task_kind → category prior +0.5** |
| Decision mechanism | pipeline | pipeline | congress + vote | congress + vote (cross-category) |
| Token cost (simple BRIEF) | medium | high | ~5 calls | ~5 calls |
| Token cost (complex BRIEF) | high | very high | up to 50+ | up to 50+ |

---

## Five-Step Congress Protocol (v4.1 cross-category)

```
BRIEF
  ↓
🏛 bench-matcher · self-contained congress (5 unified steps)
  ① Route+Score — detect task_kind ∈ {visual, motion, structural, philosophical, mixed}
                  visual → +0.5 prior to artists · motion → +0.5 to musicians
                  structural/philosophical → +0.5 to philosophers
                  score 12 Tier 0 sages on 5 dims (weighted 40/20/15/15/10)
  ② Summon    — those scoring ≥7.5 enter (k sages, typically 1-4 of 12)
                  fallback: top-1 if none clear threshold
  ③ Invite    — entered sages recursively invite helpers from cross-category bench
                  (philosophers #NNN / artists #ANNN / musicians #MNNN)
                  per-sage quota 3 · total cap 15
  ④ Discuss   — all state positions → consensus merge / mediate / surface blind spots
  ⑤ Vote      — Tier 0 = 2 votes · helpers = 1 vote · ABSTAIN reduces denominator
                  ≥ ⌈total × 2/3⌉ to pass · revise & re-vote up to 3 rounds
                  3-round failure → R24 Congress-Deadlock → escalate to user
  ↓
🔍 quotation-verifier (audit all citations against 27-bench · R25)
  ↓
🧭 moment-strategist → Path A-G → ui-auditor
```

### Voting math example A · glassmorphism component (v4.0 path)

- Layer 1: Wang Bi #232 (8.7) · Fazang #249 (8.0) · Laozi #092 (7.6) enter
- Layer 2: Wang Bi → Nishida / Fazang → Heidegger / Heidegger → Wittgenstein
- N = 6 sages · total votes = 3×2 + 3×1 = 9 · threshold = ⌈9 × 2/3⌉ = 6
- Result: 7 APPROVE / 1 ABSTAIN (reduces denom to 8) / 0 REJECT → 7/8 ≥ 6 → **Round 1 passes** ✓

### Voting math example B · login success toast (v4.1 mixed)

- task_kind = mixed → all 3 categories compete
- Layer 1: Whitehead #091 (8.4) · Wang Bi #232 (7.8) · Laozi #092 (7.6) enter
- Layer 2 cross-category: Whitehead → Reich #M023 / Wang Bi → Rothko #A029 / Reich → Satie #M016
- N = 6 sages (3 philosophers + 1 artist + 2 musicians) · total votes = 3×2 + 3×1 = 9
- Result: 5 APPROVE / 1 ABSTAIN → 5/8 ≥ ⌈8 × 2/3⌉=6 → **Round 1 passes** ✓ (cross-category consensus)

---

## 📚 v4.1 · 420-Thinker Bench (3 categories · the only Chinese-philosophy-driven DS)

> 420 thinkers cataloged in `references/27-philosopher-bench.md`:
> - **Part I · 335 Philosophers** (117 Chinese + 218 Western/global, includes Don Norman / Christopher Alexander / Byung-Chul Han / 蒋勋 / 王澍 / 陈嘉映)
> - **Part II · 50 Artists** (Renaissance → Contemporary + Chinese painting, includes Leonardo / Michelangelo / Ni Zan / 陈丹青 / 木心)
> - **Part III · 35 Musicians** (Baroque → Ambient + Chinese, includes Bach / Beethoven / Cage / Brian Eno / Ryuichi Sakamoto)
>
> Each entry: one-line core idea + design-system hook.
> Any new agent / R rule **MUST anchor to ≥ 1 thinker from the bench**.

```
✅ Tier 0 deployed (v4.1, 12 sages):
   Philosophers ×8: #039 Hegel · #058 Foucault · #091 Whitehead · #056 Merleau-Ponty
                    #092 Laozi · #093 Zhuangzi · #232 Wang Bi · #249 Fazang · #225 Wang Chong
   Artists ×2:      #A002 Michelangelo (form-liberator) · #A045 Ni Zan (void-painter)
   Musicians ×2:    #M001 J.S. Bach (counterpoint-architect) · #M020 John Cage (silence-composer)

🌐 Schools covered: Pre-Socratic → Analytic → Post-structural → Pre-Qin → Neo-Confucian →
                    Modern → Contemporary design (Norman/Alexander/Rams) →
                    Renaissance/Baroque/Modern art → Baroque/Romantic/Ambient music
```

📖 **[Browse all 420 thinkers →](references/27-philosopher-bench.md)**

### Sage Network (invited_helpers field)

Each Tier 0 sage's frontmatter declares 6 disciples they can call:

| Tier 0 sage | Top invitees |
| --- | --- |
| **dialectician** (#039 Hegel) | Hume · Popper · Foucault · Arendt · Averroes · Schelling |
| **historian** (#058 Foucault) | Hegel · Arendt · Fanon · Spivak · Machiavelli · Whitehead |
| **futurist** (#091 Whitehead) | Wiener · Heidegger · Bostrom · Plotinus · Wittgenstein · Foucault |
| **wuwei-master** (#092 Laozi) | Epicurus · Diogenes · Ockham · Wang Bi · Zhuangzi · Augustine |
| **perspectivist** (#093 Zhuangzi) | Merleau-Ponty · Spivak · Fanon · Arendt · Dai Zhen · Laozi |
| **silence-architect** (#232 Wang Bi) | Nishida (ma) · Heidegger · Laozi · Wittgenstein · Augustine · Fazang |
| **holism-strategist** (#249 Fazang) | Whitehead · Wiener · Spinoza · Leibniz · Schelling · Wang Bi |
| **debunk-auditor** (#225 Wang Chong) | Popper · Hume · Bacon · Dai Zhen · Bostrom · Machiavelli |

---

## Why

If you've built products with AI assistants, you know the real problem isn't capability — it's that **they always say Yes**.

> Boss: "Add a 3D-flip popup."
> AI: "Sure, no problem."
> Boss: "Plus 8 CTAs on the home page."
> AI: "Got it."

Result? Shipped UX garbage.

**Suanfish Design System** is an opinionated multi-agent design SKILL with a **REJECT mechanism** — 25 hard rules that any agent will refuse on sight, then propose alternatives anchored to real philosophy.

As of **v2.5** Suanfish covers the entire **AI-native UI surface** — streaming, tool calls, reasoning panels, citations, artifacts, prompt input, rate-limit communication, model switchers, multi-turn thread architecture — through a **Path G overlay**.

As of **v4.1** sage selection itself is democratized across 3 categories — no more forcing all 8 philosopher-only Tier 0 sages on every BRIEF.

---

## Architecture

**44 specialized agents** organized across **8 tiers** and **7 design paths**:

| Tier | Role | Sample agents |
|------|------|---------------|
| **0 · Dialectical Philosophy** | Sage congress · scoring + summoning + voting | `dialectician` · `historian` · `futurist` · `wuwei-master` · `perspectivist` · `silence-architect` · `holism-strategist` · `debunk-auditor` |
| **1 · Dispatch** | Decide what to do · can REJECT | `moment-strategist` |
| **1.5 · Coordination** | Cross-path orchestration | `flow-coordinator` |
| **1.6 · Sage Congress** | Schedule + invite + vote | `bench-matcher` |
| **1.7 · Citation Audit** | Verify quotes against 27-bench | `quotation-verifier` |
| **2 · Lead (×4)** | One per major path | `onboarding-director` · `ui-architect` · `conversation-director` · `notification-director` |
| **3 · Container Specialist (×10)** | Build the surface | `modal` · `wizard` · `data-viz` · `table` · `chat-ui` · `stream` · `tool-call-presenter` · `agent-thread-architect` · `artifact-architect` · `prompt-input-craftsman` |
| **4 · Content Specialist (×10)** | Words · icons · states · reasoning | `copy-writer` · `icon-curator` · `empty-state` · `responsive` · `persona` · `info-architect` · `error-recovery` · `reasoning-visualizer` · `citation-keeper` · `rate-limit-communicator` |
| **5 · Crosscutting Consult (×6)** | Tokens · motion · a11y · brand · i18n · model | `token-keeper` · `animation` · `a11y-guardian` · `brand-keeper` · `i18n-strategist` · `model-switcher-stylist` |
| **6 · Quality Gate** | Independent audit · 44-agent coverage | `ui-auditor` |

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

## REJECT Rules (R1-R25)

| Family | Range | Theme |
| --- | --- | --- |
| Heuristic | R1-R6 | Forced animation · interrupt · CTA flood · first-time intrusion · destructive-no-undo · long onboarding |
| Value-tension | R7-R12 | 6 value-tension rules |
| Development laws | R13-R17 | Complexity · abstraction · control-handoff · feedback-loop · modal-fusion |
| Dialectical | R18 | Contradiction-without-lean |
| Anti-AI-bullshit | R19-R23 | Philosophy-as-Lint family |
| Congress | R24 | **Congress-Deadlock** (3-round vote failure) |
| Citation | R25 | **Anti-hallucinated-quote** (must trace to 27-bench) |

Full definitions:
- [`references/15-audit-ruleset-steady.md`](./references/15-audit-ruleset-steady.md)
- [`references/16-audit-ruleset-onboarding.md`](./references/16-audit-ruleset-onboarding.md)
- [`references/19-audit-ruleset-philosophy.md`](./references/19-audit-ruleset-philosophy.md)

---

## Honest Limitations

- 🎭 Voting is LLM-simulated, no true multi-agent runtime
- 🔢 Invitation reasons may be LLM-fabricated; `quotation-verifier` only checks numeric ID truthfulness
- 💬 "Congressional discussion" is prompt engineering, not real multi-agent debate
- 📚 We only audit against `references/27-philosopher-bench.md`, not external academic sources (Wikidata / SEP integration planned for v3.4)
- 🌊 Bench itself may have inaccuracies (e.g. hook mappings); fixes go into 27-bench, not the verifier

Still one rung more honest than v3.x's "8-sage mush."

> v4.1 expands beyond philosophers: visual tasks now also summon artists (Michelangelo / Ni Zan), motion tasks summon musicians (Bach / Cage). The "void-master triangle" (Wang Bi #232 + Ni Zan #A045 + Cage #M020) spans 3 categories to triple-check anti-excess.

---

## Philosophy

> "v3.0 wanted 8 teachers per BRIEF — but classrooms shouldn't be one-size-fits-all."
> "v4.1: consult a few experienced ones across 3 disciplines (philosophy/art/music), let them decide if they need TAs cross-category, debate it, vote."
> "Not enshrinement, but convening. Not imposition, but resolution."

**Anchored to**: Confucius (三人行必有我师 · "among any three walking, one will be my teacher") + Habermas (communicative rationality) + Arendt (public action) + Wang Chong (anti-hallucination)

---

## Links

- 🏠 Main repo: https://github.com/SuanFishXYY/suanfish-design-system
- 🏪 Marketplace: https://github.com/SuanFishXYY/suanfish-marketplace (v2.0.0)
- 🏛 Congress demo: [docs/v4-congress-simulation.md](docs/v4-congress-simulation.md)
- 📖 Chinese README: [README.md](./README.md)
- 📜 Changelog: [CHANGELOG.md](./CHANGELOG.md)

---

*MIT License · Built with rejection-first philosophy by [@SuanFishXYY](https://github.com/SuanFishXYY)*
