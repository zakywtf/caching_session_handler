"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _log_user = _interopRequireDefault(require("./log_user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var connectDb = function connectDb() {
  return _mongoose["default"].connect(process.env.MONGO_URL);
};

exports.connectDb = connectDb;
var models = {
  LogUser: _log_user["default"]
};
var _default = models;
exports["default"] = _default;