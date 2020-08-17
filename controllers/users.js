const User = require('../models/users');
const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res, next) => {

    const {name, user_id} = req.body;
    let user;
    const existingUser = await User.findOne({name: name});
    if(existingUser) {
      user = existingUser;
    }else {
      user = await User.insertMany({name: name, user_id: user_id});
    }
    try {
      if(user) {
        const token = await jwt.sign({user: user}, `${process.env.JWT_KEY}`);
        res.json({token: token, user: user});
      }
    } catch(e) {
      throw e;
    }
};