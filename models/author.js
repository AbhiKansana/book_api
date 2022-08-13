const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    author:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("authorModel",authorSchema)