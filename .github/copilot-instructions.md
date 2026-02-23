# Project Guidelines

## Code Style

- Use TypeScript for all source files in `src/`.
- Use Typescript for tests as well.
- EDS UI components from `@adaptavant/eds-core` are used for layout and controls.
- Tailwind CSS utility classes are used for styling.
- ESLint config: [eslint.config.js](eslint.config.js) enforces recommended JS, TS, React, and hooks rules.

## Architecture

- Main entry: [src/main.tsx](src/main.tsx) mounts [src/App.tsx](src/App.tsx) into `#root`.
- App root: [src/App.tsx](src/App.tsx) wraps the app in EDS `Root` provider with brand and translations.
- Core logic in [src/components/TodoApp.tsx](src/components/TodoApp.tsx), which manages tasks and renders header, input, and list.
- Task data shape: see [src/components/types.ts](src/components/types.ts).

## Build and Test

- Install: `pnpm install`
- Build: `pnpm build`
- Run dev server: `pnpm dev`
- Lint: `pnpm lint`
- Test: `pnpm test` (uses Vitest, see [tests/](tests/))

## Project Conventions

- All UI uses EDS components and Tailwind utility classes.

# @adaptavant/eds-core Standards

Reference the official LLM-friendly documentation index for all component logic:

- Index: https://earth.anywhere.co/llms.txt
- Full Reference: https://earth.anywhere.co/llms-full.txt

# Workflow

- Be sure to typecheck and lint check when you're done making a series of code changes.
- Prefer running single tests, and not the whole test suite, for performance.

---
