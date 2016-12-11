var canConstruct = function(ransomNote, magazine) {
  if (ransomNote === null || ransomNote === undefined || magazine === null || magazine === undefined) {
  	return false;
  }
  if (ransomNote.length > magazine.length) {
  	return false;
  }  

  var hashMag = {};

  var hashRan = {};

  for (var i = 0; i < magazine.length; i++) {
  	if (!hashMag[magazine.charAt(i)]) {
  		hashMag[magazine.charAt(i)] = 0;
  	}
  	hashMag[magazine.charAt(i)] ++;
  }

  for (var i = 0; i < ransomNote.length; i ++) {
  	if (!hashMag[ransomNote.charAt(i)]) {
  		return false;
  	} else if(hashMag[ransomNote.charAt(i)] > 0) {
  		hashMag[ransomNote.charAt(i)] --;
  	} 
  }

  return true;

};

console.log(canConstruct("a", "b"));