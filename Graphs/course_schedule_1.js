//leetcode 207

var canFinish = function (numCourses, prerequisites) {
  let graph = new Graph(numCourses);
  for (let item of prerequisites) {
    graph.addEdge(item[1], item[0]);
  }

  let visited = new Array(numCourses).fill(0);
  let dfs_visited = new Array(numCourses).fill(0);
  let flag = true;

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      if (graph.cycle_check(i, visited, dfs_visited)) {
        return false;
      }
    }
  }
  return true;
};

class Graph {
  constructor(number_of_nodes) {
    this.size = number_of_nodes;
    this.adj = new Array(this.size).fill(0);
    for (let i = 0; i < this.adj.length; i++) this.adj[i] = [];
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  cycle_check(i, visited, dfs_visited) {
    visited[i] = 1;
    dfs_visited[i] = 1;

    for (let nodes of this.adj[i].values()) {
      if (!visited[nodes]) {
        if (this.cycle_check(nodes, visited, dfs_visited)) return true;
      } else if (dfs_visited[nodes]) return true;
    }
    dfs_visited[i] = 0;
    return false;
  }
}
