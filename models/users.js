const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const users = new Schema({
   name: {
       type: String,
       required: true
   },
   user_id: {
       type: Number,
       required: true
   }
});

module.exports = mongoose.model('user', users);