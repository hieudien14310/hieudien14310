"use strict";
/**
 * https://leetcode.com/problems/increasing-decreasing-string/
 * Sắp xếp lại chuỗi ký tự sao cho nó tăng dân theo ký tự và rồi lại giảm dần theo ký tự.
 * Ý tưởng:
 *  - Chuyển từng ký tự thành dạng code.
 *  - Sau đó sắp xếp theo giá trị code nhỏ nhất và giá trị code lớn nhât.
 *
 */
function sortString(s) {
    let arrS = Array.from(s).sort(), result = '';
    for (let i = 0; 0 < arrS.length; i++) {
        // Dùng filter như thế này là để trả về list items sau khi được filter chứ ko phải kết quả fitler
        arrS = arrS.filter((x, index) => {
            if (index === 0 || x !== result[result.length - 1]) {
                result += x;
                return false;
            }
            return true;
        });
        arrS.reverse();
    }
    return result;
}
;
console.log(sortString("aaaabbbbcccc"));
