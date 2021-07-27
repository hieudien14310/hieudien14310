/**
 * https://leetcode.com/problems/lemonade-change/
 *
 */
function lemonadeChange(bills: number[]): boolean {
	const stack5: number[] = []
	const stack10: number[] = []
	let correct: boolean = true
	for (let i = 0; i < bills.length; i++) {
		const bill = bills[i]
		if (bill === 5) stack5.push(bill)
		else if (bill === 10) {
			if (stack5.length > 0) stack5.pop(), stack10.push(10)
			else {
				correct = false
				break
			}
		} else if (bill === 20) {
			if (stack10.length >= 1 && stack5.length >= 1) {
				stack5.pop()
				stack10.pop()
			} else if (stack5.length >= 3 && stack10.length === 0) {
				stack5.pop()
				stack5.pop()
				stack5.pop()
			} else {
				correct = false
				break
			}
		}
	}
	if (!correct) return false
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
