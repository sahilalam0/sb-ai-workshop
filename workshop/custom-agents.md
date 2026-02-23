# Custom Agents

---

## What Are Custom Agents?

- **Role-based AI personas** with specific expertise, tools, and boundaries
- Invoked via **`@agent-name`** in Copilot Chat
- Think: specialized team members that only have access to tools relevant to their role

---

## How to Add

Create `.agent.md` files in:

```text
.github/agents/
```

Each file becomes an @-mentionable agent matching its filename (e.g., `eds-expert.agent.md` → `@eds-expert`).

---

## Frontmatter Template

```yaml
---
name: "Agent Display Name"
description: "What this agent does (shown in agent picker)"
tools:
    - codebase
    - terminal
    - changes
    - fetch
    - findTestFiles
    - useDiagnostics
    - githubRepo
    - vscode
handoffs:
    - other-agent-name
model: claude-sonnet-4
---
```

| Field         | Purpose                                       |
| ------------- | --------------------------------------------- |
| `name`        | Display name in the agent picker              |
| `description` | Short description shown when selecting agents |
| `tools`       | Which VS Code tools this agent can access     |
| `handoffs`    | Other agents this one can delegate tasks to   |
| `model`       | Optional: override the default model          |

---

## Built-in Agents (Already Available)

VS Code ships with 3 built-in agents you can use right away:

| Agent      | Role                                                    |
| ---------- | ------------------------------------------------------- |
| **@Agent** | General-purpose coding assistant (default)              |
| **@Plan**  | Creates implementation plans **without** making changes |
| **@Ask**   | Answers questions **without** editing files             |

Custom agents extend this with your own domain-specific roles.

---

## Directory Structure (After Setup)

```text
.github/
  agents/
    eds-expert.agent.md       # EDS design system specialist
```

---

## Resources

- [VS Code Docs: Custom Agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents)
