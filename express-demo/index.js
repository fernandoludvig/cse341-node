// Importa o módulo Express, que facilita a criação de servidores web
const Joi = require('joi');
const express = require('express');

// Cria uma instância do Express (nosso "app" que representa o servidor)
const app = express();

app.use(express.json());

// Array de cursos como "banco de dados" em memória
const courses = [
    { id: 1, name: 'courses1'},
    { id: 2, name: 'courses2'},
    { id: 3, name: 'courses3'}
];

// Rota GET para o caminho raiz '/'
// Quando alguém acessar http://localhost:3000/ essa função será executada
app.get('/', (req, res) => {
    res.send('Hello World!!!'); // Envia a resposta "Hello World!!!" para o navegador
});

// Rota GET para '/api/courses'
// Quando alguém acessar http://localhost:3000/api/courses
// O Express envia o array de cursos convertido automaticamente para JSON
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Rota GET para '/api/courses/:id'
// ":id" é um parâmetro de rota que pode ser acessado via req.params.id
app.get('/api/courses/:id', (req,res) => {
    // parseInt converte uma string para número inteiro
    // req.params.id é sempre uma string (ex: "2"), então precisamos converter para comparar com o id numérico
    const course = courses.find(c => c.id === parseInt(req.params.id));

    // Se o curso não existe, retorna status 404 (não encontrado) com uma mensagem
    if (!course) return res.status(404).send('The course with the given ID was not found');

    // Se o curso existe, envia ele como resposta (JSON)
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    // Cria o schema correto usando Joi.object()
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    // Valida o req.body
    const { error, value } = schema.validate(req.body);

    // Se houver erro, retorna 400
    if (error) return res.status(400).send(error.details[0].message);

    // Cria o novo curso
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);

    res.send(course);
});

app.put('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');


    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    // Valida o req.body
    const { error, value } = schema.validate(req.body);

    // Se houver erro, retorna 400
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);

})

//    Mais de um parametro:
//app.get('/api/courses/:year/:month', (req,res) => {
//    res.send(req.params);
//});

// Query parameter = informações extras passadas na URL após o "?"
// Exemplo: /api/courses?sortBy=name&limit=10
// sortBy = name, limit = 10
// No Express, você acessa com req.query

//app.get('/api/courses/:year/:month', (req,res) => {
//    res.send(req.query);
//});


// Define a porta que o servidor vai escutar
// process.env.PORT → usada em produção (Heroku, Render, etc. definem a porta automaticamente)
// Quem gera a porta é o servidor/hospedagem
// Se não existir, usa 3000 por padrão
const port = process.env.PORT || 3000;

// Faz o servidor "ouvir" na porta definida e exibe mensagem no console
app.listen(port, () => console.log(`Listening on port ${port}...`));
