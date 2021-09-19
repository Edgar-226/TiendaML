const productsModel = require('../model/productsModel')

module.exports.listProducts = async () => {
    let response = new productsModel();
    let result =await response.list()
    return result;
}

module.exports.findProduct = async (productId) => {
    let response = new productsModel();
    let result = await response.find(productId)
    return result;
}
module.exports.deleteProduct = async (productId) => {
    let response = new productsModel();
    let result = await response.delete(productId)
    return result;
}
module.exports.insertProduct = async (product) => {
    let response = new productsModel();
    let result = await response.insert(product)
    return result;
}
module.exports.updateProduct = async (product) => {
    let response = new productsModel();
    let result = await response.update(product)
    return result;
}