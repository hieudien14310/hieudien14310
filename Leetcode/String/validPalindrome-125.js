"use strict";
/**
 * https://leetcode.com/problems/valid-palindrome/
 *
 */
function isPalindrome(s) {
    var _a;
    if (!s.trim() || s.length === 1)
        return true;
    if (s.length === 2) {
        if (s[0].toLowerCase() === s[1].toLowerCase() || ((_a = s.match(/[.~!@#$%^&*()-+=]/gi)) === null || _a === void 0 ? void 0 : _a.length))
            return true;
        else
            return false;
    }
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const standard = [];
    for (let i = 0; i < s.length; i++) {
        if (alphanumeric.includes(s[i].toLowerCase())) {
            standard.push(s[i].toLowerCase());
        }
    }
    const standardString = standard.join('');
    const reverseString = standard.reverse().join('');
    if (standardString === reverseString)
        return true;
    return false;
}
;
console.log(isPalindrome("A man, a plan, a canal: Panama"));
