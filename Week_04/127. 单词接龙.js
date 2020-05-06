/**
 *      给定两个单词（beginWord 和 endWord）和一个字典，
 *      找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：
        每次转换只能改变一个字母。
        转换过程中的中间单词必须是字典中的单词。
        说明:
        如果不存在这样的转换序列，返回 0。
        所有单词具有相同的长度。
        所有单词只由小写字母组成。
        字典中不存在重复的单词。
        你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
        示例 1:
        输入:
            beginWord = "hit",
            endWord = "cog",
            wordList = ["hot","dot","dog","lot","log","cog"]
        输出: 5

        解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
        返回它的长度 5。
        示例 2:
        输入:
             beginWord = "hit"
             endWord = "cog"
             wordList = ["hot","dot","dog","lot","log"]
        输出: 0
        解释: endWord "cog" 不在字典中，所以无法进行转换。
     来源：力扣（LeetCode）
     链接：https://leetcode-cn.com/problems/word-ladder
     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 *
 *
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let min = Infinity;
    function backtracing(start,end,bank,used,count){
        if(start === end){
            min = Math.min(min,count);
            return;
        }
        for(let i = 0; i < bank.length; i ++){
            if(!used[i] && diff(start,bank[i]) === 1){
                used[i] = true;
                backtracing(bank[i],end,bank,used,count+1);
                used[i] = false;
            }
        }
    }
    function diff(a,b){
        let d = 0;
        for(let i = 0; i < a.length;i++){
            if(a.charAt(i) !== b.charAt(i)){
                d++;
            }
        }
        return d;
    }
    backtracing(start,end,bank,[],0);
    return min === Infinity ? 0 : min;
};

// BFS
function ladderLength2(beginWord,endWord,wordList){
   let queue = [beginWord];
   let step = 1;
   while(queue.length !== 0){
       let next = [];
       for(let word of queue){
           for(let i = 0; i < word.length;i++){
               let temp = word.substr(0,i)+word.substr(i+1);
               for(let j = 0; j < wordList.length;j++){
                   let check = wordList[j].substr(0,i)+wordList[j].substr(i+1);
                   if(temp === check){
                       if(wordList[j] === endWord){
                           return step+1;
                       }
                       next.push(wordList[j]);
                       wordList.splice(j,1);
                       j--;
                   }
               }
           }
       }
       queue = next;
       step++;
   }
   return 0;
}

//BFS递归版
function ladderLength3(beginWord,endWord,wordList){
    let min = Infinity;
    function bfs(level,layers,end,wordList){
        if(!layers.length) return;
        let next = [];
        for(let i = 0; i < layers.length;i++){
            if(layers[i] === end){
                min = Math.min(min,level);
                return;
            }else{
                let item = layers[i];
                for(let k = 0; k < item.length;k++){
                    let temp = item.substr(0,k)+item.substr(k+1);
                    for(let j = 0; j < wordList.length;j++){
                        let check = wordList[j].substr(0,k)+wordList[j].substr(k+1);
                        if(temp === check){
                            next.push(wordList[j]);
                            wordList.splice(j,1);
                            j--;
                        }
                    }
                }
            }
        }
        bfs(level+1,next,end,wordList);
    }
    bfs(0,[beginWord],endWord,wordList);
    return min === Infinity ? 0 : min+1;
}

let beginWord = "dog";
let endWord = "col";
let wordList = ["dol","col"];
console.log(ladderLength3(beginWord, endWord, wordList));
