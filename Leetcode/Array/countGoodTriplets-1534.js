"use strict";
/**
 * https://leetcode.com/problems/count-good-triplets/
 *
 */
function countGoodTriplets(arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            //Nên đưa các điều kiện kiểm tra riêng như này là để tiết kiệm số vòng lặp ko cần thiết.
            if (Math.abs(arr[i] - arr[j]) > a)
                continue;
            for (let k = j + 1; k < arr.length; k++) {
                if ((Math.abs(arr[j] - arr[k]) <= b) &&
                    (Math.abs(arr[i] - arr[k]) <= c)) {
                    count++;
                }
            }
        }
    }
    return count;
}
;
console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
