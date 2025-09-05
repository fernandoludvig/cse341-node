//        PATH MODULE
// Importa o módulo 'path' do Node.js
// Esse módulo é nativo e fornece utilitários para trabalhar com caminhos de arquivos e diretórios
// ##########CÓDIGO: const path = require('path');

// Usa o método 'parse' do módulo 'path'
// '__filename' é uma variável global do Node.js que contém o caminho completo do arquivo atual
// 'path.parse' quebra esse caminho em partes (root, dir, base, ext, name) e retorna como objeto
// ##########CÓDIGO: var pathObj = path.parse(__filename);

// Exibe no console o objeto 'pathObj'
// Assim você consegue ver as diferentes partes do caminho do arquivo atual
// ##########CÓDIGO: console.log(pathObj);

//        OS MODULE
// ##########CÓDIGO: const os = require('os');

// ##########CÓDIGO: var totalMemory = os.totalmem();
// ##########CÓDIGO: var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory + ' ' + 'Free Memory: ' + freeMemory);

// Template String
// ##########CÓDIGO: console.log(`Total Memory: ${totalMemory}`);
// ##########CÓDIGO: console.log(`Free Memory: ${freeMemory}`);

//        File System MODULE
//const fs = require('fs');

// --- Exemplo de leitura síncrona (comentado) ---
// Aqui, fs.readdirSync lê o conteúdo do diretório atual ("./")
// Esse método é SINCRONO: ele bloqueia a execução até terminar a leitura
// ##########CÓDIGO: const files = fs.readdirSync('./') 
// ##########CÓDIGO: console.log(files);


// --- Exemplo de leitura assíncrona ---
// fs.readdir lê o conteúdo do diretório atual ("./") de forma ASSÍNCRONA
// Isso significa que não bloqueia a aplicação, e o Node pode continuar rodando outras tarefas
// ##########CÓDIGO: 
//fs.readdir('./', function(err, files) {
    // Primeiro parâmetro da callback: err → se deu algum erro, ele vem aqui
// ##########CÓDIGO: 
//    if (err) console.log('Error', err);
    // Segundo parâmetro: files → é um array com os nomes dos arquivos e pastas encontrados no diretório
// ##########CÓDIGO:    
//    else console.log('Result', files);
//});


//        Events MODULE
// Importa o módulo 'events' do Node.js
// Esse módulo fornece a classe EventEmitter, usada para trabalhar com eventos
const EventEmitter = require('events'); // class = humano

// Cria uma instância (objeto) da classe EventEmitter
// Esse objeto poderá registrar ouvintes (listeners) e emitir eventos

// Register a listener (registrar um ouvinte para o evento)
// Aqui estamos dizendo: "quando o evento 'messageLogged' for emitido,
// execute a função fornecida"

// Raise an event (disparar/emitir o evento)
// Aqui estamos disparando o evento 'messageLogged' e enviando junto um objeto
// Esse objeto { id, url } é recebido pelo listener como o parâmetro 'arg'

const Logger = require('./logger');
// Cria uma instância de Logger
// Agora 'logger' é um objeto que pode emitir eventos e chamar métodos da classe Logger
const logger = new Logger();

// Registra um listener (ouvinte) para o evento 'messageLogged'
// Ou seja: quando logger emitir 'messageLogged', execute a função abaixo
logger.on('messageLogged', arg => {   
    console.log('Listener called', arg); // Mostra no console os dados enviados
});

// Chama o método log do objeto logger
// Esse método provavelmente emite o evento 'messageLogged' internamente
// Exemplo dentro do logger.js:
// log(message) { 
//    console.log(message); 
//    this.emit('messageLogged', { id: 1, url: 'http://' });
// }
logger.log('message');