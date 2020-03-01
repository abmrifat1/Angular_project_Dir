const { Schema, model } = require("mongoose");

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
  alternateEmails: [
    {
      alternateMail:String
    }
  ],

});

const UserList = model('UserList',userSchema);

module.exports = UserList;