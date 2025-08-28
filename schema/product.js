const Joi = require('joi')

const productSchema = Joi.object({
    product: Joi.object({
        Name: Joi.string().required(),
        Price: Joi.string().required(),
        Stock: Joi.number().required(),
        Deskripsi: Joi.string().required(),
    })
})

module.exports = productSchema