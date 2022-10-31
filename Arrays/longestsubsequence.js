var longestConsecutive = function (nums) {
  var set1 = new Set();
  nums.forEach((num) => {
    set1.add(num);
  });
  console.log(set1);
  let streak = 0;
  for (let item of set1) {
    if (!set1.has(item - 1)) {
      var current = item;
      var current_streak = 1;
    }

    while (set1.has(current + 1)) {
      current = current + 1;
      current_streak += 1;
    }
    streak = Math.max(streak, current_streak);
  }
  return streak;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0]));
