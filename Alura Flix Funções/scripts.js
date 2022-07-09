function adicionarFilme(){
    var meuFilme = document.querySelector('#filme').value;
    validaFilme(meuFilme);
}

function validaFilme(meuFilme){
    var campoFilme = document.querySelector('#filme');
    if(meuFilme.endsWith('.jpg')){
         listaFilmes(meuFilme);
    }else{
         alert("Isso não é uma imagem com tipo válido.\nO tipo válido é apenas .jpg");
    }
    campoFilme.value = "";
}

function listaFilmes(filme){
    var listador = document.querySelector("#listaFilmes");
    var elementoFilme = "<img src=" + filme + ">";
    listador.innerHTML = listador.innerHTML + elementoFilme;
}