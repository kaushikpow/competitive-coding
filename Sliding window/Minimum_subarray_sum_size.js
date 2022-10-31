/*Find the minimum subarray size whose sum is greater than or equal to target */

var minSubArrayLen = function (target, nums) {
  let runningSum = 0;
  let windowStart = 0;
  let result = [];
  let min = Infinity;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    runningSum += nums[windowEnd];

    while (runningSum >= target) {
      min = Math.min(min, windowEnd - windowStart + 1);
      runningSum -= nums[windowStart];
      windowStart++;
    }
  }
};
