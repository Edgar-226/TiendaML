const loginAdminController = require('../controller/loginAdminController')
const validation = require('../middleware/validation')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")


module.exports = async (app) => {
    app.post('/loginAdmin', validation.loginValidation, async (req, res) => {
        let user = req.body;
        let token = await loginAdminController.login(user)
        if (token == false ) {
            res.status(500).json({ error: 'Usuario no encontrado' })
        }else{
            res.send(token);
            
        }
    });


}