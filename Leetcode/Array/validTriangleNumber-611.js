"use strict";
/**
 * https://leetcode.com/problems/valid-triangle-number/
 */
function triangleNumber(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const b = nums[j];
            for (let z = j + 1; z < nums.length; z++) {
                const c = nums[z];
                if (Math.abs(b - c) < a && a < b + c) {
                    count++;
                }
            }
        }
    }
    return count;
}
console.log(triangleNumber([4, 2, 3, 4]));
