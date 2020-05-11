const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets');

module.exports = user => {
    const payload = {
        subject: user.id
    }
    const options = {
        expiresIn: '8h'
    }
    return jwt.sign(payload, jwtSecret, options);
}