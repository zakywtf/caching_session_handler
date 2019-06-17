"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var users = _mongoose["default"].Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  first_name: String,
  last_name: String,
  address: String,
  telp: {
    type: String,
    index: {
      unique: true
    }
  },
  email: {
    type: String,
    index: {
      unique: true
    }
  },
  role: {
    type: String,
    "enum": ['1', '2', '3']
  }
});

users.statics.toApiUserSchema = function (data) {
  return data.map(function (user) {
    return {
      id: user.id,
      username: user.username,
      name: user.first_name + ' ' + user.last_name,
      address: user.address,
      telp: user.telp,
      email: user.email,
      role: user.role
    };
  });
};

module.exports = _mongoose["default"].model('users', users);