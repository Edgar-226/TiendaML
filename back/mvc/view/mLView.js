const axios = require('axios');

module.exports = async (app) => {

    app.get('/ml', async (req, res) => {
        axios.get('https://api.mercadolibre.com/sites/MLM/search?category=MLM1039&offset=10&limit=11').then(response => {
            res.send(response.data)
        })

    })
    app.get('/ml/:id', async (req, res) => {
        axios.get('https://api.mercadolibre.com/items/' + req.params.id).then(response => {
            res.send(response.data)
        })

    })
    app.get('/ml/buscar/:busqueda', function (req, res) {
        axios.get('https://api.mercadolibre.com/sites/MLM/search?q=' + req.params.busqueda + '&category=MLM1039&offset=10&limit=11').then(response => {
            res.send(response.data)
        })
    })
}