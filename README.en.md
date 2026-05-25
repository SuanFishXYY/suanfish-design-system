<div align="center">

# 🐟 Suanfish Design System

### *The multi-agent design AI that can say "No" to your boss*

![version](https://img.shields.io/badge/version-4.0.0-blueviolet)
![philosophers](https://img.shields.io/badge/philosophers-301-9cf)
![agents](https://img.shields.io/badge/agents-44-purple)
![congress](https://img.shields.io/badge/sage_congress-democratic-yellow)
![tiers](https://img.shields.io/badge/tiers-8-orange)
![paths](https://img.shields.io/badge/paths-7-teal)
![philosophy](https://img.shields.io/badge/philosophy-3--layer-darkblue)
![ai-native](https://img.shields.io/badge/AI--native-Path%20G-ff69b4)
![rules](https://img.shields.io/badge/REJECT-R1--R25-red)
![license](https://img.shields.io/badge/license-MIT-green)
![SKILL.md](https://img.shields.io/badge/SKILL.md-standard-black)

**99% of AI assistants always say Yes. This one has 25 hard rules + a sage congress — v4.0 dismantles the v3.x "8-sage-mandatory" pipeline and replaces it with democracy: summon k Tier 0 sages per BRIEF, recursively invite disciples (cap 15), jury-vote with 2/3 weighted majority.**

```
Stakeholder: "Add a 10s brand animation on the login page, play every visit."
🛡 REJECT — R1 + R2 triggered: forced animation + high-frequency interruption.
   Predicted DAU drop ≈ 4% in 30 days. Returning to PM for re-scoping.

Stakeholder: "We need 100% AI automation AND user-controlled every step."
🛡 REJECT — R18 triggered: contradiction-without-lean (D2 has no chosen side).
   Pick a lean and define escape hatches.
```

[中文 README](./README.md) · [Quick Install](#-30-seconds-quick-install) · [Why v4.0](#why-v40) · [Congress Protocol](#five-step-congress-protocol) · [5 TC Demo](docs/v4-congress-simulation.md)

</div>

---

## ⚡ 30 Seconds Quick Install

### Method A · Claude Code Plugin Marketplace (recommended)

```bash
# Inside Claude Code
/plugin marketplace add SuanFishXYY/suanfish-marketplace
/plugin install suanfish-design-system
```

Auto-loads 44 agents + congress protocol + 25 REJECT rules. Zero config.

### Method B · Direct Clone (Copilot CLI / Codex / other)

```bash
# 1. Clone into project (or any path)
git clone https://github.com/SuanFishXYY/suanfish-design-system.git .github/skills/suanfish-design-system

# 2. Global symlink — pick ONE for your CLI
ln -sf "$(pwd)/.github/skills/suanfish-design-system" ~/.copilot/skills/suanfish-design-system   # GitHub Copilot CLI
ln -sf "$(pwd)/.github/skills/suanfish-design-system" ~/.claude/skills/suanfish-design-system    # Claude Code (manual)
ln -sf "$(pwd)/.github/skills/suanfish-design-system" ~/.codex/skills/suanfish-design-system     # OpenAI Codex CLI
ln -sf "$(pwd)/.github/skills/suanfish-design-system" ~/.agents/skills/suanfish-design-system    # Generic agents dir

# 3. Verify
ls ~/.copilot/skills/suanfish-design-system/agents/ | wc -l   # should print 44
```

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

| Dimension | v3.0 | v3.2 | v3.3 | **v4.0** |
| --- | --- | --- | --- | --- |
| Tier 0 attendance | fixed 3 all-on | fixed 8 all-on | fixed 8 all-on | **dynamic k** |
| Decision mechanism | pipeline | pipeline | pipeline + modes | **congress + vote** |
| User decision points | 0 | 0 | 1 (pick mode) | 0 |
| Token cost (simple BRIEF) | medium | high | variable | **~5 calls** |
| Token cost (complex BRIEF) | high | very high | variable | up to 50+ |

---

## Five-Step Congress Protocol

```
BRIEF
  ↓
🏛 bench-matcher · self-contained congress (5 unified steps)
  ① Score    — score 8 Tier 0 sages on 5 dims (weighted 40/20/15/15/10)
  ② Summon   — those scoring ≥7.5 enter (k sages, typically 1-3 of 8)
                fallback: top-1 if none clear threshold
  ③ Invite   — entered sages recursively invite disciples from 293-bench
                per-sage quota 3 · total cap 15
  ④ Discuss  — all state positions → consensus merge / mediate conflicts / surface blind spots
  ⑤ Vote     — Tier 0 = 2 votes · helpers = 1 vote · ABSTAIN reduces denominator
                ≥ ⌈total × 2/3⌉ to pass · revise & re-vote up to 3 rounds
                3-round failure → R24 Congress-Deadlock → escalate to user
  ↓
🔍 quotation-verifier (audit all citations against 27-bench · R25)
  ↓
🧭 moment-strategist → Path A-G → ui-auditor
```

### Voting math example (glassmorphism component)

- Layer 1: Wang Bi #232 (8.7) · Fazang #249 (8.0) · Laozi #092 (7.6) enter
- Layer 2: Wang Bi → Nishida / Fazang → Heidegger / Heidegger → Wittgenstein
- N = 6 sages · total votes = 3×2 + 3×1 = 9 · threshold = ⌈9 × 2/3⌉ = 6
- Result: 7 APPROVE / 1 ABSTAIN (reduces denom to 8) / 0 REJECT → 7/8 ≥ 6 → **Round 1 passes** ✓

---

## 📚 v3.0.1 · 301-Philosopher Bench (the only Chinese-philosophy-driven DS)

> 301 thinkers cataloged in `references/27-philosopher-bench.md` — **117 Chinese + 184 Western/global**.
> Each entry: one-line core idea + design-system hook.
> Any new agent / R rule **MUST anchor to ≥ 1 philosopher from the bench**.

```
✅ Already deployed:   #039 Hegel · #058 Foucault · #091 Whitehead · #086 Wiener
                       #092 Laozi · #093 Zhuangzi · #232 Wang Bi · #249 Fazang · #225 Wang Chong
🌐 Schools covered:    Pre-Socratic → Analytic → Post-structural → Pre-Qin → Neo-Confucian → Modern
```

📖 **[Browse all 301 philosophers →](references/27-philosopher-bench.md)**

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

As of **v4.0** sage selection itself is democratized — no more forcing all 8 Tier 0 sages on every BRIEF.

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

---

## Philosophy

> "v3.0 wanted 8 teachers per BRIEF — but classrooms shouldn't be one-size-fits-all."
> "v4.0: consult a few experienced ones, let them decide if they need TAs, debate it, vote."
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
