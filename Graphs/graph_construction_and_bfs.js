/* we will be using adjacency list to store the adjacent nodes of a node */

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
  }

  breadth_first_search() {
    let result = [];
    let queue = [this];
    while (queue.length != 0) {
      let temp = queue.shift();
      result.push(temp.name);

      for (let item of temp.children) queue.push(item);
    }
    return result;
  }
}

let graph = new Node("A");
graph.addChild("B");
graph.addChild("C");
graph.addChild("D");
graph.children[0].addChild("E");
graph.children[0].addChild("F");
graph.children[2].addChild("G");
graph.children[2].addChild("H");
graph.children[0].children[1].addChild("I");
graph.children[0].children[1].addChild("J");
graph.children[2].children[0].addChild("K");

let arr = graph.breadth_first_search();
console.log(arr);
