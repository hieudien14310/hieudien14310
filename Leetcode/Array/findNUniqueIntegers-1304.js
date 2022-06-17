"use strict";
/**
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 *
 */
function sumZero(n) {
    const unqArr = [];
    let i = 1;
    if (n === 1)
        return [0];
    while (i <= n) {
        unqArr.push(i);
        unqArr.push(-i);
        i++;
        if (unqArr.length === n) {
            return unqArr;
        }
        else if (n - 1 === unqArr.length) {
            unqArr.push(0);
            return unqArr;
        }
    }
    return unqArr;
}
;
console.log(sumZero(7));
