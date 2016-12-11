/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
	var cal = function(node, bool){
		if (node && !node.left && !node.right && bool) {
			return node.val;
		} else if (!node){
			return 0;
		}

		return cal(node.left, true) + cal(node.right, false);
	}    

	var result = cal(root, 0, false);
	return result;
};


 
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(sumOfLeftLeaves(root));

