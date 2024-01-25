
var users = require('../models/user_models')
const express = require('express')
const bcryptjs = require('bcryptjs')
const router = express.Router();
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();
const key = process.env.JWT_KEY
const mongoose = require('mongoose')
const UserModel = mongoose.model('userSchema')



router.post('/signup', async (req, res) => {
    try {
        const { fullName, email, password, profileImg } = req.body;
        if (!fullName || !password || !email) {
            return res.status(400).json({ error: "One or more mandatory fields are empty" });
        }

        const userInDb = await UserModel.findOne({ email: email });

        if (userInDb) {
            return res.status(401).json({ error: "This email is already registered" });
        }

        const hashedPassword = await bcryptjs.hash(password, 16);
        const user = new UserModel({ fullName, email, password: hashedPassword, profileImg });
        const newUser = await user.save();

        res.status(201).json({ result: "User signed up successfully" });
        console.log(`new user signed up successfuly ${newUser}`);
    } catch (error) {
        console.error(error);

        if (error.message === "failed to hashPassword") {
            return res.status(500).json({ error: "Failed to hash password" });
        } else if (error.message === "failed to save data") {
            return res.status(500).json({ error: "Failed to save user data" });
        }

        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!password || !email) {
            return res.status(400).json({ error: "One or more mandatory fields are empty" });
        }

        const userInDb = await UserModel.findOne({ email: email });

        if (!userInDb) {
            return res.status(401).json({ error: "invalid user" });
        }

        const matched = await bcryptjs.compare(password, userInDb.password);
        if (!matched) {
            return res.status(401).json({ error: "invalid user" });
        }
        const jwtToken = jwt.sign({_id:userInDb._id},key);
        const userInfo = {"id":userInDb._id,"email":userInDb.email, "fullName":userInDb.fullName};
        res.status(201).json({ result:{token:jwtToken,user:userInfo} });
    } catch (error) {
        console.error(error);

        if (error.message === "failed to hashPassword") {
            return res.status(500).json({ error: "Failed to hash password" });
        } else if (error.message === "failed to save data") {
            return res.status(500).json({ error: "Failed to save user data" });
        }

        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;