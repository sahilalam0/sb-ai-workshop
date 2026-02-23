# Building Blocks of Coding Agents in GitHub Copilot

---

## What We're Building Today

- Learn the 3 core building blocks for **agentic coding** in VS Code
- Apply them to a real React + TypeScript Todo app
- There are other building blocks like **skills**, **subAgents** and **backgroundAgents** which we will cover later.

---

## Why These Tools?

Every time you open Copilot Chat, you start from scratch:

- You re-explain your tech stack ("we use EDS components, not raw HTML...")
- You repeat coding conventions ("always use the custom render helper for tests...")
- You re-describe project structure ("tests go in tests/ mirroring src/...")

**The result?** More iterations, more corrections, more wasted time.

These building blocks solve that by encoding your team's knowledge **once** — so Copilot applies it **every time**, automatically.

| Without                           | With                                        |
| --------------------------------- | ------------------------------------------- |
| Repeat context every chat         | Instructions auto-apply your conventions    |
| Copy-paste the same prompt        | Reusable prompts save common workflows      |
| Manually configure tools per task | Agents come pre-loaded with the right tools |

> There is no single "right" way to use these building blocks.
> Try them out, combine them, and use what boosts **your** productivity.

---

## The 3 Building Blocks

| Building Block          | What It Is                   | When It Fires                      |
| ----------------------- | ---------------------------- | ---------------------------------- |
| **Custom Instructions** | Persistent context and rules | Auto-applied to every chat request |
| **Reusable Prompts**    | Saved prompt templates       | On-demand via `/prompt-name`       |
| **Custom Agents**       | Role-based AI personas       | On-demand via `@agent-name`        |

---

## How They Differ

|                | Custom Instructions               | Reusable Prompts              | Custom Agents               |
| -------------- | --------------------------------- | ----------------------------- | --------------------------- |
| **Location**   | `.github/copilot-instructions.md` | `.github/prompts/*.prompt.md` | `.github/agents/*.agent.md` |
| **Activation** | Automatic (always on)             | Manual (`/prompt-name`)       | Manual (`@agent-name`)      |
| **Scope**      | Repo-wide or path-specific        | Task-specific                 | Role-specific               |
| **Visibility** | Hidden (shown in References)      | Visible in prompt picker      | Visible in agent picker     |

---
