var intersection = function(nums1, nums2) {
  if (!nums1 || !nums2 || nums2.length === 0 || nums1.length === 0) {
  	return [];
  }

  var hashNums1 = {};
  var hashResult = {};
  var result = [];
  for (var i = 0; i < nums1.length; i ++) {
  	if (!hashNums1[nums1[i]]) {
  		hashNums1[nums1[i]] = 0;
  	};
  	hashNums1[nums1[i]] ++;
  }

  for (var i = 0; i < nums2.length; i ++) {
  	if (hashNums1[nums2[i]] && hashNums1[nums2[i]] > 0) {
  		hashResult[nums2[i]] = 0;
  	}
  }

  for (var key in hashResult) {
  	result.push(parseInt(key));
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2,2]));