const T  = require('../twit_api');

exports.getTweets = (req, res, next) => {
    T.get('search/tweets', { q: '@tesla since:2020-07-1', count: 2 }, function(err, data, response) {
        res.json({tweets: data.statuses});
    });
};

exports.postTweets = (req, res, next) => {
    const {id, name, msg} = req.body;
    console.log(typeof(id), id);
    T.post('statuses/update', {status: ` ${msg}` + ' @' + name, in_reply_to_status_id: id }, function (err, data, response) {
        res.json({success: data});
    });
};