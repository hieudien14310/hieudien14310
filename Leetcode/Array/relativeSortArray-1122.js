"use strict";
/**
 * https://leetcode.com/problems/relative-sort-array/
 *
 */
function relativeSortArray(arr1, arr2) {
    const data = [];
    const hmArr1 = {};
    const notAppear = [];
    arr1.sort((a, b) => a - b);
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) >= 0) {
            if (arr1[i] in hmArr1 && arr2.indexOf(arr1[i]) >= 0)
                hmArr1[arr1[i]]++;
            else {
                hmArr1[arr1[i]] = 1;
            }
        }
        else
            notAppear.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        const element = arr2[j];
        while (hmArr1[element]) {
            data.push(element);
            hmArr1[element]--;
        }
    }
    return [...data, ...notAppear];
}
console.log(relativeSortArray([-4, 3, 2, 1, 1, 9, 6, 7, 4], [1, 2, 3, 4]));
