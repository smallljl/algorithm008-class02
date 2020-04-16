/*给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21*/
var reverse = function(x) {
    let arr = x.toString().split("");
    let len = arr.length;
    while(arr[len-1] === "0"){
        arr.pop();
        len--;
    }
    if(arr[0] === "-"){
        _reverse(1,len-1);
    }else{
        _reverse(0,len-1);
    }
    let res = Number(arr.join(""));
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(2, 31) * -1) res = 0;
    return res;

    function _reverse(i,j){
        while(i < j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
};
console.log(reverse(1534236469));