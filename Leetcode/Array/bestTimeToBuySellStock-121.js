"use strict";
/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Tính lợi nhuận cao nhất.
 * Cách giải: Mua giá cổ phiếu ở đáy, rồi bán nó khi ở đỉnh.
 */
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(prices[i] - minPrice, maxProfit);
    }
    return maxProfit;
}
console.log(maxProfit([2, 4, 1]));
