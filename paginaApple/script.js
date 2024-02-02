const imagemVisualizacao = document.getElementById("imagem-visualizacao")
const tituloProduto = document.getElementById("titulo-produto")
// definição de um objeto representando a cor "azul-inverno"
const azulInverno = {
    nome: "Azul-inverno",      // propriedade: nome da cor
    pasta: "imagens-azul-inverno"   // propriedade: pasta onde estão armazenadas as imagens dessa cor
};   

const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
};

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
};

const rosaClaro = {
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro"
};

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
};

// acesso à propriedade "pasta" do objeto "meiaNoite" e não está sendo feito nada com o valor retornado
meiaNoite.pasta;  

// criação de uma lista chamada "opcoesDeCores" contendo os objetos das cores definidas anteriormente
const opcoesDeCores = [azulInverno, verdeCipreste, meiaNoite, rosaClaro, estelar];
const opcoesTamanho = ["41 mm", "45 mm"];

// opcoesTamanho -

// let imagemSelecionada = 1; //esta funcionando mesmo sem ela, averiguar depois o porque
let tamanhoSelecionado = 1;


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
    // o que a gente quer?

    // atualizar variavel de controle do tamamho da caixa
    const idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0);

    // mudar o titulo
    tituloProduto.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    console.log(tamanhoSelecionado)
    // `Pulseira loop esportiva azul-inverno para caixa de ${} mm`
    // mudar o tamanho da imagem de acordo com a opçao escolhida


}