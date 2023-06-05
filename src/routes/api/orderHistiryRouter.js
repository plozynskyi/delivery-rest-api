const express = require('express');

const { authMiddleware } = require('../../middleware/authMiddleware');

const router = express.Router();

const { getOrderHistory } = require('../../controllers/historyControllers');

router.route('/').get(authMiddleware, getOrderHistory);

module.exports = { orderHistiryRouter: router };
