"use strict";
/**
 * https://leetcode.com/problems/triangle/
 */
function minimumTotal(triangle) {
    for (let r = triangle.length - 2; 0 <= r; r--) {
        for (let c = 0; c < triangle[r].length; c++) {
            triangle[r][c] =
                triangle[r][c] + Math.min(triangle[r + 1][c], triangle[r + 1][c + 1]);
        }
    }
    return triangle[0][0];
}
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
