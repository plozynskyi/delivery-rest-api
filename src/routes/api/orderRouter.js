const express = require('express');

const router = express.Router();

const {
  addOrder,
  getOrderDetail,
} = require('../../controllers/orderControllers');

router.route('/').post(addOrder);
router.route('/:orderId').get(getOrderDetail);

module.exports = { orderRouter: router };
