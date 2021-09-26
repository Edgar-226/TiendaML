const sequelize = require('../db/conexion')

module.exports = class productsModel {
    constructor(login) {
        this.login = login
    }
    async listCart(user) {
        let result = await sequelize.query("SELECT * FROM cart JOIN users ON cart.user_email = '"+user.email+"'");
        return result;
    }
}