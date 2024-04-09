function highAndLow(numbers){
    sep=numbers.split(' ')
    let high=sep[0],low=sep[0];
    for(a of sep){

        if(parseInt(a)>parseInt(high)) high=a;
        if(parseInt(a)<parseInt(low))  low=a;
        
    }

    

    return high+" "+low;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))