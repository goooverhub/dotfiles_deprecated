/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if (!root) {
		return root;
	}
    var invert = function(node) {
    	if (!node) {
    		return;
    	}
    	var temp;
    	temp = node.left;
    	node.left = node.right;
    	node.right = temp;
    	invert(node.left);
    	invert(node.right);
    }
    invert(root);
    return root;
};

 var TreeNode = function(val) {
   this.val = val;
   this.left = this.right = null;
 }

var s = new TreeNode(1);
s.left = new TreeNode(2);
// s.right = new TreeNode(7);
// s.left.left = new TreeNode(1);
// s.left.right = new TreeNode(3);
// s.right.left = new TreeNode(6);
// s.right.right = new TreeNode(9);
console.log(invertTree(s));