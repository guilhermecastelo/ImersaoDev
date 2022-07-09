//CRIAÇÃO DOS OBJETOS (NESSE CASO, SERÃO PESSOAS JOGADORAS)
var paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

var rafa = {
    nome: "Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

//PARA CADA PESSOA/OBJETO CRIADO, CALCULA-SE OS POSNTOS DELES ATRAVÉS DA FUNÇÃO
rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

//VETOR COM OS OBJETOS DAS PESSOAS JOGADORAS
var jogadores = [rafa, paulo];

//MOSTRAS ESSAS PESSOAS JOGADORAS COM A FUNÃO
exibeJogadores(jogadores);

function exibeJogadores(jogadores) {
    var html = "";
    for (var i = 0; i < jogadores.length; i++) {
        //ADICIONA UMA NOVA LINHA NA TABELA HTML DE ACORDO COM A QTDE DE PESSOAS JOGADORAS
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
    }
    //MOSTRAS AS NOVAS LINHAS ADICONADAS
    var tabJogadores = document.getElementById("tabelaJogadores");
    tabJogadores.innerHTML = html;
}

//FUNÇÕES PARA ADCIONAR VITÓRIAS, EMPATES OU DERROTAS
function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadores(jogadores);
}