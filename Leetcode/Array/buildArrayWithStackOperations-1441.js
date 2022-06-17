"use strict";
/**
 * https://leetcode.com/problems/build-an-array-with-stack-operations/
 *
 */
function buildArray(target, n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (target.includes(i))
            result.push('Push');
        else
            result.push('Push'), result.push('Pop');
    }
    if (target[target.length - 1] < n) {
        let minus = n - target[target.length - 1];
        while (minus > 0) {
            result.pop();
            result.pop();
            minus--;
        }
    }
    return result;
}
console.log(buildArray([2, 3, 4], 4));
