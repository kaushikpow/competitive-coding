console.log(sort([15, 12, 3, 21, 25, 3, 9, 8, 18, 28, 5]));

function sort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
