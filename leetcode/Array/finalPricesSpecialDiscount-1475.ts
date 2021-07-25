/**
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 *
 */
function finalPrices(prices: number[]): number[] {
	const ans: number[] = []
	for (let i = 0; i < prices.length; i++) {
		let price = prices[i]
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[j] <= price) {
				price = price - prices[j]
				break
			}
		}
		ans.push(price)
	}
	return ans
}
console.log(finalPrices([7, 5, 8, 9, 2, 5, 7]))
