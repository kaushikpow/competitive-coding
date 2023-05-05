class Graph {
  constructor(n) {
    this.adj = new Array(n);
    for (let i = 1; i <= n; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  cycle_check(node, visited, dfs_visited) {
    visited[node] = 1;
    dfs_visited[node] = 1;
    for (let nodes of this.adj[node].values()) {
      if (!visited[nodes]) {
        if (this.cycle_check(nodes, visited, dfs_visited)) return true;
      } else if (dfs_visited[nodes]) return true;
    }
    dfs_visited[node] = 0;
    return false;
  }
}

let number_of_nodes = 9;
let visited = new Array(number_of_nodes).fill(0);
let dfs_visited = new Array(number_of_nodes).fill(0);
let graph = new Graph(number_of_nodes);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(3, 6);
graph.addEdge(4, 5);
graph.addEdge(6, 5);
graph.addEdge(7, 2);
graph.addEdge(7, 8);
graph.addEdge(8, 9);
graph.addEdge(9, 7);

let flag = false;
for (let i = 1; i <= number_of_nodes; i++) {
  if (!visited[i]) {
    if (graph.cycle_check(i, visited, dfs_visited)) {
      flag = true;
      break;
    }
  }
}

console.log(flag);
