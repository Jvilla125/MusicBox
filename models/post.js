const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: {type: mongoose.Schema.Types.ObjectId}
})

const suggestedSchema = mongoose.Schema({
    username: String,
    userId: {type: mongoose.Schema.Types.ObjectId}
})

const postSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photoUrl: String,
    Song: String,
    Artist: String,
    Genre: String,
    Mood: String,
    likes: [likesSchema] // 1:M - 1 post has many likes
})

module.exports = mongoose.model('Post', postSchema)