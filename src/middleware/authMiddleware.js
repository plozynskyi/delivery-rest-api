const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const { ACCESS_TOKEN_SECRET } = process.env;

const { User } = require('../db/Model/auth/User');
const { AuthError } = require('../helpers/authError');

const authMiddleware = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer') {
      return next(
        new AuthError(401, 'Not authorized, please, provide a token')
      );
    }

    const { _id } = jwt.verify(token, ACCESS_TOKEN_SECRET);

    const user = await User.findById(_id);

    if (token !== user.token || !user || !user.token) {
      return next(AuthError(401, 'Not authorized, invalid token'));
    }

    req.user = user;
    next();
  } catch (error) {
    next(new AuthError(401, 'Not authorized, invalid token'));
  }
};

module.exports = { authMiddleware };
