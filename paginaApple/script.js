// seleção de elementos HTML pelo ID
const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");

// definição de objetos representando diferentes cores
const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
};

const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno"
};

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
};

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
};

const rosaClaro = {
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro"
};

// acesso à propriedade "pasta" do objeto "meiaNoite" sem fazer nada com o valor retornado
meiaNoite.pasta;

// criação de uma lista chamada "opcoesDeCores" contendo os objetos das cores definidas anteriormente
const opcoesDeCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

// função para trocar a imagem visualizada com base na opção selecionada
function trocarImagem() {
    // obtém o id da opção de imagem selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    
    // obtém o número da imagem a ser exibida com base no primeiro caractere do id
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    
    // atualiza o atributo "src" da imagem de visualização com o caminho da nova imagem
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesDeCores[0].pasta}/imagem-${imagemSelecionada}.jpeg`;
}

function trocarTamanho() {
    // obtém o ID da opção de tamanho selecionada
    const idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id;
    
    // atualiza a variável de controle do tamanho da caixa com o primeiro caractere do ID
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0);

    // atualiza o título do produto com base no tamanho escolhido
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesDeCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    
    // verifica se o tamanho escolhido é "41 mm" para aplicar ou remover a classe 'caixa-pequena' na imagem
    if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
        imagemVisualizacao.classList.add('caixa-pequena'); 
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena'); 
    }
}

function trocarCor() {
    // obtém o ID da opção de cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
   
    // atualiza o título geral do produto
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesDeCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    
    // atualiza o título específico para a cor selecionada
    nomeCorSelecionada.innerText = `Cor - ${opcoesDeCores[corSelecionada].nome}`;
}
