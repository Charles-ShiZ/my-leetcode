/** 返回某个字符串的所有唯一排列 */
/*
  输入一个字符串，打印出该字符串中字符的所有排列。
  你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

  示例:
  输入：s = "abc"
  输出：["abc","acb","bac","bca","cab","cba"]
*/
const testExps = ['acc', 'abc', 'abcabcabc', 'meeerruem'];

function getAllUniquePermutations(s) {
  if (s.length < 2) {
    return [s];
  }
  if (s.length === 2) {
    if (s[0] === s[1]) return [s];
    else return [s, s[1] + s[0]];
  }
  const result = [],
    cache = {};
  for (let i = 0; i < s.length; i++) {
    const head = s[i];
    if (cache[head]) continue;
    cache[head] = head;
    const others = s.slice(0, i) + s.slice(i + 1);
    const part = getAllUniquePermutations(others).map(item => head + item);
    result.push(...part);
  }
  return result;
}
testExps.forEach(s => {
  console.log('结果:', getAllUniquePermutations(s));
});
