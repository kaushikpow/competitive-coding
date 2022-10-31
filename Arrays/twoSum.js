var twoSum = function (nums, target) {
  let m = {};
  let map = new Map();
  for (let i = 0; i < nums.length; i++) m[target - nums[i]] = i;

  console.log(m);

  for (let i = 0; i < nums.length; i++) map.set(target - nums[i], i);

  console.log(map);
};
//   let i = 0;
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     if (nums[i] in m && i != m[nums[i.toString()]])
//       return [i, m[nums[i.toString()]]];
//   }
// };

console.log(twoSum([1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 11));
console.log(twoSum([2, 7, 11, 15], 9));
