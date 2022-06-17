"use strict";
/**
 * https://leetcode.com/problems/truncate-sentence/
 *
 */
function truncateSentence(s, k) {
    return s.split(' ').slice(0, k).join(' ');
}
;
console.log(truncateSentence('chopper is not a tanuki', 5));
