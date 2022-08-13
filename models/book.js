const mongoose = require("mongoose");
const author = require('./author.js')

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    genre:{
        type:String,
        required:true
    },

    author: author.schema

})

module.exports = mongoose.model("bookModel",bookSchema)
