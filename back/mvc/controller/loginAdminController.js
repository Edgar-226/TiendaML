const jwt = require('jsonwebtoken');
const loginAdminModel = require('../model/loginAdminModel');


module.exports.login = async (user) => {
    let login = new loginAdminModel();//Cada usuario necesita su login
    let data = await login.find(user)
    if (data) {
        token = jwt.sign({ data }, process.env.SECRETKEY);
        return token;
    }
    else {
        return false
    }

}