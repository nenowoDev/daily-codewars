//5 kyu
// A Chain adding function
//

function add(a){
    sum=a;
    function s(n){
        sum+=n;
        return s;
    }
    s.valueOf=function(){
        return sum;
    };

    return s;
}


function thisWorkWHY(a){
    
    let sum=function(b){
        return add(a+b)
    }

    sum.valueOf=function(){
        return a;
    }

    return sum

}




