const dotenv = require('dotenv')
dotenv.config();
const mongoose = require('mongoose')
const UserModel = require('../models/user_models');
require('../models/post_models')
const url = process.env.DB_URL ;

mongoose.connect(url);
mongoose.connection.on('connected',()=>{
    console.log('DB connected');
})
mongoose.connection.on('error',()=>{
    console.log("some error while connecting DB")
})

// Register UserModel
mongoose.model('UserModel', UserModel);