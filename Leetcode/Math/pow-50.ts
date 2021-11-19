/**
 * https://leetcode.com/problems/powx-n/
 *
 */
function myPow(x: number, n: number): number {
	if (n === 0) return 1
	else if (n === 1) return x
	else if (n < 0) return 1 / myPow(x, -n)
	else if (n & 1) {
		return x * myPow(x * x, (n - 1) / 2)
	} else {
		return myPow(x * x, n / 2)
	}
}
console.log(myPow(2, 5))
