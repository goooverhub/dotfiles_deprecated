var lengthOfLongestSubstring = function(s) {
  if(s.length === 0) {
    return 0;
  }
  var start = 0;
  var pointer = start;
  var result = 0;
  var helper = {};

  while(start <= pointer && pointer<s.length){
    if (!(helper[s.substring(pointer, pointer+1)] === undefined || helper[s.substring(pointer, pointer+1)] < start)) {
    	if (result < pointer - start) {
    	  result = pointer - start;
    	}
    	start = helper[s.substring(pointer, pointer + 1)] + 1;
    } 

    helper[s.substring(pointer, pointer+1)] = pointer;

    pointer ++;

  }

  if (result < pointer - start) {
    result = pointer - start;
  }

  return result;

};

console.log(lengthOfLongestSubstring('pwwkew'));