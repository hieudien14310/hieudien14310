"use strict";
/**
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 *
 */
function replaceElements(arr) {
    let max = -1;
    for (let i = arr.length - 1; 0 <= i; i--) {
        let tmp = arr[i];
        arr[i] = max;
        max = Math.max(max, tmp);
    }
    return arr;
}
console.log(replaceElements([400, 2, 3, 2]));
