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

let getOrderDetail = async (req, res, next) => {
  const { orderId } = req.params;

  const result = await Order.findById(orderId);

  // const totalHints = await Order.count();

  res.status(200).json({
    result,
    // totalHints,
  });
};

getOrderDetail = asyncWrapper(getOrderDetail);

module.exports = {
  addOrder,
  getOrderDetail,
};
