class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    let parentIDX = Math.floor(array.length - 1 - 1 / 2);
    for (let i = parentIDX; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIDX, last, heap) {
    let child1 = currentIDX * 2 + 1;
    while (child1 <= last) {
      let child2 = currentIDX * 2 + 2 <= last ? currentIDX * 2 + 2 : -1;
      let swapIndex;
      if (child2 != -1 && heap[child2] < heap[child1]) swapIndex = child2;
      else swapIndex = child1;

      if (heap[swapIndex] < heap[currentIDX]) {
        this.swap(swapIndex, currentIDX, heap);

        currentIDX = swapIndex;
        child1 = currentIDX * 2 + 1;
      } else return;
    }

    // Write your code here.
  }

  siftUp(currentIDX) {
    let parentIDX = Math.floor((currentIDX - 1) / 2);
    while (parentIDX >= 0) {
      if (this.heap[currentIDX] < this.heap[parentIDX]) {
        this.swap(currentIDX, parentIDX, this.heap);
      }
      currentIDX = parentIDX;
      parentIDX = Math.floor((parentIDX - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
    // Write your code here.
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let removedValue = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return removedValue;

    // Write your code here.
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);

    // Write your code here.
  }

  swap(i, j, heap) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

const build = new MinHeap([15, 12, 3, 21, 25, 3, 9, 8, 18, 28, 2, 5]);
console.log(build.heap);
console.log(build.remove());
console.log(build.heap);
