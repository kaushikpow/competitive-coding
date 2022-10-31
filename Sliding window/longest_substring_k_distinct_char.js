//Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

var lengthOfLongestSubstringKDistinct = function (s, k) {
  let map = {};
  let result = 0;
  let start = 0;
  let len = 0;

  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] == undefined) map[s[right]] = 1;
    else map[s[right]]++;
    len++;

    while (Object.keys(map).length == k + 1) {
      if (map[s[start]] == 1) delete map[s[start]];
      else map[s[start]]--;
      start++;
      len--;
    }

    result = Math.max(result, len);
  }

  return result;
};
