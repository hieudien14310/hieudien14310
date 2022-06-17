"use strict";
/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 */
function lengthOfLongestSubstring(s) {
    const hm = new Map();
    let start = 0, maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hm.has(char)) {
            start = Math.max(hm.get(char) + 1, start);
        }
        console.log(i, start);
        hm.set(char, i);
        maxLen = Math.max(i - start + 1, maxLen);
    }
    return maxLen;
}
console.log(lengthOfLongestSubstring('bbvbf'));
