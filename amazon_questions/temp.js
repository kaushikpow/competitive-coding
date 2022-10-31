console.log(func([3, 1, 3, 5], 3));

function func(num, k) {
  let left = 0;
  let arr = [];
  console.log(num.length);
  for (let left = 0; left < num.length - 1; left++) {
    for (let right = left + 1; right < num.length; right++) {
      arr.push(Math.abs(num[left] - num[right]));
    }
  }

  console.log(arr);

  return arr.sort((a, b) => a - b).slice(0, k);
}
