"use strict";
/**
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 * @param words
 */
function firstPalindrome(words) {
    function reverseWordByRecursion(word = '', index = -1) {
        if (!word)
            return '';
        if (!word.charAt(index)) {
            return '';
        }
        return word.charAt(0) + reverseWordByRecursion(word.substring(1));
    }
    for (const word of words) {
        const reverseWord = reverseWordByRecursion(word, word.length - 1);
        if (word === reverseWord)
            return word;
    }
    return '';
}
console.log(firstPalindrome(['aba', 'ghi']));
