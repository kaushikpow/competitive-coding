import { PriorityQueue } from "@datastructures-js/priority-queue";

//TC - O(nlogn); with priority queue
class Graph {
  constructor(size) {
    this.size = size;
    this.adj = new Array(size);
    for (let i = 0; i < size; i++) this.adj[i] = [];
  }

  addEdge(u, v, value) {
    this.adj[u].push([v, value]);
  }

  prims_mst() {
    let parent = [-1];
    let mst = new Array(this.size).fill(false);

    let pq = new PriorityQueue((a, b) => a[1] - b[1]);
    pq.enqueue([0, 0]);
    //enqueuing node number and its edge weight from the previously visited node

    let values = new Array(this.size).fill(Infinity);
    //this value array represents the weight to reach that node from a parent.
    values[0] = 0;

    for (let i = 0; i < this.size - 1; i++) {
      const [u, v] = pq.dequeue();
      mst[u] = true;
      for (let edge of this.adj[u].values()) {
        // here edge represents all the adjacent nodes with weuights of "u"
        if (mst[edge[0]] == false && edge[1] < values[edge[0]]) {
          //edge[0] has node and edge[1] has weight of it from u
          //if that node is not is visited and the value of that node is greater than the current weight,enter the block
          console.log(edge);
          //update the parent as u for that node
          parent[edge[0]] = u;
          //now update the values array to the weight of this current edge
          values[edge[0]] = edge[1];
          //enqueue this node along with its updated value from values array
          pq.enqueue([edge[0], values[edge[0]]]);
        }
      }
      console.log(pq);
    }

    for (let i = 1; i < this.size; i++) {
      console.log(parent[i] + "----" + i + "----" + values[i]);
      //prints all the edges along with weights selected in prims algorithm.
    }
  }
}

let graph = new Graph(6);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 6);
graph.addEdge(1, 0, 4);
graph.addEdge(1, 4, 4);
graph.addEdge(1, 2, 6);
graph.addEdge(1, 3, 3);
graph.addEdge(2, 0, 6);
graph.addEdge(2, 1, 6);
graph.addEdge(2, 3, 1);
graph.addEdge(3, 1, 3);
graph.addEdge(3, 2, 1);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 3);
graph.addEdge(4, 1, 4);
graph.addEdge(4, 3, 2);
graph.addEdge(4, 5, 7);
graph.addEdge(5, 4, 7);
graph.addEdge(5, 3, 3);
console.log(graph.adj);
graph.prims_mst();
