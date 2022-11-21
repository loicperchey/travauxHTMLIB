


function aumoins3(array, verifcallback) {
    let compteur=0;
    let tab=[];
    for (let i=0; i<array.length; i++){
        if(verifcallback(array[i])){
            tab.push(array[i])
        }
    };
    return tab;
}

let tab = [1, 2, 3, 2, 1, 2];
console.log(aumoins3(tab, elem=>elem==2));