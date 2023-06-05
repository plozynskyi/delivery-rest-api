const { array } = require('joi');
const { Schema, model } = require('mongoose');

const statusList = [
  'new',
  'confirmed',
  'is preparing',
  'is delivered',
  'done',
  'rejected',
  'cancelled',
];

const orderSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },

    phone: {
      type: String,
    },

    id: {
      type: String,
    },

    address: {
      type: String,
    },
    busket: {
      type: Array,
    },
    status: {
      type: String,
      enum: statusList,
      default: 'new',
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model('order', orderSchema);

module.exports = { Order };
