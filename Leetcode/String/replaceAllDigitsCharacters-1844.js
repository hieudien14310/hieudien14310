"use strict";
/**
 * https://leetcode.com/problems/replace-all-digits-with-characters/
 */
function replaceDigits(s) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            result += alphabet[s[i - 1].charCodeAt(0) - 97 + parseInt(s[i])];
        }
        else {
            result += s[i];
        }
    }
    return result;
}
;
console.log(replaceDigits("v9"));
