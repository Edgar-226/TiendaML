const sequelize = require('../db/conexion')

module.exports = class productsModel {
    constructor(login) {
        this.login = login
    }
    async listCart(user) {
        let result = await sequelize.query("SELECT user_email,id_product,name_product,mercado_libre,quantity,price,picture FROM cart JOIN users ON cart.user_email = users.email AND users.email = '" + user.email + "'");
        return result;
    }
    async addCart(user,product) {
        let result = await sequelize.query("INSERT INTO cart (user_email,id_product,name_product,mercado_libre,quantity,price,picture) VALUES ('"+user.email+"','"+product.id+"','"+product.name+"',"+product.ml+","+product.quantity+", "+product.price+", '"+product.picture+"')");
        return result;
    }
    async findCart(user,product) {
        let result = await sequelize.query("SELECT * FROM cart JOIN users ON cart.user_email = users.email AND cart.id_product = '"+product.id+"'");
        return result;
    }
    async updateCart(user,product) {
        let result = await sequelize.query("UPDATE cart SET quantity = "+product.quantity+"WHERE id_product = '"+product.id+"'");
        return result;
    }
    async deleteCart(user,product) {
        let result = await sequelize.query("DELETE FROM cart WHERE  id_product='"+product.id +"'");
        return result;
    }
}