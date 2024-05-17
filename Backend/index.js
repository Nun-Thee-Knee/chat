const express = require("express");
const User = require("./models/user")
const mongoose = require("mongoose");
const userRouter = require("./routes/user")

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/chat")
.then((data)=>{console.log("Mongodb is connected")})
.catch((err)=>{console.log(`Error faced while connection ${err}`)})

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use("/user", userRouter);


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})