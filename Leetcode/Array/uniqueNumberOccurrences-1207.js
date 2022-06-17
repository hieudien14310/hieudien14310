"use strict";
/**
 * https://leetcode.com/problems/unique-number-of-occurrences/
 *
 */
function uniqueOccurrences(arr) {
    const hmArr = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!hmArr[element])
            hmArr[element] = 1;
        else
            hmArr[element]++;
    }
    const numberOccurrences = Object.values(hmArr);
    const result = [];
    for (let j = 0; j < numberOccurrences.length; j++) {
        if (result.includes(numberOccurrences[j])) {
            return false;
        }
        else
            result.push(numberOccurrences[j]);
    }
    return true;
}
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
