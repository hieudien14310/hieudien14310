/**
 * https://leetcode.com/problems/distribute-candies/
 *
 */
function distributeCandies(candyType: number[]): number {
	const typesCandy: Set<number> = new Set(candyType)
	let toEat = candyType.length / 2
	if (typesCandy.size <= toEat) return typesCandy.size
	else if (typesCandy.size > toEat) return toEat
	return 1
}
console.log(distributeCandies([6, 6, 6, 6]))
