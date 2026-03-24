/**
 * @fileoverview Tests for isRegionalIndicatorSymbol.
 */

"use strict";

const assert = require("chai").assert;
const isRegionalIndicatorSymbol = require("../../../../../lib/rules/utils/unicode/is-regional-indicator-symbol");

describe("isRegionalIndicatorSymbol", () => {
    it("should return true for the lower bound of regional indicator symbols", () => {
        assert.isTrue(isRegionalIndicatorSymbol(0x1f1e6));
    });

    it("should return true for the upper bound of regional indicator symbols", () => {
        assert.isTrue(isRegionalIndicatorSymbol(0x1f1ff));
    });

    it("should return true for a character within the regional indicator symbols range", () => {
        assert.isTrue(isRegionalIndicatorSymbol(0x1f1f0));
    });

    it("should return false for a character just below the lower bound", () => {
        assert.isFalse(isRegionalIndicatorSymbol(0x1f1e5));
    });

    it("should return false for a character just above the upper bound", () => {
        assert.isFalse(isRegionalIndicatorSymbol(0x1f200));
    });

    it("should return false for a regular character code", () => {
        assert.isFalse(isRegionalIndicatorSymbol(0x61)); // 'a'
    });

    it("should return false for 0", () => {
        assert.isFalse(isRegionalIndicatorSymbol(0));
    });
});
