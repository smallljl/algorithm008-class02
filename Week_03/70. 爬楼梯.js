/*
 * @Author: your name
 * @Date: 2020-04-28 11:39:50
 * @LastEditTime: 2020-04-28 11:50:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \algorithm008-class02\Week_03\70. 爬楼梯.js
 */
/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
   每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
   注意：给定 n 是一个正整数。

   示例 1：

   输入： 2
   输出： 2
   解释： 有两种方法可以爬到楼顶。
   1.  1 阶 + 1 阶
   2.  2 阶
   示例 2：

   输入： 3
   输出： 3
   解释： 有三种方法可以爬到楼顶。
   1.  1 阶 + 1 阶 + 1 阶
   2.  1 阶 + 2 阶
   3.  2 阶 + 1 阶

   来源：力扣（LeetCode）
   链接：https://leetcode-cn.com/problems/climbing-stairs
 * 
 * 
 */
/**
 * @description: 动态规划求解
 * @param {type} 
 * @return: 
 */
var climbStairs = function(n) {
    if(n === 1) return 1;
    let dp = [1,2];
    for(let i = 2; i < n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n-1];
}
