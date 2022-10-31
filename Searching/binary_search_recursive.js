const arr = [2, 4, 6, 8, 9, 10];
const target = 5;
start = 0;
end = arr.length - 1;

console.log(binary_search(arr, start, end, target));

function binary_search(arr, start, end) {
  mid = Math.floor((start + end) / 2);
  if (start > end) return "not found";

  if (arr[mid] == target) return "found";

  if (target < arr[mid]) return binary_search(arr, start, mid - 1, target);
  return binary_search(arr, mid + 1, end, target);
}
