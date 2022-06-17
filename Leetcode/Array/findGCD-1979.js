"use strict";
/**
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 * Đi tìm ước chung lớn nhất (greatest common divisor) của 2 số nhỏ nhất và lớn nhất
 * trong cảm nums
 * @param nums
 */
function findGCD(nums) {
    let [min, max] = [Infinity, 0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min)
            min = nums[i];
        if (nums[i] > max)
            max = nums[i];
    }
    /** Cách 1: Chạy vòng for, đếm số nguyên dương chia hết cho cả 2 số.
    let gcd = 0
    for (let j = 1; j <= max; j++) {
        if (min % j === 0 && max % j === 0) gcd = j
    }
    return gcd */
    /** Cách 2: Đệ quy số dư của a%b */
    function gcd(max, min) {
        if (min === 0)
            return max;
        return gcd(min, max % min);
    }
    return gcd(max, min);
}
console.log(`findGCD`, findGCD([27, 35]));
console.log(`findGCD`, findGCD([7, 5, 6, 8, 3]));
console.log(`findGCD`, findGCD([2, 5, 6, 9, 10]));
