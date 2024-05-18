const express = require("express");
const User = require("./models/user")
const mongoose = require("mongoose");
const userRouter = require("./routes/user")
const chatRouter = require("./routes/chat")
const cors = require('cors');

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/chat")
.then((data)=>{console.log("Mongodb is connected")})
.catch((err)=>{console.log(`Error faced while connection ${err}`)})

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

//routes
app.use("/user", userRouter);
app.use("/chat", chatRouter);


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})