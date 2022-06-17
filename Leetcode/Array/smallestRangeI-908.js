"use strict";
/**
 * https://leetcode.com/problems/smallest-range-i/
 *
 */
function smallestRangeI(nums, k) {
    if (nums.length <= 1)
        return 0;
    const [minNum, maxNum] = [Math.min(...nums), Math.max(...nums)];
    let tmp = -k;
    let smallest = maxNum + k;
    while (tmp <= k) {
        const sum = Math.abs(minNum + k - maxNum + tmp);
        if (smallest >= sum)
            smallest = sum;
        tmp++;
    }
    return smallest;
}
console.log(smallestRangeI([3, 2, 4, 5, 6, 7, 1], 1));
