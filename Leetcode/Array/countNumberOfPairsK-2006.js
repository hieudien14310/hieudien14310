"use strict";
/**
 * https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
 * Đếm số cặp i và j sao cho |i - j| === k.
 * @param nums
 * @param k
 */
function countKDifference(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k)
                count++;
        }
    }
    return count;
}
console.log(`countKDifference`, countKDifference([3, 2, 1, 5, 4], 2));
