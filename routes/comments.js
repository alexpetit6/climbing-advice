var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments.js')

router.post('/posts/:id/comments', commentsCtrl.create)

module.exports = router;