/**
 * https://leetcode.com/problems/power-of-two/
 * Tìm số mũ của lũy thừa 2 sao cho 2 mũ x === số nguyên n
 * Dùng recursion để giải bài này
 */
function isPowerOfTwo(n: number): boolean {
	const recursion = (n: number, i: number): boolean => {
		if (n === 1) return true
		else if (2 ** i === n) return true
		else if (2 ** i > n) return false
		else {
			return recursion(n, i + 1)
		}
	}
	return recursion(n, 0)
}
console.log(isPowerOfTwo(5))
