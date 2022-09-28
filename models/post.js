const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: {type: mongoose.Schema.Types.ObjectId}
})

const listenlaterSchema = mongoose.Schema({
    username: String,
    userId: {type: mongoose.Schema.Types.ObjectId}
})

const postSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photoUrl: String,
    song: String,
    artist: String,
    genre: String,
    mood: String,
    likes: [likesSchema], // 1:M - 1 post has many likes
    listenlater: [listenlaterSchema]
})

module.exports = mongoose.model('Post', postSchema)