"use strict";
/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 */
function lengthOfLIS(nums) {
    const lis = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }
    let max = 0;
    for (let k = 0; k < lis.length; k++) {
        if (max <= lis[k])
            max = lis[k];
    }
    return max;
}
console.log(lengthOfLIS([1, 2, 3, 1, 2, 3, 2, 2]));
