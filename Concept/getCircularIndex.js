"use strict";
/**
 * Hàm này có tác dụng lấy chỉ số index của 1 mảng được lặp theo hình tròn.
 * Mảng lặp theo hình tròn nghĩa là : Phần từ đầu tiên của mảng được nối với phần tử cuối cùng của mảng, tạo thành hình tròn.
 * Ví dụ: [2,3,4,5,6,7]
 *         2
 *       7   3
 *       6   4
 *         5
 * @param {*} index : Là chỉ số index
 * @param {*} circular : Là 1 mảng gồm các chữ số.
 * @returns
 */
function getCircularIndex(index, circular) {
    const codeLength = circular.length;
    let circularIndex = index % codeLength;
    if (index === 0 || codeLength + circularIndex === codeLength)
        return 0;
    return circularIndex > 0 ? circularIndex : codeLength + circularIndex;
}
const arr = [2, 3, 4, -5, 6, 7];
//Index:     0  1  2  3  4  5
//           6  7  8  9 10 11
//          12 13 14 15 16 17
console.log(arr[getCircularIndex(9, arr)]);
