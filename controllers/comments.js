const Post = require('../models/post');

module.exports = {
    create,
    delete: deleteComment
}

async function create(req, res) {
    const post = await Post.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    post.comments.push(req.body);
    try {
        await post.save()
        res.redirect(`/posts/${post._id}`)
    } catch (err) {
        console.log(err)
    };
}

async function deleteComment(req, res) {
    console.log(req.params.id, req.user._id)
    const post = await Post.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
    if (!post) return res.redirect('/');
    post.comments.remove(req.params.id);
    await post.save();
    res.redirect(`/posts/${post._id}`)
}
