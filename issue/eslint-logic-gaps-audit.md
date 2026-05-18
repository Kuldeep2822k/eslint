# ESLint New Logic Gaps Audit (Refined) — 17 May 2026

This audit identifies genuine logic gaps in ESLint core rules, refined based on architectural verification of the ECMAScript spec and ESLint's "Safe-by-Default" philosophy.

## 🥇 Priority: IMPLEMENT & FILE (High Confidence)

### 1. no-unused-private-class-members: Missing AccessorProperty Support

- **Status:** ✅ **VALIDATED BUG.**
- **Rationale:** Rule visits `PropertyDefinition` and `MethodDefinition` but ignores `AccessorProperty` (Stage 3 auto-accessors).
- **Risk:** 🟢 **LOW.** Matches success pattern of PR #20701.
- **Action:** Implement AST support and file as a Bug Report.

### 2. no-dupe-class-members: Missing AccessorProperty Support

- **Status:** ✅ **VALIDATED BUG.**
- **Rationale:** Same logic as #1. Failure to detect `accessor x;` and `x() {}` as duplicates.
- **Risk:** 🟢 **LOW.**
- **Action:** Add `AccessorProperty` to selector and `getState` logic.

---

## 🥈 Secondary: HOLD (Wait & See)

### 3. no-obj-calls: Missing Namespace Globals (Iterator)

- **Status:** 🟡 **ON HOLD.**
- **Rationale:** `Iterator`/`AsyncIterator` additions are spec-compliant, but we should wait for the verdict on the `WebAssembly` discussion first to avoid "Global Spamming."
- **Note:** `CSS` global discarded (Environment-specific API).

---

## 🥉 Tertiary: DISCUSSION ONLY (Strategic)

### 4. no-unused-labels: Token-Aware Precision Fixer

- **Status:** 💬 **DISCUSSION FIRST.**
- **Rationale:** Current bailout on comments is a defensive design choice. Porting Sethamus Pattern 1 logic is technically sound but architecturally risky.
- **Action:** Open a discussion to gauge maintainer interest before writing code.

---

## ❌ Discarded: VOID (Architectural Trap)

### 5. no-shadow-restricted-names: Modern Global Expansion

- **Status:** 🛑 **DISCARDED.**
- **Rationale:** "Restricted Names" in this rule refers to specific spec-defined identifiers (`eval`, `arguments`). Adding standard globals like `WeakRef` changes the rule's fundamental scope and would be rejected as intentional behavior (Pattern P7).
