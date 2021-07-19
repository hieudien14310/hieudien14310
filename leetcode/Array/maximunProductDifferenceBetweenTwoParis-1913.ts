/**
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 * Ý tưởng: Lấy 2 số lớn nhất nhân lại rồi trừ cho kết quả của 2 số bé nhất nhân với nhau.
 */
function maxProductDifference(nums: number[]): number {
    nums = nums.sort((a,b) => a - b);
    return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]);
};
console.log(maxProductDifference([4,2,5,9,7,4,8]));
