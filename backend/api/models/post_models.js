const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

require('../db/db')


const postSchema = mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    productName: {
        type: String,
        require: true
    },
    quantity: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    author: {
        type: ObjectId,
        ref:"UserModel"

    }

},{timestamps:true})
mongoose.model('postModel', postSchema)