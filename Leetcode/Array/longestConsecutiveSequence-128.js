"use strict";
/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Tìm độ dài lớn nhất của chuỗi liên tiếp.
 */
function longestConsecutive(nums) {
    nums.sort((a, b) => a - b);
    let count = -1, consec = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1])
            consec++;
        else if (nums[i] === nums[i + 1])
            continue;
        else {
            count = Math.max(count, consec);
            consec = 0;
        }
    }
    return count + 1;
}
console.log(longestConsecutive([1, 2, 0, 1]));
