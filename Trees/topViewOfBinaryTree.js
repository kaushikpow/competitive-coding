class Node {
  constructor(val) {
    this.value = val;
    this.left = this.right = null;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

function topView(root, map, hd = 0) {
  if (!root) return;

  if (!map.has(hd)) map.set(hd, root.value);

  topView(root.left, map, hd - 1);
  topView(root.right, map, hd + 1);
}

let map = new Map();
topView(root, map);
let output = [];
[...map].sort((a, b) => a[0] - b[0]).forEach((a) => output.push(a[1]));
console.log(output);
