const { HttpError } = require('../helpers/HttpError');
const { asyncWrapper } = require('../helpers/apiHelper');

const { Products } = require('../db/Model/shops/productsModel');

let getProductsByIdShop = async (req, res, next) => {
  const { page, limit = 200 } = req.query;
  const { shopId } = req.params;

  const skip = (page - 1) * limit;

  const result = await Products.find(
    { shop: shopId },
    '-createdAt -updatedAt',
    {
      skip,
      limit,
    }
  );

  const totalHints = await Products.count();

  if (!result) {
    throw new HttpError(404, `Shop with id - ${shopId} not found`);
  }

  res.status(200).json({
    page: Number(page),
    hints: Number(limit),
    result,
    totalHints,
  });
};

getProductsByIdShop = asyncWrapper(getProductsByIdShop);

module.exports = {
  getProductsByIdShop,
};
