const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create, 
    show
}

function newPost(req, res) {
    res.render('posts/new', {
        title: 'Create New Post'
    })
}

async function index(req, res) {
    posts = await Post.find({});
    res.render('posts/index', {
        posts,
        title: 'Posts' 
    })
}

async function show(req, res) {
    post = await Post.findById(req.params.id)
    res.render('posts/show', {
        post,
        title: 'Post'
    })
}

async function create(req, res) {
    //removes everything before the id
    req.body.video = req.body.video.slice(17)
    try {
        const post = await Post.create(req.body)
        res.redirect(`/posts/${post._id}`)
    } catch (err) {
        console.log(err)
    }
}
