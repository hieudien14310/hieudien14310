/**
 * https://leetcode.com/problems/distribute-candies/
 * Tìm tổng số loại kẹo mà Alice có thể ăn được theo lời bác sĩ.
 * Ý tưởng: Alice chỉ được ăn 1/2 số kẹo đang có.
 * Tìm số loại kẹo mà Alice có.
 * Sau đó so sánh với số kẹo mà Alice có thể ăn được.
 */
function distributeCandies(candyType: number[]): number {
	const typesCandy: Set<number> = new Set(candyType)
	let toEat = candyType.length / 2
	if (typesCandy.size <= toEat) return typesCandy.size
	else if (typesCandy.size > toEat) return toEat
	return 1
}
console.log(distributeCandies([6, 6, 6, 6]))
