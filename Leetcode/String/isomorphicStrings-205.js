"use strict";
/**
 * https://leetcode.com/problems/isomorphic-strings/
 * Muốn chạy nhanh thì phải dùng 2 cái stack lưu cùng 1 vị trí rồi kiểm tra.
 */
function isIsomorphic(s, t) {
    const stack = {};
    for (let i = 0; i < s.length; i++) {
        if (!stack[s[i]]) {
            if (Object.values(stack).includes(t[i]))
                return false;
            stack[s[i]] = t[i];
        }
        if (stack[s[i]] !== t[i]) {
            return false;
        }
    }
    return true;
}
;
console.log(isIsomorphic('paper', 'title'));
