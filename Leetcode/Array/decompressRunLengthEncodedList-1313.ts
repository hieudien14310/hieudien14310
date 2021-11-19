/**
 * https://leetcode.com/problems/decompress-run-length-encoded-list/
 * 
 */
function decompressRLElist(nums: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let tmp: Array<number> = new Array(nums[i]).fill(nums[i+1]);
        result = result.concat(tmp);
        i++;
    }
    return result;
};
console.log(decompressRLElist([1,1,2,3]));
