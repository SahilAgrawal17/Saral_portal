const Joi = require('joi');

const signupValidation = (req,res,next)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required().messages({
            'string.base': 'Name must be a string',
            'string.min': 'Name must be at least 3 characters long',
            'string.max': 'Name must be less than 100 characters long',
            'any.required': 'Name is required'
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'Please provide a valid email',
            'any.required': 'Email is required'
        }),
        password: Joi.string().min(8).max(100).required().messages({
            'string.base': 'Password must be a string',
            'string.min': 'Password must be at least 8 characters long',
            'string.max': 'Password must be less than 100 characters long',
            'any.required': 'Password is required'
        })
    });
    const {error} = schema.validate(req.body, { abortEarly: false }); // To return all errors at once
    if(error){
        return res.status(400)
            .json({
                message: "Validation error",
                success: false,
                errors: error.details.map(err => err.message)
            });
    }
    next();
}

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.email': 'Please provide a valid email',
            'any.required': 'Email is required'
        }),
        password: Joi.string().min(8).max(100).required().messages({
            'string.base': 'Password must be a string',
            'string.min': 'Password must be at least 8 characters long',
            'string.max': 'Password must be less than 100 characters long',
            'any.required': 'Password is required'
        })
    });

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({
            message: "Validation error",
            success: false,
            errors: error.details.map(err => err.message)
        });
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation
}