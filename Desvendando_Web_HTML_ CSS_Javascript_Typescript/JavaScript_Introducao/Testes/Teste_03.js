/*
Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números 
que não são múltiplos de 13 entre X e Y, incluindo ambos.
*/

let x = 6
let y = 72
let soma = 0

for(let i = 0; i < y; i++){
    if(x % 13 == 0){
        soma = soma + x
        x = x + 1 
    } else {
        x = x + 1
    }
}

console.log("Soma: ", soma)



