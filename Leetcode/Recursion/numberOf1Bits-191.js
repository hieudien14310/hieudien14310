"use strict";
/**
 * https://leetcode.com/problems/number-of-1-bits/
 *
 */
function hammingWeight(n) {
    const stringBinaryN = Number(n).toString(2);
    let count = 0;
    const recursion = (strN, index) => {
        if (index > strN.length)
            return;
        if (strN[index] === '1') {
            count++;
        }
        recursion(strN, index + 1);
    };
    recursion(stringBinaryN, 0);
    return count;
}
console.log(hammingWeight(0b11111111111111111111111111111101));
