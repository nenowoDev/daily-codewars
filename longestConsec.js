function longestConsec(strarr, k) {
    var ans = strarr.map(function (num) { return num.length; });
    var p = 0;
    var big = 0;
    var bigidx = 0;
    if (strarr.length === 0||k===0 ||k>strarr.length)
        return "";
    for (var i = 0; i < strarr.length; i++) {
        if (i < k)
            p += ans[i];
        else {
            p += ans[i];
            p -= ans[i - k];
        }
        if (p > big) {
            big = p;
            bigidx = i;
        }
    }
    var ret = "";
    for (var i =  bigidx - k + 1; (i < bigidx + 1) && (i < strarr.length); i++) {
        if(i>-1)
        ret += strarr[i];
    }
    return ret;
}
console.log(longestConsec(["1", "22"], 15));
