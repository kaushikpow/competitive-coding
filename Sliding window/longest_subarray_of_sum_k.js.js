//longest sub array of sum k (both positive and negtive numbers)
//we use a prefix sum

var maxSubArrayLen = function (nums, k) {
  let map = {};
  let running_sum = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[running_sum] == undefined) map[running_sum] = i;

    running_sum += nums[i];

    let target = running_sum - k;
    if (map[target] != undefined) {
      max = Math.max(max, i - map[target] + 1);
    }
  }

  return max;
};
