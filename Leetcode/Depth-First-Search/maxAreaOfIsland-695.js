"use strict";
/**
 * https://leetcode.com/problems/max-area-of-island/
 *
 * @param grid
 */
function maxAreaOfIsland(grid) {
    let ans = 0, r = grid.length, c = grid[0].length;
    const trav = (i, j) => {
        if (i < 0 || j < 0 || i >= r || j >= c || !grid[i][j])
            return 0;
        grid[i][j] = 0;
        return 1 + trav(i - 1, j) + trav(i, j - 1) + trav(i + 1, j) + trav(i, j + 1);
    };
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j])
                ans = Math.max(ans, trav(i, j));
        }
    }
    return ans;
}
console.log('maxAreaOfIsland', maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]));
