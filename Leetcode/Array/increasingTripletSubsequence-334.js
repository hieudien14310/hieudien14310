"use strict";
/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 * Chứng minh sự tồn tại của 3 số trong 1 mảng sao cho i < j < k và nums[i] < nums[j] < nums[k]
 * Ý tưởng:
 * - Tìm các số bé nhất
 * - Tìm các số bé nhì
 * - Và tìm số lớn hơn 2 số ở trên.
 * Ví dụ: [20, 100, 10, 120, 9, 19]
 * Các số bé nhất: 20, 10, 9
 * Các số bé nhì: 100, 19
 * Số lớn hơn 2 số ở trên: 120.
 * Khi mà cả 3 con số trên đều xuất hiện ít nhất 1 con số thì trả về kết quả là true.
 */
function increasingTriplet(nums) {
    let st = Infinity, nd = Infinity, rd = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= st) {
            st = nums[i];
        }
        else if (nums[i] > st && nums[i] <= nd) {
            nd = nums[i];
        }
        else {
            rd = nums[i];
        }
        if (st !== Infinity && nd !== Infinity && rd !== Infinity)
            return true;
    }
    return false;
}
console.log(increasingTriplet([20, 100, 10, 120, 9, 19]));
