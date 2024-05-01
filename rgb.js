function rgb(r,g,b){
    r>255?r=255:r=r;
    r<0?r=0:r=r;
    g>255?g=255:g=g;
    g<0?g=0:g=g;
    b>255?b=255:b=b;
    b<0?b=0:b=b;

    return ((r.toString(16).length===2)?r.toString(16). toUpperCase() :('0'+r.toString(16). toUpperCase() ))
    +((g.toString(16).length===2)?g.toString(16). toUpperCase() :('0'+g.toString(16). toUpperCase() ))
    +((b.toString(16).length===2)?b.toString(16). toUpperCase() :('0'+b.toString(16). toUpperCase() ));
}

console.log(rgb(1,255,255))