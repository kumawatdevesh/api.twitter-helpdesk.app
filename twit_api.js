var Twit = require('twit');

var T = new Twit({
    consumer_key:         'GOeke9UqbAzWwnFAoC79ZuDMT',
    consumer_secret:      'sxUJWFIwceYOlvjWjKB3CAOthhlQPLjJf5hr6orKWzDULg5KQ7',
    access_token:         '834368604778921984-mjWeWPDwAwM6mWdOh9fOc5U81fhmfg1',
    access_token_secret:  'Zrv34kXSvUbe2U712JJKxXSA5suOlh3RBn7DqgEAva2ro',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

module.exports = T;