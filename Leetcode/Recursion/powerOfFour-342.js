"use strict";
/**
 * https://leetcode.com/problems/power-of-four/
 *
 */
function isPowerOfFour(n) {
    const recursion = (n, i) => {
        if (n === 1)
            return true;
        else if (4 ** i === n)
            return true;
        else if (4 ** i > n)
            return false;
        else
            return recursion(n, i + 1);
    };
    return recursion(n, 0);
}
console.log(isPowerOfFour(5));
