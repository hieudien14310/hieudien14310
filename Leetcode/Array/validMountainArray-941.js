"use strict";
/**
 * https://leetcode.com/problems/valid-mountain-array/submissions/
 * Chứng minh array được cho là 1 ngọn núi.
 * Cách giải: Đi tìm đỉnh núi và đồng thời duyệt bên mảng ở bên trái đỉnh núi, sau đó duyệt mảng bên phải đỉnh núi.
 * @param arr
 */
function validMountainArray(arr) {
    let index = 0;
    while (index < arr.length - 1) {
        if (arr[index] < arr[index + 1])
            index++;
        else
            break;
    }
    if (index === 0 || index === arr.length - 1)
        return false;
    while (index < arr.length - 1) {
        if (arr[index] <= arr[index + 1])
            break;
        else
            index++;
    }
    if (index === arr.length - 1)
        return true;
    return false;
}
console.log('validMountainArray ', validMountainArray([3, 5, 5]));
