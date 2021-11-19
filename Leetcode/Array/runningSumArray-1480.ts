/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 * 
 */
function runningSum(nums: number[]): number[] {
    let data = 0
    for (let i = 0; i < nums.length; i++) {
        data += nums[i];     
        nums[i] = data;
    }
    return nums;
};
console.log(runningSum([3,1,2,10,1]));
