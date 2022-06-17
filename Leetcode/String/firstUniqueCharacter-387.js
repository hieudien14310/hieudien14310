"use strict";
/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 *
 */
function firstUniqChar(s) {
    let result = s;
    while (true) {
        const letters = result.split(result[0]);
        if (letters.length <= 2) {
            return s.indexOf(result[0]);
        }
        result = letters.join('');
    }
}
;
console.log(firstUniqChar("eettllccoodde"));
