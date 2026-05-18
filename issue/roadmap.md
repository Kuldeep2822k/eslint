# ESLint Contribution Roadmap

This roadmap orders the empirically verified issues by their "Acceptance Probability." We prioritize clear logic bugs (AST completeness gaps) and explicit maintainer requests first, leaving subjective or architectural discussions for later.

---

## 🟢 Phase 1: High-Impact, Zero-Risk Bugs (Do First)

_These are undeniable bugs caused by missing AST node support for modern ECMAScript features. They follow established PR success patterns (like PR #20701)._

1. **`no-self-assign`: Missing `AssignmentPattern` Support**
    - **Why first:** We proved this rule completely fails on `var [a = a] = []`. It's a fundamental logic gap in destructuring coverage.
    - **Action:** Open issue with our repro, then PR to add `AssignmentPattern` to `eachSelfAssignment`.
2. **`no-unused-private-class-members`: Missing `AccessorProperty` Support**
    - **Why second:** We proved `class A { accessor #x; }` is ignored. Fixes a clear Stage 3 auto-accessor gap.
    - **Action:** Open issue, then PR to add `AccessorProperty` to the visitor.
3. **`no-dupe-class-members`: Missing `AccessorProperty` Support**
    - **Why third:** Similar to #2, we proved duplicate auto-accessors are not flagged.
    - **Action:** Open issue, then PR to update the `getState` logic for `AccessorProperty`.

---

## 🟡 Phase 2: Explicit Requests & Quick Wins (Do Second)

_These are straightforward improvements with extremely low rejection risk because they are either directly requested by maintainers or simple list additions._

4. **CLI UX: Formatter-Path Error Wording**
    - **Why:** Directly addresses maintainer feedback from PR #20656. We verified the code currently throws a generic error.
    - **Action:** Open a Change Request (per maintainer instructions) to suggest prefixing local paths with `./` in the error message.
5. **`no-obj-calls`: Missing `WebAssembly` Global**
    - **Why:** We proved `WebAssembly()` is ignored. It's a 1-line array addition.
    - **Action:** Open a bug report, then PR to add it to `nonCallableGlobals`.

---

## 🟠 Phase 3: Core API Robustness (Do Third)

_Higher stakes because it touches public API utilities, but the crash is empirically proven._

6. **`SourceCode.isSpaceBetween` Potential Crash**
    - **Why:** We proved that out-of-order/fake tokens cause a fatal `TypeError: Cannot read properties of null`. This hardens the public API for plugin authors.
    - **Action:** Open a bug report with our custom AST repro script, then PR to add defensive bounds checking.

---

## 🔵 Phase 4: Discussions & Edge Cases (Do Last)

_These require careful framing or maintainer alignment before writing any code._

7. **`no-constant-condition` yield vs await Inconsistency**
    - **Why:** We proved `await` throws an error while `yield` does not. However, maintainers might argue this is intentional.
    - **Action:** Open a discussion issue first to ask if `AwaitExpression` should clear scope trackers like `YieldExpression` does.
8. **`no-duplicate-imports` Import Attributes Clarification**
    - **Why:** We proved `import 'a'` and `import 'a' with { type: 'json' }` are flagged as duplicates.
    - **Action:** Open an issue asking if this is intended behavior and propose adding documentation/tests to clarify it.
9. **`no-restricted-properties` Schema Extension**
    - **Why:** Requires changing the JSON schema's `not` block.
    - **Action:** Open an issue proposing a backward-compatible schema adjustment.
10. **`class-methods-use-this` Auto-accessors with Decorators/Computed Keys**
    - **Why:** Basic accessors work, but edge cases need investigation.
    - **Action:** Investigate the AST structures for decorators + computed keys before filing.

---

## ❌ Dropped / Resolved (Do Not File)

- **`no-implied-eval` with `globalThis`**: Proven redundant. Already works in the codebase.
- **`no-unused-labels` token-aware fixer**: Proven to be an intentional bailout.
- **`no-shadow-restricted-names` modern global expansion**: Proven out-of-scope for the rule's specific ES2020 mandate.
- **Bucket 3 (TS/Implementation Traps)**: Completely discarded.
