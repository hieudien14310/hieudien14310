/**
 * https://leetcode.com/problems/array-partition-i/
 *
 */
function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let min: number = 0;
  for (let i = 0; i < nums.length; i += 2) {
    min += Math.min(nums[i], nums[i + 1]);
  }
  console.log("dwwww");
  return min;
}
console.log(arrayPairSum([1, 4, 3, 2]));
