const { HttpError } = require('../helpers/HttpError');
const { asyncWrapper } = require('../helpers/apiHelper');

const { Order } = require('../db/Model/shops/orderModel');

let getOrderHistory = async (req, res, next) => {
  const { _id } = req.user;

  const result = await Order.find({ id: _id });

  // const totalHints = await Order.count({ id: _id });

  if (!result) {
    throw new HttpError(404, `History orders not found`);
  }

  res.status(200).json({
    result,
    _id,
    // totalHints,
  });
};

getOrderHistory = asyncWrapper(getOrderHistory);

module.exports = {
  getOrderHistory,
};
