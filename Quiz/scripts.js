var p1 = prompt("Qual a senha mais usada e menos segura da internet? ");

if (p1 == "12345") {
   var pontos = 1;
}

var p2 = prompt("Quem é o dono da Microsoft?");

if (p2 == "Bill Gates") {
    var pontos = pontos + 1;
}

var p3 = prompt("Quem é o criador do PHP?");

if (p3 == "Rasmus Lerdof") {
    var pontos = pontos + 1;
}

alert("Sua pontuação final foi: " + pontos + " pontos");