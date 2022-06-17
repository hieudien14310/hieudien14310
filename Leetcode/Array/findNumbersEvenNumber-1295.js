"use strict";
/**
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 * Tìm các số có độ dài là chẵn.
 */
function findNumbers(nums) {
    return nums.filter(num => num.toString().length % 2 === 0).length;
}
;
console.log(findNumbers([555, 901, 482, 1771]));
