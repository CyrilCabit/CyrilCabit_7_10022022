require('dotenv').config()
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        const decodedToken = jwt.verify(token, process.env.TOKEN_USER);
        const userId = decodedToken.userId;
        const isAdmin = decodedToken.isAdmin;
        console.log(decodedToken);
        console.log(userId);
        req.auth = { userId, isAdmin };
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};