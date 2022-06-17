"use strict";
/**
 * https://leetcode.com/problems/remove-palindromic-subsequences/
 *
 */
function removePalindromeSub(s) {
    if (s === s.split('').reverse().join(''))
        return 1;
    return 2;
}
;
console.log(removePalindromeSub('ababa'));
