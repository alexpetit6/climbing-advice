const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
})

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    video: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema],
})

module.exports = mongoose.model('Post', postSchema)