"use strict";
/**
 * https://leetcode.com/problems/can-place-flowers/
 *
 */
function canPlaceFlowers(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (n > 0) {
            if (flowerbed[i - 1] !== 1 &&
                flowerbed[i + 1] !== 1 &&
                flowerbed[i] !== 1) {
                flowerbed[i] = 1;
                n--;
            }
        }
        else
            break;
    }
    return n === 0;
}
console.log(canPlaceFlowers([0, 0, 0, 1], 2));
