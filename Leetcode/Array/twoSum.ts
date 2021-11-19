// https://leetcode.com/problems/two-sum/
// Tìm chỉ số index của 2 số trong array sao cho tổng của chúng bằng 1 con số bất kỳ.
function twoSum(nums: number[], target: number) {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const total: number = nums[i] + nums[j];
            if(total === target){
                result.push(i, j);
            }
        }        
    }
    return result
}
