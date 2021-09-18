const express = require("express");
const dotenv = require('dotenv');
const db = require('./db/db');
const midd = require('./middlewares/midd');
const axios = require('axios');
const cors = require('cors');
const app = express();


dotenv.config();


//Middlelware
app.use(express.json());
app.use(cors());
app.use(midd.log);
app.use(midd.limitador);

app.listen(process.env.PORT, function () {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});


//Endpoint para obtener el Carrito
app.get('/cart', cors(midd.corsOption), function (req, res) {
    res.send(db.Cart)
})


app.post('/cart', midd.Autenticar, function (req, res) {
    if (!req.body.id || !req.body.nombre || !req.body.cantidad || !req.body.precio || !req.body.foto) {
        db.respuesta = {
            codigo: 502,
            error: true,
            mensaje: 'Es indispensable agregar todos los datos'
        }
    } else {
        if (db.buscaProducto(req.body.id)) {
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'Producto añadido'

            }
        } else {
            db.nuevoProducto(req.body.id, req.body.nombre, req.body.cantidad, req.body.precio, req.body.foto)
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: '¨Producto Agregado'
            }
        }
    }
    res.send(db.respuesta)
})



app.delete('/cart/:id/:clave', midd.Autenticarborrar, function (req, res) {
    if (db.borraProducto(req.params.id)) {
        db.respuesta = {
            codigo: 200,
            error: false,
            mensaje: 'Producto eliminado'
        }
    } else {
        db.respuesta = {
            codigo: 421,
            error: true,
            mensaje: 'Producto no existe'
        }
    }
    res.send(db.respuesta);
})

app.get('/ml', function (req, res) {

    axios.get('https://api.mercadolibre.com/sites/MLM/search?category=MLM1039&offset=10&limit=11').then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        res.send(response.data)
    })

})
app.get('/ml/:id', function (req, res) {

    axios.get('https://api.mercadolibre.com/items/' + req.params.id).then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        res.send(response.data)
    })

})
app.get('/ml/buscar/:busqueda', function (req, res) {

    axios.get('https://api.mercadolibre.com/sites/MLM/search?q=' + req.params.busqueda + '&category=MLM1039&offset=10&limit=11').then(response => {
        // returning the data here allows the caller to get it through another .then(...)
        res.send(response.data)
    })

})