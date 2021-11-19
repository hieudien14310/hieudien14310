/**
 * https://leetcode.com/problems/first-bad-version/
 *
 */
var solution = function (isBadVersion: any) {
	return function (n: number): number {
		let left = 0,
			right = n,
			firstBadVersion = 0
		while (left <= right) {
			const mid = Math.floor((left + right) / 2)
			if (isBadVersion(mid)) {
				firstBadVersion = mid
				right = mid - 1
			} else left = mid + 1
		}
		return firstBadVersion
	}
}
// console.log(solution(1)(5))
