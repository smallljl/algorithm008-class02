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
    if(!endWord || wordList.indexOf(endWord) === -1){
        return 0;
    }
    // 各个通用状态对应所有单词
    var comboDicts = {};
    var len = beginWord.length;
    for(var i = 0;i<wordList.length;i++){
        for(var r = 0;r<len;r++){
            var newWord = wordList[i].substring(0,r)+'*'+wordList[i].substring(r+1,len);
            (!comboDicts[newWord]) && (comboDicts[newWord] = []);
            comboDicts[newWord].push(wordList[i]);
        }
    }
    // Queue for BFS
    var queue = [[beginWord,1]];
    // visited
    var visited = {beginWord:true};
    while(queue.length > 0){
        var currNode = queue.shift();
        var currWord = currNode[0];
        var currLevel = currNode[1];
        for(var i = 0;i < len;i++){
            // 通用状态
            var newWord = currWord.substring(0,i)+'*'+currWord.substring(i+1,len);
            if(newWord in comboDicts){
                var tmpWords = comboDicts[newWord];
                for(var z = 0;z<tmpWords.length;z++){
                    if(tmpWords[z] === endWord){
                        return currLevel + 1;
                    }
                    if(!visited[tmpWords[z]]){
                        visited[tmpWords[z]] = true;
                        queue.push([tmpWords[z],currLevel+1]);
                    }
                }
            }
        }
    }
    return 0;
};