const express = require("express");

const router = express.Router();
const Chat = require("../models/chat");

// GET route
router.get("/", async (req, res) => {
    try {
        const chats = await Chat.find({}).sort({ createdAt: 1 });
        res.json(chats); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch chats' });
    }
});

// POST route
router.post("/send", async (req, res) => {
    const { chatText, chatUser, chatEmail } = req.body;
    try {
        const chat = await Chat.create({
            chatText: chatText,
            chatUser: chatUser,
            chatEmail: chatEmail
        });
        res.json(chat);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create chat'+error });
    }
});

module.exports = router;
