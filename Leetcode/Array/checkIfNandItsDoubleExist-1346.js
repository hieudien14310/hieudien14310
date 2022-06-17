"use strict";
/**
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/
 *
 */
function checkIfExist(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === 2 * arr[j])
                return true;
        }
    }
    return false;
}
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
