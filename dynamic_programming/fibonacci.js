//top down approach becoz we are starting from number n to 0 (base case)
// with memoization
function fibonacci(n, dp) {
  if (n <= 1) return n;
  if (dp[n] != -1) return dp[n];
  return (dp[n] = fibonacci(n - 1, dp) + fibonacci(n - 2, dp));
}

let n = 50;
let dp = new Array(n + 1).fill(-1);
console.log(fibonacci(n, dp));

// //bottom up approach becoz we are starting from base cases and going till n
// let fib = [0, 1];
// for (var i = 2; i <= 5; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// }

// console.log(fib);
