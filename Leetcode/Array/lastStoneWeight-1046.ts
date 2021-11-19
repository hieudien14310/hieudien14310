/**
 * https://leetcode.com/problems/last-stone-weight/
 *
 */
function lastStoneWeight(stones: number[]): number {
	if (stones.length === 1) return stones[0]
	while (true) {
		stones.sort((a, b) => a - b)
		const max1st: any = stones.pop()
		const max2nd: any = stones.pop()
		if (max1st !== max2nd) {
			stones.push(max1st - max2nd)
		}
		if (stones.length === 1 || !stones.length) break
	}
	return stones.length ? stones[0] : 0
}
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))
