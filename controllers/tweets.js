const T  = require('../twit_api');
const Tweets = require('../models/tweets');

exports.getTweets = async (req, res, next) => { 

    let result; 
    try {
        result = await Tweets.find({"mention": `@${req.params.username}`}).limit(5);
        res.json({ tweets: result });
    }catch(e) {
        throw e;
    }
};

exports.postTweets = (req, res, next) => {
    const {id, name, msg} = req.body;

    T.post('statuses/update', { status: `@${name} ${msg}`, in_reply_to_status_id: id }, function (err, data, response) {
        res.json({success: data});
    });
};

exports.getReplies = (req, res, next) => {

    let replies = [];
    T.get('search/tweets', { q: `@${req.params.username} since:2019-08-1`, count: 100000000 }, function(err, data, response) {
        data.statuses.forEach(i => {
            if(i.in_reply_to_status_id_str == req.params.id) {
                replies.push({name: i.user.screen_name, image_url: i.user.profile_image_url, text: i.text});
            }
        })
        res.json({tweets: replies});
    });
}