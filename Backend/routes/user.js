const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.get("/", (req, res)=>{
    res.send("You are in the router page")
})

router.post('/signup', async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const newUser = new User({
            userName,
            email,
            password
        });
        await newUser.save();
        res.status(200).send(newUser); // Send the created user object as a response
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.post("/signin", async(req, res)=>{
    const {email, password} = req.body;
    const token = await User.matchPasswordAndGenerateToken(email, password);
    res.send(token);
})

module.exports = router