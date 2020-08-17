const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const tweetRouter = require('./routes/tweets');
const userRouter = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/tweets', tweetRouter);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-tpp9z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(res => {
    app.listen(5000);
    console.log('connected');
})
.catch(err => {
    console.log(err);
})

