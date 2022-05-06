const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic',
        required: true
    },
    contentText: {
        type: String,
        required: true
    },
    sendTime: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;