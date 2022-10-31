//leetcode 70

//this problem has the same increaing pattern of fibonacci series.
//recursion
// if (n<=3) return n;
// if(dp[n] != undefined) return dp[n];
// return dp[n]= climbStairs(n-1,dp) + climbStairs(n-2,dp);

//tabulation with space optimization
let dp = [0, 1, 2, 3];
for (let i = 4; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
return dp[n];
