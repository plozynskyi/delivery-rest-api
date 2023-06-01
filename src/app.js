const express = require('express');

const logger = require('morgan');
const cors = require('cors');

const { shopsRouter } = require('./routes/api/shopsRouter');
const { productsRouter } = require('./routes/api/productsRouter');
const { orderRouter } = require('./routes/api/orderRouter');

const { errorHandler } = require('./middleware/middleware');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/shops', shopsRouter);
app.use('/api/products', productsRouter);
app.use('/api/order', orderRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

module.exports = app;
