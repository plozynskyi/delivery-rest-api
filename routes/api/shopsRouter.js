const express = require('express');

const router = express.Router();

const { getShops } = require('../../controllers/shopsControllers');

router.route('/').get(getShops);

module.exports = { shopsRouter: router };
