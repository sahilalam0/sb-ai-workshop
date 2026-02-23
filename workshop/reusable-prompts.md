# Reusable Prompts

---

## What Are Reusable Prompts?

- Saved prompt templates you invoke on-demand via **`/prompt-name`** in Copilot Chat
- Like "macros" for common AI tasks — write once, reuse everywhere
- Support variables, tool references, and mode selection

---

## How to Add

Create `.prompt.md` files in:

```text
.github/prompts/
```

Each file becomes a slash command matching its filename (e.g., `write-tests.prompt.md` → `/write-tests`).

---

## Frontmatter Template

```yaml
---
mode: agent
tools:
  - changes
  - codebase
  - fetch
  - findTestFiles
  - githubRepo
  - terminal
  - useDiagnostics
  - vscode
description: "Short description shown in the prompt picker"
model: claude-sonnet-4
---
```

| Field | Purpose |
| --- | --- |
| `mode` | `ask` = read-only answers · `agent` = can edit files and run commands · `edit` = inline code edits |
| `tools` | Restricts which VS Code tools the prompt can access |
| `description` | Shown in the prompt picker when you type `/` |
| `model` | Optional: override the default model |

---

## Variables

Use these in the prompt body — they resolve at runtime:

| Variable | Resolves To |
| --- | --- |
| `${file}` | Path of the currently open file |
| `${selection}` | Currently selected code in the editor |
| `${input:varName}` | Prompts the user for input (custom variable) |

---

## Tool References

Reference built-in tools in the prompt body with `#tool-name`:

| Reference | What It Does |
| --- | --- |
| `#codebase` | Search the full codebase for context |
| `#changes` | See current uncommitted changes |
| `#fetch` | Fetch a URL for context |
| `#findTestFiles` | Locate related test files |
| `#terminal` | Access terminal output |

---

## Directory Structure (After Setup)

```text
.github/
  prompts/
    write-tests.prompt.md     # Generate tests for a component
```

---

## Live Demo: Test Writer Prompt

**Already created at:** `.github/prompts/write-tests.prompt.md`

**Usage:** Open a component file (e.g., `TaskList.tsx`) → type `/write-tests`

**Key design choice:** The prompt references `.github/instructions/tests.instructions.md` for test conventions instead of duplicating them inline. This means the conventions are defined once and shared by both the prompt and any direct chat request involving test files.

**What to observe:**

1. The `${file}` variable resolves to whichever file you have open
2. You can also mention additional files in the chat (e.g., "also cover TaskItem.tsx")
3. Copilot picks up the test conventions from the instructions file automatically
4. Generated tests use the custom render helper — not `@testing-library/react` directly
5. Tests are runnable immediately with `pnpm test`

---

## Tips

- Start with `mode: ask` for read-only prompts, upgrade to `agent` when the prompt needs to create/edit files
- Use `${input:varName}` to make prompts reusable across different contexts
- Reference `#codebase` to give the prompt awareness of existing patterns
- Keep prompt text focused — the AI performs better with clear, specific instructions
- Prompts are **version-controlled**, so the whole team shares the same workflows

