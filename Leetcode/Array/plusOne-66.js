"use strict";
/**
 * https://leetcode.com/problems/plus-one/
 *
 */
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            //Chạy đc vào đoạn if này có nghĩa là số đầu tiên trong mảng cũng là số 9.
            digits.unshift(1);
            return digits;
        }
    }
    return digits;
}
console.log(plusOne([9, 9]));
