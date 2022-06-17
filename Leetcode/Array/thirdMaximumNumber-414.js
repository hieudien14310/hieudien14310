"use strict";
/**
 * https://leetcode.com/problems/third-maximum-number/
 *
 */
function thirdMax(nums) {
    const setNums = new Set(nums.sort((a, b) => b - a));
    const arrNums = Array.from(setNums);
    if (arrNums.length <= 2)
        return Math.max(...arrNums);
    else if (arrNums.length >= 3)
        return arrNums[2];
    return 0;
}
console.log(thirdMax([2, 2, 3, 1]));
