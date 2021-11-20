/**
 * https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
 * Di chuyển từng học sinh tới từng chiếc ghế sao cho tổng số bước di chuyển là nhỏ nhất.
 * Cách giải: Sắp xếp lại 2 mảng seats và students theo thứ tự giảm dần để nhận được các cặp số mà
 * tại các vị trí tương ứng thì chúng ta nhận được học sinh nào gần chiến ghế nào nhất.
 * Ví dụ: seats: [12, 14, 19, 19, 12], students: [19, 2, 17, 20, 7]
 * => Sắp xếp giảm dần: seats: [19,19,14,12,12], students: [20, 19, 17, 7, 2]
 * Các cặp số tương ứng theo từng vị trí của học sinh
 * Student:   20    19    17     7     2
 * 			  ||	||	  ||    ||    ||
 * 			  ||	||	  ||    ||    ||
 * Moves:     01    00    03    05    10
 *  		  ||	||	  ||    ||    ||
 *  		  ||	||	  ||    ||    ||
 * Seats:     19    19    14    12    12
 * Điều kiện: Số ghế luôn luôn bằng với số học sinh.
 * @param seats
 * @param students
 */
function minMovesToSeat(seats: number[], students: number[]): number {
	let total = 0
	seats.sort((a, b) => b - a)
	students.sort((a, b) => b - a)
	for (let i = 0; i < seats.length; i++) {
		total += Math.abs(seats[i] - students[i])
	}
	return total
}
console.log(`minMovesToSeat`, minMovesToSeat([12, 14, 19, 19, 12], [19, 2, 17, 20, 7]))
