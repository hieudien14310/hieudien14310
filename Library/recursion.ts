/**
 * Đệ quy là hàm gọi là chính nó. Thường áp dụng cho các bài toán hoặc công thức tính toán lặp đi lặp lại để cho ra 1 kết quả cuối cùng.
 * Đệ quy phải bắt buộc có 2 trường hợp
 *  - Điều kiện 1: để return về giá trị hay còn gọi là thoát đệ quy.
 *  - Điều kiện ngược lại của 1: để thực hiện việc đệ quy.
 * Nên nhớ rằng khi viết đệ quy thì luôn phải tìm ra cho bằng được điều kiện 1 tức là điều kiện để thoát đệ quy.
 * Nếu ko là sẽ báo lỗi nghiêm trọng.
 */

/**
 * Hàm tính giai thừa.
 * @param num số nguyên dương
 * @returns kết quả tính giao thừa
 */
function factorialCalculation(num: number): any {
	if (num === 1) {
		return 1
	} else {
		return num * factorialCalculation(num - 1)
	}
}
/**
 * 5 * factorialCalculation(4)
 * 5 * 4 * factorialCalculation(3)
 * 5 * 4 * 3 * factorialCalculation(2)
 * 5 * 4 * 3 * 2 * factorialCalculation(1)
 * 5 * 4 * 3 * 2 * 1
 */
const a = factorialCalculation(5)
console.log('Giai thừa là', a)

/**
 * Push các số dương vào 1 mảng.
 * @param num số dương
 * @returns mảng các số dương
 */
function pushInt(num: number): number[] {
	const data: number[] = []
	if (num === 1) {
		data.push(1)
	} else {
		data.push(num, ...pushInt(num - 1))
	}
	return data
}
/**
 * Push: [5, ...[4, ...pushInt(3)]]
 * Push: [5, ...[4, ...[3, ...pushInt(2)]]]
 * Push: [5, ...[4, ...[3, ...[2, ...pushInt(1)]]]]
 * Push: [5, ...[4, ...[3, ...[2, ...[1]]]]]
 */
const b = pushInt(5)
console.log('Push: ', b)

/**
 * Tính tổng các số nguyên dương nhỏ hơn n
 * @param num
 * @returns
 */
function sumInt(num: number): number {
	if (num === 1) return 1
	return num + sumInt(num - 1)
}
const c = sumInt(5)
console.log('Sum: ', c)

/**
 * Xóa phần tử cuối cùng của 1 mảng sao cho độ dài mảng bằng n
 * @param nums
 * @returns
 */
function popArray(nums: number[], n: number) {
	if (nums.length <= n) return nums
	else {
		nums.pop()
		popArray(nums, n)
	}
	return nums
}
/**
 * Pop: [5,4,3,2] popArray([5,4,3,2])
 * Pop: [5,4,3,2] [5,4,3] popArray([5,4,3])
 * Pop: [5,4,3,2] [5,4,3] [5,4] popArray([5,4])
 * Pop: [5,4,3,2] [5,4,3] [5,4] [5,4]
 */
const d = popArray([5, 4, 3, 2, 1], 2)
console.log('Pop: ', d)
