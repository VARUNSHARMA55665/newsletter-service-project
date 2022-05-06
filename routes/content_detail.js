const express = require('express');
const router = express.Router();

const contentController = require('../controllers/content_controller');

router.post('/add', contentController.add);

module.exports = router;