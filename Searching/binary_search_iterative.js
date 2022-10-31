const arr = [2, 4, 6, 8, 9, 10];
const target = 2;
start = 0;
end = arr.length - 1;

//iterative
while (start <= end) {
  mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) {
    console.log("found");
    break;
  }

  if (target < arr[mid]) end = mid - 1;
  else start = mid + 1;
}
