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
        let result = await sequelize.query("SELECT * FROM products WHERE id ='"+ productId+"'");
        return result;
    }

    async delete(productName){
        let result = await sequelize.query("DELETE FROM products WHERE [name] ='"+ productName+"'");
        return result;
    }
    async insert(product){
        console.log(product)
        let result = await sequelize.query("INSERT INTO products (id,[name],stock,price,picture) VALUES ('"+product.id+"','"+ product.name+"','"+product.stock+"',"+product.price+",'"+product.picture+"')");
        return result;
    }
    async update(product){
        console.log(product)
        let result = await sequelize.query("UPDATE products SET price ='"+ product.price+"' WHERE [name] ='"+product.name+"'");
        return result;
    }
}