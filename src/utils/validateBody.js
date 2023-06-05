const { HttpError } = require('../helpers/HttpError');

const validateBody = schema => {
  const func = async (req, __, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(new HttpError(422, error.message));
    }
    next();
  };
  return func;
};

module.exports = { validateBody };
