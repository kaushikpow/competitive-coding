console.log(sort([15, 12, 3, 21, 25, 3, 9, 8, 18, 28, 5]));

//ascending order - build max heap and swap
//descending order - build min heap and swap

function sort(arr) {
  buildHeap(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(0, i, arr);
    siftDown(0, i - 1, arr);
  }
  return arr;
}

function buildHeap(array) {
  let parentIDX = Math.floor(array.length - 1 - 1 / 2);
  for (let i = parentIDX; i >= 0; i--) {
    siftDown(i, array.length - 1, array);
  }
}

function siftDown(currentIDX, last, heap) {
  let child1 = currentIDX * 2 + 1;
  while (child1 <= last) {
    let child2 = currentIDX * 2 + 2 <= last ? currentIDX * 2 + 2 : -1;
    let swapIndex;
    if (child2 != -1 && heap[child2] < heap[child1]) swapIndex = child2;
    else swapIndex = child1;

    if (heap[swapIndex] < heap[currentIDX]) {
      swap(swapIndex, currentIDX, heap);

      currentIDX = swapIndex;
      child1 = currentIDX * 2 + 1;
    } else return;
  }

  // Write your code here.
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
