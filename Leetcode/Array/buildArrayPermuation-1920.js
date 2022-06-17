"use strict";
/**
 * https://leetcode.com/problems/build-array-from-permutation/
 *
 */
function buildArray1920(nums) {
    const result = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[nums[i]];
    }
    return result;
}
console.log(buildArray1920([0, 2, 1, 5, 3, 4]));
