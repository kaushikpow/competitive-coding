class Graph {
  constructor(n) {
    this.adj = new Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) this.adj[i] = [];
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  topo(arr, n, visited) {
    visited[n] = true;
    for (let node of this.adj[n].values()) {
      if (!visited[node]) this.topo(arr, node, visited);
    }
    arr.push(n);
  }
}
let n = 2;
let g = new Graph(n);
g.addEdge(1, 2);
// g.addEdge(5, 2);
// g.addEdge(2, 3);
// g.addEdge(3, 1);
// g.addEdge(4, 0);
// g.addEdge(4, 1);
let arr = [];
let visited = new Array(n + 1).fill(false);
for (let i = 1; i <= n; i++) {
  if (!visited[i]) g.topo(arr, i, visited);
}
console.log(arr);
