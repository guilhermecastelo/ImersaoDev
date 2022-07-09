var numSecreto = parseInt(Math.random() * 10);  //garador de números aleatórios

var numTentativas = 3;

while (numTentativas > 0) {

    var chute = parseInt(prompt("Digite um número entre 0 e 10:"));

    if (chute == numSecreto) {
        alert("Acertou!");
        break;  //numTentativas = numTentativas - 3;
    } else if (chute > numSecreto) {
        alert("O número secreto é menor que " + chute);
        numTentativas = numTentativas - 1;
    } else if (chute < numSecreto) {
        alert("O número secreto é maior que " + chute);
        numTentativas = numTentativas - 1;
    } else if (isNaN) {
        alert("Isso não é um número!");
        numTentativas = numTentativas - 1;
    }

}
if (chute != numSecreto) {
    alert("Suas tentativas acabaram!\nO número secreto era: " + numSecreto);
}