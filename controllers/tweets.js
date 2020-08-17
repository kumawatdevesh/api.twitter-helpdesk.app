const T  = require('../twit_api');

exports.getTweets = (req, res, next) => {
    console.log('fetching tweet');
    T.get('search/tweets', { q: '@zomato since:2020-07-1', count: 3 }, function(err, data, response) {
        res.json({tweets: data.statuses});
    });
};

exports.postTweets = (req, res, next) => {
    const {id, name, msg} = req.body;
    console.log(typeof(id), id);
    T.post('statuses/update', {status: `@${name} ` + `${msg}`, in_reply_to_status_id: id }, function (err, data, response) {
        res.json({success: data});
    });
};