"use strict";
/**
 * https://leetcode.com/problems/sort-array-by-parity-ii/
 *
 */
function sortArrayByParityII(nums) {
    const result = new Array(nums.length);
    let [even, odd] = [0, 1];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result[even] = nums[i];
            even += 2;
        }
        else {
            result[odd] = nums[i];
            odd += 2;
        }
    }
    return result;
}
console.log(sortArrayByParityII([3, 4]));
