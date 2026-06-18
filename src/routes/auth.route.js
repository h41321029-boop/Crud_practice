const {Router} =  require('express')
const authRouter = Router()
const {signupController,loginController} = require('../controllers/auth.Controller')


authRouter.post('/signup',signupController)
authRouter.post('/login',loginController)

module.exports = authRouter