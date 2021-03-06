"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LogModel = _mongoose["default"].Schema({
  kota: String,
  ip_address: String,
  latitude: String,
  longitude: String,
  browser: String,
  os: String,
  user_agent: String,
  created_at: String
});

LogModel.statics.toApiLogmodelSchema = function (data) {
  return data.map(function (log) {
    return {
      id: log.id,
      kota: log.kota,
      ip_address: log.ip_address,
      latitude: log.latitude,
      longitude: log.longitude,
      browser: log.browser,
      os: log.os,
      user_agent: log.user_agent,
      created_at: log.created_at
    };
  });
};

module.exports = _mongoose["default"].model('log_users', LogModel);