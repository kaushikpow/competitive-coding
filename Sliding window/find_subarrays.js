//find subarrays that adds to a specific number

console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));

function func(arr, target) {
  let runningSum = 0;
  let windowStart = 0;
  let result = [];
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    runningSum += arr[windowEnd];

    while (runningSum >= target) {
      if (runningSum == target) {
        result.push(arr.slice(windowStart, windowEnd + 1));
      }
      runningSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
}
