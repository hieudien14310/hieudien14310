"use strict";
/**
 * https://leetcode.com/problems/richest-customer-wealth/
 *
 */
function maximumWealth(accounts) {
    let richest = 0;
    for (let i = 0; i < accounts.length; i++) {
        const element = accounts[i].reduce((a, b) => {
            return a + b;
        }, 0);
        if (richest <= element)
            richest = element;
    }
    return richest;
}
;
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));
