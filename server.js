// Importa o módulo "express", que é um framework para criar servidores web em Node.js
const express = require('express');

// Cria uma instância do aplicativo Express, que será usada para definir rotas e configurar o servidor
const app = express();

// Define uma rota GET para o caminho raiz "/".
// Sempre que alguém acessar http://localhost:3000/ , essa função será chamada.
// "req" representa a requisição do cliente, "res" representa a resposta do servidor.
app.get('/', (req, res) => {
    // Envia o texto "Hello" como resposta ao cliente que fez a requisição
    res.send('Fernando');
});

// Define a porta padrão como 3000, caso a variável de ambiente não esteja definida
const port = 3000;

// Inicia o servidor na porta definida.
// "process.env.port" é usado quando a porta é configurada por um serviço de hospedagem (como Heroku).
// Caso contrário, será usada a porta local "port" (3000).
app.listen(process.env.port || port);

// Exibe no terminal uma mensagem informando que o servidor está rodando e em qual porta.
console.log('Web server is listening at port ' + (process.env.port || port));
