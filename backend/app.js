const express = require('express')
const cors = require('cors')
const logger = require('morgan')
require('./middlewares/mongoDB')

const app = new express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(logger('dev'))

const api = require('./routes/api')
app.use('/api', api)






const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server running at :${PORT}...`);
})



