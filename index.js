const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()


const PORT = process.env.port || 3000    

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