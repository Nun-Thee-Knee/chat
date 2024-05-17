const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.get("/", (req, res)=>{
    res.send("You are in the router page")
})

router.post("/signup", async(req, res)=>{
    const {userName, email, password} = req.body;
    const user = await User.create({
        userName: userName,
        email: email,
        password: password
    })
    res.send(user);
})

module.exports = router