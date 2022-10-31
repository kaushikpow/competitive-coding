// let matrix = [
//   [1, 2, 5],
//   [4, 8, 3],
//   [9, 7, 6],
// ];

let matrix = [
  [1, 2, 5],
  [4, 8, 3],
  [9, 7, 6],
  [100, 99, 90],
];
console.log(func(matrix, 4, 3));

function func(matrix, m, n) {
  let map = {};
  for (let i = 0; i < m; i++) {
    let min = Infinity;
    for (let j = 0; j < n; j++) {
      min = Math.min(min, matrix[i][j]);
    }
    if (matrix[["r", i]] == undefined) map[["r", i]] = min;
  }

  for (let j = 0; j < n; j++) {
    let max = 0;
    for (let i = 0; i < m; i++) {
      max = Math.max(max, matrix[i][j]);
    }
    if (matrix[["c", j]] == undefined) map[["c", j]] = max;
  }

  let result = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map[["r", i]] == matrix[i][j] && map[["c", j]] == matrix[i][j])
        result.push(matrix[i][j]);
    }
  }

  console.log(map);
  return result;
}
