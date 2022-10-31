class Node {
  constructor(val) {
    this.value = val;
    this.left = this.right = null;
  }
}

function levelOrderTraversal(root) {
  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let temp = queue.shift();
    console.log(temp.value);

    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }
}

function elemtentsAtEachLevel(root) {
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let list = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        list.push(node.value);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (list.length) result.push(list);
  }

  return result;
}

function leftViewOfBinaryTreeIterative(root) {
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let list = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        list.push(node.value);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (list.length) result.push(list[0]);
  }

  return result;
}

function rightViewOfBinaryTreeIterative(root) {
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let list = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        list.push(node.value);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (list.length) result.push(list.pop());
  }

  return result;
}

function rightViewRecursive(root, level = 0, output2) {
  if (!root) return;

  if (level == output2.length) output2.push(root.value);

  rightViewRecursive(root.right, level + 1, output2);
  rightViewRecursive(root.left, level + 1, output2);
}

function leftViewRecursive(root, level = 0, output1) {
  if (!root) return;

  if (level == output1.length) output1.push(root.value);

  leftViewRecursive(root.left, level + 1, output1);
  leftViewRecursive(root.right, level + 1, output1);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

//levelOrderTraversal(root);

// console.log(elemtentsAtEachLevel(root));

let output1 = [];
console.log(leftViewOfBinaryTreeIterative(root));
leftViewRecursive(root, 0, output1);
console.log(output1);

let output2 = [];
console.log(rightViewOfBinaryTreeIterative(root));
rightViewRecursive(root, 0, output2);
console.log(output2);
