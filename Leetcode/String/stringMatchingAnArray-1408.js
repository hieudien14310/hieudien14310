"use strict";
/**
 * https://leetcode.com/problems/string-matching-in-an-array/
 *
 */
function stringMatching(words) {
    let i = 0;
    let result = [];
    while (i < words.length) {
        const arrRemovedItself = words.filter(j => j !== words[i]);
        for (let j = 0; j < arrRemovedItself.length; j++) {
            if (words[i].includes(arrRemovedItself[j])) {
                result.push(arrRemovedItself[j]);
            }
        }
        i++;
    }
    return [...new Set(result)];
}
;
console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]));
