"use strict";
/**
 * https://leetcode.com/problems/single-number-ii/
 */
function singleNumberII(nums) {
    const hmNums = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hmNums)
            hmNums[nums[i]]++;
        else
            hmNums[nums[i]] = 1;
    }
    let result = 0;
    Object.keys(hmNums)
        .map((i) => parseInt(i))
        .forEach((key) => {
        if (hmNums[key] === 1)
            result = key;
    });
    return result;
}
console.log(singleNumberII([0, 1, 0, 1, 0, 1, 99]));
