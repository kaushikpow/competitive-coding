//return the sizes of each island present in the matrix.
// algoexpert - River Sizes
//Time complexity - O(mxn) -- number of nodes in matrix
//Space complexity - O(mxn) number of nodes in matrix

var numIslands = function (grid) {
  let result = [];
  //create a 2d array visited for all elements and fill it with all false as none are visited in the beginning.
  let visited = [];
  for (let i = 0; i < grid.length; i++) {
    let temp = [];
    for (let j = 0; j < grid[0].length; j++) {
      temp.push(false);
    }
    visited.push(temp);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNodes(i, j, result, visited, grid);
    }
  }
  return result;
};

function traverseNodes(i, j, result, visited, grid) {
  let riversize = 0;
  let nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    let current = nodesToExplore.pop();
    i = current[0];
    j = current[1];

    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (grid[i][j] === "0") continue;
    riversize++;
    let getNodes = helper_func(i, j, visited, grid);
    for (let item of getNodes) nodesToExplore.push(item);
  }
  if (riversize > 0) result.push(riversize);
}

function helper_func(i, j, visited, grid) {
  let sendNodes = [];
  if (i > 0 && !visited[i - 1][j]) sendNodes.push([i - 1, j]);
  if (i < grid.length - 1 && !visited[i + 1][j]) sendNodes.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) sendNodes.push([i, j - 1]);
  if (j < grid[0].length - 1 && !visited[i][j + 1]) sendNodes.push([i, j + 1]);
  return sendNodes;
}

//driver code
let matrix = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(matrix));
