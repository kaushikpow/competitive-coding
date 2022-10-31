//leetcode 62
// https://www.youtube.com/watch?v=sdE0A2Oxofw&list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY&index=10

//T(O) = O(2^mxn) for brute force as at every cell , the control should go in directoions down and right
//T(O) = O(m*n) for memoized
//S(O)= O(m-1+n-1) //length of the longest path for recursion stack. + O(m*n) for memoization

// here data structure used is a 2-d array
const uniquePaths = (m, n) => {
  const map = new Array(m).fill(0);
  for (let i = 0; i < map.length; i++) {
    map[i] = new Array(n).fill(-1);
  }
  return paths(0, 0, m - 1, n - 1, map);
};

function paths(i, j, m, n, map) {
  if (i == m && j == n) return 1;
  if (i > m || j > n) return 0;
  if (map[i][j] != -1) return map[i][j];
  return (map[i][j] = paths(i + 1, j, m, n, map) + paths(i, j + 1, m, n, map));
}
