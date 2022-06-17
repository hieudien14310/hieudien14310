"use strict";
/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * Cách làm: Tăng lên rồi giảm xuống.
 *  B1: Duyệt qua từng ký tự của chuỗi.
 *  B2: Tạo 1 biến đếm và đếm ký tự bằng cách
 *      - Nếu gặp ký tự "R" thì tăng lên 1
 *      - Nếu gặp ký tự "L" thì giảm đi 1
 *  B3: Nếu cứ mỗi lần đếm mà nó quay về 0 thì tức là có chuỗi ký tự cân bằng.
 *  B4: Trả về kết quả khi mỗi lần đếm quay về 0.
 */
function splitBanlancedString(strs) {
    let result = 0, count = 0;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === 'R') {
            count++;
        }
        else if (strs[i] === 'L') {
            count--;
        }
        if (count === 0) {
            result++;
        }
    }
    return result;
}
console.log(splitBanlancedString('RLRRLLRLRL'));
