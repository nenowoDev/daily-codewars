function dismember(func) {
    if (func === null)
        return [];
    var str = func.toString();
    if (str === null)
        return [];
    var rgx = str.match(/(?<=\().*(?=\))/);
    if (rgx === null)
        return [];
    if (rgx[0] === "")
        return [];
    return rgx[0].replaceAll(" ", "").split(",");
}
function add(a, b) {
    return a + b;
}
function ad() {
    return 0;
}
console.log(dismember(add));
