const idade = 22
const nome = "Mateus"
let pode_acessar = false

if(idade >= 18 && nome == "Mateus"){
    pode_acessar = true
} else {
    pode_acessar = false
}

if(pode_acessar == true){
    console.log("Seja bem vindo!")
} else {
    console.log("Acesso negado!")    
}