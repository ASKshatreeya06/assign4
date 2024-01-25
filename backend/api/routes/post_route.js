// var users = require('../models/user_models')
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const postModel = mongoose.model('postModel')

const protectedRoute = require('../middleware/protectRoutes')

router.get("/topsales", protectedRoute, async (req, res) => {
    try {
        const userId = req.user._id;

        if (userId) {
            // const userId = req.user._id;
            const dbPosts = await postModel.find({ author: userId })
                .populate("author", "_id productName amount quantity")
                .sort({ amount: -1 })
                .limit(5);

            res.status(200).json(dbPosts);

        } else {
            console.log("Bad request");
            return res.status(400).json({ message: "Bad request" });
        }
    } catch (error) {
        console.error("Error fetching top sales:", error);
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// 




//GET product for alluser
router.get("/allproducts", async (req, res) => {
    try {
        const id = ObjectId("65a3b950d69a94da2c4c3301")
        const dbPosts = await postModel.find({ author: id })
            .populate("author", "_id productName amount quantity");

        res.status(200).json(dbPosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error1" });
    }
});

//GET product loged in user only
router.get("/allproductsUser", protectedRoute, async (req, res) => {
    try {
        const userId = req.user._id;
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago

        if (userId) {
            const dbPosts = await postModel.find({
                author: userId,
                createdAt: { $gte: oneDayAgo } // Filter posts created in the last 24 hours
            })
            .select("_id productName amount quantity createdAt"); // Only select the fields you need

            res.status(200).json(dbPosts);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



//POST add product
router.post("/createpost", protectedRoute, (req, res) => {
    const { id, productName, amount, quantity } = req.body;
    // console.log(productName)
    if (!productName || !amount || !quantity) {
        return res.status(401).json({ error: "all field required" })
    }
    req.user.password = undefined
    const postObj = new postModel({id:id, productName: productName, amount: amount, quantity: quantity, author: req.user });
    postObj.save()
    try {
        // const newPost = postObj.save();
        res.status(201).json({ post: postObj });
    } catch (error) {
        return res.status(401).json({ Error: "something went wrong please try again" })
    }
});

module.exports = router;