---
agent: agent
tools:
    - search/codebase
    - search/fileSearch
    - search/textSearch
    - read/readFile
    - edit/createFile
    - edit/editFiles
    - execute/runInTerminal
    - read/problems
    - execute/testFailure
description: "Write Vitest + Testing Library tests for the current file or specified files"
model: Claude Sonnet 4.5 (copilot)
---

Write comprehensive tests for ${file} and any additional files mentioned in the user's request.

Reference existing test patterns in #codebase and search for similar test files using #fileSearch.

Make sure all tests pass by running them via terminal.
