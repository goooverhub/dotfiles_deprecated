
function ListNode(val) {
     this.val = val;
     this.next = null;
};


var addTwoNumbers = function(l1, l2) {
	var temp = 0;
	var val = 0;
	if (l1.val + l2.val + temp >= 10) {
		val = (l1.val + l2.val + temp) % 10;
		temp = Math.floor((l1.val + l2.val + temp) / 10);
	}  else {
		val = (l1.val + l2.val + temp) % 10;
	}

	var start = new ListNode(val);
	l1 = l1.next;
	l2 = l2.next;
	var next = start;
	while(l1 !== null && l2 !== null){
		if (l1.val + l2.val + temp >= 10) {
			val = (l1.val + l2.val + temp) % 10;
			temp = Math.floor((l1.val + l2.val + temp) / 10);
		}  else {
			val = (l1.val + l2.val + temp) % 10;
			temp = 0;
		}

		l1 = l1.next;
		l2 = l2.next;

		var newNode = new ListNode(val);
		next.next = newNode;
		next = newNode;
	}

	while (l1 !== null) {
		if (l1.val + temp >= 10) {
			val = (l1.val + temp) % 10;
			temp = Math.floor((l1.val + temp) / 10);
		} else {
			val = (l1.val + temp) % 10;
			temp = 0;
		}

		l1 = l1.next;
		var newNode = new ListNode(val);
		next.next = newNode;
		next = newNode;
	}

	while (l2 !== null) {
		if (l2.val + temp >= 10) {
			val = (l2.val + temp) % 10;
			temp = Math.floor((l2.val + temp) / 10);
		} else {
			val = (l2.val + temp) % 10;
			temp = 0;
		}

		l2 = l2.next;
		var newNode = new ListNode(val);
		next.next = newNode;
		next = newNode;
	}

	if (temp !== 0) {
		next.next = new ListNode(temp);	
	}

	return start;
	
};

var test1 = new ListNode(1);
test1.next = new ListNode(8);
var test2 = new ListNode(0);
console.log(addTwoNumbers(test1,test2));
