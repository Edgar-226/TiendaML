const sequelize = require('../db/conexion')

module.exports = class loginModel {
    constructor(login) {
        this.login = login
    }

    async find(user) {
        let result = await sequelize.query("SELECT [user],email,[name] FROM users WHERE [user] ='" + user.user + "' AND [password] = '" + user.password + "'");
        if (result[0].length > 0) {
            return result[0][0]
        }
        else {
            return false
        }
    }
    async insert(user) {
        let result = await sequelize.query("INSERT INTO users ([user],[name],last_name,email,[password],tel) VALUES ('" + user.user + "','" + user.name + "', '" + user.lastmane + "', '" + user.email + "','" + user.password + "', " + user.tel + ")");
        console.log(result);
        if (result[0].length == 0) {
            let result = await sequelize.query("SELECT [user],email,[name] FROM users WHERE [user] ='" + user.user + "' AND [password] = '" + user.password + "'");
            if (result[0].length > 0) {
                return result[0][0]
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
}