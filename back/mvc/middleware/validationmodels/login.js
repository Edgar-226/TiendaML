const Joi = require('joi');

module.exports = {
    loginModel: Joi.object().keys({
        user:Joi.string().alphanum().min(1).max(12).required(),
        password:Joi.string().min(5).max(50).required()
    }).with('user','password')
}