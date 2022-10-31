class Graph {
  constructor(edges, n) {
    edges.sort((a, b) => a[2] - b[2]);
    console.log(edges);

    this.parent = new Array(n + 1);
    this.rank = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  findParent(node) {
    if (this.parent[node] == node) return node;

    return this.findParent(this.parent[node]);
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

  kruskal() {
    let final = [];
    let mst_cost = 0;

    for (let edge of edges) {
      if (this.findParent(edge[0]) != this.findParent(edge[1])) {
        final.push(edge);
        mst_cost += edge[2];
        this.union(edge[0], edge[1]);
      }
    }

    console.log(mst_cost);
    console.log(final);
  }
}

let edges = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4],
];
let graph = new Graph(edges, 4);
graph.kruskal();
