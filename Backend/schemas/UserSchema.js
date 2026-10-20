const { Schema } = require("mongoose");

const UserSchema = new Schema({
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = { UserSchema };