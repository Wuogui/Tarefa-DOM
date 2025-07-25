let caixa = document.getElementById("caixa");
let nota = document.querySelector("#entrada");
let i = 1;

function adicionar(numeroDaNota){
    caixa.innerText += `\n A nota ${numeroDaNota} foi ${nota.value}`;
    nota.value = ""
    i += 1;
}

function limpar(){
    caixa.innerText = ''
    i = 1
}

let btnEnviar = document.querySelector("#btnEnviar");
let btnLimpar = document.querySelector("#btnLimpar")

btnEnviar.addEventListener("click", () => (adicionar(i)));
btnLimpar.addEventListener("click", () => (limpar()));