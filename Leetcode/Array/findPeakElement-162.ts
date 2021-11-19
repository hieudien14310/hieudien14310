/**
 * https://leetcode.com/problems/find-peak-element/
 * 
 */
function findPeakElement(nums: number[]): number {
    const maxPeak = Math.max(...nums);
    return nums.indexOf(maxPeak);
};
console.log(findPeakElement([1,2,3,1]));
