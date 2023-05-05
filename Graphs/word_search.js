// leetcode 79 medium
//TC - O(row*col * 4 ^length of the word)
var exist = function (board, word) {
  let visited = [];
  for (let i = 0; i < board.length; i++) {
    let temp = [];
    for (let j = 0; j < board[0].length; j++) {
      temp.push(false);
    }
    visited.push(temp);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (contains_word(i, j, board, visited, word, 0)) return true;
    }
  }
  return false;
};

function contains_word(i, j, board, visited, word, result) {
  if (result == word.length) return true;
  if (
    i < 0 ||
    j < 0 ||
    i > board.length - 1 ||
    j > board[0].length - 1 ||
    word[result] !== board[i][j] ||
    visited[i][j]
  )
    return false;

  visited[i][j] = true;
  let res =
    contains_word(i, j + 1, board, visited, word, result + 1) ||
    contains_word(i, j - 1, board, visited, word, result + 1) ||
    contains_word(i + 1, j, board, visited, word, result + 1) ||
    contains_word(i - 1, j, board, visited, word, result + 1);
  visited[i][j] = false;// backtracking
  return res;
}
