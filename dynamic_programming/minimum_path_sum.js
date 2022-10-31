//leetcode 64

////T(O) = O(2^mxn) for brute force as at every cell , the control should go in directoions down and right
//T(O) = O(m*n) for memoized
//S(O)= O(m-1+n-1) //length of the longest path for recursion stack. + O(m*n) for memoization

var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let cache = new Array(m).fill(0);
  for (let i = 0; i < cache.length; i++) {
    cache[i] = new Array(n).fill(-1);
  }
  let result = [];
  return paths(0, 0, m - 1, n - 1, grid, cache);
};

let paths = function (i, j, m, n, grid, cache) {
  if (i == m && j == n) return grid[m][n];

  if (i > m || j > n) return Infinity;
  if (cache[i][j] != -1) return cache[i][j];

  let down = grid[i][j] + paths(i + 1, j, m, n, grid, cache);
  let right = grid[i][j] + paths(i, j + 1, m, n, grid, cache);
  return (cache[i][j] = Math.min(down, right));
};
