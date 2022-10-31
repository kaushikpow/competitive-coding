//The interns at Amazon were asked to review the company's stock value over a period. Given the stock prices of n months, the net price change for the ith month is defined as the absolute difference between the average of stock prices for the first / months and for the remaining (n-i) months where 1<i<n. Note that these averages are rounded down to an integer.

//Given an array of stock prices, find the month at which the net price change is minimum. If there are several such months, return the earliest month.

console.log(func([1, 3, 2, 3]));

function func(arr) {
  let total_sum = arr.reduce((a, b) => a + b, 0);
  let running_sum = 0;
  let current_low = Infinity;
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    running_sum += arr[i];
    let left = Math.floor(running_sum / (i + 1));
    let right;
    // if (i == arr.length - 1) right = 0;
    right = Math.floor((total_sum - running_sum) / (arr.length - i - 1));
    console.log(left, right, Math.abs(left - right));
    let temp = current_low;
    current_low = Math.min(current_low, Math.abs(left - right));
    if (temp != current_low) {
      //   if (!result.includes(i)) result.push(i);
      result = i;
    }
  }

  return result + 1;
}
