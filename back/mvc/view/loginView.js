const loginController = require('../controller/loginController')
const validation = require('../middleware/validation')

module.exports = async (app) => {
    app.post('/login', validation.loginValidation, async (req, res) => {
        let user = req.body;
        if ((await loginController.login(user)) == false ) {
            res.status(500).json({ error: 'Usuarion no encontrado' })
        }else{
            res.send(await loginController.login(user));
            
        }
    });

    app.post('/login/insert', async (req, res) => {
        let user = req.body;
        res.send(await loginController.insert(user));
    });
};
