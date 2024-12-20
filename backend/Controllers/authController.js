const userModel = require("../Models/User");
const bcrypt = require('bcrypt');

const signup = async(req,res)=>{
    try{
        const {name, email, password} = req.body;
        const user = await userModel.findOne({email}) //checks if email is already in the database
        if(user){
            return res.status(409)
                .json({
                    message : 'User already exists, you can login', 
                    success: false
                })
        }
        const userModel = new userModel({name, email, password});
        userModel.password = await bcrypt.hash(password, 10); //10 is salting
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
                success : false
            })
    }
}

module.exports = {
    signup
}