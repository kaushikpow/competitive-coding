//in this, we are storing the graph as an adjacency list.
class Graph {
  constructor(len) {
    this.adj = new Array(len);
    for (let i = 0; i < len; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  dfs(node, visited) {
    console.log(node);
    visited[node] = true;

    for (let i of this.adj[node].values()) {
      if (!visited[i]) this.dfs(i, visited);
    }
  }

  bfs(node, visited) {
    let queue = [];

    queue.push(node);
    visited[node] = true;
    while (queue.length != 0) {
      let temp = queue.shift();
      console.log(temp);

      for (let item of this.adj[temp].values()) {
        if (!visited[item]) queue.push(item);
        visited[item] = true;
      }
    }
  }
}

//driver code
let number_of_nodes = 4;
let g = new Graph(number_of_nodes);
let visited = new Array(number_of_nodes).fill(false);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

//g.dfs(2, visited);
//do not run both dfs and bfs at a time as they both share a single visited array.
g.bfs(2, visited);
