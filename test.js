class Node {
  constructor(value) {
    this.value = value;
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

function find_max(root) {
  let arr = [root.value];
  maximum(root, arr);
  return arr[0];
}

function maximum(root, arr) {
  if (root == null) return;
  maximum(root.left, arr);
  if (root.value > arr[0]) arr[0] = root.value;
  maximum(root.right, arr);
}

console.log(find_max(root));
