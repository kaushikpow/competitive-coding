console.log(func("aaabbbccc"));

function func(s) {
  let map = {};
  let seq = 0;
  for (let item of s) {
    if (map[item] == undefined) map[item] = 1;
    else map[item]++;
  }

  console.log(map);
  let count = 0;
  let result = [];
  let key = Object.keys(map).sort((a, b) => map[b] - map[a]);
  let index = 0;

  for (let item of key) {
    let temp = map[item];
    //if the highest repeating char count is greater than half the length of the string, then return "". Why +1. even i did not understand
    if (temp > (s.length + 1) / 2) return "";
    for (let j = 0; j < temp; j++) {
      if (index >= s.length) index = 1;
      result[index] = item;
      index += 2;
    }
  }

  return result.join("");
}
