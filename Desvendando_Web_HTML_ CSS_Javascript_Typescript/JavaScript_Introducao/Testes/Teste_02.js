/*
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, 
um valor por linha, inclusive o X ser for o caso.
*/

let valor = 11
let i = 1;

if(valor % 2 == 0){
    for(let x = 0; x < 6; x++){
        console.log(valor + i);
        i = i + 2
    }
} else {
    console.log(valor);
    i = i + 1;
    for(let x = 0; x < 5; x++){
        console.log(valor + i);
        i = i + 2
    }
}

