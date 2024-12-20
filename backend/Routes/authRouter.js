const express = require('express');
const { signup } = require('../Controllers/authController');
const { signupValidation } = require('../Middlewares/authValidation');

const router = express.Router();

router.post('/login', (req,res)=>{
    res.send('login successful');
});

router.post('/signup', signupValidation, signup) //first signupvalidation is done, if valid then it goes to signup

module.exports = router;