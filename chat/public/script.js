// obtém referências para elementos do DOM
const botaoEnviar = document.getElementById("enviar");  // botão de envio
const texto = document.getElementById("texto");        // campo de entrada de texto
const chat = document.getElementById("mensagens");     // lista de mensagens

// cria uma instância do Socket.IO para estabelecer a conexão com o servidor
const socket = io();

// adiciona um ouvinte de eventos para o clique no botão de envio
botaoEnviar.addEventListener("click", () => {
  // verifica se o campo de texto não está vazio
  if (texto.value !== "") {
    // emite um evento "nova mensagem" para o servidor com o conteúdo do texto
    socket.emit("nova mensagem", texto.value);
    // limpa o campo de texto após o envio
    texto.value = "";
  }
});

// adiciona um ouvinte de eventos para o evento "nova mensagem" recebido do servidor
socket.addEventListener("nova mensagem", (msg) => {
  // cria um novo elemento <li> para a nova mensagem
  const novaMensagem = document.createElement("li");
  // adiciona a classe "mensagem" ao elemento <li>
  novaMensagem.classList.add("mensagem");
  // define o conteúdo de texto da mensagem no elemento <li>
  novaMensagem.textContent = msg;
  // adiciona o elemento <li> à lista de mensagens
  chat.appendChild(novaMensagem);
});
