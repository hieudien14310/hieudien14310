"use strict";
/**
 * https://leetcode.com/problems/remove-element/
 *
 */
function removeElement(nums, val) {
    nums = nums.filter(num => {
        if (num === val) {
            return false;
        }
        return true;
    });
    return nums.length;
}
;
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
