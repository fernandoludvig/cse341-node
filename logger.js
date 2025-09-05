console.log(__filename);
console.log(__filename);

var url = 'http://mylogger.io/log';

function log(message) {
    // Aqui normalmente enviaríamos uma requisição HTTP para a URL
    console.log(message); // Por enquanto, apenas imprime a mensagem no console
}
// Exporta a função 'log' como objeto com chave 'log'
// module.exports.log = log; 

// Exporta diretamente a função 'log'
module.exports = log  ;
// Aqui como só existe uma função, não precisamos criar um objeto. 
