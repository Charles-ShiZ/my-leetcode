const longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }
  if (s.length === 2) {
    if (s[0] === s[1]) return s;
    else return s[0];
  }
  let palindrome = s[0];
  for (let head = 0; head < s.length; head++) {
    for (let tail = head + 1; tail < s.length; tail++) {
      const partArr = Array.from(s.slice(head, tail + 1));
      const part = partArr.join('');
      const rePart = partArr.reverse().join('');

      s[head] === s[tail] &&
        part === rePart &&
        part.length > palindrome.length &&
        (palindrome = part);
    }
  }
  return palindrome;
};
