"use strict";
/**
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
 *
 */
function canMakeArithmeticProgression(arr) {
    arr.sort((a, b) => a - b);
    const arithmetic = arr[1] - arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arithmetic !== arr[i + 1])
            return false;
    }
    return true;
}
console.log(canMakeArithmeticProgression([1, 2, 4]));
