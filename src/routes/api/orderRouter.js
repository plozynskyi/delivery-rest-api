const express = require('express');

const router = express.Router();

const { addOrder } = require('../../controllers/orderControllers');

router.route('/').post(addOrder);

module.exports = { orderRouter: router };
