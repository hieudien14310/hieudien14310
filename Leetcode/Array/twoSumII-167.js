'use strict'
/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Cách giải: Vì mảng được cho đã được sắp xếp theo thứ tự tăng dần. Nên dùng 2 con trỏ
 *  - Trỏ thứ nhất là số bé nhất (số đầu tiên trong mảng)
 *  - Trỏ thứ hai là số lớn nhất (số cuối cùng trong mảng)
 *  - Cộng 2 con trỏ lại. Rồi so sánh với target
 *  - Nếu tổng 2 con trỏ lớn hơn thì giảm con trỏ thứ 2.
 *  - Nếu tổng 2 con trỏ nhỏ hơn thì tăng con trỏ thứ 1.
 *  - Lặp lại phép tính tổng 2 con trỏ và so sánh cho tới khi có đc kết quả.
 * Lý giải: Vì sao lại tăng/giảm con trỏ 1/2
 *  => Vì mảng đã được sắp xếp. Và khi cộng 2 con trỏ lại mà nó lớn hơn số target thì
 * tức là con số tổng sẽ đứng sau con số target (hay gọi là đứng bên phải và đứng bên trái nếu nhỏ hơn)
 * => Bài toán áp dụng binary search.
 */
function twoSumII(numbers, target) {
	let [start, end] = [0, numbers.length - 1]
	while (start <= end) {
		const currSum = numbers[start] + numbers[end]
		if (currSum === target) return [start + 1, end + 1]
		else if (currSum > target) end--
		else start++
	}
	return []

	//* Cách 2
	// const result = []
	// for (let i = 0; i < numbers.length; i++) {
	// 	let flag = false
	// 	for (let j = i + 1; j < numbers.length; j++) {
	// 		const total = numbers[i] + numbers[j]
	// 		if (total === target) {
	// 			result.push(i + 1, j + 1)
	// 			flag = true
	// 			break
	// 		}
	// 	}
	// 	if (flag) break
	// }
	// return result
}
const result = []
for (let i = -100_000; i < 100_000; i++) {
	result.push(i)
}
console.time('A')
console.log(twoSumII(result, 3))
console.timeEnd('A')
