const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            throw new Error('no token');
        }
        jwt.verify(token, `${process.env.JWT_KEY}`);
        next();
    }catch(e) {
        throw e;
    }
};
