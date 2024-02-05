// Componente funcional ItemCardapio utilizado para renderizar um item do cardápio
export function ItemCardapio(props) {
  // Estrutura do container do item do cardápio
  return <div className="container-item-cardapio">
      <div>
        <h2>{props.nome}</h2>
        <p>{props.preco}</p>
        <p>{props.descricao}</p>
      </div>
      <img src={props.imagem} alt="" />
    </div>
}

//props (abreviação de propriedades) é um mecanismo fundamental que permite a transmissão de dados de um componente
//pai para um componente filho. Isso facilita a comunicação entre diferentes partes da sua aplicação.
//ao criar um componente em React, você pode passar dados para esse componente através de atributos. Esses atributos são então acessíveis dentro do componente como props.
//no exemplo que forneci, o componente ItemCardapio é projetado para receber e utilizar esses dados através do objeto props que é passado como parâmetro para a função do componente:
