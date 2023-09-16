/*
Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, 
ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através 
de um simples programa. Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) 
e a velocidade média durante a mesma (em km/h). Assim, pode-se obter distância percorrida e, em seguida, 
calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.
*/

function distancia(horas, velocidade){
    return horas * velocidade
}

function litragem(distancia_viagem){
    return distancia_viagem / 12
}

let horas = 10
let velocidade = 60
let distancia_viagem
let litros

distancia_viagem = distancia(horas, velocidade)
litros = litragem(distancia_viagem)

console.log("Distancia percorrida: ", distancia_viagem)
console.log("Listros gastos: ", litros.toFixed(3))