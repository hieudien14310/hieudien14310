/**
 * https://leetcode.com/problems/fibonacci-number/
 *
 */
function fib(n: number): number {
	if (n === 0) return 0
	if (n === 1) return 1
	else {
		return fib(n - 1) + fib(n - 2)
	}
}
/**
 * fib(3) + fib(2)
 * fib(2) + fib(1) + fib(1) + fib(0)
 * fib(1) + fib(0) + 1 + 1 + 0
 * 1 + 0 + 1 + 1 + 0
 */
console.log(fib(4))
