var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
    let stack=[];
    for(let i=0;i<iterable.length;i++){
        if(iterable[i]==iterable[i-1]) continue
        else
          stack.push(iterable[i])

    }

    return stack;
}

uniqueInOrder("awirf")