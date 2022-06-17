"use strict";
/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Cho 1 array of strings. Tìm các chữ cái giống nhau ở mỗi chuỗi string trong array.
 * Ví dụ : ["flower","flow","flight"] => trả về là "fl"
 * Nếu ko tìm thấy thì trả về string rỗng "".
 */
function longestCommonPrefix(strs) {
    if (!strs.length)
        return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
}
;
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
