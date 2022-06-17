"use strict";
/**
 * https://leetcode.com/problems/find-common-characters/
 *
 */
function commonChars(words) {
    let first = words.shift();
    const result = [];
    for (let i = 0; i < first.length; i++) {
        const checkChar = words.filter(char => char.includes(first[i]));
        if (checkChar.length === words.length) {
            result.push(first[i]);
            words = words.map(word => word.replace(first[i], ''));
        }
    }
    return result;
}
;
console.log(commonChars(['aebc', 'cede', 'cwee']));
