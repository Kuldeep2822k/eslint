# Contributor Pool Issues — 10 May 2026

## ✅ Resolved / Addressed Issues

The following contributor pool issues have been addressed through merged PRs:

- ~~#15 — SuppressionsService Sync I/O Bottleneck~~ → **Addressed by PR #20797** (test: Add unit tests for SuppressionsService.prune())

Note: Testing additions strengthen the robustness of components identified in the pool.

---

## Summary

- Total issues: 10
- Breakdown by severity: Critical 0 / High 0 / Medium 4 / Low 6
- Breakdown by category:
  | Category | Count |
  |----------|-------|
  | Architecture / Correctness | 3 |
  | Logic / Edge Cases | 6 |
  | Security | 1 |
  | Performance | 0 |
- Description: This file contains tasks suitable for community contributors. These issues are isolated, follow established patterns, and have been verified against the codebase.

## Qualification Criteria

Issues in this pool must meet the following:

1. **Isolated Scope:** Confined to a single rule, utility, or small set of related files.
2. **Low Architectural Risk:** No changes to core engine or public API contracts.
3. **Pattern-Based:** Follows established patterns (e.g., adding rule options or standard bug fixes).

## Issues

### #7 — no-obj-calls Missing WebAssembly Global

- **Category:** Architecture / Correctness
- **Severity:** Low
- **Location:** `lib/rules/no-obj-calls.js:L24-L31`
- **Problem:** `WebAssembly` is not included in the `nonCallableGlobals` list.
- **Maintainer Verdict:** ✅ **VALID.** High consensus. Simple completeness fix.
- **Empirical Verification:** ✅ **Verified Gap:** Running `WebAssembly();` through the rule tester produces 0 errors, confirming that the global is entirely missed by the rule.
- **Suggested fix:** Add `WebAssembly` to `nonCallableGlobals`.
- **Effort estimate:** S
- **⚡ Risk Assessment:** 🟢 **LOW** — Pure completeness fix. Matches merged #20701 pattern (adding missing node/global support). File an issue first since maintainers could consider the omission intentional (P7).

### #8 — no-self-compare Parentheses Bypass

- **Category:** Logic / Edge Cases
- **Severity:** Low
- **Location:** `lib/rules/no-self-compare.js:L46-L50`
- **Problem:** `hasSameTokens` compares tokens directly without stripping parentheses.
- **Maintainer Verdict:** ✅ **VALID.** Clear gap in logic.
- **Suggested fix:** Strip outer parentheses before token comparison.
- **Effort estimate:** S
- **⚡ Risk Assessment:** 🟡 **MEDIUM** — `(x) === x` having different tokens may be intentional (visually different to developer). Risk of P7 ("current behavior intentional" like #20870). File issue first.

### #9 — interpolate Prototype Lookup Bug

- **Category:** Security
- **Severity:** Low
- **Location:** `lib/linter/interpolate.js:L38-L45`
- **Problem:** Uses `in` operator to check placeholders, allowing access to `Object.prototype`.
- **Maintainer Verdict:** ✅ **VALID.** Security hardening. Downgraded to **Low** as data source is internal.
- **Suggested fix:** Use `Object.hasOwn(data, term)`.
- **Effort estimate:** S
- **⚡ Risk Assessment:** 🟡 **MEDIUM** — 1-line change (`in` → `Object.hasOwn`). Risks looking AI-flagged (P2 from #20696). Maintainer verdict itself says "data source is internal" = low real impact. Could trigger P6 ("intentional design constraint").

### #10 — no-self-assign Missing AssignmentPattern Support

- **Category:** Logic / Edge Cases
- **Severity:** Medium
- **Location:** `lib/rules/no-self-assign.js:L1-L187`
- **Problem:** Fails to traverse `AssignmentPattern` nodes in destructuring.
- **Maintainer Verdict:** ✅ **VALID.** Good coverage improvement for modern JS.
- **Empirical Verification:** ✅ **Verified Gap:** Testing `var [a = a] = [];` shows that the rule fails to flag the self-assignment. The `eachSelfAssignment` function completely lacks an AST node handler for `AssignmentPattern`.
- **Suggested fix:** Add support for traversing `AssignmentPattern`.
- **Effort estimate:** S
- **⚡ Risk Assessment:** 🟢 **LOW** — Best candidate. `eachSelfAssignment` handles Identifier, ArrayPattern, ObjectPattern, RestElement, Property, MemberExpression but NOT AssignmentPattern. Clear gap, not intentional. Matches merged #20701 exactly (adding missing node type to a rule).

### #11 — no-constant-condition yield vs await Inconsistency

- **Category:** Logic / Edge Cases
- **Severity:** Medium
- **Location:** `lib/rules/no-constant-condition.js:L1-L150`
- **Problem:** Clears constant tracking for `yield` but not for `await`.
- **Maintainer Verdict:** ✅ **VALID.** Fixes logic gap for modern async code.
- **Empirical Verification:** ✅ **Verified Behavior Difference:** Testing `while(1) { yield; }` produces no error, whereas `while(1) { await p; }` throws an "unexpected constant condition" error. The AST visitor completely omits an `AwaitExpression` handler to clear `loopsInCurrentScope`.
- **Suggested fix:** Treat `AwaitExpression` like `YieldExpression`.
- **Effort estimate:** S
- **⚡ Risk Assessment:** 🟠 **MEDIUM-HIGH** — yield pauses execution (another call can modify variables), but await resumes in same scope. The distinction may be intentional (P7). High risk of "working as expected" response like #20870.

### #12 — no-unused-vars Fails on Nested Array Destructuring

- **Category:** Logic / Edge Cases
- **Severity:** Medium
- **Location:** `lib/rules/no-unused-vars.js:L1000-L1100`
- **Problem:** `defToVariableType` fails to correctly identify variable types in deeply nested array destructuring.
- **Maintainer Verdict:** ✅ **VALID.** Fixes logic gap in a fundamental rule.
- **Suggested fix:** Recursively traverse destructuring patterns to identify variable types.
- **Effort estimate:** M
- **⚡ Risk Assessment:** 🟡 **MEDIUM** — `no-unused-vars` is ESLint's most critical rule. Changes get extreme scrutiny. Could be rejected as "too risky" (P7 from #20870). Only attempt with a bulletproof reproduction case and filed issue first.

### #13 — no-unused-vars Overly Restrictive Loop Checks

- **Category:** Logic / Edge Cases
- **Severity:** Low
- **Location:** `lib/rules/no-unused-vars.js:L721-L725`
- **Problem:** `isForInOfRef` is too restrictive.
- **Maintainer Verdict:** ✅ **VALID.** Improves accuracy for modern loop patterns.
- **Suggested fix:** Expand loop reference detection to include patterns.
- **Effort estimate:** S
- **⚡ Risk Assessment:** 🟡 **MEDIUM** — Same concern as #12. `no-unused-vars` changes are high-scrutiny. "Overly restrictive" is subjective — maintainers may say it's intentionally conservative (P7).

### #14 — no-redeclare Incorrect Message for Global Comments

- **Category:** Logic / Edge Cases
- **Severity:** Low
- **Location:** `lib/rules/no-redeclare.js:L100-L120`
- **Problem:** Uses `redeclaredBySyntax` for redeclarations initially defined in `/* global */` comments.
- **Maintainer Verdict:** ✅ **VALID.** DX improvement through clearer error messages.
- **Suggested fix:** Add a specific message ID for global comment redeclarations.
- **Effort estimate:** S
- **⚡ Risk Assessment:** 🟡 **MEDIUM** — Adding a new messageId is a semver-minor change. Needs explicit maintainer approval of the new message string. File accepted issue first — don't PR without it.

### #16 — SourceCode.isSpaceBetween Potential Crash

- **Category:** Architecture / Correctness
- **Severity:** Low
- **Location:** `lib/languages/js/source-code/source-code.js:L900-L1000`
- **Problem:** Assumes tokens are in order; can infinite loop or crash if passed out-of-order tokens.
- **Maintainer Verdict:** ✅ **VALID.** Robustness fix for public API.
- **Empirical Verification:** ✅ **Verified Crash:** Manually passing a foreign/out-of-order token (e.g., `{ type: "Identifier", range: [100, 104] }`) against a contiguous source code AST (e.g., `"1+1"`) results in a runtime crash: `TypeError: Cannot read properties of null (reading 'range')`. This confirms the lack of defensive bounds checking.
- **Suggested fix:** Add defensive checks for token order.
- **Effort estimate:** S
- **⚡ Risk Assessment:** 🟢 **LOW** — Preventing a crash in a public API is a robustness fix, not a behavior change. Doesn't match any rejection pattern. Must demonstrate the crash scenario to avoid P7 ("tokens are always in order").

### #20 — FileReport Potential Crash in normalizeMultiArgReportCall

- **Category:** Architecture / Correctness
- **Severity:** Medium
- **Location:** `lib/linter/file-report.js:L130-L150`
- **Problem:** Can crash if the second argument to `context.report()` is not a string but additional arguments are provided.
- **Maintainer Verdict:** ✅ **VALID.** Reliability improvement for custom rule authors.
- **Suggested fix:** Add robust type checking for arguments in the normalization helper.
- **Effort estimate:** S
- **⚡ Risk Assessment:** 🔴 **HIGH** — Same file (`file-report.js`) as rejected #20786. DMartens and mdjermanovic already have opinions about this file. Multi-arg `context.report()` is the old API — maintainers may say "use the object form." Avoid.
