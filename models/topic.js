const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'
        }
    ],
    subscriber: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subscriber'
        }
    ]
}, {
    timestamps: true
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;