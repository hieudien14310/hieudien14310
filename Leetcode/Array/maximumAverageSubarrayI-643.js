"use strict";
/**
 * https://leetcode.com/problems/maximum-average-subarray-i/
 * Cách giải: Dùng cách tính lũy tiến để tính ra 1 mảng sum
 * Sau đó dùng công thức để tìm ra số trung bình.
 */
function findMaxAverage(nums, k) {
    const sum = new Array(nums.length);
    sum[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum[i] = sum[i - 1] + nums[i];
    }
    let res = sum[k - 1] / k;
    for (let j = k; j < nums.length; j++) {
        res = Math.max(res, (sum[j] - sum[j - k]) / k);
    }
    return res;
}
console.log(findMaxAverage([1, 12, -5, -6, 50, 3, -30, 25], 4));
