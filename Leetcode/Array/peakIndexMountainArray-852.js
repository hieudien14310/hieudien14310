"use strict";
/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * Tìm chỉ số index mà tại đó có giá trị lớn nhất.
 */
function peakIndexInMountainArray(arr) {
    let maxPeakMountain = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maxPeakMountain <= arr[i])
            maxPeakMountain = arr[i];
        else
            return i - 1;
    }
    return maxPeakMountain;
}
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));
