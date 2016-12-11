var countSegments = function(s) {
  var result = 0;
  s += ' ';
  for (var i = 1; i < s.length; i ++) {
    if (s.charAt(i) !== ' ' && s.charAt(i) !== s.charAt(i - 1)) {
      result ++;
    }
  }
  return result;
};
console.log(countSegments(' a b c d e '));
