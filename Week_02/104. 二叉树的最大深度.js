/**
 *  
给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。
示例：
给定二叉树 [3,9,20,null,null,15,7]，
    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
* 
*/
var maxDepth = function(root) {
    function _getDepth(node){
        if(!node) return 0;
        return 1 + Math.max(_getDepth(node.left), _getDepth(node.right));
    }
    return _getDepth(root);
};
