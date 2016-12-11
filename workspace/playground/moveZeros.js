var moveZeroes = function(nums) {
  if (nums.length === 0 || nums.length === 1) {
  }

  var pointer = 0;
  var runner = 1;
  while (pointer < nums.length && runner < nums.length) {
  	if (nums[pointer] !== 0) {
  		pointer ++;
  		runner = pointer + 1;
  	} else if (nums[runner] !== 0) {
  		var temp = nums[pointer];
  		nums[pointer] = nums[runner];
  		nums[runner] = temp;
  		pointer ++;
  		runner = pointer + 1;
  	} else {
  		runner ++;
  	}
  }
};

moveZeroes([1,0]);
