const jwt = require('jsonwebtoken');
const cartModel = require('../model/cartModel');


module.exports.listCart = async (user) => {
    let response = new cartModel();
    let result = await response.listCart(user)
    return result;
}

module.exports.addCart = async (user, product) => {
    let response = new cartModel();
    let result = await response.addCart(user, product)
    return result;
}

module.exports.findCart = async (user, product) => {
    let response = new cartModel();
    let result = await response.findCart(user, product)
    return result;
}
module.exports.updateCart = async (user, product) => {
    let response = new cartModel();
    let result = await response.updateCart(user, product)
    return result;
}
module.exports.deleteCart = async (user, product) => {
    let response = new cartModel();
    let result = await response.deleteCart(user, product)
    return result;
}