// importa os módulos 'http' e 'express'
const http = require("http");
const express = require("express");

// cria uma aplicação express
const app = express();

// cria um servidor http usando a aplicação express como manipulador de requisições
const servidorHttp = http.createServer(app);

// middleware para servir arquivos estáticos a partir do diretório 'public'
app.use(express.static('public'));

// define a porta na qual o servidor irá escutar
const port = 3001;

// inicia o servidor e escuta na porta especificada
servidorHttp.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
