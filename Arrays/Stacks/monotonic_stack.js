let arr = [5, 3, 2, 10, 6, 8, 1, 4, 12, 7, 4];

console.log(build_monotonic_stack(arr));

function build_monotonic_stack(arr) {
  let stack = [];
  let map = new Map();

  for (let item of arr) {
    if (stack.length == 0 || item < stack[stack.length - 1]) stack.push(item);
    else {
      while (stack.length && item > stack[stack.length - 1])
        map.set(stack.pop(), item);
      stack.push(item);
    }
  }
  return map;
}
