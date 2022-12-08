class Graph {
  constructor(n) {
    this.adj = new Array(n + 1).fill(0);
    this.n = n;
    for (let i = 1; i <= n; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  longestPath() {
    let dp = new Array(n + 1).fill(0);
    let visited = new Array(n + 1).fill(false);

    for (let i = 1; i <= this.n; i++) {
      if (!visited[i]) this.dfs(i, visited, dp);
    }

    console.log(dp);

    return Math.max(...dp);
  }

  dfs(node, visited, dp) {
    visited[node] = true;
    for (let adj_node of this.adj[node].values()) {
      if (!visited[adj_node]) this.dfs(adj_node, visited, dp);

      dp[node] = Math.max(dp[node], 1 + dp[adj_node]);
    }
  }
}

let n = 4;
let graph = new Graph(n);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 2);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
console.log(graph.adj);
let longest_path = graph.longestPath();
console.log(longest_path);
