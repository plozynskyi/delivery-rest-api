const express = require('express');

const logger = require('morgan');
const cors = require('cors');

const router = require('./routes/api/index');

const { errorHandler } = require('./middleware/middleware');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', router);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

module.exports = app;
