const express = require("express")
const mongoose = require("mongoose");
const Book = require("../models/Books");
const router = express.Router();

router.post("/", (req, res, next) => {
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
module.exports = router;