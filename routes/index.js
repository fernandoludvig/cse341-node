// Cria um "Router" do Express, que permite separar as rotas em módulos.
// Assim você pode importar essas rotas no arquivo principal (ex: app.js ou server.js).
const routes = require('express').Router();

// Importa o arquivo "lesson1.js" dentro da pasta "controllers".
// Esse controller deve exportar funções que serão usadas para tratar as requisições das rotas.
// Aqui, você vai usar a função "fernandoRoute" dentro do controller.
const lesson1Controller = require('../controllers/lesson1');

// Define uma rota GET para o caminho raiz "/".
// Quando alguém acessar http://localhost:3000/ (ou o caminho base definido para este Router),
// o Express vai chamar a função "fernandoRoute" do controller.
// Essa função decide o que será retornado ao cliente (texto, HTML, JSON, etc).
routes.get('/', lesson1Controller.fernandoRoute);

routes.get('/fernanda', lesson1Controller.fernandaRoute);

routes.get('/laysa', lesson1Controller.laysaRoute);


// Exporta o Router para que ele possa ser usado em outro arquivo (ex: app.js ou server.js).
// Dessa forma, o arquivo principal apenas importa o módulo de rotas e registra ele no app.
module.exports = routes;
