const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic',
        required: true
    }
}, {
    timestamps: true
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;