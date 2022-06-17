"use strict";
/**
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 *
 */
function uncommonFromSentences(s1, s2) {
    const arr = s1.split(' ').concat(s2.split(' '));
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = -1;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    const stack = [];
    Object.keys(obj).forEach(key => {
        if (obj[key] === -1)
            stack.push(key);
    });
    return stack;
}
;
console.log(uncommonFromSentences("this apple is sweet", "sour"));
