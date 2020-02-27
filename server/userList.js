const { Schema, modal } = require("mongoose");

const userSchema = new Schema({
  userName: String,
  email: String,
  subscribe: Boolean,
  password: String,
  confirmPassword: String,
  address: {
    city: String,
    state: String,
    postalCode: Number
  },
  alternateEmails: [String]
});
