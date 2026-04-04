/**
 * @fileoverview Tests for isRegionalIndicatorSymbol.
 */

"use strict";

const assert = require("chai").assert;
const isRegionalIndicatorSymbol = require("../../../../../lib/rules/utils/unicode/is-regional-indicator-symbol");

describe("isRegionalIndicatorSymbol", () => {
    const testCases = [
        { description: "the lower bound of regional indicator symbols", code: 0x1f1e6, expected: true },
        { description: "the upper bound of regional indicator symbols", code: 0x1f1ff, expected: true },
        { description: "a character within the regional indicator symbols range", code: 0x1f1f0, expected: true },
        { description: "a character just below the lower bound", code: 0x1f1e5, expected: false },
        { description: "a character just above the upper bound", code: 0x1f200, expected: false },
        { description: "a regular character code ('a')", code: 0x61, expected: false },
        { description: "0", code: 0, expected: false }
    ];

    testCases.forEach(({ description, code, expected }) => {
        it(`should return ${expected} for ${description}`, () => {
            assert.strictEqual(isRegionalIndicatorSymbol(code), expected);
        });
    });
});
