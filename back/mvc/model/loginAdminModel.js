const sequelize = require('../db/conexion')

module.exports = class loginAdminModel {
    constructor(login) {
        this.login = login
    }

        async find(user) {
        let result = await sequelize.query("SELECT [user],email,[name] FROM admins WHERE [user] ='" + user.user + "' AND [password] = '" + user.password + "'");
        if (result[0].length > 0) {
            return result[0][0]
        }
        else {
            return false
        }
    }
    
}