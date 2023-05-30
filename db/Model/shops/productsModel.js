const { Schema, model } = require('mongoose');

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    imgUrl: {
      type: String,
    },

    price: {
      type: String,
    },

    shop: {
      type: Schema.Types.ObjectId,
      ref: 'shops',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Products = model('products', productsSchema);

module.exports = { Products };
