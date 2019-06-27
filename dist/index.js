"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _log = _interopRequireDefault(require("./controller/log"));

var _users = _interopRequireDefault(require("./controller/users/users"));

var _login = _interopRequireDefault(require("./controller/login"));

var _signup = _interopRequireDefault(require("./controller/signup"));

var _vehicles = _interopRequireDefault(require("./controller/vehicles/vehicles"));

var _add_vehicles = _interopRequireDefault(require("./controller/vehicles/add_vehicles"));

var _db = require("./config/db");

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  res.end('Hello world!');
}); // app.use('/names', (req,res,next)=>{
//     res.json()
// })

app.use('/api/v1/log', _log["default"]);
app.use('/api/v1/users', _users["default"]);
app.use('/api/v1/login', _login["default"]);
app.use('/api/v1/signup', _signup["default"]);
app.use('/api/v1/add_vehicles', _add_vehicles["default"]);
app.use('/api/v1/vehicles', _vehicles["default"]);
(0, _db.connectDb)().then(
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app.listen(process.env.PORT, '127.0.0.1', function () {
            return console.log('Connected!!');
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));