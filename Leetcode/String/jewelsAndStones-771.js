"use strict";
/**
 * https://leetcode.com/problems/jewels-and-stones/
 */
function numJewelsInStones(jewels, stones) {
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        count += stones.split(jewels[i]).length - 1;
    }
    return count;
}
;
console.log(numJewelsInStones('aA', 'aAAAbbbb'));
