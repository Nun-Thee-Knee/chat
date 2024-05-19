const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const User = require("./models/user")
const mongoose = require("mongoose");
const userRouter = require("./routes/user")
const chatRouter = require("./routes/chat")
const cors = require('cors');

const app = express();
const PORT = 5000;

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});


//Starting the Socket.io connection
io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("sendMessage", (message) => {
        io.emit("receiveMessage", message);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});


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


server.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})