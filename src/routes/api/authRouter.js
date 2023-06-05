const { Router } = require('express');

const {
  signup,
  login,
  logout,
  getCurrent,
} = require('../../controllers/authControllers');

const { validateBody } = require('../../utils/validateBody');

const {
  createUserValidationSchema,
  loginValidationSchema,
} = require('../../utils/validation/userValidationSchemas');

const { authMiddleware } = require('../../middleware/authMiddleware');

const router = Router();

router.post('/signup', validateBody(createUserValidationSchema), signup);
router.post('/login', validateBody(loginValidationSchema), login);
router.post('/logout', logout);
router.get('/current', authMiddleware, getCurrent);

module.exports = { authRouter: router };
