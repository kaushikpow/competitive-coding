//leetcode 1047
//You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

//We repeatedly make duplicate removals on s until we no longer can.

//Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

//approach 1
console.log(remove("abbaca"));

function remove(string) {
  let stack = [];

  for (let s of string) {
    if (stack.length && stack[stack.length - 1] == s) stack.pop();
    else {
      stack.push(s);
    }
  }

  let result = "";
  for (let s of stack) result += s;
  return result;
}

//approach 2
function remove(string) {
  let stack = [];

  for (let item of s) {
    if (stack.length && stack[stack.length - 1][0] == item) {
      stack[stack.length - 1][1] += 1;

      if (stack[stack.length - 1][1] == 2) stack.pop();
    } else stack.push([item, 1]);
  }

  let result = "";
  for (let [char, count] of stack) {
    result += char.repeat(count);
  }

  return result;
}
