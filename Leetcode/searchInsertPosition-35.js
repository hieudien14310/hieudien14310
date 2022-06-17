"use strict";
/**
 * https://leetcode.com/problems/search-insert-position/
 *
 */
function searchInsert(nums, target) {
    let left = 0, right = nums.length;
    if (target < nums[left])
        return left;
    if (target > nums[right - 1])
        return right;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target)
            return mid;
        else if (target < nums[mid]) {
            if (nums[mid - 1] < target && target < nums[mid]) {
                return mid;
            }
            else
                right = mid - 1;
        }
        else {
            if (nums[mid] < target && target < nums[mid + 1])
                return mid + 1;
            else
                left = mid + 1;
        }
    }
    return 0;
}
console.log(searchInsert([1, 3, 5, 6], 7));
