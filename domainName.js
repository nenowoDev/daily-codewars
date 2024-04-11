function domainName(url) {
    return url.replace("https://", "")
        .replace("http://", "")
        .replace("www.", "")
        .split(".")[0];
}
var a = "http://github.com/carbonfive/raygun";
console.log(domainName(a));
