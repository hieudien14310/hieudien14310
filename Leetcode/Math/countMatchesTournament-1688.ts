/**
 * https://leetcode.com/problems/count-of-matches-in-tournament/
 */
function numberOfMatches(n: number): number {
	let result: number = 0
	while (n > 1) {
		if (n % 2 === 0) {
			result += n / 2
			n = n - n / 2
		} else {
			result += (n - 1) / 2
			n = n - (n - 1) / 2
		}
	}
	return result
}
console.log(numberOfMatches(70))
