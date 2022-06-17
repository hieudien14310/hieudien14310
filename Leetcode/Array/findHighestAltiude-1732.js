"use strict";
/**
 * https://leetcode.com/problems/find-the-highest-altitude/
 *
 */
function largestAltitude(gain) {
    let [sum, highest] = [0, 0];
    for (let i = 0; i < gain.length; i++) {
        sum += gain[i];
        if (highest <= sum) {
            highest = sum;
        }
    }
    return highest;
}
;
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
