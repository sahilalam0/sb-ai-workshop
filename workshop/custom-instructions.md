# Custom Instructions

---

## What Are Custom Instructions?

- Persistent, always-on context that Copilot reads with **every** chat request
- Think of it as your repo's "README for AI"
- **Not** visible in the chat itself, but shown in the **References** panel

---

## How to Add: Repo-Wide Instructions

Create a single file at the repo root:

```
.github/copilot-instructions.md
```

This file is auto-attached to **all** Copilot Chat requests in this workspace — no opt-in needed.

---

## How to Add: Path-Specific Instructions

Create files in `.github/instructions/`:

```
.github/instructions/
  react-components.instructions.md
  tests.instructions.md
```

Each file uses YAML frontmatter with an `applyTo` glob:

```yaml
---
applyTo: "src/components/**/*.tsx"
---
Your instructions here...
```

These only activate when working on files matching the glob pattern.

---

## Directory Structure (After Setup)

```text
.github/
  copilot-instructions.md              # Repo-wide (always on)
  instructions/                        # Path-specific rules
    reactjs.instructions.md            # For all JS/TS/CSS files
    tests.instructions.md              # For test files only
```

---

## Best Practices (from VS Code Docs)

**Do:**

- Keep each instruction as a **single, concise statement** — not paragraphs
- Explain the **"why"** behind rules (e.g., "Use `date-fns` — moment.js is deprecated")
- Use **concrete code examples** over abstract rules — AI responds better to examples
- Include **high-level context**: project layout, build/test commands, tech stack
- Organize with **clear headings and bullet points**
- **Start small and iterate** — add more based on what works
- Use **`/init`** in Copilot Chat to auto-generate a starting point

**Don't:**

- Don't duplicate what linters/formatters already enforce (ESLint, Prettier handle those)
- Don't over-specify — focus on **repo-wide standards**, not task-specific directions
- Don't write lengthy narratives — bullet points > paragraphs
- Don't include untested commands or vague sequencing
- Don't try to cover every edge case — keep it under ~1,000 lines max

---

## Live Demo: Path-Specific Test Instructions

**Already created at:** `.github/instructions/tests.instructions.md`

This file uses `applyTo: "tests/**"` so the conventions auto-apply whenever you're working on test files. It's also referenced by the `/write-tests` reusable prompt — so conventions are defined **once** and reused everywhere.

**Usage:** Open any test file or ask Copilot to modify tests — the instructions load automatically.

**What to observe:**

1. Check the **References** panel — `tests.instructions.md` should be listed
2. Copilot uses the custom render helper, not `@testing-library/react` directly
3. Tests follow the project's describe block structure (Rendering, Interactions, Edge cases)

---

## Tips

- Instructions are **version-controlled** — commit them so the whole team benefits
- Update instructions as the project evolves (new libraries, changed conventions)
- Path-specific instructions let you have different rules for tests vs. components vs. configs
- Reusable prompts can **reference** instruction files — define conventions once, use everywhere
- Use the **Chat Diagnostics** view (right-click in Chat > Diagnostics) to troubleshoot if instructions aren't loading

## Resources

- [VS Code Docs: Custom Instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
