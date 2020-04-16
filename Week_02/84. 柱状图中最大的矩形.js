/*给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。
以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
示例:
    输入: [2,1,5,6,2,3]
    输出: 10
链接：https://leetcode-cn.com/problems/largest-rectangle-in-histogram*/


var largestRectangleArea1 = function(heights) {
    let maxarea = 0;
    for (let i = 0; i < heights.length; i++) {
        let minheight = Number.MAX_SAFE_INTEGER;
        for (let j = i; j < heights.length; j++) {
            minheight = Math.min(minheight, heights[j]);
            maxarea = Math.max(maxarea, minheight * (j - i + 1));
        }
    }
    return maxarea;

};


var largestRectangleArea2 = function(heights) {
    function calcArea(start,end){
        if(start > end){
            return 0;
        }
        var minIndex = start;
        for(var i = start;i <= end;i++){
            if(heights[minIndex] > heights[i]){
                minIndex = i;
            }
        }
        return Math.max(heights[minIndex] * (end - start + 1),
                    Math.max(calcArea(start,minIndex-1),calcArea(minIndex+1,end)));
    }
    return calcArea(0,heights.length-1);
};

// 动态规划
var largestRectangleArea = function(heights) {
    const cache = [];
    function calcArea(start,end){
        if(start > end){
            return 0;
        }
        for(let i = 0; i < cache.length;i++){
            let item = cache[i];
            if(item.start === start && item.end === end){
                return item.result;
            }
        }
        let minIndex = start;
        for(let i = start;i <= end;i++){
            if(heights[minIndex] > heights[i]){
                minIndex = i;
            }
        }
        let result =  Math.max(heights[minIndex] * (end - start + 1),
            Math.max(calcArea(start,minIndex-1),calcArea(minIndex+1,end)));

        cache.push({
            start:start,
            end:end,
            result:result
        });
        return result;
    }
    return calcArea(0,heights.length-1);
};
console.log(largestRectangleArea([7,0,7,7,0,6,7,5,7,231,321,32,6,13,21,321,32]));