"use strict";
/**
 * https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 *
 */
function canBeEqual(target, arr) {
    const hmTarget = {};
    for (let i = 0; i < target.length; i++) {
        if (!hmTarget[target[i]])
            hmTarget[target[i]] = 1;
        else
            hmTarget[target[i]]++;
    }
    for (let j = 0; j < arr.length; j++) {
        if (hmTarget[arr[j]])
            hmTarget[arr[j]]--;
        else
            return false;
    }
    return true;
}
console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3]));
