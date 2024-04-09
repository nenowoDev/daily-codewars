// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
function trilingualDemocracy(group) {
    if(group[0]==group[1]&&group[1]==group[2])
        return group[0];



    if((group[0]==group[1])&&group[2]!=group[0])
        return group[2];

    if((group[0]==group[2])&&group[1]!=group[0])
        return group[1];

    if((group[1]==group[2])&&group[0]!=group[1])
        return group[0];

        
    if(group[0]!='D'&&group[1]!='D'&&group[2]!='D')
        return 'D'
    
    if(group[0]!='F'&&group[1]!='F'&&group[2]!='F')
        return 'F'
    
    if(group[0]!='I'&&group[1]!='I'&&group[2]!='I')
        return 'I'
    
    if(group[0]!='K'&&group[1]!='K'&&group[2]!='K')
        return 'K'
    
    return "?";
}
console.log(trilingualDemocracy("DFK"));
