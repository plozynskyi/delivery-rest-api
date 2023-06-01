const { Order } = require('../db/Model/shops/orderModel');

const { asyncWrapper } = require('../helpers/apiHelper');

let addOrder = async (req, res, next) => {
  const data = req.body;
  const { _id, status } = await Order.create(data);

  res.status(201).json({
    status: 'success',
    orderId: _id,
    orderStatus: status,
  });
};

addOrder = asyncWrapper(addOrder);

module.exports = {
  addOrder,
};
