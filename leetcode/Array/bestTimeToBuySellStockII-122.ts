/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * Tính tổng số lợi nhuận.
 */
function maxProfit2(prices: number[]): number {
	let sum: number = 0
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < prices[i + 1]) {
			sum += prices[i + 1] - prices[i]
		}
	}
	return sum
}
console.log(maxProfit2([7, 6, 4, 3, 2, 1, 10]))
