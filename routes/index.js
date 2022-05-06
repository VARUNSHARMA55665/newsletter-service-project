const express = require('express');
const router = express.Router();

router.use('/topic',require('./topic_detail'));
router.use('/content', require('./content_detail'));
router.use('/subscriber', require('./subscriber_detail'));

module.exports = router;