"use strict";
/**
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 *
 */
function singleNonDuplicate(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map)
            map[nums[i]]++;
        else
            map[nums[i]] = 1;
    }
    const keys = Object.keys(map);
    for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        if (map[parseInt(key)] === 1)
            return parseInt(key);
    }
    return 0;
}
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
