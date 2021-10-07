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
        return false
    }

}

module.exports.insert = async (user) => {
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

module.exports.updateLogin = async (user, login) => {
    let response = new loginModel();
    let data = await response.updateLogin(user, login)
    if (data != false) {
        token = jwt.sign({ data }, process.env.SECRETKEY);
        return token;
    }
    else {
        return "No se pudo realizar el cambio"
    }
}

module.exports.deleteLogin = async (user, login) => {
    let response = new loginModel();
    let data = await response.deleteLogin(user, login)
    if (data != false) {
        return "Usuario eliminado correctamente"
    }
    else {
        return "No se pudo borrar la cuenta"
    }
}