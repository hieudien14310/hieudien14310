/**
 * https://leetcode.com/problems/search-insert-position/
 * 
 */
function searchInsert(nums: number[], target: number): number {
    let result: number = 0;
    if(nums.includes(target)){
        result = nums.indexOf(target);
    }else {
        nums.push(target)
        nums = nums.sort((a,b) => a - b);
        result = nums.indexOf(target);
    }
    return result;
};
console.log(searchInsert([1,3,5,6], 7));
