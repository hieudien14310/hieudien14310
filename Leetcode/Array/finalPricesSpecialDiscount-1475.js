"use strict";
/**
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 * Tìm giá sau chiết khấu đặc biệt.
 * Giải thích đề: giá của 1 item tại vị trí thứ i sẽ được hưởng chiết khấu nếu nó "lớn hơn hoặc bằng" giá
 * của 1 item tại vị trí thứ j. Mà j > i.
 */
function finalPrices(prices) {
    const ans = [];
    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= price) {
                price = price - prices[j];
                break;
            }
        }
        ans.push(price);
    }
    return ans;
}
console.log(finalPrices([7, 5, 8, 9, 2, 5, 7]));
