const JWT = require('jsonwebtoken');

const secret = "AJWTSecret"

function createTokenForUser(user)
{
    const payload = {
        _id: user._id,
        userName: user.userName,
        email: user.email
    }
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token)
{
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {createTokenForUser, validateToken}