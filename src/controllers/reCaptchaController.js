const axios = require('axios');
const { asyncWrapper } = require('../helpers/apiHelper');

let reCaptcha = async (req, res) => {
  const { token } = req.body;
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
    );
    if (response.data.success) {
      res.send('Human 👨 👩');
    } else {
      res.send('Robot 🤖');
    }
  } catch (error) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(error);
    res.status(500).send('Error verifying reCAPTCHA');
  }
};

reCaptcha = asyncWrapper(reCaptcha);

module.exports = { reCaptcha };
