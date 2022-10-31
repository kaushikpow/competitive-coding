//rank array index numbers matches with node number. So ignoring index 0 in this code implementation.
//path compression is not used here since not getting the deisred result.


// T(O) = O(4alpha)
class Disjoint {
  constructor(nodes) {
    this.parent = new Array(nodes.length + 1);
    this.rank = new Array(nodes.length + 1).fill(0);
    let i = 1;
    console.log(this.rank);
    for (let node of nodes) {
      this.parent[i] = node;
      i++;
    }
    console.log(this.parent);
  }

  findParent(node) {
    if (this.parent[node] == node) return node;

    //return this.findParent(this.parent[node]);
    return (this.parent[node] = this.findParent(this.parent[node])); // path compression line
  }

  union(node1, node2) {
    node1 = this.findParent(node1);
    node2 = this.findParent(node2);

    if (this.rank[node1] < this.rank[node2]) {
      this.parent[node1] = node2;
    } else if (this.rank[node2] < this.rank[node1]) {
      this.parent[node2] = node1;
    } else if (this.rank[node1] == this.rank[node2]) {
      this.parent[node2] = node1;
      this.rank[node1]++;
    }
  }

  connected(node1, node2) {
    return this.findParent(node1) == this.findParent(node2);
  }
}

let set = new Disjoint([1, 2, 3, 4, 5, 6, 7]);
set.union(1, 2);
set.union(2, 3);
set.union(4, 5);
set.union(6, 7);
set.union(5, 6);
set.union(3, 7);

console.log(set.parent);
console.log(set.connected(1, 4));
console.log(set.rank);
