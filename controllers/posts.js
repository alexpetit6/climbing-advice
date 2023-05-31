const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create, 
    show, 
    delete: deletePost,
    update,
    edit
}

function newPost(req, res) {
    res.render('posts/new', {
        title: 'Create New Post'
    })
}

async function edit(req, res) {
    post = await Post.findById(req.params.id);
    res.render('posts/edit', {
        title: 'Edit Post',
        post
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
    post = await Post.findById(req.params.id);
    res.render('posts/show', {
        post,
        title: 'Post',
    })
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    //removes everything before the id
    req.body.video = req.body.video.slice(17);
    try {
        const post = await Post.create(req.body);
        res.redirect(`/posts/${post._id}`)
    } catch (err) {
        console.log(err)
    }
}

async function deletePost(req, res) {
    await Post.deleteOne({ _id: req.params.id, user: req.user._id });
    res.redirect('/posts')
}

async function update(req, res) {
    req.body.video = req.body.video.slice(17);
    try {
        const updatedPost = await Post.findOneAndUpdate(
            {_id: req.params.id, user: req.user._id},
            req.body,
            {new: true}
        );
        return res.redirect(`/posts/${updatedPost._id}`);
    } catch (e) {
        console.log(e.message);
        return res.redirect('/books');
    }
  }
