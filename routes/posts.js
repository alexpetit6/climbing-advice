var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts')
var ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', postsCtrl.index);
router.get('/new', ensureLoggedIn, postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.get('/:id/edit', ensureLoggedIn, postsCtrl.edit);
router.post('/', ensureLoggedIn, postsCtrl.create);
router.delete('/:id', ensureLoggedIn, postsCtrl.delete);
router.put('/:id', ensureLoggedIn, postsCtrl.update);

module.exports = router;
