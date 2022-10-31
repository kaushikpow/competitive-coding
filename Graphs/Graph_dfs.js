class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
  }

  depth_first_search(array) {
    array.push(this.name);
    for (let item of this.children) {
      item.depth_first_search(array);
    }
    return array;
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

let arr = graph.depth_first_search([]);
console.log(arr);
