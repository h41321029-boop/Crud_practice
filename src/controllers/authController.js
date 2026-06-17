const User = require('../models/users.model')
const bcrypt = require('bcryptjs')

const signupController = async (req,res)=>{
    try{
        const {username,email,password,contact} = req.body;
        const hashedpassword = await bcrypt.hash(password,10);

        const user = await User.create({
            username,
            email,
            password:hashedpassword,
            contact
        })

        res.status(201).json({
            success:true,
            message :'User created successfully'
        });

    } catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        });
    }
}
module.exports = {signupController};