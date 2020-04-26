/**
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
   例如，给定一个 3叉树 :
   返回其层序遍历:
    [
        [1],
        [3,2,4],
        [5,6]
    ]
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal
 * 
 * 
 */
function Node(value) {
    this.value = value;
    this.children = [];
}

let node1 = new Node(5);
let node3 = new Node(3);
let node2 = new Node(2);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
node1.children.push(node3);
node1.children.push(node2);
node1.children.push(node4);
node3.children.push(node5);
node3.children.push(node6);

var levelOrder = function(root) {
    function _levelOrder(layer,hander){
        if(layer.length === 0){
            return false;
        }
      
        let nextLayer = [];
        let curentArr = [];
        for(let i = 0; i < layer.length;i++){
            curentArr.push(layer[i].value);
            nextLayer = nextLayer.concat(layer[i].children);
        }
        hander(curentArr);
        _levelOrder(nextLayer,hander);
    }
    let arr = [];
    function hander(val){
        arr.push(val);
    }
    _levelOrder([root],hander);
    return arr;
};
console.log(levelOrder(node1));
  
