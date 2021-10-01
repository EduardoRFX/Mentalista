var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);
var tentativas = document.getElementById("tentativas");
var quantidadeTentativas = 3;
tentativas.innerHTML = "Você tem " + quantidadeTentativas + " tentativas.";
document.getElementById("botaoR").disabled = true;

function Chutar(){
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    console.log(chute);
    if (chute == numeroSecreto){
        elementoResultado.innerHTML = "Você Acertou!!";
        console.log("acertou");
    } else if(chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Digite um numero de 0 a 10!";
        console.log("Digite um numero de 0 a 10!");

    } else {
        elementoResultado.innerHTML = "Você Errou!!";
        console.log("errou!");
    }

    quantidadeTentativas = quantidadeTentativas-1;
    tentativas.innerHTML = "Você tem " + quantidadeTentativas + " tentativas.";

    if (quantidadeTentativas ==0){
        elementoResultado.innerHTML = "Suas tentativas acabaram!!";
        document.getElementById("botao").disabled = true;
        document.getElementById("botaoR").disabled = false;
    }

}

function resetar() {
    location.reload();
}


