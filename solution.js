function solution(str) {
    if (str.length === 0)
        return [];
    var ans = str.split('');
    var ret = [];
    for (var i = 0; i < ans.length; i += 2) {
        if (i + 1 < ans.length)
            ret.push(ans[i] + ans[i + 1]);
        else
            ret.push(ans[i] + "_");
    }
    return ret;
}
console.log(solution("abcdef gh"));
