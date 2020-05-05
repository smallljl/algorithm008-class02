/**
 *   给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
     示例：
     二叉树：[3,9,20,null,null,15,7],
         3
        / \
       9  20
         /  \
        15   7
      返回其层次遍历结果：
     [
         [3],
         [9,20],
         [15,7]
     ]
     来源：力扣（LeetCode）
     链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
 *
 */
// 深度搜索优先
var levelOrder1 = function(root) {
    if(!root || root.length < 1) {
        return [];
    }
    let ans = [];
    helper(ans, root, 0);
    return ans;
    function helper(ans,node,layer){
        if(!node) return;
        if(!ans[layer]) ans[layer] = [];
        ans[layer].push(node.val);
        helper(ans,node.left,layer+1);
        helper(ans,node.right,layer+1);
    }
};