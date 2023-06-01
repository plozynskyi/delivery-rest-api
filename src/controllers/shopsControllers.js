const { Shops } = require('../db/Model/shops/shopModel');

const { HttpError } = require('../helpers/HttpError');
const { asyncWrapper } = require('../helpers/apiHelper');

let getShops = async (req, res, next) => {
  const { page, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Shops.find({}, '-createdAt -updatedAt', {
    skip,
    limit,
  });

  const totalHints = await Shops.count();

  if (!result) {
    throw new HttpError(404, `Shop with id - ${shopId} not found`);
  }

  res.status(200).json({
    // page: Number(page),
    // hints: Number(limit),
    result,
    totalHints,
  });
};

getShops = asyncWrapper(getShops);

module.exports = {
  getShops,
};
