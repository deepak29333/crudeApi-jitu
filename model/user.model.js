const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    pancard: {
      type: Number,
      required: true,
      unique: true,
    },
    aadhar: {
      type: Number,
      required: true,
      unique: true,
    },
    passport: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports.UserModel = mongoose.model("userModel", UserSchema);
