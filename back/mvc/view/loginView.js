const loginController = require('../controller/loginController')
const validation = require('../middleware/validation')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")


module.exports = async (app) => {
    app.get('/login/select', autentication.userAutentication, async (req, res) => {
        res.send(await loginController.listUsers())
    });

    app.post('/login', validation.loginValidation, async (req, res) => {
        let user = req.body;
        let token = await loginController.login(user)
        if (token == false ) {
            res.status(500).json({ error: 'Usuario no encontrado' })
        }else{
            res.send(token);
            
        }
    });

    app.post('/login/insert', async (req, res) => {
        let user = req.body;
        res.send(await loginController.insert(user));
    });

    app.post('/login/update', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const login = req.body;
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await loginController.updateLogin(user.data, login));
    });

    app.delete('/login/delete', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        const login = req.body;
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await loginController.deleteLogin(user.data, login));
    });

};


