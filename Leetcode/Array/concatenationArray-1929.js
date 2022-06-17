"use strict";
/**
 * https://leetcode.com/problems/concatenation-of-array/
 */
function getConcatenation(nums) {
    return [...nums, ...nums];
}
console.log(getConcatenation([1, 3, 2, 1]));
