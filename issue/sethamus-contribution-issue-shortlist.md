# Sethamus-Aligned Contribution Pool Issue Shortlist

Screened against:

- `sethamus-eslint-pr-analysis-master.md`
- `closed-prs.md`
- current open PR topics

## Golden candidates

| #   | Issue draft title                                                                                     | Why it fits                                                                     | Empirical Verification & Verdict                                                                                                                                                                                                           |
| --- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2   | Rule: `no-implied-eval` should report optional-chaining forms like `globalThis?.setTimeout("x")`      | Standard ECMAScript gap; clean AST completeness bug.                            | 🛑 **Already Implemented:** The rule's `GLOBAL_CANDIDATES` array and traversal logic already correctly report `globalThis?.setTimeout`. This is a redundant issue and should be dropped.                                                   |
| 10  | Rule: `no-duplicate-imports` should clarify behavior with import attributes (`with { type: "json" }`) | New syntax completeness task; likely a straightforward parser/AST coverage gap. | ✅ **Verified Clarification Needed:** Repro confirms `import 'a'` and `import 'a' with { type: 'json' }` are flagged as duplicates. The behavior with attributes needs explicit documentation and test coverage to prevent user confusion. |
| 15  | Rule: `class-methods-use-this` investigate auto-accessor edge cases with computed keys/decorators     | Standard feature-support expansion, same style as previous merged PRs.          | ✅ **Verified Investigation:** Basic `AccessorProperty` is handled, but edge cases involving computed keys and decorator combinations require AST modeling.                                                                                |
| 20  | CLI UX: improve formatter-path error text to suggest `./` prefix explicitly (change request)          | Matches explicit maintainer guidance from the closed-prs notes.                 | ✅ **Verified UX Gap:** Source code (`lib/eslint/eslint.js`) throws a generic "problem loading formatter" error when a local file is provided without `./`. Adding a hint is highly safe and requested by maintainers.                     |

## Strong secondary candidates

| #   | Issue draft title                                                                           | Why it fits                                                                      | Empirical Verification & Verdict                                                                                                                                                                                      |
| --- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | Rule: `no-restricted-properties` add granular allowlist for object+property pair exceptions | Schema extension pattern; useful if framed as a compatibility-preserving option. | ✅ **Verified Schema Gap:** The current JSON schema's `not` block strictly prevents combining `object+property` pairs with the `allowObjects`/`allowProperties` lists. Needs a backward-compatible schema adjustment. |
| 11  | Rule: `no-useless-assignment` report message should include destructuring target path       | Diagnostic-quality improvement; low-risk if scoped tightly.                      | 🟡 **Needs Specific Repro:** While diagnostic improvements are welcome, finding the exact nested destructuring path requires a concrete, real-world example to justify the added code-path complexity.                |

## Needs discussion first

| #   | Issue draft title                                                                        | Why it needs discussion                                                        |
| --- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 13  | Rule: `no-array-constructor` autofix should preserve comments in all safe transforms     | Fixer complexity rises fast; needs a crisp repro and maintainer buy-in.        |
| 17  | Core: code-path analysis should model `yield*` return/throw forks in `try/catch/finally` | High complexity core logic; only worth filing with a minimal undeniable repro. |
| 18  | Core: code-path analysis should validate `for await...of` abrupt completion paths        | Same as above: complex control-flow territory.                                 |

## Recommended filing order

1. `#2` no-implied-eval optional chaining
2. `#10` no-duplicate-imports import attributes
3. `#20` formatter-path error wording
4. `#15` class-methods-use-this auto-accessors
5. `#5` no-restricted-properties allowlist schema extension
6. `#11` no-useless-assignment message clarity

## Notes

- Keep proposals grounded in standard ECMAScript or direct CLI UX.
- Avoid TypeScript-specific core issues unless they are explicitly extension-rule work.
- Avoid alias/data-flow proposals unless you have a precise, reproducible bug and a clear low-cost fix.
