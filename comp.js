function comp(array1,array2){
    let found=false;
    if(array1==null||array2==null) return false;

    array1.sort()
    array2.sort()
    for(let i=0;i<array2.length;i++){
        found=false;
        foundidx=-1;
        foundidx=array1.findIndex(num=>num===array2[i]||array2[i]===num*num) //no need num===array2[i], as all are squared,,the q couldve worded better
        
        console.log(i+" "+foundidx)
        console.log("   "+array2[i]+" "+array1[foundidx])

        if(foundidx>-1){
            found=true;
            // console.log("   "+array2[i]+" "+array1[foundidx])
            array1[foundidx]='X'
        }
            
        if(!found) return false;
        
    }
    return true;
    
}

// function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
// }

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1,a2))
// array1=[1,2,5]
// console.log(array1.findIndex(num=>num>2))
