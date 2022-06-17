"use strict";
/**
 * https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
 *
 */
function isSumEqual(firstWord, secondWord, targetWord) {
    const max = Math.max(firstWord.length, secondWord.length, targetWord.length);
    let codeFirst = '', codeSecond = '', codeTarget = '';
    for (let i = 0; i < max; i++) {
        if (firstWord[i])
            codeFirst += `${firstWord[i].charCodeAt(0) - 97}`;
        if (secondWord[i])
            codeSecond += `${secondWord[i].charCodeAt(0) - 97}`;
        if (targetWord[i])
            codeTarget += `${targetWord[i].charCodeAt(0) - 97}`;
    }
    if (parseInt(codeFirst) + parseInt(codeSecond) === parseInt(codeTarget))
        return true;
    return false;
}
;
console.log(isSumEqual('aaa', 'a', 'aaaa'));
