const http = require("http");
const express = require("express");
const app = express();
const servidorHTTP = http.createServer(app);
const io = require("socket.io")(servidorHTTP);

// serve arquivos estáticos a partir do diretório "public"
app.use(express.static("/public"));

// ouve eventos de conexão dos clientes
io.addListener("connection", (socket) => {
  console.log("um usuário acabou de conectar");

  // ouve o evento "nova mensagem" do cliente
  socket.addListener("nova mensagem", (msg) => {
    // emite o evento "nova mensagem" para todos os clientes, incluindo o remetente
    io.emit("nova mensagem", msg);
  });

  // ouve o evento de desconexão do cliente
  socket.addListener("disconnect", () => {
    console.log("um usuário desconectou");
    // lógica adicional para lidar com desconexões, se necessário
  });
});

// configura o servidor para escutar na porta 4040
const PORT = 4040;
servidorHTTP.listen(PORT, () => {
  console.log(`servidor escutando na porta ${PORT}`);
});
