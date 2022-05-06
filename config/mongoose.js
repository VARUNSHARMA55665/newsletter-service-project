const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newsletterservice');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongoose"));

db.once('open', function(){
    console.log('Successfully connected to DB');
});