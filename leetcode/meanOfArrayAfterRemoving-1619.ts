/**
 * https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
 * Tìm trung bình cộng của các số nguyên trong mảng với điều kiện là:
 * Loại bỏ đi 5% các phần tử nhỏ nhất và lớn nhất của mảng.
 * Giải thích: Tức là mảng có 20 phần tử thì 5% số phần tử cần loại bỏ là 1
 * Và loại bỏ cho cả 2 phần là số lớn nhất và nhỏ nhất. Nên số phần tử
 * còn lại là 20 - 1 - 1 = 18. Tính trung bình cộng của 18 phần tử còn lại.
 *
 */
function trimMean(arr: number[]): number {
	arr.sort((a, b) => a - b)
	const percent = (arr.length * 5) / 100
	for (let i = 0; i < percent; i++) {
		arr.shift()
		arr.pop()
	}
	const sum = arr.reduce((a, b) => a + b, 0)
	return sum / arr.length
}
console.log(
	trimMean([
		6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4,
		3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
	]),
)
