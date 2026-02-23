---
applyTo: "tests/**/*.test.{ts,tsx}"
---

# Testing Conventions

## Stack

- Vitest as the test runner (config in vite.config.ts)
- @testing-library/react for rendering and querying
- @testing-library/user-event for simulating user interactions

## Custom Render Helper

- ALWAYS use `{ render, screen }` from `tests/helpers/render.tsx` — NOT from `@testing-library/react` directly
- The custom render wraps all components in the EDS Root provider automatically (no need to add it manually)

## File Structure

- Place test files in `tests/` mirroring the `src/` structure (e.g., `src/components/TaskList.tsx` → `tests/components/TaskList.test.tsx`)

## Test Organization

- Group tests with `describe` blocks
- Organize into sections: Rendering, Interactions, Edge cases
- Use `userEvent.setup()` for user interaction tests

## Running Tests

- Run all tests: `pnpm test`
- Coverage is enabled via @vitest/coverage-v8
