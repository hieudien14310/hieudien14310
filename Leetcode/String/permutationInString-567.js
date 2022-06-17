"use strict";
/**
 * https://leetcode.com/problems/permutation-in-string/
 *
 */
function checkInclusion(s1, s2) {
    const result = [];
    const permutations = (strs, l, r) => {
        const swap = (strs, i, j) => {
            const splStrs = strs.split('');
            let tmp = splStrs[i];
            splStrs[i] = splStrs[j];
            splStrs[j] = tmp;
            return splStrs.join('');
        };
        if (l === r) {
            result.push(strs);
        }
        else {
            for (let i = l; i <= r; i++) {
                strs = swap(strs, l, i);
                permutations(strs, l + 1, r);
                strs = swap(strs, l, i);
            }
        }
    };
    permutations(s1, 0, s1.length - 1);
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        if (s2.includes(element))
            return true;
    }
    return false;
}
console.log(checkInclusion('properties', 'properties'));
