

   
function message (){

    setTimeout(()=>console.log("bonjour", 1500)); 
}





let tableau1 = ["lachevre", "lemouton", "lebouquetin"];

function aumoins3(array, verifcallback) {
    let compteur=0;

    for (let i=0; i<array.length; i++){
        if(verifcallback(array[i])){
            compteur++;
        }
        if(compteur>3){
        }
    }
    return compteur>=3;
}


console.log(aumoins3(tableau1, (elem)=>elem>"lachevre"));