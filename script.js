let caixa = document.getElementById("caixa");
let nota = document.querySelector("#entrada");
let i = 1;

//função que "trata" a nota para que ela seja legivel pelo programa, colocando pontos no lugar de vírgulas.
function tratamento(){
}

//função que adicionar as notas no bloco de texto
function adicionar(numeroDaNota){
    caixa.innerText += `\n A nota ${numeroDaNota} foi ${nota.value}`;
    nota.value = ""
    i += 1;
}

//função que limpa todo o bloco de texto
function limpar(){
    caixa.innerText = ''
    i = 1
}

//função que calcula a média das notas
function media(){
}

let btnEnviar = document.querySelector("#btnEnviar");
let btnLimpar = document.querySelector("#btnLimpar");
let btnCalcular = document.querySelector("#btnCalcular")

btnEnviar.addEventListener("click", () => (adicionar(i)));
btnLimpar.addEventListener("click", () => (limpar()));
btnCalcular.addEventListener("click", () => (media()));