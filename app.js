//function sayHello(name) {
//    console.log('Hello '+ name);
//}
//sayHello('Fernando');
//console.log(window); // global(console.log();
//console.log(module);
// Importa o conteúdo exportado do arquivo logger.js
// O require pega o que foi colocado em module.exports dentro de logger.js
const log = require('./logger');

// Chama a função 'log' que está dentro do objeto 'logger'
// E passa o texto 'message' como argumento
//logger.log('message'); // CODIGO, Vai imprimir 'message' no console
log('message'); // como so existe um funcao no logger posso imprimir direto a variavel