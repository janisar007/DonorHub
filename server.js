const express = require('express')
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require("dotenv")
const connectDB = require('./config/db')

//dot config (If .env present in the config folder)
// dotenv.config(path: './config/')

//dot config (Here .env is present in root itself)
dotenv.config()

//mongoDB connection
connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


//port
const PORT = process.env.PORT || 8000;


app.listen(PORT,()=>{
    console.log(`Server is Running in ${process.env.DEV_MODE} mode on Port ${process.env.PORT}`.bgBlue.white)
})