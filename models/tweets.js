const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const users = new Schema({
    mention: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    id_str: {
        type: Number,
        required: true
    },
    user: {
        name: {
            type: String,
            required: true
        },
        image_url: {
            type: String,
            required: true
        },
        screen_name: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('tweet', users);