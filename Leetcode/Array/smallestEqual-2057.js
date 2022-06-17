"use strict";
/**
 * https://leetcode.com/problems/smallest-index-with-equal-value/
 * Đi tìm vị trí index nhỏ nhất mà tại đó giá trị tại vị trí index === index.
 *
 * @param nums
 */
function smallestEqual(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) {
            // Return ngay khi vào đoạn if này 1 lần. Tức là i là thằng nhỏ nhất.
            return i;
        }
    }
    return -1;
}
// console.log(`smallestEqual `, smallestEqual([7, 8, 3, 5, 2, 6, 3, 1, 1, 4, 5, 4, 8, 7, 2, 0, 9, 9, 0, 5, 7, 1, 6]))
console.log(`smallestEqual `, smallestEqual([6, 5, 4, 4, 9, 1, 5, 0, 8, 8, 5, 8, 0, 9, 8, 3, 6, 5, 2, 7, 7, 6, 6, 8, 9, 6, 5, 6, 5, 6, 8, 6, 9, 5, 1, 0, 5, 5]));
