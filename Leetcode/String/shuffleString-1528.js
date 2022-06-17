"use strict";
/**
 * https://leetcode.com/problems/shuffle-string/
 *
 */
function restoreString(s, indices) {
    let mapLetters = new Array(indices.length);
    for (let j = 0; j < mapLetters.length; j++) {
        mapLetters[indices[j]] = s[j];
    }
    return mapLetters.join('');
}
;
console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
