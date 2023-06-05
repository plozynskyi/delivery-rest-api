const { asyncWrapper } = require('../helpers/apiHelper');
const { User } = require('../db/Model/auth/User');

const { signupService, loginService } = require('../services/authServices');

let signup = async (req, res) => {
  const { name, email, _id } = await signupService(req.body);

  res.status(201).json({ name, email, _id });
};

signup = asyncWrapper(signup);

let login = async (req, res) => {
  const { user, token } = await loginService(req.body);

  res.status(200).json({ name: user.name, email: user.email, token: token });
};

login = asyncWrapper(login);

let logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: '' });

  res.json({
    message: 'Logout success',
  });
};

logout = asyncWrapper(logout);

let getCurrent = async (req, res) => {
  const { name, email } = req.user;
  res.json({
    name,
    email,
  });
};

getCurrent = asyncWrapper(getCurrent);

module.exports = { signup, login, logout, getCurrent };
