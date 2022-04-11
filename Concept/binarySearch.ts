/**
 *
 * @param arr Mảng các chữ số được sắp xếp theo thứ tự tăng dần(hoặc giảm dần)
 * @param left Vị trí bắt đầu bên trái
 * @param right Vị trí bắt đầu bên phải
 * @param x Số cần tìm
 * @returns Chỉ số index của x trong mảng
 */
function binarySearch(
	arr: number[],
	left: number,
	right: number,
	x: number,
): number {
	if (right >= left) {
		// const middle = left + Math.floor((right - left) / 2)
		const middle = Math.floor((right + left) / 2)
		if (arr[middle] === x) return middle
		else if (arr[middle] > x) return binarySearch(arr, left, middle - 1, x)
		else return binarySearch(arr, middle + 1, right, x)
	}
	return -1
}
const listBinary: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const x = 70,
	left = 0,
	right = listBinary.length
const index = binarySearch(listBinary, left, right, x)
console.log(`Vị trí số ${x} trong mảng là: `, index)
