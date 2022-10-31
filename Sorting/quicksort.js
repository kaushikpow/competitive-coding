console.log(quickSort([15, 12, 3, 21, 25, 3, 9, 8, 18, 28, 5]));

function quickSort(array) {
  quicSort(array, 0, array.length - 1);
  return array;
}

function quicSort(array, first, last) {
  if (first >= last) return;
  let pivot = first;
  let i = first;
  let j = last;
  while (i < j) {
    while (array[i] <= array[pivot] && i < last) {
      i++;
    }

    while (array[j] > array[pivot]) j--;

    if (i < j) {
      swap(array, i, j);
    }
  }
  swap(array, j, pivot);

  //for space complexity O(log(N)), do this
  let leftarrayissmaller = j - 1 - first < last - (j + 1);
  if (leftarrayissmaller) {
    quicSort(array, first, j - 1);
    quicSort(array, j + 1, last);
  } else {
    quicSort(array, j + 1, last);
    quicSort(array, first, j - 1);
  }
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}