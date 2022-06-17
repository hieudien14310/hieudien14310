"use strict";
/**
 * https://leetcode.com/problems/power-of-three/
 *
 */
function isPowerOfThree(n) {
    const recursion = (n, i) => {
        if (n === 1)
            return true;
        else if (3 ** i === n)
            return true;
        else if (3 ** i > n)
            return false;
        else
            return recursion(n, i + 1);
    };
    return recursion(n, 0);
}
console.log(isPowerOfThree(27));
