const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {

        if (typeof req.headers.authorization !== 'string') {
            res.sendStatus(400);
            return;
        }
        
        const tokens = req.headers.authorization.split(' ');
        
        if (tokens.length < 2) {
            res.sendStatus(400);
            return;
        }
        const token = tokens[1];

        if(!token) {
            throw new Error('no token');
        }
        jwt.verify(token, `${process.env.JWT_KEY}`);
        next();
    }catch(e) {
        throw e;
    }
};
