function zeros(n){
    let w=[]
    for(let i=0;n>=Math.pow(5,i);i++){
        w[i]=Math.floor(n/(Math.pow(5,i)))
    }
    w[0]=0;
    
    return w.reduce((acc,c)=>acc+c) 
}

console.log(zeros(25))