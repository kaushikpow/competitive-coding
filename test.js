class Graph {
  constructor(n) {
    this.adj = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  bfs(node, visited) {
    let queue = [];
    queue.push(node);
    visited[node] = 1;
    while (queue.length) {
      let temp = queue.shift();
      console.log(temp);
      for (let nodes of this.adj[temp].values()) {
        if (!visited[nodes]) queue.push(nodes);
        visited[nodes] = 1;
      }
    }
  }

  dfs(node, visited) {
    visited[node] = 1;
    console.log(node);
    for (let nodes of this.adj[node].values()) {
      if (visited[nodes] != 1) this.dfs(nodes, visited);
    }
  }
}

let visited = new Array(4).fill(0);
let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

// g.bfs(node, visited);

g.bfs(2, visited);
