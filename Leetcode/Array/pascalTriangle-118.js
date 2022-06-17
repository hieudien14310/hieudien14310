"use strict";
/**
 * https://leetcode.com/problems/pascals-triangle/
 */
function generate(numRows) {
    const result = [];
    for (let i = 1; i <= numRows; i++) {
        const cell = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                cell.push(1);
            }
            else {
                cell.push(result[i - 2][j - 1] + result[i - 2][j]);
            }
        }
        result.push(cell);
    }
    return result;
}
console.log(generate(7));
