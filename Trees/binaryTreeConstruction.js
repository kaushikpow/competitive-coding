class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

//binary tree construction
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);

//DFS methods of traversal
function inorder(root) {
  if (!root) return null;

  inorder(root.left);
  console.log(root.value);
  inorder(root.right);
}

function preorder(root) {
  if (!root) return null;

  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
}

function postorder(root) {
  if (!root) return null;

  postorder(root.left);
  postorder(root.right);
  console.log(root.value);
}

function bfs(root) {
  let arr = [];
  arr.push(root);
  while (arr.length != 0) {
    let p = arr.shift();
    console.log(p.value);

    if (p.left) arr.push(p.left);
    if (p.right) arr.push(p.right);
  }
}

inorder(root);
console.log("..........");
preorder(root);
console.log("..........");

postorder(root);
console.log("..........");
bfs(root);
