const jwt = require('jsonwebtoken');
const loginModel = require('../model/loginModel');


module.exports.login = async (user) => {
    let login = new loginModel();//Cada usuario necesita su login
    let data = await login.find(user)
    if (data) {
        token = jwt.sign({ data }, process.env.SECRETKEY);
        return token;
    }
    else {
        return "Usuario no encontrado"
    }
    
}

module.exports.insert = async(user) => {
    let login = new loginModel();
    let data = await login.insert(user)
    if (data) {
        token = jwt.sign({ data }, process.env.SECRETKEY);
        return token;
    }
    else {
        return "Regristro fallido Try again"
    }
}