const User = require('../models/users.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signupController = async (req,res)=>{
    try{
        const {username,email,password,contact} = req.body;
        const userfind =await User.findOne({
            $or:[{email},
                {username},
                {contact}
            ]
        })
        if (userfind){
            res.status(404).json({
                success:false,
                message:"user already exists"
            })
        }
        
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

async function loginController(req,res){
    try{
        const {email,password} = req.body

    const finduser =await User.findOne({email})
    if (!finduser){
        return res.status(404).json({
            success:false,
            message:"User Not Found"
        })
    }
    const isMatch =await bcrypt.compare(password,finduser.password)
    if (!isMatch){
        res.status(400).json({
            success:false,
            message:"Invalid Password"
        })
    }
    const token =  jwt.sign(
        {
            id:finduser._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'1d'
        }
    );
    res.status(200).json({
        success:true,
        token
    })
    } catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
module.exports = {signupController,loginController};