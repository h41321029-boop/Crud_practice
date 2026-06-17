const app = require('./src/app')
require('dotenv').config()
const connectToDB = require('./src/config/database')

connectToDB()


app.listen(process.env.PORT)