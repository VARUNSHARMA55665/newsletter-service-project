const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

const Topic = require('./models/topic');
const Content = require('./models/content');
const Subscriber = require('./models/subscriber');

const transporter = require('./mail');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error in running server');
    }
    console.log('Server is running on port ', port);
});