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

| Field         | Purpose                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------- |
| `mode`        | `ask` = read-only answers · `agent` = can edit files and run commands · `edit` = inline code edits |
| `tools`       | Restricts which VS Code tools the prompt can access                                                |
| `description` | Shown in the prompt picker when you type `/`                                                       |
| `model`       | Optional: override the default model                                                               |

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

## Resources

- [VS Code Docs: Reusable Prompts](https://code.visualstudio.com/docs/copilot/customization/prompt-files)

- [Effective Prompting](https://anywhereworks.atlassian.net/wiki/spaces/BE/pages/1903362108/Effective+Prompting)
