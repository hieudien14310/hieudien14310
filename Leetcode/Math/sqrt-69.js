"use strict";
/**
 * https://leetcode.com/problems/sqrtx/
 * Bài này chính xác là tìm số nguyên A sao cho nó bình phương gần bằng hoặc bằng X
 * Đi tìm số nguyên dương tiệm cận X.
 */
function mySqrt(x) {
    if (x === 0 || x === 1)
        return x;
    let left = 0, right = x;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sqrt = mid * mid;
        const sqrtTop = (mid + 1) * (mid + 1);
        const sqrtBot = (mid - 1) * (mid - 1);
        if (sqrt === x)
            return mid;
        else if (x < sqrt) {
            if (x < sqrtBot)
                right = mid;
            else
                return mid - 1;
        }
        else {
            if (sqrtTop < x)
                left = mid;
            else
                return mid;
        }
    }
    return -1;
}
console.log(mySqrt(36));
