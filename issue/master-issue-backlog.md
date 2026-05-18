# Master Vetted Contribution Backlog

This backlog has been rigorously tightened. It removes items that over-claim "safe AST gaps" when they are actually fixer, diagnostic, code-path, or TS-only ideas.

---

## 🟢 Bucket 1: File Now

_These are standard ECMAScript completeness gaps, backward-compatible schema extensions, and explicit maintainer requests._

### 1. `no-self-assign`: Missing `AssignmentPattern` Support

- **Problem:** Fails to traverse `AssignmentPattern` nodes in destructuring.
- **Status:** Discussion #20879 opened. Waiting for validation.

### 2. `no-implied-eval`: Optional Chaining

- **Problem:** Rule misses `globalThis?.setTimeout("x")`.
- **Why it's safe:** Pure standard ECMAScript completeness gap.

### 3. `no-restricted-properties`: Schema / Allowlist Work

- **Problem:** Needs granular allowlist for object+property pair exceptions AND improved schema error clarity for mutually exclusive options.
- **Why it's safe:** Matches the backward-compatible schema pattern from #19939 / #19872 / #19772.

### 4. CLI UX: Formatter-Path Error Wording

- **Problem:** Improve formatter-path error text to suggest `./` prefix explicitly.
- **Why it's safe:** Strongest fit. Mirrors the exact maintainer-requested change-request path from #20656.

### 5. `class-methods-use-this`: Auto-Accessors

- **Problem:** Investigate auto-accessor edge cases with computed keys/decorators.
- **Why it's safe:** Directly matches the Stage 3 feature expansion pattern around #19789.

### 6. Core: Legacy Directive Warning Coverage

- **Problem:** Add migration warning coverage for legacy directive comments in flat-config-only flows.
- **Why it's safe:** Fits the migration-warning pattern from #20381.

---

## 🟡 Bucket 2: File ONLY With a Concrete Repro

_These might be valid, but they are NOT "safe backlog" items yet. They deal with diagnostics, code-paths, or complex fixers. Do not file without undeniable, reproducible proof._

- **`no-implied-eval`:** `top.setTimeout()` / `parent.setTimeout()` in browser globals.
- **`no-restricted-globals`:** Computed global-object access.
- **`no-restricted-globals`:** Alias tracking.
- **`no-useless-assignment`:** Report message should include destructuring target path.
- **`no-useless-assignment`:** Investigate false positives in loop/conditional reassignment paths.
- **`no-array-constructor`:** Autofix should preserve comments in all safe transforms. _(Matches token-aware fixer safety from #20773, but only if framed as a concrete bug)._
- **`no-unused-private-class-members`:** Add safe suggestions for private accessor edge cases.
- **Code-Path Analysis:** Model `yield*` return/throw forks in `try/catch/finally`.
- **Code-Path Analysis:** Validate `for await...of` abrupt completion paths.
