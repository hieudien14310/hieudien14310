"use strict";
/**
 *
 */
function findClosestElements(arr, k, x) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (x - arr[mid] > arr[k + mid] - x) {
            left = mid + 1;
        }
        else
            right = mid;
    }
    return arr.slice(left, left + k);
}
console.log(findClosestElements([1, 2, 3, 4, 5, 6], 4, 3));
