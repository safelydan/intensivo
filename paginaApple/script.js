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