const Post = require('../models/post');

module.exports = {
    create
}

async function create(req, res) {
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body)
    try {
        await post.save()
        res.redirect(`/posts/${post._id}`)
    } catch (err) {
        console.log(err)
    };

}
