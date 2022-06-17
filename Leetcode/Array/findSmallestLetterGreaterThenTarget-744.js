"use strict";
/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 *
 */
function nextGreatestLetter(letters, target) {
    const setLetters = new Set();
    for (let i = 0; i < letters.length; i++) {
        const element = letters[i];
        setLetters.add(element);
    }
    const arrLetters = Array.from(setLetters);
    for (let i = 0; i < arrLetters.length; i++) {
        const letter = arrLetters[i];
        if (letter.charCodeAt(0) > target.charCodeAt(0))
            return letter;
    }
    return letters[0];
}
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
