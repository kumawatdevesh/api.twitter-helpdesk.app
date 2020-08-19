const User = require('../models/users');
const jwt = require('jsonwebtoken');
const Tweets = require('../models/tweets');
const T  = require('../twit_api');

exports.loginUser = async (req, res, next) => {

    const { name, user_id } = req.body;
    let user;
    const existingUser = await User.findOne({name: name});
    if(existingUser) {
      user = existingUser;
    }else {
      user = await User.insertMany({name: name, user_id: user_id});
    }
    try {
      if(user) {
        const tweets = [];
        T.get('search/tweets', { q: `@${name} since:2020-08-1`, count: 10 }, function(err, data, response) {
            data.statuses.forEach(i => {
              tweets.push({mention: `@${name}`, text: i.text, id_str: i.id_str, user: { name: i.user.name, image_url: i.user.profile_image_url, screen_name: i.user.screen_name }});
            })
            Tweets.insertMany(tweets).then(res => {
              console.log('data after saving', res);
            })
          });
        const token = await jwt.sign({user: user}, `${process.env.JWT_KEY}`);
        return res.json({token: token, user: user});
      }
    } catch(e) {
      throw e;
    }
};