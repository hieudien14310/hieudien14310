/**
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 * Ý tưởng:
 *  - Sắp xếp cái mảng boxTypes theo thứ tự giảm dần của số lượng units ở mỗi loại Box.
 *  - Sau đó kiểm tra số Box (gọi là A) với truckSize.
 *  - Nếu A < truckSize thì lấy truckSize - A để lấy số thùng còn lại có thể đặt vào Truck.
 *  - Thực hiện lại cho đến khi nào A > truckSize.
 */
function maximumUnits(boxTypes: number[][], truckSize: number): number {
	let max: number = 0
	boxTypes.sort((a, b) => b[1] - a[1])
	for (let i = 0; i < boxTypes.length; i++) {
		if (boxTypes[i][0] <= truckSize) {
			max += boxTypes[i][0] * boxTypes[i][1]
			truckSize -= boxTypes[i][0]
		} else {
			max += truckSize * boxTypes[i][1]
			return max
		}
	}
	return max
}
console.log(
	maximumUnits(
		[
			[5, 10],
			[2, 5],
			[4, 7],
			[3, 9],
		],
		10,
	),
)
