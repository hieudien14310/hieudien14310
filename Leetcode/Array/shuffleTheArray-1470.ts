/**
 * https://leetcode.com/problems/shuffle-the-array/
 * 
 */
function shuffle(nums: number[], n: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
};
console.log(shuffle([1,1,2,2], 2));
