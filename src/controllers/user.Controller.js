const User = require('../models/users.model')

const profileController =async (req,res)=>{
    try{
        const user = await User.findById(
        req.user.id
    )
    res.status(200).json({
        success:true,
        user
    })
    } catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

const updateuserController =async (req,res)=>{
    try{
        const updateduser = await User.findByIdAndUpdate(
        req.user.id,
        req.body,
        {new:true}
    )
    res.status(200).json({
        success:true,
        updateduser
    })
    } catch(err){
        res.status(500).json({
            sucess:false,
            message:err.message
        })
    }
}

const deleteUserController =async (req,res)=>{
    try{
        await User.findByIdAndDelete(
        req.user.id
    )
    res.status(200).json({
        success:true,
        message:"Account Deleted"
    })
    } catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

module.exports = {profileController,updateuserController,deleteUserController}