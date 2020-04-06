// user.model.js

var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
  }
});

var User = (module.exports = mongoose.model("User", userSchema));

module.exports.get = function(callback, limit) {
  User.find(callback).limit(limit);
};
