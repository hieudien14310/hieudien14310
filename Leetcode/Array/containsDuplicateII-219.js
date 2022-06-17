"use strict";
/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 *
 */
function containsNearbyDuplicate(nums, k) {
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(i - j) <= k && nums[i] === nums[j])
                return true;
        }
    }
    return result;
}
console.log(containsNearbyDuplicate([1, 0, 1, 1], 2));
