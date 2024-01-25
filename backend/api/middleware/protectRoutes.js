var users = require('../models/user_models');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const key = process.env.JWT_KEY;
const mongoose = require('mongoose');
const UserModel = mongoose.model('userSchema');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "User not logged in" });
    }

    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, key, async (error, payload) => {
        if (error) {
            return res.status(401).json({ error: "User not logged in" });
        }

        const { _id } = payload;

        try {
            const dbUser = await UserModel.findById(_id);

            if (dbUser) {
                req.user = dbUser; // Corrected from req.ser to req.user
                next();
            } else {
                return res.status(401).json({ error: "User not found" });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });
};






// ================================================if any error then use ======================================================

// var users = require('../models/user_models')
// const jwt = require('jsonwebtoken')
// const dotenv = require('dotenv')
// dotenv.config();
// const key = process.env.JWT_KEY
// const mongoose = require('mongoose')
// const UserModel = mongoose.model('userSchema')

// module.exports = (req,res,next)=>{
//     const {authorization} = req.headers;
//     //Bearer djljfdkakljdh

//     if(!authorization){
//         return res.status(401).json({error:"user not logged In"})
//     }
//     const token = authorization.replace("Bearer ", "");
//     jwt.verify(token,key,(error,payload)=>{
//         if(error){
//             return res.status(401).json({error:"user not logged in"});
//         }
//         const {_id} = payload;
//         const dbUser = UserModel.findById(_id);
//         if(dbUser){
//             req.ser = dbUser;
//             next();
//         }
//     })
// }