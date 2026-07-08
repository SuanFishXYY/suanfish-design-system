# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in Suanfish Design System, please **do not open a public issue**.

Instead, report it privately via one of the following channels:

1. Use GitHub's [private vulnerability reporting](https://github.com/SuanFishXYY/suanfish-design-system/security/advisories/new)
2. Email the maintainers (see profile)

## What to Include

- A clear description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested mitigation (if any)

## Response Timeline

We aim to:

- Acknowledge your report within **3 business days**
- Provide an initial assessment within **7 business days**
- Release a fix or mitigation as soon as feasible

## Scope

This skill contains both markdown instructions/references **and executable code**. The executable components are:

- `installer/install.mjs` (plus `.ps1` / `.sh` variants): executes `git clone`, creates a junction (Windows) or symlink (Unix) from `~/.<cli>/skills/suanfish-design-system` to the cloned repository, and writes to `~/.<cli>/settings.json` to register `skillDirectories`.
- `scripts/charter-lint.mjs`: reads and validates manifest, agent, and reference files across the repository.

The primary security concerns are:

- Prompt injection within agent definitions
- Misleading or dangerous instructions that could cause user-facing AI to behave unsafely
- License or attribution issues
- **Code-execution vulnerabilities** (see threat model below)

### Threat Model

| # | Threat | Vector | Mitigation |
| --- | --- | --- | --- |
| T1 | Malicious REPO replacement | The `REPO` constant in `install.mjs` (and equivalents in `.ps1` / `.sh`) is hardcoded. If an attacker tampers with the installer source (e.g., via a compromised fork or MITM on the raw GitHub download URL), `git clone` could fetch an arbitrary repository containing malicious agents or scripts. | Verify the installer source matches the canonical repository (`SuanFishXYY/suanfish-design-system`). Pin to a specific commit hash when possible. |
| T2 | Symlink / junction path traversal | `linkInto()` in `install.mjs` creates a symlink or junction at `~/.<cli>/skills/<NAME>`. A crafted `NAME` or `TARGET` containing `..` sequences could point the link outside the intended skills directory. | `NAME` and `TARGET` are derived from hardcoded constants, not user input. The empty-dir cleanup path (removing an existing empty directory before linking) is also limited to the fixed `link` path. |
| T3 | settings.json corruption / injection | `registerSkillDir()` reads, parses, modifies, and rewrites `~/.<cli>/settings.json`. A corrupt source file could be overwritten; a malicious `skillDirectories` entry could cause the CLI to load skills from an attacker-controlled path. | The function wraps `JSON.parse` in try/catch and only appends to the `skillDirectories` array. Users should back up `settings.json` before running the installer. |

## Acknowledgments

We will credit reporters in our release notes unless they prefer to remain anonymous.
