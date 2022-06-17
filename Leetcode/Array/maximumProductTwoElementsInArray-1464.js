"use strict";
/**
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 *
 */
function maxProduct(nums) {
    let [max, max2nd] = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max2nd = max;
            max = nums[i];
        }
        else if (max2nd < nums[i]) {
            max2nd = nums[i];
        }
    }
    return (max - 1) * (max2nd - 1);
}
;
console.log(maxProduct([3, 4, 5, 2]));
