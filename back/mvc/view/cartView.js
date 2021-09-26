const cartController = require('../controller/cartController')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")
module.exports = async (app) => {
    app.get('/cart', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        console.log(user.data)
        res.send(await cartController.listcart(user.data));

    });
}