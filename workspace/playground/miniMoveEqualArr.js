var minMoves = function(nums) {

  if (nums.length === 0 || nums.length === 1) {
  	return 0;
  }

  var findMin = function(nums) {
  	var min = nums[0];
  	for (var i = 1; i < nums.length; i++) {
  		min = min > nums[i] ? nums[i] : min;
  	}
  	return min;
  }

  var min = findMin(nums);

  var result = 0;

  for (var i = 0; i < nums.length; i++) {
  	result += nums[i] - min;
  }

  return result;
};


console.log(minMoves([83,86,77,15,93,35,86,92,49,21]));