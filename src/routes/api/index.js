const { Router } = require('express');

const { authRouter } = require('./authRouter');
const { orderRouter } = require('./orderRouter');
const { productsRouter } = require('./productsRouter');
const { shopsRouter } = require('./shopsRouter');

const router = Router();

router.use('/auth', authRouter);
router.use('/order', orderRouter);
router.use('/products', productsRouter);
router.use('/shops', shopsRouter);

module.exports = router;
