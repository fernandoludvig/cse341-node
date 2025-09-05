// Importa a classe EventEmitter do Node.js
// EventEmitter permite criar objetos que disparam e escutam eventos
const EventEmitter = require('events'); // class = humano

// Define uma URL de exemplo, que seria usada se enviássemos logs para um servidor
var url = 'http://mylogger.io/log';

// Cria a classe Logger que herda de EventEmitter
// Ou seja, Logger agora pode emitir eventos e registrar listeners
class Logger extends EventEmitter {
    // Define o método log, que recebe uma mensagem
    log(message) {
        // Aqui normalmente enviaríamos uma requisição HTTP para a URL
        console.log(message); // Por enquanto, apenas imprime a mensagem no console

        // Emite o evento 'messageLogged' e envia um objeto com dados
        // Qualquer listener registrado para 'messageLogged' será chamado
        this.emit('messageLogged', { id: 1, url: 'http://' }); 
    }
}

// Exporta a classe Logger
// Agora, quando outro arquivo fizer require('./logger'), receberá a classe Logger
// Assim podemos criar novas instâncias com 'new Logger()'
module.exports = Logger;
