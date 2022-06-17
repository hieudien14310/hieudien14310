"use strict";
/**
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
 * Tìm k chỉ số indices đầu tiên mà tại đó có tổng số soldiers là yếu nhất.
 *
 */
function kWeakestRows(mat, k) {
    const result = [];
    for (let i = 0; i < mat.length; i++) {
        const element = mat[i].reduce((a, b) => a + b, 0);
        result.push([i, element]);
    }
    result.sort((a, b) => a[1] - b[1]);
    return result.slice(0, k).map((a) => a[0]);
}
console.log(kWeakestRows([
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
], 2));
