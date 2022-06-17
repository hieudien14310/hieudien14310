"use strict";
/**
 * https://leetcode.com/problems/three-consecutive-odds/
 *
 */
function threeConsecutiveOdds(arr) {
    let i = 0, count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 2 !== 0) {
            i++;
            count = Math.max(count, i);
        }
        else
            i = 0;
    }
    if (count >= 3)
        return true;
    return false;
}
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
