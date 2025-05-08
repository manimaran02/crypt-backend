const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const apiRouter = require('./routes')

dotenv.config({path : './.env'})

const app = express()
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.use('/api/coins',apiRouter)

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})