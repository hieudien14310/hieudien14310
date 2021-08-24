/**
 * https://leetcode.com/problems/consecutive-characters/
 * Giống các bài toán đến liên tiếp giống nhau dài nhất nhưng là cho string.
 *
 */
function maxPower(s: string): number {
	let count = 0,
		index = 0
	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) continue
		else {
			count = Math.max(count, i - index)
			index = i + 1
		}
	}
	return count + 1
}
console.log(maxPower('abbcccddddeeeeedcba'))
