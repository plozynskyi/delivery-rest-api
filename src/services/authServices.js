const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRES_IN } = process.env;

const { User } = require('../db/Model/auth/User');

const { HttpError } = require('../helpers/HttpError');

const signupService = async body => {
  const { email } = body;
  const verifyUser = await User.findOne({ email });
  if (verifyUser) {
    throw new HttpError(409, 'Email should be unique');
  }

  const newUser = await User.create(body);
  newUser.password = undefined;

  return newUser;
};

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new HttpError(401, 'Not authorized');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new HttpError(401, 'Not authorized');
  }

  const payload = {
    _id: user._id,
  };

  const token = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });

  await User.findByIdAndUpdate(user._id, { token });

  return { user, token };
};

module.exports = { signupService, loginService };
