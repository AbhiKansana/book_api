const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const book = require('./routes/book.js')
require('dotenv').config()
const app = express()

const PORT = process.env.port || 3000   

// Middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/books',book)

// connect to mongoose atlas
mongoose.connect(process.env.MONGO_URL,
            {useNewUrlParser:true}
        )
        .then(()=>{
            console.log("Connected to mongodb atlas")
        })

app.listen(PORT,()=>{
  console.log("Server is started on port",PORT)  
})