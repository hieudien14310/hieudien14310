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
 *
 */
function twoSumII(numbers: number[], target: number): number[] {
	let [start, end]: number[] = [0, numbers.length - 1]
	while (start <= end) {
		const currSum = numbers[start] + numbers[end]
		if (currSum === target) return [start + 1, end + 1]
		else if (currSum > target) end--
		else start++
	}
	return []
}
console.log(twoSumII([2, 7, 11, 15], 18))
