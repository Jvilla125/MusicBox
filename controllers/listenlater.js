const Post = require('../models/post');

module.exports = {
    create,
    deleteItem
}

async function create(req,res){
    try {
        const post = await Post.findById(req.params.id);
        post.listenlater.push({username: req.user.username, userId: req.user._id});
        await post.save();
        res.status(201).json({data: "Listen to later"})
    } catch(err){
        res.status(400).json({error: err})
    }
}

async function deleteItem(req, res){
    try{
        const post = await Post.findOne({'listenlater._id': req.params.id, 'listenlater.username': req.user.username });
        post.listenlater.remove(req.params.id)
        await post.save()
        res.json({data: 'removed'})
    } catch (err){
        res.status(400).json({error: err})
    }
}