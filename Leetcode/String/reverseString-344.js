"use strict";
/**
 * https://leetcode.com/problems/reverse-string/
 *
 */
function reverseString344(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        const tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
        left++;
        right--;
    }
}
reverseString344(['h', 'e', 'l', 'l', 'o']);
