const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            throw new Error('no token');
        }
        jwt.verify(token, 'secret_key');
        next();
    }catch(e) {
        throw e;
    }
};
