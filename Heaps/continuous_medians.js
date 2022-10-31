class ContinuousMedianHandler {
  constructor() {
    this.lowers = new Heap(max_heap, []);
    this.greaters = new Heap(min_heap, []);
    this.median = null;
  }

  insert(number) {
    if (!this.lowers.length || number < this.lowers.peek()) {
      console.log(this.lowers.length);
      console.log(this.lowers.peek());
      console.log("lower");
      this.lowers.insert(number);
    } else this.greaters.insert(number);
    this.rebalance_heaps();
    this.updateMedian();
  }

  rebalance_heaps() {
    if (this.lowers.length - this.greaters.length == 2) {
      this.greaters.insert(this.lowers.remove());
    } else if (this.greaters.length - this.lowers.length == 2) {
      this.lowers.insert(this.greaters.remove());
    }
  }

  updateMedian() {
    if (this.lowers.length == this.greaters.length) {
      this.median = (this.lowers.peek() + this.greaters.peek()) / 2;
    } else if (this.lowers.length < this.greaters.length)
      this.median = this.greaters.peek();
    else if (this.lowers.length > this.greaters.length)
      this.median = this.lowers.peek();
  }

  getMedian() {
    return this.median;
  }
}

class Heap {
  constructor(compare_func, array) {
    this.compare = compare_func;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  buildHeap(array) {
    let first_parent = Math.floor((array.length - 1 - 1) / 2);
    for (let idx = first_parent; idx >= 0; idx--) {
      this.siftDown(array, idx, array.length - 1);
    }

    return array;
  }

  siftDown(heap, idx, endIDX) {
    let childOne = idx * 2 + 1;
    while (childOne <= endIDX) {
      let toSwap;
      let childTwo = idx * 2 + 2 <= length - 1 ? idx * 2 + 2 : -1;
      if (childTwo != -1 && this.compare(heap[childTwo], heap[childOne]))
        toSwap = childTwo;
      else toSwap = childOne;

      if (this.compare(heap[toSwap], heap[idx])) {
        this.swap(toSwap, idx, heap);
        idx = toSwap;
        childOne = idx * 2 + 1;
      } else return;
    }
  }

  siftUp(heap, length) {
    let child = length;
    let parent = Math.floor((child - 1) / 2);
    while (parent >= 0) {
      if (this.compare(heap[child], heap[parent])) {
        this.swap(parent, child, heap);

        child = parent;
        parent = Math.floor((child - 1) / 2);
      } else return;
    }
  }

  peek() {
    return this.heap[0];
  }

  insert(number) {
    this.heap.push(number);
    this.length++;
    this.siftUp(this.heap, this.heap.length - 1);
  }

  remove() {
    let temp = this.heap[0];
    this.swap(0, this.heap.length - 1, this.heap);
    this.heap.pop();
    this.length--;
    this.siftDown(this.heap, 0, this.heap.length - 1);
    return temp;
  }

  swap(i, j, heap) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

function max_heap(a, b) {
  return a > b;
}

function min_heap(a, b) {
  return a < b;
}

let c = new ContinuousMedianHandler();
c.insert(5);
console.log(c.lowers);
console.log(c.greaters);
c.insert(10);
console.log(c.lowers);
console.log(c.greaters);
console.log(c.getMedian());
c.insert(10);
console.log(c.lowers);
console.log(c.greaters);
console.log(c.getMedian());
