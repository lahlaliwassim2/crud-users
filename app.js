var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config()

const routeUsers=require('./routes/users.route')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("db connected"))
.catch(err=>console.log(err.message))

app.use('/api',routeUsers);

module.exports = app;
