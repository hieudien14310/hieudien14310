"use strict";
/**
 * https://leetcode.com/problems/majority-element/
 */
function majorityElement(nums) {
    const hmNums = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element in hmNums) {
            hmNums[element]++;
        }
        else
            hmNums[element] = 1;
    }
    const appears = nums.length / 2;
    let result = 0;
    Object.keys(hmNums)
        .map((i) => parseInt(i))
        .forEach((key) => {
        if (hmNums[key] > appears) {
            result = key;
        }
    });
    return result;
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
