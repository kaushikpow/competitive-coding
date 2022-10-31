//console.log(sort([15, 12, 3, 21, 25, 3, 9, 8, 18, 28, 5]));
console.log(sort([17, 10, 28, 15, 23, 27]));

function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j >= 0 && arr[j] < arr[j - 1]) {
      swap(arr, j, j - 1);
      j -= 1;
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
