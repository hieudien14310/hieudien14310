"use strict";
/**
 * https://leetcode.com/problems/number-of-different-integers-in-a-string/
 *
 */
function numDifferentIntegers(word) {
    const result = new Set();
    let tmpS = word.replace(/[a-z]/gi, '-');
    tmpS.split('-').forEach(i => {
        if (i !== '') {
            result.add(BigInt(i));
        }
    });
    return result.size;
}
;
console.log(numDifferentIntegers("a01b001c10"));
