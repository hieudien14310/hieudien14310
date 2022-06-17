"use strict";
/**
 * https://leetcode.com/problems/length-of-last-word/
 *
 */
function lengthOfLastWord(s) {
    const arrS = s.split(' ');
    let lastWord = '';
    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i]) {
            lastWord = arrS[i];
        }
    }
    if (lastWord)
        return lastWord.length;
    return 0;
}
;
console.log(lengthOfLastWord("a a          bdww "));
