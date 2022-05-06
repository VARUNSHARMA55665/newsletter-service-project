const express = require('express');
const router = express.Router();

const subscriberController = require('../controllers/subscriber_controller');

router.post('/add', subscriberController.add);

module.exports = router;