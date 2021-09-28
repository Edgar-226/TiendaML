const cartController = require('../controller/cartController')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")
module.exports = async (app) => {
    app.get('/cart', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await cartController.listCart(user.data));
    });
    app.post('/cart/find', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const product = req.body;
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await cartController.findCart(user.data, product));
    });
    app.post('/cart/add', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const product = req.body;
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await cartController.addCart(user.data, product));
    });
    app.post('/cart/update', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const product = req.body;
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await cartController.updateCart(user.data, product));
    });
    app.delete('/cart/delete', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const product = req.body;
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await cartController.deleteCart(user.data, product));
    });



}