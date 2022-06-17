"use strict";
/**
 * https://leetcode.com/problems/matrix-diagonal-sum/
 * Tính tổng của các số tại đường chéo của matrix
 */
function diagonalSum(mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        const element = mat[i];
        if (i === element.length - i - 1) {
            sum += element[i];
            continue;
        }
        sum += element[i] + element[element.length - i - 1];
    }
    return sum;
}
console.log(diagonalSum([
    [2, 1, 1, 1, 3, 1],
    [1, 2, 1, 3, 1, 1],
    [1, 1, 3, 1, 1, 1],
    [1, 3, 1, 2, 1, 1],
    [3, 1, 1, 1, 2, 1],
    [3, 1, 1, 1, 2, 1],
]));
