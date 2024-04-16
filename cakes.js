function cakes(recipe, available) {
    var ratio = {};
    var min = Infinity;
    for (var ing in recipe) {
        if(available[ing]===undefined||recipe[ing]===undefined) min=0;
        if (Math.floor(available[ing] / recipe[ing]) < min)
            min = Math.floor(available[ing] / recipe[ing]);
            console.log(Math.floor(available[ing] / recipe[ing]))
    }
    return min;
}
console.log(cake({ flour: 3, sugar: 300 }, { flour: 200, sugar: 1000 }));

