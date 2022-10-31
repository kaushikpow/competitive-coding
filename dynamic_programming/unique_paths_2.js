//leetcode 63
//with memoization
// here data structure used is a map.In key we take string concatenation of i , j

//T(O) = O(2^mxn) for brute force as at every cell , the control should go in directoions down and right
//T(O) = O(m*n) for memoized
//S(O)= O(m-1+n-1) //length of the longest path for recursion stack. + O(m*n) for memoization

var uniquePathsWithObstacles = function (obstacleGrid) {
  let map = {};
  return paths(
    0,
    0,
    obstacleGrid.length - 1,
    obstacleGrid[0].length - 1,
    map,
    obstacleGrid
  );
};

function paths(i, j, m, n, map, obstacleGrid) {
  let key = i.toString() + "," + j.toString();
  if (i <= m && j <= n && obstacleGrid[i][j] == 1) return 0; // main difference compared to previous problem
  if (i == m && j == n) return 1;
  if (i > m || j > n) return 0;
  if (map[key] != undefined) return map[key];
  return (map[key] =
    paths(i + 1, j, m, n, map, obstacleGrid) +
    paths(i, j + 1, m, n, map, obstacleGrid));
}
