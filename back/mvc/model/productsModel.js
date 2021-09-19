const sequelize = require('../db/conexion')

module.exports = class productsModel {
    constructor (product ){
        this.product = product 
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM products");
        return result
    }
    
    async find (productId){
        let result = await sequelize.query("SELECT * FROM products WHERE id ="+ productId);
        return result;
    }

    async delete(productId){
        let result = await sequelize.query("DELETE FROM products WHERE id ="+ productId);
        return result;
    }
    async insert(product){
        console.log(product)
        let result = await sequelize.query("INSERT INTO products (brand,model,price) VALUES ('"+ product.brand+"','"+product.model+"',"+product.price+")");
        return result;
    }
    async update(product){
        console.log(product)
        let result = await sequelize.query("UPDATE products SET price ='"+ product.price+"' WHERE id ='"+product.id+"'");
        return result;
    }
}