"use strict";
/**
 * https://leetcode.com/problems/rank-transform-of-an-array/
 * @param arr
 */
function arrayRankTransform(arr) {
    const sortedArray = arr.map((i) => i).sort((a, b) => a - b);
    let rank = 1;
    const keepIndex = {};
    for (const num of sortedArray) {
        if (!(num in keepIndex)) {
            keepIndex[num] = rank;
            rank++;
        }
    }
    return arr.map((num) => keepIndex[num]);
}
console.log(arrayRankTransform([48, 37, 37, 37]));
