const loginController = require('../controller/loginController')

module.exports = async (app) => {
    app.post('/login', async (req, res) => {
        let user = req.body;
        res.send(await loginController.login(user));
    });

    app.post('/login/insert', async (req, res) =>{
        let user = req.body;
        res.send(await loginController.insert(user));
    });
};
