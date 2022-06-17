"use strict";
/**
 * https://leetcode.com/problems/sort-colors/
 * Nghiên cứu các thuật toán liên quan về sắp xếp để giải bài tập này.
 */
function sortColors(nums) {
    const swap = (items, leftIndex, rightIndex) => {
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    };
    const partition = (items, left, right) => {
        var pivot = items[Math.floor((right + left) / 2)], i = left, j = right;
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }
        return i;
    };
    const quickSort = (items, left, right) => {
        var index;
        if (items.length > 1) {
            index = partition(items, left, right);
            if (left < index - 1) {
                quickSort(items, left, index - 1);
            }
            if (index < right) {
                quickSort(items, index, right);
            }
        }
        return items;
    };
    quickSort(nums, 0, nums.length - 1);
    console.log(nums);
}
sortColors([2, 0, 2, 1, 1, 0]);
