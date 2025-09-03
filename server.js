// Importa o módulo "express", que é um framework para criar servidores web em Node.js.
// Ele facilita a criação de rotas, middlewares e manipulação de requisições/respostas HTTP.
const express = require('express');

// Cria uma instância do aplicativo Express, chamada "app".
// Esse objeto é o coração da aplicação: é nele que você define rotas, middlewares e configurações.
const app = express();

// Define a porta padrão como 3000.
// Caso não haja uma porta definida no ambiente (ex: Heroku define via variável de ambiente),
// o servidor rodará localmente na porta 3000.
const port = 3000;

// Registra todas as rotas definidas no arquivo "routes/index.js".
// O './routes' importa o módulo de rotas que você criou usando express.Router().
// O app.use('/', ...) significa que essas rotas estarão disponíveis a partir da raiz '/'.
app.use('/', require('./routes'));

// Inicia o servidor na porta definida.
// "process.env.port" é usado quando a porta é configurada por um serviço de hospedagem.
// Caso contrário, o servidor usa a porta local (3000).
app.listen(process.env.port || port);

// Exibe no console uma mensagem informando que o servidor está rodando e em qual porta.
// ATENÇÃO: geralmente a variável de ambiente é "process.env.PORT" (maiúsculo),
// então em hospedagens como Heroku, pode ser necessário corrigir isso.
console.log('Web server is listening at port ' + (process.env.port || port));
