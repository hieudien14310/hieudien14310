/**
 * https://leetcode.com/problems/find-peak-element/
 * Đi tìm vị trí index trong mảng sao cho tại vị trí index thì đó là phần tử đỉnh
 * Phần tử đỉnh là phần tử lớn hơn số bên trái và bên phải của nó. Giống với đỉnh núi/đỉnh trong đồ thị
 * Vẽ biểu đồ ra là hiểu.
 */
function findPeakElement(nums: number[]): number {
	const bs = (nums: Array<number>, left: number, right: number): number => {
		const middle: number = Math.floor((left + right) / 2)
		if (nums[middle] < nums[middle - 1]) return bs(nums, left, middle)
		else if (nums[middle] < nums[middle + 1]) return bs(nums, middle, right)
		else return middle
	}
	const left: number = 0,
		right: number = nums.length
	return bs(nums, left, right)
}
console.log('index: ', findPeakElement([1]))
