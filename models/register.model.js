const mongoose = require("mongoose");

// create schema
const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  },
});

// create model/collections
const Register = new mongoose.model("Register", registerSchema);

// create documents

// export
module.exports = Register;
