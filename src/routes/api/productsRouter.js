const express = require('express');

const router = express.Router();

const {
  getProductsByIdShop,
} = require('../../controllers/productsControllers');

router.route('/:shopId').get(getProductsByIdShop);

module.exports = { productsRouter: router };
