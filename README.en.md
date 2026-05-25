<div align="center">

# 🐟 Suanfish Design System

### *The multi-agent design AI that can say "No" to your boss*

![version](https://img.shields.io/badge/version-4.0.0-blueviolet)
![philosophers](https://img.shields.io/badge/philosophers-301-9cf)
![agents](https://img.shields.io/badge/agents-36-purple)
![tiers](https://img.shields.io/badge/tiers-8-orange)
![paths](https://img.shields.io/badge/paths-7-teal)
![philosophy](https://img.shields.io/badge/philosophy-3--layer-darkblue)
![ai-native](https://img.shields.io/badge/AI--native-Path%20G-ff69b4)
![rules](https://img.shields.io/badge/REJECT-R1--R18-red)
![license](https://img.shields.io/badge/license-MIT-green)
![SKILL.md](https://img.shields.io/badge/SKILL.md-standard-black)

**99% of AI assistants always say Yes. This one has 18 hard rules to REJECT — v3.0 adds R13-R18 philosophical rejects (5 development laws + 1 dialectical-incoherence rule).**

```
Stakeholder: "Add a 10s brand animation on the login page, play every visit."
🛡 REJECT — R1 + R2 triggered: forced animation + high frequency interruption.
   Predicted DAU drop ≈ 4% in 30 days. Returning to PM for re-scoping.

Stakeholder: "We need 100% AI automation AND user-controlled every step."
🛡 REJECT — R18 triggered: contradiction-without-lean (D2 has no chosen side).
   Pick a lean and define escape hatches.  ← v3.0 new rule
```

[中文 README](./README.md) · [Install](#install) · [Why](#why) · [Architecture](#architecture) · [REJECT Rules](#reject-rules) · [What's New in v3.0](#whats-new-in-v30)

</div>

---

## 🌗 v3.0 · Three-Layer Philosophy (What's New)

| Layer | File | Question | Triggers |
| --- | --- | --- | :---: |
| **Layer 1 · Values** | [17-philosophy.md](references/17-philosophy.md) | Which side should we pick? | R1-R12 |
| **Layer 2 · Dialectics** ✨ | [24-philosophy-dialectics.md](references/24-philosophy-dialectics.md) | Why are there two sides? | R18 |
| **Layer 3 · Development Laws** ✨ | [25-philosophy-laws.md](references/25-philosophy-laws.md) | How do contradictions drift over time? | R13-R17 |
| **Layer 0.5 · Historical Positioning** ✨ | [26-historical-positioning.md](references/26-historical-positioning.md) | What era did we come from, what era are we heading to? | — |

**v3.0 Tier 0 trio**: 🪙 `dialectician` (Hegel · names contradictions, picks leans) → 📜 `historian` (Foucault · finds era coordinates) → 🔭 `futurist` (Whitehead · predicts evolution & emits future hooks) → 🧭 `moment-strategist` (routes to Path A-G).

Every BRIEF — no exception — passes through Tier 0 first.

</div>

---

## 📚 v3.0.1 · 301 Philosopher Bench (The Only Chinese-Philosophy-Driven DS)

> 301 thinkers cataloged in `references/27-philosopher-bench.md` — **117 Chinese + 184 Western/global**.
> Each entry: one-line core idea + design-system hook.
> Any new v3.x agent / R rule **MUST anchor to at least one philosopher from the bench**.

```
✅ Already used (4):   #039 Hegel / #058 Foucault / #091 Whitehead / #086 Wiener
🔥 v3.1 candidates:   #092 Laozi / #093 Zhuangzi / #232 Wang Bi / #249 Fazang / #225 Wang Chong
🌐 Schools covered:   Pre-Socratic → Analytic → Post-structural → Pre-Qin → Neo-Confucian → Modern
```

📖 **[Browse all 301 philosophers →](references/27-philosopher-bench.md)**

---

## Why

If you've built products with AI assistants, you know the real problem isn't that they can't do things — it's that **they always say Yes**.

> Boss: "Add a 3D-flip popup."
> AI: "Sure, no problem."
> Boss: "Plus 8 CTAs on the home page."
> AI: "Got it."

Result? Shipping garbage UX.

**Suanfish Design System** is an opinionated, multi-agent design SKILL that ships with a **REJECT mechanism** — 6 hard rules that any agent will refuse on sight, then propose an alternative.

As of **v2.5**, Suanfish also covers the entire **AI-native UI surface** — streaming, tool calls, reasoning panels, citations, artifacts, prompt input, rate-limit communication, model switchers, and multi-turn thread architecture — through a new **Path G overlay** layered on top of conversational / steady / embedded paths.

## Architecture

**33 specialized agents** organized across **7 tiers** and **7 design paths**:

| Tier | Role | Sample Agents |
|------|------|---------------|
| **1 · Dispatch** | Decide what to do · can REJECT | `moment-strategist` |
| **1.5 · Coordination** | Cross-path orchestration | `flow-coordinator` |
| **2 · Lead (×4)** | One per major path | `onboarding-director`, `ui-architect`, `conversation-director`, `notification-director` |
| **3 · Container Specialist (×10)** | Build the surface | `modal`, `wizard`, `data-viz`, `table`, `chat-ui`, `stream`, `tool-call-presenter`, `agent-thread-architect`, `artifact-architect`, `prompt-input-craftsman` |
| **4 · Content Specialist (×10)** | Words, icons, states, reasoning | `copy-writer`, `icon-curator`, `empty-state`, `responsive`, `persona`, `info-architect`, `error-recovery`, `reasoning-visualizer`, `citation-keeper`, `rate-limit-communicator` |
| **5 · Crosscutting Consult (×6)** | Tokens, motion, a11y, brand, i18n, model | `token-keeper`, `animation`, `a11y-guardian`, `brand-keeper`, `i18n-strategist`, `model-switcher-stylist` |
| **6 · Quality Gate** | Independent audit with 33-agent coverage | `ui-auditor` |

**7 design paths**:

| Code | Path | Lead |
|------|------|------|
| A | Ceremonial (first-impression rituals) | `onboarding-director` |
| B | Steady (daily ops / dashboards) | `ui-architect` |
| C | Conversational (chat / agent UI) | `conversation-director` |
| D | Notification (alerts / toasts) | `notification-director` |
| E | Mobile (touch-first) | `ui-architect` + `responsive-strategist` |
| F | Embedded (widget / iframe variant) | `ui-architect` (variant) |
| **G** | **AI-native overlay** *(v2.5 new)* | `conversation-director` overlays C / B / F |

Everything is coordinated by a single **`moment-strategist`** that decides which agents to activate, which path to take, and **whether to REJECT**.

## REJECT Rules

The `moment-strategist` enforces 6 hard rules. If any are triggered, the system refuses and proposes an alternative.

- **R1** — Forced animations / blocking animations
- **R2** — High-frequency interruption (e.g., popup every visit)
- **R3** — ≥3 CTAs in a single viewport
- **R4** — First-time user interrupted by a popup
- **R5** — Critical action without confirm/undo state
- **R6** — Onboarding > 3 steps without skip

Plus, as of v2.5, **27 new philosophy rules (P-XX family)** governing Path G — covering visibility, attribution, transparency, and reversibility of AI-native surfaces.

Full rule definitions:
- [`references/15-audit-ruleset-steady.md`](./references/15-audit-ruleset-steady.md)
- [`references/16-audit-ruleset-onboarding.md`](./references/16-audit-ruleset-onboarding.md)
- [`references/19-audit-ruleset-philosophy.md`](./references/19-audit-ruleset-philosophy.md) *(v2.2 + v2.5 補丁)*

## Install

Compatible with **Claude Code · OpenAI Codex CLI · GitHub Copilot CLI** (any SKILL.md-standard tool).

```bash
# Claude Code
git clone https://github.com/SuanFishXYY/suanfish-design-system.git \
  ~/.claude/skills/suanfish-design-system

# OpenAI Codex CLI
git clone https://github.com/SuanFishXYY/suanfish-design-system.git \
  ~/.codex/skills/suanfish-design-system

# GitHub Copilot CLI
git clone https://github.com/SuanFishXYY/suanfish-design-system.git \
  ~/.copilot/skills/suanfish-design-system
```

The AI will auto-discover and load it. No manual invocation needed.

## What's New in v2.5

v2.5 ships an entire **AI-native overlay layer (Path G)** — 9 new agents that make Suanfish the first multi-agent design system with first-class support for streaming AI UIs, tool calls, reasoning panels, and citations.

| New Agent | Tier | Philosophy Anchor | Owns |
|-----------|------|-------------------|------|
| `stream-craftsman` | 3 | Heraclitus · *everything flows* | SSE token streaming, fade-in, cursor blink |
| `tool-call-presenter` | 3 | Austin · *speech-act* | Tool invocation cards, args/result reveal |
| `agent-thread-architect` | 3 | Borges · *forking paths* | Multi-turn thread, branch, fork UI |
| `artifact-architect` | 3 | Heidegger · *zuhanden* | Code/canvas/document side-panels |
| `prompt-input-craftsman` | 3 | Austin · *performative* | Input box: drag, paste, slash, abort |
| `reasoning-visualizer` | 4 | Descartes · *cogito* | Chain-of-thought panel, collapse, summary |
| `citation-keeper` | 4 | Foucault · *power-knowledge* | Source attribution, hover preview, link-out |
| `rate-limit-communicator` | 4 | Rawls · *fairness* | Quota indicator, soft/hard limits, recovery |
| `model-switcher-stylist` | 5 | Lévi-Strauss · *bricolage* | Model toggle, capability badge, cost hint |

**Path G total proposition**: every AI-native surface must be **visualizable** (reasoning/streaming), **attributable** (citations/tool-calls), **transparent** (rate-limit/model-switch), and **reversible** (thread/artifact/prompt-input).

Plus:
- **`ui-auditor` upgraded to 33-agent coverage** with a new 4-principle Path G self-audit block
- **`flow-coordinator` (Tier 1.5)** added in v2.4 for cross-path orchestration
- **27 new philosophy rules** (P-XX) covering Path G
- **`moment-strategist` dispatcher** extended to route C + G composite scenarios

Full changelog: [CHANGELOG.md](./CHANGELOG.md)

## Compared to Other Design Skills

| | Generic Design Assistants | **Suanfish** |
|---|:---:|:---:|
| Multi-agent orchestration | ❌ | ✅ 33 agents / 7 tiers / 7 paths |
| Can refuse a request | ❌ "Sure" | ✅ REJECT + alternative |
| Independent audit rulesets | ❌ | ✅ steady + onboarding + philosophy |
| Token version sync | ❌ | ✅ `bound_to_token_version` |
| Onboarding-aware | ❌ generic | ✅ first-impression specialized |
| **AI-native surfaces** *(v2.5)* | ❌ | ✅ stream / tool-call / reasoning / citation / artifact |
| Philosophy anchors per agent | ❌ | ✅ 33 anchors + 27 P-XX rules |

## Contributing

PRs welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT — see [LICENSE](./LICENSE)

---

<div align="center">

**Built by Suanfish Studio · 算鱼工作室**

[⭐ Star on GitHub](https://github.com/SuanFishXYY/suanfish-design-system) · [Report Issue](https://github.com/SuanFishXYY/suanfish-design-system/issues) · [Discuss REJECT rules](https://github.com/SuanFishXYY/suanfish-design-system/issues/1)

</div>
