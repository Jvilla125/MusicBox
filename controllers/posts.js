const Post = require("../models/post");

const S3 = require("aws-sdk/clients/s3");
// initiate the s3 constructor that can talk to our aws/s3 bucket
const s3 = new S3();
const { v4: uuidv4 } = require("uuid")

const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
    create,
    index
}

function create(req, res) {
    console.log(req.body, req.file, req.user)
    const key = `musicbox/posts/${uuidv4()}-${req.file.originalname}`;
    const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };

    s3.upload(params, async function (err, data) {
        if (err) return res.status(400).json({ err: "Check Terminal error with AWS" })
        try {
            const post = await Post.create({
                user: req.user,
                song: req.body.song,
                artist: req.body.artist,
                genre: req.body.genre,
                mood: req.body.mood,
                photoUrl: data.Location
            });
            res.status(201).json({ data: post });
        } catch (err) {
            res.status(400).json({ err })
        }
    })
}

async function index(req, res){
    try{
        const posts = await Post.find({}).populate("user").exec();
        res.status(200).json({data: posts});
    } catch(err){
        res.status(400).json({err: err})
    }
}