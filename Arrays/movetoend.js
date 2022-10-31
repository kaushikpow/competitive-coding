console.log(
  moveElementToEnd([5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12], 5)
);
function moveElementToEnd(array, toMove) {
  let temp = 0;
  let king = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == toMove) {
      king--;
    } else {
      var toswap;
      while (temp < king) {
        if (array[temp] == toMove) {
          toswap = temp;
          swap(array, toswap, i);
          king--;
          temp++;
          break;
        } else temp++;
      }
    }
  }
  return array;
}

function swap(array, toswap, i) {
  let temp = array[toswap];
  array[toswap] = array[i];
  array[i] = temp;
}
