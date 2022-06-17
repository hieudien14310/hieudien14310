"use strict";
/**
 * https://leetcode.com/problems/monotonic-array/
 *
 */
function isMonotonic(nums) {
    let increasing = 0, descrasing = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1])
            continue;
        if (nums[i] < nums[i + 1]) {
            increasing++;
        }
        else
            descrasing++;
    }
    if (increasing !== 0 && descrasing !== 0)
        return false;
    return true;
}
console.log(isMonotonic([6, 5, 4, 4]));
