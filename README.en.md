<div align="center">

# 🐟 Suanfish Design System

### *The multi-agent design AI that can say "No" to your boss*

![version](https://img.shields.io/badge/version-2.1.0-blue)
![agents](https://img.shields.io/badge/agents-14-purple)
![tiers](https://img.shields.io/badge/tiers-6-orange)
![license](https://img.shields.io/badge/license-MIT-green)
![SKILL.md](https://img.shields.io/badge/SKILL.md-standard-black)

**99% of AI assistants always say Yes. This one has 6 hard rules to REJECT.**

```
Stakeholder: "Add a 10s brand animation on the login page, play every visit."
🛡 REJECT — R1 + R2 triggered: forced animation + high frequency interruption.
   Predicted DAU drop ≈ 4% in 30 days. Returning to PM for re-scoping.
```

[中文 README](./README.md) · [Install](#install) · [Why](#why) · [Architecture](#architecture) · [REJECT Rules](#reject-rules)

</div>

---

## Why

If you've built products with AI assistants, you know the real problem isn't that they can't do things — it's that **they always say Yes**.

> Boss: "Add a 3D-flip popup."
> AI: "Sure, no problem."
> Boss: "Plus 8 CTAs on the home page."
> AI: "Got it."

Result? Shipping garbage UX.

**Suanfish Design System** is an opinionated, multi-agent design SKILL that ships with a **REJECT mechanism** — 6 hard rules that any agent will refuse on sight, and propose an alternative instead.

## Architecture

14 specialized agents organized across **6 tiers**:

| Tier | Role | Agents |
|------|------|--------|
| **1 · Strategy** | Decide what to make | `onboarding-director`, `wizard-designer` |
| **2 · Architecture** | Shape the structure | `ui-architect`, `modal-craftsman` |
| **3 · Content** | Words, icons, empty states | `copy-writer`, `icon-curator`, `empty-state-storyteller` |
| **4 · Visual** | Pixels and motion | `data-viz-engineer`, `animation-choreographer` |
| **5 · Horizontal Consult** | Tokens, a11y, responsive | `token-keeper`, `a11y-guardian`, `responsive-strategist` |
| **6 · Audit** | Quality gate with independent rulesets | `ui-auditor` (19 + 13 rules) |

All coordinated by a single **moment-strategist** that decides which agents to activate and **whether to REJECT**.

## REJECT Rules

The `moment-strategist` enforces 6 hard rules. If any are triggered, the system refuses and proposes an alternative.

- **R1** — Forced animations / blocking animations
- **R2** — High-frequency interruption (e.g., popup every visit)
- **R3** — ≥3 CTAs in a single viewport
- **R4** — First-time user is interrupted by a popup
- **R5** — Critical action without a confirm/undo state
- **R6** — Onboarding > 3 steps without skip

Full rule definitions: [`references/15-audit-ruleset-steady.md`](./references/15-audit-ruleset-steady.md) · [`references/16-audit-ruleset-onboarding.md`](./references/16-audit-ruleset-onboarding.md)

## Install

Compatible with **Claude Code · OpenAI Codex CLI · GitHub Copilot CLI** (any SKILL.md-standard tool).

```bash
# Claude Code
git clone https://github.com/SuanFishXYY/suanfish-design-system.git \
  ~/.claude/skills/suanfish-design-system

# OpenAI Codex CLI
git clone https://github.com/SuanFishXYY/suanfish-design-system.git \
  ~/.codex/skills/suanfish-design-system
```

The AI will auto-discover and load it. No manual invocation needed.

## What's New in v2.1.0

- **6-tier reorganization** — splits the previous Tier 4 into Content / Horizontal Consult / Audit for cleaner ownership
- **REJECT mechanism** — `moment-strategist` now ships 6 hard refusal rules
- **Independent audit rulesets** — extracted from `ui-auditor` into versioned files with `bound_to_token_version` sync
- **5-rule fast lane** — top of SKILL.md handles 80% of requests without full 6-agent orchestration
- **Promotional README + dev README split** — separating marketing from contributor docs

Full changelog: [CHANGELOG.md](./CHANGELOG.md)

## Compared to Other Design Skills

| | Generic Design Assistants | **Suanfish** |
|---|:---:|:---:|
| Multi-agent orchestration | ❌ | ✅ 14 agents / 6 tiers |
| Can refuse a request | ❌ "Sure" | ✅ REJECT + alternative |
| Independent audit rulesets | ❌ | ✅ steady + onboarding |
| Token version sync | ❌ | ✅ `bound_to_token_version` |
| Onboarding-aware | ❌ generic | ✅ first-impression specialized |

## Contributing

PRs welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT — see [LICENSE](./LICENSE)

---

<div align="center">

**Built by Suanfish Studio · 算鱼工作室**

[⭐ Star on GitHub](https://github.com/SuanFishXYY/suanfish-design-system) · [Report Issue](https://github.com/SuanFishXYY/suanfish-design-system/issues)

</div>
