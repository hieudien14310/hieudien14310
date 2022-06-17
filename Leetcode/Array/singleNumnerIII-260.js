"use strict";
/**
 * https://leetcode.com/problems/single-number-iii/
 */
function singleNumberIII(nums) {
    const hmNums = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hmNums)
            hmNums[nums[i]]++;
        else
            hmNums[nums[i]] = 1;
    }
    const result = [];
    Object.keys(hmNums).forEach((key) => {
        if (hmNums[key] === 1)
            result.push(parseInt(key));
    });
    return result;
}
console.log(singleNumberIII([1, 0]));
