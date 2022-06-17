"use strict";
/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 *
 */
function sortedSquares(nums) {
    // return nums.map((num) => num ** 2).sort((a, b) => a - b)
    let left = 0, right = nums.length - 1, writePointer = nums.length - 1;
    const ans = [];
    while (left <= right) {
        const leftElement = Math.pow(Math.abs(nums[left]), 2);
        const rightElement = Math.pow(Math.abs(nums[right]), 2);
        if (leftElement >= rightElement) {
            ans[writePointer] = leftElement;
            left++;
        }
        else {
            ans[writePointer] = rightElement;
            right--;
        }
        writePointer--;
    }
    return ans;
}
console.log(sortedSquares([-11, -1, 2, 3, 7]));
