const {Router} = require('express')
const userRouter = Router()


const {profileController,updateuserController,deleteUserController} = require('../controllers/user.Controller')
const authMiddleware = require('../middlewares/authMiddleware')


userRouter.get('/profile',authMiddleware,profileController)
userRouter.put('/profile',authMiddleware,updateuserController)
userRouter.delete('/profile',authMiddleware,deleteUserController)


module.exports = userRouter