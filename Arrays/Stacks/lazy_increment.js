//leetcode 1381

class CustomStack {
  constructor(maxSize) {
    this.stack = [];
    this.max = maxSize;
    this.cache = new Array(this.max).fill(0);
  }

  push(x) {
    if (this.stack.length < this.max) this.stack.push(x);
  }

  pop() {
    if (this.stack.length) {
      let index = this.stack.length - 1;
      let to_add = this.cache[index];
      if (index - 1 >= 0) this.cache[index - 1] += to_add;
      this.cache[index] = 0;
      return this.stack.pop() + to_add;
    } else return -1;
  }

  increment(k, val) {
    if (k < this.stack.length) {
      this.cache[k - 1] += val;
    } else {
      this.cache[this.stack.length - 1] += val;
    }
  }
}
