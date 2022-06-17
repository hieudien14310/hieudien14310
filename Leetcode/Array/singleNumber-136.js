"use strict";
/**
 * https://leetcode.com/problems/single-number/
 * Xem qua toán tử bitwise XOR để giải bài này nhanh hơn.
 */
function singleNumber(nums) {
    const hmNums = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hmNums[nums[i]]) {
            hmNums[nums[i]] = 1;
        }
        else
            hmNums[nums[i]]++;
    }
    let result = 0;
    const keys = Object.keys(hmNums);
    for (let i = 0; i < keys.length; i++) {
        if (hmNums[parseInt(keys[i])] === 1)
            return parseInt(keys[i]);
    }
    return result;
    // Cách giải dùng XOR.
    // let result: number = 0
    // for (let i = 0; i < nums.length; i++) {
    // 	result ^= nums[i]
    // }
    // return result
}
console.log(singleNumber([2]));
