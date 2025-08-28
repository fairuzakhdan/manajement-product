const Joi = require('joi')

const productSchema = Joi.object({
    product: Joi.object({
        Name: Joi.string().required().min(1),
        Price: Joi.string().required().min(1),
        Stock: Joi.number().required().min(1).integer(),
        Deskripsi: Joi.string().required().min(1),
    })
})

module.exports = productSchema