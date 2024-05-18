const express = require("express");
const router = express.Router();
const User = require("../models/user")
const {validateToken} = require("../services/authentication")

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
        const token = await User.matchPasswordAndGenerateToken(email, password)
        const payload = validateToken(token)
        res.status(200).send(payload);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.post("/signin", async(req, res)=>{
    const {email, password} = req.body;
    const token = await User.matchPasswordAndGenerateToken(email, password);
    const payload = validateToken(token)
    res.status(200).send(payload);
})

module.exports = router