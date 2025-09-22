Array.prototype.sameStructureAs=function(other){

    if(!Array.isArray(this)&&!Array.isArray(other))
        return false;
    if(this.length!=other.length)
        return false;
    for(var i=0;i<this.length;i++){
        //if array need to check every element if its array or not, if array need to check length and check if its content, array or not, recursive omg
        if(Array.isArray(this[i])^Array.isArray(other[i]))
            return false;

        if(Array.isArray(this[i]))
                
    }

    


    return true;
}

console.log([1,2].sameStructureAs([1,3]))