function ipsBetween(start, end) {
    var s = start.split(".");
    var e = end.split(".");
    var w = [];
    for (var i = 0; i < s.length; i++) {
        console.log(parseInt(e[i]) + " " + parseInt(s[i]));
        w.push(parseInt(e[i]) - parseInt(s[i]));
    }
    w[0] *= 256 * 256 * 256;
    w[1] *= 256 * 256;
    w[2] *= 256;
    w[3] *= 1;
    return w[0] + w[1] + w[2] + w[3];
}
function add(a, b) {
    var w = 3;
    return a + b;
}
ipsBetween("1.2.3.4", "2.3.4.5");


// function ipsBetween(start, end){
//     const num = ip => ip.split('.')
//                         .map(x => parseInt(x))
//                         .reduce((acc, e) => acc * 256 + e);  
    
//     return num(end) - num(start);
//   }