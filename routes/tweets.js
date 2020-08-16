const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweets');
const authToken = require('../middleware/token');

router.use(authToken);

router.get('/get-tweets', tweetController.getTweets);

router.post('/post-tweets', tweetController.postTweets);

module.exports = router;
