/**
 * Hàm này có tác dụng là đi tiềm các cái khoảng mà tại đó các số nguyên liên tiếp nhau.
 * Điều kiện: Mảng phải được sắp xếp theo thứ tự tăng dần.
 * Input: [0, 2, 3, 4, 6, 8, 9]
 * Output: [[0],[2,3,4],[6], [8,9]]
 * @param nums : Mảng các số nguyên liên tiếp nhau.
 * @returns
 */
function getConsecNumbersRange(nums: number[]): number[][] {
	//Tạo 2 pointer và gắn lại i cho phù hợp
	let i = 0,
		result: number[][] = [],
		data: Set<number> = new Set()
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] + 1 === nums[j + 1]) {
			data.add(nums[j])
			data.add(nums[j + 1])
			continue
		} else {
			if (i === j) result.push([nums[i]])
			else {
				result.push(Array.from(data))
				data = new Set()
			}
			i = j + 1
		}
	}
	return result
}
console.log(getConsecNumbersRange([1, 2, 3, 5, 6, 8]))
