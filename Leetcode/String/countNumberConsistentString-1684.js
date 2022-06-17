"use strict";
/**
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 * Ý tưởng: Đi tìm words không hợp lệ. Sau đó dùng phép trừ để tìm ra các words hợp lệ.
 *
 */
function countConsistentStrings(allowed, words) {
    let output = words.length;
    const arrAllowed = allowed.split('');
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!arrAllowed.includes(words[i][j])) {
                output--;
                break;
            }
        }
    }
    return output;
}
;
console.log(countConsistentStrings('cad', ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]));
