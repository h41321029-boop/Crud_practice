const {Router} =  require('express')
const authRouter = Router()
const {signupController} = require('../controllers/authController')


authRouter.post('/signup',signupController)

module.exports = authRouter