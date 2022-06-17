"use strict";
/**
 * https://leetcode.com/problems/number-of-good-pairs/
 *
 */
function numIdenticalPairs(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                count++;
            }
        }
    }
    return count;
}
;
console.log(numIdenticalPairs([1, 2, 3]));
