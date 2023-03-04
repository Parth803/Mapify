const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
    try {
        // generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        // create new user
        const newUser = new User({
            "username": req.body.username,
            "password": hashedPassword,
            "email": req.body.email
        }) 

        // save user and send res
        const user = await newUser.save();
        res.status(200).json(user._id);
    } catch (err) {
        res.status(500).json(err);
    }
})


// Login
router.post("/login", async (req, res) => {
    try {
        // find user
        const user = await User.findOne({"username": req.body.username});
        if(!user) return res.status(400).json("Wrong username or password!");

        // authenticate with password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json("Wrong username or password!");
        
        // send res
        res.status(200).json({"_id": user._id, "username": user.username});
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;