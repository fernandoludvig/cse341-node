// Importa o módulo 'http' do Node.js, que permite criar servidores web
const http = require('http');

// Cria um servidor HTTP
// A função passada é chamada toda vez que uma requisição chega
// req = objeto que representa a requisição do cliente
// res = objeto que representa a resposta que enviaremos
const server = http.createServer((req, res) => {

    // Se a URL requisitada for a raiz '/'
    if (req.url === '/') {
        res.write('Hello World'); // Envia a resposta "Hello World" para o cliente
        res.end(); // Finaliza a resposta
    }

    // Se a URL requisitada for '/api/courses'
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3])); // Converte o array para JSON e envia
        res.end(); // Finaliza a resposta
    }    
});  
// OBS: Também poderia ser escrito como http.createServer(function(req, res){ ... })

// Faz o servidor escutar requisições na porta 3000
server.listen(3000);

// Mensagem no console indicando que o servidor está rodando
console.log('Listening on port 3000...');
