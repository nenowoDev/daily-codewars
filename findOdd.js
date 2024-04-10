function findOdd(A){
    let mp={}
    for(a of A){
        if(mp[a]===undefined)   mp[a]=1;
        else mp[a]++;
    }
    for(let [k,v] of Object.entries(mp)){
        if(v%2==1)
            return parseInt(k); 
    }
}

console.log(findOdd([1,1,1,2]))