function mergeSort(arr){
    let len = arr.length;
    if(len < 2){
        return arr;
    }
    let middle = Math.floor(len/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result;
}

let arr = [7,8,7,5,6,7,2,6,164,67,40];
let newArr = mergeSort(arr);
for(let i = 0; i < newArr.length;i++){
    console.log(newArr[i]);
}
