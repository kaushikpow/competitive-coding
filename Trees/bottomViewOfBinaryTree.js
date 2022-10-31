class Node {
  constructor(val) {
    this.value = val;
    this.left = this.right = null;
  }
}

function levelorder(root) {
  if (!root) return null;
  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let temp = queue.shift();
    console.log(temp.value);
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }
}

function verticalOrderTraversal(root) {
  let map = new Map();
  let queue = [];

  queue.push([root, 0]);
  // map.set(0, [root.value]);
  // let hd = 0;
  while (queue.length != 0) {
    let [node, hd] = queue.shift();

    map.set(hd, [node.value]);
    if (node.left) {
      queue.push([node.left, hd - 1]);
    }
    if (node.right) {
      queue.push([node.right, hd + 1]);
    }
  }

  [...map].sort((a, b) => a[0] - b[0]).forEach((a) => console.log(a[1]));
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

//levelorder(root);
verticalOrderTraversal(root);
