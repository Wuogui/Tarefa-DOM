let caixa = document.getElementById("caixa");
let nota = document.querySelector("#entrada");
let resultado = document.querySelector("#resultado")
let i = 1; // Valor que dita qual o numero da nota está sendo inserida.
let listaDeNotas = [] //lista de notas as notas inseridas pelo usuário.
let calculo;

//função que adicionar as notas no bloco de texto
function adicionar(numeroDaNota){
    n = nota.value.replace(",", ".");
    nota.value = "";
    caixa.innerText += `\n A nota ${numeroDaNota} foi ${n}`;
    i += 1;
    listaDeNotas.push(parseFloat(n));
}

//função que limpa todo o bloco de texto
function limpar(){
    caixa.innerText = ''
    i = 1
    listaDeNotas = []
    resultado.innerText = ""
}

//função que calcula a média das notas
function media(){
    for (let k=0; k < listaDeNotas.length; k++){
        if (k == 0) {
            calculo = listaDeNotas[k]
        }
        else {
            calculo += listaDeNotas[k]
        }
    }
    calculo = calculo / listaDeNotas.length
    resultado.innerText = `${calculo.toFixed(2)}`
}

let btnEnviar = document.querySelector("#btnEnviar");
let btnLimpar = document.querySelector("#btnLimpar");
let btnCalcular = document.querySelector("#btnCalcular")

btnEnviar.addEventListener("click", () => (adicionar(i)));
btnLimpar.addEventListener("click", () => (limpar()));
btnCalcular.addEventListener("click", () => (media()));