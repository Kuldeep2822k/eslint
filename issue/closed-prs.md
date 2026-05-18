# Closed PRs — Lessons Learned

**Purpose:** Track every closed PR with the exact maintainer feedback to avoid repeating mistakes.

---

## Maintainer-Closed PRs (7)

| #   | PR     | Closed By    | Closing Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | #20656 | fasttime     | "This is not a bug. As per our documentation, paths to local formatters need to be prefixed by a dot. So one could specify `./@scope/formatter.js` to load the formatter. If you would like to suggest changing the current behavior, please file a change request using the predefined template."                                                                                                                                                                                                                                                                                                                                           |
| 2   | #20696 | DMartens     | "Closing this as it is highly likely AI generated / assisted as this something AI suggests when scanning a repository for performance issues backed by an unrealistic benchmark which is not even included and should contain more than one case (no suppressions, < 10 suppressions, ...). We do not allow AI contributions without an accepted issue."                                                                                                                                                                                                                                                                                     |
| 3   | #20785 | DMartens     | "I am going to close this PR as: the debug helpers do not need tests as they are only used for debugging; the two private functions which are now exported are the only ones being tested."                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4   | #20786 | DMartens     | **mdjermanovic:** "Since the purpose of updating location information is to produce locations that are expected in report messages, I think it makes sense for this function to stay in file-report.js." **DMartens:** "Currently only FileReport and Linter use the extracted updateLocationInformation. I do not see the advantage of extracting it currently into its own file (there should be at least 3 consumers), so I would be -1 for this changes."                                                                                                                                                                                |
| 5   | #20834 | DMartens     | "We keep the documentation of deleted rules on purpose to guide users migrating from an earlier version, e.g. generator-star mentions what the replacement rule is."                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 6   | #20855 | DMartens     | "We do not support non-plain objects as we want the configuration file to be as serializable as possible. Feel free to open an issue discussing this."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 7   | #20870 | mdjermanovic | **DMartens:** "This is working as expected as for example inserting at the same offset can create problems. For example rule A wants to add a hashbang at the start ([0, 0]) and rule B wants to add an import. If the fix of rule A is applied first everything is fine, but if rule B is applied first we create invalid code." **mdjermanovic:** "The current behavior is intentional as shown by existing tests. I believe it was introduced after #4321. The worst case is that ESLint will need an extra pass to apply both, which is fine in these rare cases and does not justify possible introduction of incorrect final outputs." |

---

## Self-Closed PRs (8)

| #   | PR     | Reason                      |
| --- | ------ | --------------------------- |
| 1   | #20632 |                             |
| 2   | #20633 |                             |
| 3   | #20634 |                             |
| 4   | #20635 |                             |
| 5   | #20678 | Likely superseded by #20679 |
| 6   | #20774 | Likely superseded by #20778 |
| 7   | #20832 |                             |
| 8   | #20833 |                             |

---

## Open PRs

| #   | PR     | Title                                                                  | Status      | Action Needed                           |
| --- | ------ | ---------------------------------------------------------------------- | ----------- | --------------------------------------- |
| 1   | #20788 | chore: enhance config-rule to support oneOf, anyOf, and nested schemas | 🔄 Open     | Address DMartens' review feedback       |
| 2   | #20814 | fix: correctly identify file paths in loadFormatter                    | 🔄 Open     | Respond to fasttime's edge case concern |
| 3   | #20864 | fix: detect unmodified variables in ternaries                          | ✅ Approved | Waiting for second review               |

---

## Merged PRs (16)

| #   | PR     | Title                                                            | Labels                                         | Merged  |
| --- | ------ | ---------------------------------------------------------------- | ---------------------------------------------- | ------- |
| 1   | #20863 | test: add unit tests for SuppressionsService.applySuppressions() | chore                                          | ~May 12 |
| 2   | #20838 | test: add unit tests for lib/shared/ast-utils                    | chore                                          | ~May 2  |
| 3   | #20835 | test: add unit tests for lib/shared/severity                     | chore                                          | ~May 2  |
| 4   | #20802 | test: add tests for SuppressionsService.save()                   | chore                                          | ~May 11 |
| 5   | #20797 | test: Add unit tests for SuppressionsService.prune()             | chore                                          | ~Apr 25 |
| 6   | #20778 | test: add unit tests for ForkContext                             | chore                                          | ~Apr 25 |
| 7   | #20775 | test: add unit tests for IdGenerator                             | chore, core                                    | ~Apr    |
| 8   | #20765 | test: add unit tests for SuppressionsService.suppress() method   | chore                                          | ~Apr 25 |
| 9   | #20734 | test: add tests for SuppressionsService.load() error handling    | accepted, chore                                | Apr 14  |
| 10  | #20731 | test: processor service                                          | chore                                          | Apr 11  |
| 11  | #20728 | docs: fix incomplete JSDoc param description in no-shadow rule   | accepted, documentation, rule                  | Apr 7   |
| 12  | #20727 | chore: remove stale babel-eslint10 fixture and test              | chore                                          | Apr 8   |
| 13  | #20701 | feat: check sequence expressions in `for-direction`              | accepted, bug, contributor pool, feature, rule | ~May 9  |
| 14  | #20679 | refactor: extract no unmodified loop condition                   | accepted, chore, rule                          | Mar 30  |
| 15  | #20645 | test: Add tests for eslintrc-style keys                          | chore                                          | Mar 21  |
| 16  | #20640 | test: fix CLI test for empty output file                         | accepted, chore                                | Mar 19  |

---

## Stats

- **Total PRs:** 34
- **Merged:** 16
- **Maintainer-Closed:** 7
- **Self-Closed:** 8
- **Open:** 3
- **Acceptance rate (excl. self-closed):** 16/26 = 62%
