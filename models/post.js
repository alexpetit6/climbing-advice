const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
     },
    userName: String,
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
    user: {
       type: Schema.Types.ObjectId,
       ref: 'User',
       required: true
    },
    userName: String
})

module.exports = mongoose.model('Post', postSchema)