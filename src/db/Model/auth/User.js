const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },

    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },

    password: {
      type: String,
      required: [true, 'Set password for user'],
    },

    token: String,
  },
  { versionKey: false, timestamps: true }
);

schema.pre('save', async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

const User = model('user', schema);

module.exports = { User };
