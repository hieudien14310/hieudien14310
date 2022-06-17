"use strict";
/**
 * https://leetcode.com/problems/find-the-middle-index-in-array/
 * Đơn giản dể hiểu là tìm vị trí index mà tại đó sao cho tổng 1 nữa bên trái index bằng 1 nữa bên phải
 * @param nums
 */
function findMiddleIndex(nums) {
    for (let i = 0; i < nums.length; i++) {
        let leftNums = nums.slice(0, i).reduce((a, b) => a + b, 0);
        let rightNums = nums.slice(i + 1).reduce((a, b) => a + b, 0);
        if (leftNums === rightNums)
            return i;
    }
    return -1;
}
console.log(findMiddleIndex([4, 0]));
