const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    chatText: {
        type: String
    },
    chatUser: {
        type: String
    }
}, {timestamps:true})


const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;