"use strict";
/**
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * Bảng chữ cái alphabet theo English phải xuất hiện ít nhất 1 lần trong câu.
 */
function checkIfPangram(sentence) {
    const arrSentence = sentence.split('');
    const leastOnceAlphabet = new Set(arrSentence);
    if (leastOnceAlphabet.size === 26) {
        return true;
    }
    return false;
}
;
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
