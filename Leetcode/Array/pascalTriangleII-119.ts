/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 */
function getRow(rowIndex: number): number[] {
	let result: number[][] = []
	if (rowIndex === 0) return [1]
	for (let i = 1; i <= rowIndex; i++) {
		const row: number[] = []
		for (let j = 0; j <= i; j++) {
			if (j === 0 || j === i) row.push(1)
			else row.push(result[i - 2][j - 1] + result[i - 2][j])
		}
		result.push(row)
	}
	return result[rowIndex - 1]
}
console.log(getRow(2))
