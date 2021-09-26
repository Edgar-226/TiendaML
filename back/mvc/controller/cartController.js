const jwt = require('jsonwebtoken');
const cartModel = require('../model/cartModel');


module.exports.listcart = async (user) => {
    
        let response = new cartModel();
        let result = await response.listCart(user)
        return result;
    }