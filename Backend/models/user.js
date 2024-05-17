const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");

const userSchema = mongoose.Schema({
    id: {
        type: String,
        default: uuidv4()
    },
    userName: {
        type: String,
        null: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
},{timestamps:true})



const User = mongoose.model('user', userSchema)

module.exports = User;