"use strict";
/**
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 *
 */
function countNegatives(grid) {
    let negative = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 1; j <= grid[i].length; j++) {
            if (grid[i][grid[i].length - j] < 0) {
                negative++;
            }
            else
                break;
        }
    }
    return negative;
}
console.log(countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
]));
