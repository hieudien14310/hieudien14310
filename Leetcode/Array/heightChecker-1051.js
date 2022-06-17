"use strict";
/**
 * https://leetcode.com/problems/height-checker/
 * Ý tưởng:
 *  - Tạo ra 1 mảng từ mảng ban đầu và sắp xếp lại theo thứ tự tăng dần.
 *  - Sau đó so sánh từ phần tử  thứ i tại 2 mảnh.
 *  - Phần tử nào khác nhau thì count tăng lên 1.
 */
function heightChecker(heights) {
    let count = 0;
    const sortHeights = [...heights];
    heights.sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortHeights[i])
            count++;
    }
    return count;
}
console.log(heightChecker([5, 1, 2, 3, 4]));
