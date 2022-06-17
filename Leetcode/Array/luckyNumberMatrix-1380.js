"use strict";
/**
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 * Tìm các con số trong matrix phải thỏa điều kiện
 *  - Bé nhất tại cái row của nó
 *  - Lớn nhất tại column của nó.
 * Ý tưởng:
 *  - Tìm các số bé nhất của mỗi row.
 *  - Tìm các số lớn nhất của mỗi column.
 *  - Kiểm tra con số nào có trong cả 2 mảng.
 */
function luckyNumbers(matrix) {
    const [result, minNumberRows, maxNumberColumns] = [[], [], []];
    for (let i = 0; i < matrix[0].length; i++) {
        const maxAtColumn = [];
        for (let j = 0; j < matrix.length; j++) {
            maxAtColumn.push(matrix[j][i]);
        }
        maxNumberColumns.push(Math.max(...maxAtColumn));
    }
    for (let z = 0; z < matrix.length; z++) {
        minNumberRows.push(Math.min(...matrix[z]));
    }
    for (let z = 0; z < minNumberRows.length; z++) {
        if (maxNumberColumns.includes(minNumberRows[z]))
            result.push(minNumberRows[z]);
    }
    return result;
}
console.log(luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
]));
