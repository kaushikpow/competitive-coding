class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

/*
1.  height is calculated from the the bottom to up.
2.  height of any given node = 1+ number of edges to that node from the root to that node
3.  height of binary tree = 1 + number of edges in the longesh path from root to leaf
4.  edge in a binary tree = edge is the line connecting two nodes

Algorithm:
Recursively go the to the left most node and right most node in the tree.
Take the max height from left sub tree and right subtree;
return max height +1 ;
*/
//binary tree construction
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);

function height(root) {
  if (!root) return 0;

  let left = height(root.left);
  let right = height(root.right);
  let h;
  if (left < right) h = 1 + right;
  else h = 1 + left;
  return h;
}

console.log(height(root));
