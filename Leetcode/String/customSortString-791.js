"use strict";
/**
 * https://leetcode.com/problems/custom-sort-string/
 */
function customSortString(order, str) {
    const hmStr = {};
    const result = [];
    const addLetter = (hmStr, key, letters) => {
        if (hmStr[key]) {
            while (hmStr[key] > 0) {
                letters.push(key);
                hmStr[key]--;
            }
        }
        if (hmStr[key] === 0)
            delete hmStr[key];
    };
    for (let i = 0; i < str.length; i++) {
        if (!hmStr[str[i]])
            hmStr[str[i]] = 1;
        else
            hmStr[str[i]]++;
    }
    for (let j = 0; j < order.length; j++) {
        addLetter(hmStr, order[j], result);
    }
    const keys = Object.keys(hmStr);
    keys.forEach((key) => {
        addLetter(hmStr, key, result);
    });
    return result.join('');
}
console.log(customSortString('abdw', 'ooper'));
