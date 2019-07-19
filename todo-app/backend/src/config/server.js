/*Relativo ao express, inicia o servidor e aloca uma porta para conseguir publicar os webservices*/
const port = 3003;

/*Faz o parse do corpo da requisição*/
const bodyParser = require("body-parser");

/*Servidor WEB padrão*/
const express = require("express");
const server = express();

/*Middlewares para as requisições*/

// bodyParser que faz a conversão/parser do padrão urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}`);
});
