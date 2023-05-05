function subset(arr, n) {
  let result = [];
  for (let i = 0; i < Math.pow(2, n); i++) {
    let subset = "";
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subset += arr[j];
      }
    }
    result.push(subset);
  }

  result.sort((a, b) => a - b);

  return result;
}

console.log(subset("abc", 3));
