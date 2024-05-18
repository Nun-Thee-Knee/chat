const JWT = require('jsonwebtoken');

const secret = "AJWTSecret";

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        userName: user.userName,
        email: user.email
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token) {
    try {
        const payload = JWT.verify(token, secret);
        return payload;
    } catch (error) {
        console.error("Invalid or expired token", error);
        return null;  // or throw error based on your use case
    }
}

module.exports = { createTokenForUser, validateToken };
