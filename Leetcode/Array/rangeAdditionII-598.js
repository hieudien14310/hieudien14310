"use strict";
/**
 * https://leetcode.com/problems/range-addition-ii/
 *
 */
function maxCount(m, n, ops) {
    if (ops.length === 0)
        return m * n;
    const matrix = [];
    for (let k = 0; k < m; k++) {
        matrix[k] = [];
        for (let o = 0; o < n; o++) {
            matrix[k][o] = 0;
        }
    }
    let [count, max] = [0, 0];
    for (let z = 0; z < ops.length; z++) {
        for (let i = 0; i < ops[z][0]; i++) {
            for (let j = 0; j < ops[z][1]; j++) {
                matrix[i][j]++;
                if (matrix[i][j] > max) {
                    max = matrix[i][j];
                    count = 0;
                }
                if (matrix[i][j] === max)
                    count++;
            }
        }
    }
    return count;
}
console.log(maxCount(3, 3, [[2, 2]]));
