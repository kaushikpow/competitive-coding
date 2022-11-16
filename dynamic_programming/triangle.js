//leetcode 120

//botton up
// https://leetcode.com/problems/triangle/discuss/342223/Clean-Javascript-4-Lines-Beats-98
//O(number of elements ) time
//O(1) space

var minimumTotal = function (triangle) {
  let n = triangle.length;
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
};

//top-down
//O(2^ number of elements) time
//O(n^2) space
// lengthy test cases did not pass even though memoization is used

var minimumTotal = function (triangle) {
  let dp = new Array(triangle.length).fill(0);
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = new Array(triangle.length).fill(0);
  }

  return helper_func(0, 0, dp, triangle);
};

function helper_func(i, j, dp, triangle) {
  if (i == triangle.length - 1) return triangle[i][j];
  if (dp[i][j] != 0) return dp[i][j];
  let down = triangle[i][j] + helper_func(i + 1, j, dp, triangle);
  let diagonal = triangle[i][j] + helper_func(i + 1, j + 1, dp, triangle);

  return Math.min(down, diagonal);
}
