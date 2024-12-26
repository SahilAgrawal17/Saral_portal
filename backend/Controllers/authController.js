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

        return res.status(201)
            .json({
                message: "Signup successfully",
                success : true
            })
    }catch(err){
        console.error(err); //log error for debugging
        return res.status(500)
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

            // Setting up the JWT token as an HTTP-only cookie
            res.cookie('jwtToken', jwtToken, {
                httpOnly: true,                                         // Prevents JavaScript access
                secure: process.env.NODE_ENV === 'production',          // Use HTTPS in production
                sameSite: 'Strict',                                     // Strict/Lax/None Strict for "No cookies sent with cross-site requests"
                maxAge: 4 * 60 * 60 * 1000,                             // 4 hours
            });

            return res.status(200)
            .json({
                message: "Login successfully",
                success : true,
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
        console.error(err);
        return res.status(500)
            .json({
                message: "Internal server error",
                success : false,
                error: err.message
            })
    }
}

const logout = (req, res) => {
    res.clearCookie('jwtToken', {
      httpOnly: true, // Ensures the cookie can't be accessed via JavaScript
      secure: process.env.NODE_ENV === 'production', // Ensures HTTPS in production
      sameSite: 'Strict', // Prevents cookie from being sent with cross-site requests
    });
  
    return res.status(200).json({
      message: 'Logged out successfully',
      success: true,
    });
  };

module.exports = {
    signup,
    login,
    logout
}