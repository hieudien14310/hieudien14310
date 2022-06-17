"use strict";
/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 *
 */
function reverseVowels(s) {
    if (!s.trim())
        return s;
    const vowelsOfString = s.match(/[aeiou]/gi);
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!'aeiou'.includes(s[i].toLowerCase())) {
            result += s[i];
        }
        else {
            result += vowelsOfString.pop();
        }
    }
    return result;
}
;
console.log(reverseVowels('aE'));
