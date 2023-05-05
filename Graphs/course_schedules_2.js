//leetcode 210
//TC - O(V+E)
//SC - O(2V) + Auxialiary space for recursion calls O(V);

var findOrder = function (numCourses, prerequisites) {
  let n = numCourses;
  let graph = new Graph(n);

  for (let item of prerequisites) {
    graph.addEdge(item[1], item[0]);
  }

  let sorted_array = [];
  let visited = new Array().fill(0);
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (!visited[i]) graph.topo(i, visited, stack);
  }

  let temp = stack.length;

  for (let i = 0; i < n; i++) {
    sorted_array.push(stack.pop());
  }

  for (let item of prerequisites) {
    if (sorted_array.indexOf(item[1]) > sorted_array.indexOf(item[0]))
      return [];
  }

  return sorted_array;
};

class Graph {
  constructor(n) {
    this.adj = new Array(n);
    for (let i = 0; i < n; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  topo(node, visited, stack) {
    visited[node] = 1;
    for (let nodes of this.adj[node]) {
      if (!visited[nodes]) this.topo(nodes, visited, stack);
    }
    stack.push(node);
  }
}
