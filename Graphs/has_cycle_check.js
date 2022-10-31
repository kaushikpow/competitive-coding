function hasSingleCycle(array) {
  // Write your code here.
  let count = 0,
    currentIDX = 0;
  while (count < array.length) {
    if (count > 0 && currentIDX == 0) return false;
    count++;
    currentIDX = buildIDX(currentIDX, array);
  }
  return currentIDX == 0;
}

function buildIDX(currentIDX, array) {
  let nextIDX;
  nextIDX = (currentIDX + array[currentIDX]) % array.length;
  return nextIDX >= 0 ? nextIDX : nextIDX + array.length;
}
