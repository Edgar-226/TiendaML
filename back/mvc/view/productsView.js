const productController = require('../controller/productsController')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")

module.exports = async (app) => {
    app.get('/products', async (req, res) => {
        res.send(await productController.listProducts());

    });
    app.get('/products/:id', async (req, res) => {
        let productId = req.params.id;
        res.send(await productController.findProduct(productId));
    });
    app.delete('/products/delete/:name',autentication.userAutentication, async (req, res) => {
        let productName = req.params.name;
        res.send(await productController.deleteProduct(productName));
    });
    app.post('/products/insert',autentication.userAutentication, async (req, res) => {
        let product = req.body;
        res.send(await productController.insertProduct(product));
    });
    app.post('/products/update',autentication.userAutentication, async (req, res) => {
        let product = req.body;
        res.send(await productController.updateProduct(product));
    })

};