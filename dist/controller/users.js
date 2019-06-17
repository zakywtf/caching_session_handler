"use strict";

var _express = require("express");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _users = _interopRequireDefault(require("../models/users"));

var _ctrlHandler = _interopRequireDefault(require("../lib/ctrlHandler"));

var _validateToken = _interopRequireDefault(require("../lib/validateToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var router = (0, _express.Router)();
router.route('/').get(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            (0, _validateToken["default"])(req, res,
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(body) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(body.payload.role == 1)) {
                          _context3.next = 4;
                          break;
                        }

                        _users["default"].find({},
                        /*#__PURE__*/
                        function () {
                          var _ref3 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee2(err, log) {
                            var data;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return _users["default"].toApiUserSchema(log);

                                  case 2:
                                    data = _context2.sent;
                                    (0, _ctrlHandler["default"])(req, res,
                                    /*#__PURE__*/
                                    _asyncToGenerator(
                                    /*#__PURE__*/
                                    regeneratorRuntime.mark(function _callee() {
                                      return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                          switch (_context.prev = _context.next) {
                                            case 0:
                                              return _context.abrupt("return", data);

                                            case 1:
                                            case "end":
                                              return _context.stop();
                                          }
                                        }
                                      }, _callee);
                                    })));

                                  case 4:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function (_x4, _x5) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                        _context3.next = 5;
                        break;

                      case 4:
                        return _context3.abrupt("return", res.status(404).send({
                          error: 1,
                          message: 'No token provided.'
                        }));

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }()); // 

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).post(
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var user, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            req.body.password = _bcryptjs["default"].hashSync(req.body.password + process.env.SALT, 10);
            user = new _users["default"](req.body);
            _context5.next = 5;
            return user.save();

          case 5:
            result = _context5.sent;
            res.send(result);
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).json({
              error: _context5.t0.message
            }));

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function (_x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}());
module.exports = router;