function test(a,b,func){

    return func(a+b);
}

function times10(c){
    return (c*10);
}

function times5(c){
    return (c*5)
}

console.log(test(2,3,times10))