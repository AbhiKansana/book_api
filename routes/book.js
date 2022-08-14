const express = require('express')
const router = express()
const BookModel = require('../models/book')

//  Post request

router.post("/", async (req,res) => {
     const book = new BookModel({
        name : req.body.bookName,
        genre : req.body.genre,
        author : {
            name : req.body.authorName,
            age : req.body.authorAge
        }})
     

     try{
        const cur = await book.save()
        res.send(cur)
     }

     catch{
        res.send("May be a error")
     }
})

module.exports = router