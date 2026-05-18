# Sethamus-Aligned Contribution Pool Issue Shortlist

Screened against:

- `sethamus-eslint-pr-analysis-master.md`
- `closed-prs.md`
- current open PR topics

## Golden candidates

| #   | Issue draft title                                                                                     | Why it fits                                                                     |
| --- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 2   | Rule: `no-implied-eval` should report optional-chaining forms like `globalThis?.setTimeout("x")`      | Standard ECMAScript gap; clean AST completeness bug.                            |
| 10  | Rule: `no-duplicate-imports` should clarify behavior with import attributes (`with { type: "json" }`) | New syntax completeness task; likely a straightforward parser/AST coverage gap. |
| 15  | Rule: `class-methods-use-this` investigate auto-accessor edge cases with computed keys/decorators     | Standard feature-support expansion, same style as previous merged PRs.          |
| 20  | CLI UX: improve formatter-path error text to suggest `./` prefix explicitly (change request)          | Matches explicit maintainer guidance from the closed-prs notes.                 |

## Strong secondary candidates

| #   | Issue draft title                                                                           | Why it fits                                                                      |
| --- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 5   | Rule: `no-restricted-properties` add granular allowlist for object+property pair exceptions | Schema extension pattern; useful if framed as a compatibility-preserving option. |
| 11  | Rule: `no-useless-assignment` report message should include destructuring target path       | Diagnostic-quality improvement; low-risk if scoped tightly.                      |

## Needs discussion first

| #   | Issue draft title                                                                        | Why it needs discussion                                                        |
| --- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 13  | Rule: `no-array-constructor` autofix should preserve comments in all safe transforms     | Fixer complexity rises fast; needs a crisp repro and maintainer buy-in.        |
| 17  | Core: code-path analysis should model `yield*` return/throw forks in `try/catch/finally` | High complexity core logic; only worth filing with a minimal undeniable repro. |
| 18  | Core: code-path analysis should validate `for await...of` abrupt completion paths        | Same as above: complex control-flow territory.                                 |

## Drop these traps

| #   | Issue draft title                                  | Reason to drop                                                                                |
| --- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 4   | `no-restricted-globals` alias tracking             | Core ESLint avoids cross-scope alias/data-flow tracking without a type checker.               |
| 7   | `func-style` TS overload signatures                | Core does not target TypeScript syntax directly.                                              |
| 8   | `func-style` overload + implementation handling    | Same TS-core mismatch.                                                                        |
| 9   | `no-duplicate-imports` `import type` parity        | Same TS-core mismatch.                                                                        |
| 16  | `no-empty-function` TS empty-method allowances     | Same TS-core mismatch.                                                                        |
| 19  | Flat-config legacy directive warning coverage      | Already close to migration/maintenance territory; only file if there’s a concrete regression. |
| 21  | Type parity for schema object/array forms          | This is implementation detail, not an issue topic by itself.                                  |
| 22  | TS parser parity tests without a concrete rule bug | Too generic; needs a specific rule failure first.                                             |

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
