const UserModel = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async(req,res)=>{
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email}) //checks if email is already in the database
        if(user){
            return res.status(409)
                .json({
                    message : 'User already exists, you can login', 
                    success: false
                })
        }
        const userModel = new UserModel({name, email, password});
        userModel.password = await bcrypt.hash(password,10); //10 is salting
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success : true
            })
    }catch(err){
        res.status(500)
            .json({
                message: "Internal server error",
                success : false,
                error: err.message
            })
    }
}

const login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await UserModel.findOne({email}) //checks if email is already in the database
        if(!user){
            return res.status(403)
                .json({
                    message : 'User does not exist, you need to sign up first', 
                    success: false
                })
        }
        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if(isPasswordEqual){
            const jwtToken = jwt.sign(
                {email: user.email, id : user.id},
                process.env.JWT_SECRET,
                {expiresIn : '4h'}
            ) 
            return res.status(200)
            .json({
                message: "Login successfully",
                success : true,
                jwtToken,
                email,
                name : user.name
            })
        }
        else{
            return res.status(403)
                .json({
                    message : 'Incorrect password, please check your password and try again', 
                    success: false
                })
        }
    }catch(err){
        res.status(500)
            .json({
                message: "Internal server error",
                success : false,
                error: err.message
            })
    }
}

module.exports = {
    signup,
    login
}