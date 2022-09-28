const express = require('express');
const router = express.Router();
const listenlaterController = require('../../controllers/listenlater')

router.post('/posts/:id/listenlater', listenlaterController.create)
router.delete('/listenlater/:id', listenlaterController.deleteItem)

module.exports = router;