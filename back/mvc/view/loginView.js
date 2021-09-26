const loginController = require('../controller/loginController')
const validation = require('../middleware/validation')

module.exports = async (app) => {
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
};
