"use strict";
/**
 * https://leetcode.com/problems/permutations/
 *
 */
function permute(nums) {
    const ans = [];
    const permutations = (nums, l, r) => {
        const swap = (nums, i, j) => {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            return nums;
        };
        if (l === r) {
            ans.push([...nums]);
        }
        else {
            for (let i = l; i <= r; i++) {
                nums = swap(nums, l, i);
                permutations(nums, l + 1, r);
                nums = swap(nums, l, i);
            }
        }
    };
    permutations(nums, 0, nums.length - 1);
    return ans;
}
console.log(permute([1, 2, 3]));
