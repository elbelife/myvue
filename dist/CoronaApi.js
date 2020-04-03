"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllByCountry = getAllByCountry;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var country = process.argv.splice(2);
function getAllByCountry() {
    _axios2.default.get('https://corona.lmao.ninja/countries/' + country).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        return console.error(error);
    });
}