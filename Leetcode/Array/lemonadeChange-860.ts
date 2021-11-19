/**
 * https://leetcode.com/problems/lemonade-change/
 *
 */
function lemonadeChange(bills: number[]): boolean {
	const stack5: number[] = []
	const stack10: number[] = []
	for (let i = 0; i < bills.length; i++) {
		if (bills[i] === 5) stack5.push(bills[i])
		else if (bills[i] === 10) {
			if (stack5.length > 0) stack5.pop(), stack10.push(10)
			else return false
		} else if (bills[i] === 20) {
			if (stack10.length >= 1 && stack5.length >= 1) {
				stack5.pop()
				stack10.pop()
			} else if (stack5.length >= 3 && stack10.length === 0) {
				stack5.pop()
				stack5.pop()
				stack5.pop()
			} else return false
		}
	}
	return true
}
console.log(
	lemonadeChange([
		5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 20, 5, 5, 5, 5, 5, 5, 5, 10, 5,
		20, 20, 5, 5, 5, 5, 5, 10, 5, 5, 5, 20, 5, 5, 5, 10, 5, 5, 10, 5, 20, 5, 5,
		20, 5, 10, 5, 5, 20, 5, 5, 5, 5, 5, 5, 10, 20, 5, 20, 20, 10, 5, 20, 20, 5,
		10, 5, 5, 5, 5, 5, 5, 20, 20, 20, 20, 5, 5, 10, 5, 20, 5, 5, 5, 5, 10, 10,
		5, 5, 5, 20, 5, 5, 5, 5, 5, 5, 20, 5, 20, 10, 10, 20, 5, 5, 5, 5, 20, 20, 5,
		5, 5, 5, 20, 5, 20, 20, 5, 5,
	]),
)
