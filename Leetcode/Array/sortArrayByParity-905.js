"use strict";
/**
 * https://leetcode.com/problems/sort-array-by-parity/
 *
 */
function sortArrayByParity(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0)
            result.unshift(nums[i]);
        else
            result.push(nums[i]);
    }
    return result;
}
console.log(sortArrayByParity([3, 1, 2, 4]));
