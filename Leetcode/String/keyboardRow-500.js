"use strict";
/**
 * https://leetcode.com/problems/keyboard-row/
 *
 */
function findWords(words) {
    const [rowTop, rowMiddle, rowBottom] = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    const result = [];
    for (let i = 0; i < words.length; i++) {
        let [a1, a2, a3] = ['', '', ''];
        for (let j = 0; j < words[i].length; j++) {
            const element = words[i][j].toLowerCase();
            if (rowTop.includes(element)) {
                a1 += element;
                continue;
            }
            if (rowMiddle.includes(element)) {
                a2 += element;
                continue;
            }
            if (rowBottom.includes(element)) {
                a3 += element;
                continue;
            }
        }
        if (a1 === words[i].toLowerCase())
            result.push(words[i]), a1 = '';
        if (a2 === words[i].toLowerCase())
            result.push(words[i]), a2 = '';
        if (a3 === words[i].toLowerCase())
            result.push(words[i]), a3 = '';
    }
    return result;
}
;
console.log(findWords(["adsdf", "sfd"]));
