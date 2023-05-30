const { Schema, model } = require('mongoose');

const shopSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    imgUrl: {
      type: String,
    },

    location: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Shops = model('shops', shopSchema);

module.exports = { Shops };
