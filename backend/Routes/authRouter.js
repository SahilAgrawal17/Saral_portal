const express = require('express');
const rateLimit = require('express-rate-limit');

const { signup, login, logout } = require('../Controllers/authController');
const { signupValidation, loginValidation } = require('../Middlewares/authValidation');

const router = express.Router();

const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    message: {
        success: false,
        message: "Too many requests from this IP, please try again later."
    }
});

router.post('/login', authRateLimiter, loginValidation, login);
router.post('/signup',authRateLimiter, signupValidation, signup) //first signupvalidation is done, if valid then it goes to signup
router.post('/logout', logout);

module.exports = router;