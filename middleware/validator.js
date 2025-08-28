const productSchema = require('../schema/product')
const ErrorHandler = require('../utils/ErrorHandler')
const productValidate = async(req,res,next) => {
    const { error } = productSchema.validate(req.body)
    if (error) {
        const msg = error.details.map((el => el.message)).join(',')
        return next(new ErrorHandler(msg,400))
    }else{
        next()
    }
}

module.exports = {productValidate}