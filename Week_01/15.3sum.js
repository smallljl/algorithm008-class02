/*给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。
示例：
给定数组 nums = [-1, 0, 1, 2, -1, -4]，
满足要求的三元组集合为：
[
    [-1, 0, 1],
    [-1, -1, 2]
]*/
// 1.暴力求解
var threeSum = function(nums) {
    let res = [];
    let repeatRes = new Set();
    for (let i = 0; i < nums.length - 2; i++) { // 每个人
        for (let j = i + 1; j < nums.length - 1; j++) { // 依次拉上其他每个人
            for (let k = j + 1; k < nums.length; k++) { // 去问剩下的每个人
                if (nums[i] + nums[j] + nums[k] === 0) { // 我们是不是可以一起组队
                    let resItem =[nums[i], nums[j], nums[k]];
                    let repeactStr = String(resItem.sort());
                    if(!repeatRes.has(repeactStr)){
                        res.push(resItem);
                        repeatRes.add(repeactStr);
                    }
                }
            }
        }
    }
    return res
};