var findTheDifference = function(s, t) {
  if (t.length < s.length) {
  	return undefined;
  }

  var returnSum = function(s) {
  	var result = 0;
  	for (var i = 0; i < s.length; i ++) {
  		result += s.charCodeAt(i);
  	}
  	return result;
  }
  var sumS = returnSum(s);
  var sumT = returnSum(t);
  return String.fromCharCode(sumT - sumS);
};

console.log(findTheDifference('abcd', 'abcde'));