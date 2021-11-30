const express = require("express")
const mongoose = require("mongoose");
const Book = require("../models/Books");
const router = express.Router();

router.post("/api/book", (req, res, next) => {
    Book.findOne({ name: req.body.name}, (err, book) => {
        if(err) return next(err);
        if(!book){
            new Book({
                name: req.body.name,
                author : req.body.author,
                pages : req.body.pages
            }).save((err) =>{
                if(err) return next(err);
                return res.send("ok");
            });
        }else{
            return res.status(403).send("Already has that book!");
        }
    });
})

router.get("/book/:book", (req, res, next) => {
    Book.findOne({ name: req.params.book}, (err, book) => {
        if(err) return next(err);
        if(book){
            return res.send({
                "name": book.name,
                "author": book.author,
                "pages": book.pages,
                "status": true
            });
        }else{
            return res.status(404).send({"status": false});
        }
    });
});


module.exports = router;