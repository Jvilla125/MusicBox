const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/posts');
const multer = require('multer');
const upload = multer()

router.post('/', upload.single('photo'), postsController.create);
router.get('/', postsController.index);
router.delete('/:id', postsController.deletePost);

module.exports = router;