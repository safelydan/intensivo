// pro javascript conseguir manipular ele precisa saber algumas coisas sobre a pagina
// const ja que por enquanto nao vamos alterar o numero de capitulos
// mudar pra let depois ser um player que funciona
// pro javascript saber qual é o botao e guardar na variavel pra trabalhar 


const botaoPlayPause = document.getElementById("play-pause");
const botaoFaixaAnterior = document.getElementById("anterior");
const botaoProximaFaixa = document.getElementById("proximo");
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeFaixa = document.getElementById("capitulo");

const numeroCapitulos = 10;
let taTocando = false;
let capituloAtual = 1;

function tocarFaixa () {
    audioCapitulo.play();
    taTocando = true;
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add("bi-play-circle-fill");
    taTocando= false;
}

function tocarOuPausar() {
    if (taTocando === false){ //tres iguais pra averiguar se eh true ou false
        tocarFaixa();
    } else{
        pausarFaixa();
    }
}

function proximaFaixa() {
    capituloAtual = capituloAtual + 1;

    if(capituloAtual > numeroCapitulos){
        capituloAtual = 1;
    } 
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa();
    atualizarNomeFaixa();
}

function faixaAnterior() {
    capituloAtual = capituloAtual - 1;

    if (capituloAtual < 1){
        capituloAtual = 1
    }
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa();
    atualizarNomeFaixa();
}

function atualizarNomeFaixa() {
    nomeFaixa.innerText = "Capítulo " + capituloAtual;
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximaFaixa.addEventListener("click", proximaFaixa);
botaoFaixaAnterior.addEventListener("click", faixaAnterior);

// botaoPlayPause.onclick(tocarMusica); outra forma de fazer tocar quando for clicado