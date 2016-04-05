(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.moha = _index2.default;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./index":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lifeExp = require('./life-exp');

var _lifeExp2 = _interopRequireDefault(_lifeExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bigNews = function bigNews() {};

exports.default = bigNews;

},{"./life-exp":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var elder = function elder() {};

exports.default = elder;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lifeExp = require('./life-exp');

var _lifeExp2 = _interopRequireDefault(_lifeExp);

var _bigNews = require('./big-news');

var _bigNews2 = _interopRequireDefault(_bigNews);

var _elder = require('./elder');

var _elder2 = _interopRequireDefault(_elder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  lifeExp: _lifeExp2.default,
  bigNews: _bigNews2.default,
  elder: _elder2.default
};

},{"./big-news":2,"./elder":3,"./life-exp":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lifeExp = function lifeExp() {};

exports.default = lifeExp;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9fYnJvd3Nlci5qcyIsInNyYy9zY3JpcHRzL2JpZy1uZXdzLmpzIiwic3JjL3NjcmlwdHMvZWxkZXIuanMiLCJzcmMvc2NyaXB0cy9pbmRleC5qcyIsInNyYy9zY3JpcHRzL2xpZmUtZXhwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7OztBQUVBLE9BQU8sSUFBUDs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7O0FBRUEsSUFBSSxVQUFVLFNBQVYsT0FBVSxHQUFNLEVBQU47O2tCQUlDOzs7Ozs7OztBQ05mLElBQUksUUFBUSxTQUFSLEtBQVEsR0FBTSxFQUFOOztrQkFJRzs7Ozs7Ozs7O0FDSmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDYiw0QkFEYTtBQUViLDRCQUZhO0FBR2Isd0JBSGE7Ozs7Ozs7OztBQ0pmLElBQUksVUFBVSxTQUFWLE9BQVUsR0FBTSxFQUFOOztrQkFJQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgbW9oYSBmcm9tICcuL2luZGV4J1xuXG5nbG9iYWwubW9oYSA9IG1vaGFcbiIsImltcG9ydCBsaWZlRXhwIGZyb20gJy4vbGlmZS1leHAnXG5cbmxldCBiaWdOZXdzID0gKCkgPT4ge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJpZ05ld3NcbiIsImxldCBlbGRlciA9ICgpID0+IHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBlbGRlclxuIiwiaW1wb3J0IGxpZmVFeHAgZnJvbSAnLi9saWZlLWV4cCdcbmltcG9ydCBiaWdOZXdzIGZyb20gJy4vYmlnLW5ld3MnXG5pbXBvcnQgZWxkZXIgZnJvbSAnLi9lbGRlcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaWZlRXhwLFxuICBiaWdOZXdzLFxuICBlbGRlclxufVxuIiwibGV0IGxpZmVFeHAgPSAoKSA9PiB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlmZUV4cFxuIl19
