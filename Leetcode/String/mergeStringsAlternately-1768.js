"use strict";
/**
 * https://leetcode.com/problems/merge-strings-alternately/
 * Nối xen kẽ 2 đoạn string lại với nhau.
 */
function mergeAlternately(word1, word2) {
    const totalLength = Math.max(word1.length, word2.length);
    let result = '';
    for (let i = 0; i < totalLength; i++) {
        if (word1[i])
            result += word1[i] || '';
        if (word2[i])
            result += word2[i] || '';
    }
    return result;
}
;
console.log(mergeAlternately('abcd', 'pq'));
