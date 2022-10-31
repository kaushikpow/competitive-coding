//Longest subarray of sum atmost k

function atMostSum(arr, n, k) {
  let sum = 0;
  let cnt = 0,
    maxcnt = 0;

  for (let i = 0; i < n; i++) {
    // If adding current element doesn't
    // cross limit add it to current window
    if (sum + arr[i] <= k) {
      sum += arr[i];
      cnt++;
    }

    // Else, remove first element of current
    // window and add the current element
    else if (sum != 0) {
      sum = sum - arr[i - cnt] + arr[i];
    }

    // keep track of max length.
    maxcnt = Math.max(cnt, maxcnt);
  }
  return maxcnt;
}
