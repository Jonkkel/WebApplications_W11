var express = require('express');
const mongoose = require("mongoose");
var path = require('path');
var cors = require("cors");
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

if (process.env.NODE_ENV === "development"){
    var corsOptions = {
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
}

const mongoDB = "mongodb://localhost:27017/testdb";
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/book", require("./api/book.js"));



module.exports = app;