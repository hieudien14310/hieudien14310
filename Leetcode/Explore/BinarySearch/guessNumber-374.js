"use strict";
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
/**
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 * Đề khá dễ hiểu nên ko cần giải thích.
 * @param n
 */
const guess = function (numGuess) {
    const PICKED = 9;
    if (PICKED < numGuess)
        return -1;
    else if (PICKED > numGuess)
        return 1;
    else
        return 0;
};
function guessNumber(n) {
    const binarySearch = (left, right) => {
        const numGuess = Math.floor((left + right) / 2);
        console.log(numGuess, left, right);
        if (guess(numGuess) === 0)
            return numGuess;
        else if (guess(numGuess) === 1)
            return binarySearch(numGuess + 1, right);
        else
            return binarySearch(left, numGuess - 1);
    };
    return binarySearch(1, n);
}
console.log(guessNumber(11));
