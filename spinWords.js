function spinWords(string){
    
    let w=string.split('');
    for(let a of w){
        if(a.length>=5){
            a=a.split('').reverse().join('');
        }
    }
    w=w.join('');
    return w;
}

console.log(spinWords("onetwo three forrrr"))


