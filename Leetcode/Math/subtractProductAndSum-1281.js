"use strict";
/**
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * Tìm sự khác biệt giữa tích các chữ số và tổng các chữ số.
 */
function subtractProductAndSum(n) {
    const digits = Array.from(String(n), Number);
    let [product, sum] = [1, 0];
    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
        product *= Number(digits[i]);
    }
    return product - sum;
}
console.log(subtractProductAndSum(4421));
