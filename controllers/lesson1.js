const fernandoRoute = (req, res) => {
    // Envia o texto "Hello" como resposta ao cliente que fez a requisição
    res.send('Fernando');
};

const fernandaRoute = (req, res) => {
    // Envia o texto "Hello" como resposta ao cliente que fez a requisição
    res.send('Fernanda');
};

const laysaRoute = (req, res) => {
    // Envia o texto "Hello" como resposta ao cliente que fez a requisição
    res.send('Laysa');
};

module.exports = {
    fernandoRoute,
    fernandaRoute,
    laysaRoute
};