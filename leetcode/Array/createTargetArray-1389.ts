/**
 * https://leetcode.com/problems/create-target-array-in-the-given-order/
 * 
 */
function createTargetArray(nums: number[], index: number[]): number[] {
    const result: Array<number> = [];
    for (let i = 0; i < index.length; i++) {
        // Có thể dùng splice như thế này để insert giá trị vào mảng tại vị trị đc chỉ định.
        result.splice(index[i], 0, nums[i]);
    }
    return result;
};
console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0]));
