//question - count the number of islands present in the matrix.

//Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

var numIslands = function (grid) {
  let result = 0;
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
      let count = traverseNodes(i, j, result, visited, grid);
      result += count;
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
  return riversize > 0 ? 1 : 0;
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
