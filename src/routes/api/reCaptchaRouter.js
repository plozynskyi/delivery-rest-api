const { Router } = require('express');

const { reCaptcha } = require('../../controllers/reCaptchaController');

const router = Router();

router.post('/captcha', reCaptcha);

module.exports = { reCaptchaRouter: router };
