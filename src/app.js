const express = require('express')
const app = express()

app.use(express.json())

const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.routes')

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter)

module.exports = app