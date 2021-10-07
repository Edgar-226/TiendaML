const sequelize = require('../db/conexion')

module.exports = class loginModel {
    constructor(login) {
        this.login = login
    }

    async listUsers (){
        let result = await sequelize.query("SELECT [user],email,[name] FROM users");
        return result
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

    async updateLogin(user, login) {
        let result = await sequelize.query("SELECT [user],email,[name] FROM users WHERE [user] ='" + user.user + "' AND [password] = '" + login.passwordActual + "'");
        console.log(result)
        if (result[0].length > 0) {
            let result = await sequelize.query("UPDATE users SET [password] = '" + login.passwordNuevo + "' WHERE [user] = '" + user.user + "' AND [password] ='" + login.passwordActual + "'");
            console.log(result)
            if (result[0].length == 0) {
                let result = await sequelize.query("SELECT [user],email,[name] FROM users WHERE [user] ='" + user.user + "' AND [password] = '" + login.passwordNuevo + "'");
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
        else {
            return false
        }

    }
    async deleteLogin(user, login) {
        let result = await sequelize.query("SELECT [user],email,[name] FROM users WHERE [user] ='" + user.user + "' AND [password] = '" + login.passwordActual + "'");
        console.log(result)
        if (result[0].length > 0) {
            let result = await sequelize.query("DELETE FROM users WHERE [password] = '" + login.passwordActual + "' AND [user] = '" + user.user + "'");
            console.log(result)
            if (result[0].length == 0) {
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


