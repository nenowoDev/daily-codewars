function squareDigits(num){
    let result= num.toString().split("").map(num=>parseInt(num)).map(num=>num*num).join("");
    if(typeof num==="string") return result;
    if(typeof num==="number") return parseInt(result);

}

console.log(squareDigits("121212"))