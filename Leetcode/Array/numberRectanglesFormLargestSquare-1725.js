"use strict";
/**
 * https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
 *
 */
function countGoodRectangles(rectangles) {
    let [max, count] = [0, 0];
    for (let i = 0; i < rectangles.length; i++) {
        const min = Math.min(...rectangles[i]);
        if (max < min)
            max = min, count = 1;
        else if (max === min)
            count++;
    }
    return count;
}
;
console.log(countGoodRectangles([[2, 3], [8, 7], [4, 3], [8, 7]]));
