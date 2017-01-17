/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Card Maker
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: M Habib Rohman <mhrohman@live.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @class CardMaker
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Promise.each = function (arr, fn) {
  // take an array and a function
  // invalid input
  if (!arr || !arr.length) return Promise.reject(new Error("Non array passed to each"));
  // empty case
  if (arr.length === 0) return Promise.resolve();
  return arr.reduce(function (prev, cur) {
    return prev.then(function () {
      return fn(cur);
    });
  }, Promise.resolve());
};

var _config = new WeakMap();

var CardMaker = function () {
  function CardMaker() {
    var _this = this;

    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CardMaker);

    this.renderText = function () {
      var text = _this.getConfig('template')['text'];

      text.forEach(function (val, key) {
        _this.writeText(val.value, val.props);
      });
    };

    // default config
    _config.set(this, {
      align: 'left',
      background: undefined,
      canvas: undefined,
      color: 'black',
      download: '',
      el: '#cardmaker',
      width: 400,
      height: 250,
      template: {}
    });

    // set default config to global
    this.setConfig(configs);

    // put canvas to DOM
    this.putCanvas();

    // init app automatically
    this.render();

    // enable download button
    this.enableDownload();
  }

  /**
   * Change background of canvas
   *
   * @param {string} type
   * @param {object} props
   * @returns {object}
   *
   * @memberOf CardMaker
   */


  _createClass(CardMaker, [{
    key: 'changeBackground',
    value: function changeBackground(type, props) {
      var config = this.getConfig(['width', 'height']);
      var ctx = this.getContext();

      ctx.beginPath();

      switch (type) {
        case 'image':
          if (props.img == undefined) throw new Error('Make sure you set the background image');

          ctx.drawImage(props.img, 0, 0, config['width'], config['height']);

          break;
        case 'color':
          if (props.color == undefined) throw new Error('Make sure you set the background color');

          ctx.fillStyle = props.color;
          ctx.rect(0, 0, config['width'], config['height']);
          ctx.fill();

          break;
      }

      ctx.closePath();

      return ctx;
    }

    /**
     * Enable download
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'enableDownload',
    value: function enableDownload() {
      var _this2 = this;

      var download = this.getConfig('download');

      // download image
      if (download.length > 0) {
        // Means defined
        var downloadButton = document.querySelector(download);
        if (downloadButton) {
          downloadButton.addEventListener('click', function (e) {
            e.preventDefault();

            window.location.href = _this2.getImage();
          });
        } else {
          throw new Error('Element ' + download + ' can\'t found in your DOM. Please check again, maybe you make a typo');
        }
      }
    }

    /**
     * Get config
     *
     * @param {string} key
     * @returns {object}
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'getConfig',
    value: function getConfig(key) {
      var config = _config.get(this);

      if (key) {
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object') {
          var result = {};

          for (var k = 0; k < key.length; k++) {
            result[key[k]] = config[key[k]];
          }

          return result;
        } else if (typeof key == 'string') {
          if (config[key] == '') throw new Error('Config with key \'' + key + '\' undefined, please check your key again');

          return config[key];
        }
      } else {
        return config;
      }
    }

    /**
     * Get context 2d from canvas
     *
     * @returns
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'getContext',
    value: function getContext() {
      if (this.getConfig('canvas')) return this.getConfig('canvas').getContext('2d');
    }

    /**
     * Get image from canvas
     *
     * @param {string} format
     * @param {float} quality
     * @returns
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'getImage',
    value: function getImage() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'jpeg';
      var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;

      return this.getConfig('canvas').toDataURL('image/' + format, quality);
    }

    /**
     * Make canvas element
     *
     * @param {object} props
     * @returns
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'makeCanvas',
    value: function makeCanvas() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.getConfig('canvas') != undefined) throw new Error('Cannot create canvas, You\'ve already set the canvas');

      var canvas = (0, _utils.makeElement)('canvas', props);
      this.setConfig('canvas', canvas);

      return canvas;
    }

    /**
     * Put canvas to el root
     *
     * @return {object}
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'putCanvas',
    value: function putCanvas() {
      var config = this.getConfig(['el', 'width', 'height']);
      var elem = void 0,
          newCanvas = void 0;

      newCanvas = this.makeCanvas({
        width: config['width'],
        height: config['height']
      });

      elem = document.querySelector(config['el']);

      if (elem != null || elem != undefined) {
        return elem.appendChild(newCanvas);
      } else {
        throw new Error('Cannot find ' + elem + ' element in your DOM');
      }
    }

    /**
     * Render the app
     *
     * @returns {promises}
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var config = this.getConfig(['background', 'template']);

      // just check if background set from template
      if (!config['background'] && config['template']['background'].length > 0) this.setConfig('background', config['template']['background']);

      var actionRender = [this.renderBackground(), this.renderImage()];
      return Promise.all(actionRender).then(function () {
        _this3.renderText();
      });
    }

    /**
     * Render background from template
     *
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'renderBackground',
    value: function renderBackground() {
      var _this4 = this;

      var background = this.getConfig('background');

      if ((0, _utils.isColor)(background)) {
        this.changeBackground('color', {
          color: background
        });
      } else if (background != undefined && background != '') {
        (0, _utils.makeImage)(background).then(function (img) {
          _this4.changeBackground('image', {
            img: img
          });
        });
      } else {
        this.changeBackground('color', {
          color: (0, _utils.colorNameToHex)('black')
        });
        console.warn('You don\'t specified background image or color, so .. we give you black background');
      }
    }

    /**
     * Render image from template
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'renderImage',
    value: function renderImage() {
      var _this5 = this;

      var images = this.getConfig('template')['images'];

      // let Promise = require('bluebird');
      return Promise.each(images, function (image) {
        return (0, _utils.makeImage)(image.value).then(function (img) {

          var ctx = _this5.getContext();
          var prop = image.props;

          ctx.beginPath();
          ctx.drawImage(img, prop.sx || 0, prop.sy || 0, prop.swidth || img.width, prop.sheight || img.height, prop.x || 0, prop.y || 0, prop.width || img.width, prop.height || img.height);
          ctx.closePath();
        });
      }).then(function () {
        return true;
      });
    }

    /**
     * Render text from template
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'setConfig',


    /**
     * Set config
     *
     * @param {string|object} params[0]
     * @param {string} params[1]
     * @returns {object}
     *
     * @memberOf CardMaker
     */
    value: function setConfig() {
      var config = this.getConfig();

      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      if (params) {
        if (_typeof(params[0]) == 'object') {
          var newConfig = params[0];
          var keys = [];

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = Object.entries(newConfig)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  val = _step$value[1];

              config[key] = val;
              keys.push(key);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return this.getConfig(keys);
        } else {
          config[params[0]] = params[1];

          return this.getConfig([params[0]]);
        }
      }
    }

    /**
     * Write some text to canvas
     *
     * @return {object}
     *
     * @memberOf CardMaker
     */

  }, {
    key: 'writeText',
    value: function writeText(text) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var ctx = this.getContext();
      var config = this.getConfig(['color', 'align']);

      if (text == '' || text == undefined) console.warn('We\'ve found you insert an empty text, please make sure you make it valuable.');

      ctx.beginPath();
      ctx.fillStyle = props.color || config['color'];
      ctx.textAlign = props.align || config['align'];
      ctx.font = (props.size || 20) + 'px ' + (props.family || 'Arial');
      ctx.fillText(text, props.x || 0, props.y || 0);
      ctx.closePath();

      return ctx;
    }
  }]);

  return CardMaker;
}();

exports.default = CardMaker;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeElement = makeElement;
exports.makeImage = makeImage;
exports.colorNameToHex = colorNameToHex;
exports.checkHex = checkHex;
exports.isColor = isColor;
exports.toDataURL = toDataURL;
/**
 * Make an DOM Element
 *
 * @export
 * @param {string} elName
 * @param {object} [props={}]
 * @returns {object}
 */
function makeElement(elName) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elem = document.createElement(elName);

  for (var prop in props) {
    elem[prop] = props[prop];
  }

  return elem;
}

/**
 * Make an image
 *
 * @export
 * @param {string} src
 * @returns {promise}
 */
function makeImage(src) {

  return toDataURL(src, {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
  }).then(function (source) {

    return new Promise(function (resolve, reject) {

      var image = new Image();

      image.onload = function () {
        resolve(image);
      };

      image.onerror = function () {
        reject(src + ' can\'t load');
      };

      image.src = source;
    });
  });
}

/**
 * Convert color name to hex
 *
 * @export
 * @param {string} color
 * @returns
 */
function colorNameToHex(color) {

  var key = color ? color.toLowerCase() : '';

  var colors = {
    "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff", "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887", "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff", "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f", "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1", "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff", "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff", "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f", "honeydew": "#f0fff0", "hotpink": "#ff69b4", "indianred": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c", "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2", "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de", "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6", "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee", "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5", "navajowhite": "#ffdead", "navy": "#000080", "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6", "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1", "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4", "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0", "violet": "#ee82ee", "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5", "yellow": "#ffff00", "yellowgreen": "#9acd32"
  };

  if (typeof colors[key] != 'undefined') return colors[key];

  return false;
}

/**
 * Check hex color
 *
 * @param {string} color
 * @returns {boolean}
 */
function checkHex(color) {
  return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)
  );
}

/**
 * Check if string is color or not
 *
 * @export
 * @param {string} str
 * @returns {boolean}
 */
function isColor(str) {

  if (!checkHex(str)) {
    var strTest = colorNameToHex(str);
    if (!checkHex(strTest)) {
      return false;
    }
  }

  return true;
}

/**
 * Convert url to base64
 *
 * @export
 * @param {string} url
 * @param {object} [opt={}]
 * @returns
 */
function toDataURL(url) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return fetch(url, opt).then(function (response) {
    return response.blob();
  }).then(function (blob) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  });
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(0);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.CardMaker = _core2.default;

exports.default = _core2.default;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWU1NDlhOTVmZmIzYmQ5NWRiY2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9taXNlIiwiZWFjaCIsImFyciIsImZuIiwibGVuZ3RoIiwicmVqZWN0IiwiRXJyb3IiLCJyZXNvbHZlIiwicmVkdWNlIiwicHJldiIsImN1ciIsInRoZW4iLCJfY29uZmlnIiwiV2Vha01hcCIsIkNhcmRNYWtlciIsImNvbmZpZ3MiLCJyZW5kZXJUZXh0IiwidGV4dCIsImdldENvbmZpZyIsImZvckVhY2giLCJ2YWwiLCJrZXkiLCJ3cml0ZVRleHQiLCJ2YWx1ZSIsInByb3BzIiwic2V0IiwiYWxpZ24iLCJiYWNrZ3JvdW5kIiwidW5kZWZpbmVkIiwiY2FudmFzIiwiY29sb3IiLCJkb3dubG9hZCIsImVsIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZW1wbGF0ZSIsInNldENvbmZpZyIsInB1dENhbnZhcyIsInJlbmRlciIsImVuYWJsZURvd25sb2FkIiwidHlwZSIsImNvbmZpZyIsImN0eCIsImdldENvbnRleHQiLCJiZWdpblBhdGgiLCJpbWciLCJkcmF3SW1hZ2UiLCJmaWxsU3R5bGUiLCJyZWN0IiwiZmlsbCIsImNsb3NlUGF0aCIsImRvd25sb2FkQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImdldEltYWdlIiwiZ2V0IiwicmVzdWx0IiwiayIsImZvcm1hdCIsInF1YWxpdHkiLCJ0b0RhdGFVUkwiLCJlbGVtIiwibmV3Q2FudmFzIiwibWFrZUNhbnZhcyIsImFwcGVuZENoaWxkIiwiYWN0aW9uUmVuZGVyIiwicmVuZGVyQmFja2dyb3VuZCIsInJlbmRlckltYWdlIiwiYWxsIiwiY2hhbmdlQmFja2dyb3VuZCIsImNvbnNvbGUiLCJ3YXJuIiwiaW1hZ2VzIiwiaW1hZ2UiLCJwcm9wIiwic3giLCJzeSIsInN3aWR0aCIsInNoZWlnaHQiLCJ4IiwieSIsInBhcmFtcyIsIm5ld0NvbmZpZyIsImtleXMiLCJPYmplY3QiLCJlbnRyaWVzIiwicHVzaCIsInRleHRBbGlnbiIsImZvbnQiLCJzaXplIiwiZmFtaWx5IiwiZmlsbFRleHQiLCJtYWtlRWxlbWVudCIsIm1ha2VJbWFnZSIsImNvbG9yTmFtZVRvSGV4IiwiY2hlY2tIZXgiLCJpc0NvbG9yIiwiZWxOYW1lIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIm1ldGhvZCIsImhlYWRlcnMiLCJIZWFkZXJzIiwibW9kZSIsImNhY2hlIiwic291cmNlIiwiSW1hZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwidG9Mb3dlckNhc2UiLCJjb2xvcnMiLCJ0ZXN0Iiwic3RyIiwic3RyVGVzdCIsInVybCIsIm9wdCIsImZldGNoIiwicmVzcG9uc2UiLCJibG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlYWRBc0RhdGFVUkwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cWpCQ2hFQTs7Ozs7Ozs7QUFRQTs7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SCxPQUFPL0QsTUFBZjtBQUNELE9BRkQ7QUFHQStELGFBQU9YLE9BQVAsR0FBaUI3RyxNQUFqQjtBQUNBd0gsYUFBT0csYUFBUCxDQUFxQkosSUFBckI7QUFDSCxLQVBhLENBQVI7QUFBQSxHQUZELENBQVA7QUFVRCxDOzs7Ozs7Ozs7Ozs7O0FDNUhEOzs7Ozs7QUFFQW5FLE9BQU8zQyxTQUFQIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImJ1aWxkXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWU1NDlhOTVmZmIzYmQ5NWRiY2EiLCIvKipcbiAqIENhcmQgTWFrZXJcbiAqXG4gKiBBdXRob3I6IE0gSGFiaWIgUm9obWFuIDxtaHJvaG1hbkBsaXZlLmNvbT5cbiAqXG4gKiBAY2xhc3MgQ2FyZE1ha2VyXG4gKi9cblxuaW1wb3J0IHtcbiAgbWFrZUVsZW1lbnQsXG4gIG1ha2VJbWFnZSxcbiAgY29sb3JOYW1lVG9IZXgsXG4gIGlzQ29sb3Jcbn0gZnJvbSAnLi91dGlscyc7XG5cblByb21pc2UuZWFjaCA9IGZ1bmN0aW9uKGFyciwgZm4pIHsgLy8gdGFrZSBhbiBhcnJheSBhbmQgYSBmdW5jdGlvblxuICAvLyBpbnZhbGlkIGlucHV0XG4gIGlmKCFhcnIgfHwgIWFyci5sZW5ndGgpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJOb24gYXJyYXkgcGFzc2VkIHRvIGVhY2hcIikpO1xuICAvLyBlbXB0eSBjYXNlXG4gIGlmKGFyci5sZW5ndGggPT09IDApIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgcmV0dXJuIHByZXYudGhlbigoKSA9PiBmbihjdXIpKVxuICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG59XG5cbmNvbnN0IF9jb25maWcgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkTWFrZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3MgPSB7fSkge1xuXG4gICAgLy8gZGVmYXVsdCBjb25maWdcbiAgICBfY29uZmlnLnNldCh0aGlzLCB7XG4gICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgYmFja2dyb3VuZDogdW5kZWZpbmVkLFxuICAgICAgY2FudmFzOiB1bmRlZmluZWQsXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIGRvd25sb2FkOiAnJyxcbiAgICAgIGVsOiAnI2NhcmRtYWtlcicsXG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICB0ZW1wbGF0ZToge30sXG4gICAgfSk7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBjb25maWcgdG8gZ2xvYmFsXG4gICAgdGhpcy5zZXRDb25maWcoY29uZmlncyk7XG5cbiAgICAvLyBwdXQgY2FudmFzIHRvIERPTVxuICAgIHRoaXMucHV0Q2FudmFzKCk7XG5cbiAgICAvLyBpbml0IGFwcCBhdXRvbWF0aWNhbGx5XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIC8vIGVuYWJsZSBkb3dubG9hZCBidXR0b25cbiAgICB0aGlzLmVuYWJsZURvd25sb2FkKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYmFja2dyb3VuZCBvZiBjYW52YXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqXG4gICAqIEBtZW1iZXJPZiBDYXJkTWFrZXJcbiAgICovXG4gIGNoYW5nZUJhY2tncm91bmQodHlwZSwgcHJvcHMpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldENvbmZpZyhbJ3dpZHRoJywgJ2hlaWdodCddKTtcbiAgICBsZXQgY3R4ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICBpZiAocHJvcHMuaW1nID09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKCdNYWtlIHN1cmUgeW91IHNldCB0aGUgYmFja2dyb3VuZCBpbWFnZScpXG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZShwcm9wcy5pbWcsIDAsIDAsIGNvbmZpZ1snd2lkdGgnXSwgY29uZmlnWydoZWlnaHQnXSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIGlmIChwcm9wcy5jb2xvciA9PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignTWFrZSBzdXJlIHlvdSBzZXQgdGhlIGJhY2tncm91bmQgY29sb3InKVxuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBwcm9wcy5jb2xvcjtcbiAgICAgICAgY3R4LnJlY3QoMCwgMCwgY29uZmlnWyd3aWR0aCddLCBjb25maWdbJ2hlaWdodCddKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICByZXR1cm4gY3R4O1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBkb3dubG9hZFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQ2FyZE1ha2VyXG4gICAqL1xuICBlbmFibGVEb3dubG9hZCgpIHtcbiAgICBjb25zdCBkb3dubG9hZCA9IHRoaXMuZ2V0Q29uZmlnKCdkb3dubG9hZCcpO1xuXG4gICAgLy8gZG93bmxvYWQgaW1hZ2VcbiAgICBpZiAoZG93bmxvYWQubGVuZ3RoID4gMCkgeyAvLyBNZWFucyBkZWZpbmVkXG4gICAgICBsZXQgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvd25sb2FkKTtcbiAgICAgIGlmIChkb3dubG9hZEJ1dHRvbikge1xuICAgICAgICBkb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuZ2V0SW1hZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgJHsgZG93bmxvYWQgfSBjYW4ndCBmb3VuZCBpbiB5b3VyIERPTS4gUGxlYXNlIGNoZWNrIGFnYWluLCBtYXliZSB5b3UgbWFrZSBhIHR5cG9gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqXG4gICAqIEBtZW1iZXJPZiBDYXJkTWFrZXJcbiAgICovXG4gIGdldENvbmZpZyhrZXkpIHtcbiAgICBsZXQgY29uZmlnID0gX2NvbmZpZy5nZXQodGhpcyk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBrZXkubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICByZXN1bHRba2V5W2tdXSA9IGNvbmZpZ1trZXlba11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoY29uZmlnW2tleV0gPT0gJycpIHRocm93IG5ldyBFcnJvcihgQ29uZmlnIHdpdGgga2V5ICckeyBrZXkgfScgdW5kZWZpbmVkLCBwbGVhc2UgY2hlY2sgeW91ciBrZXkgYWdhaW5gKTtcblxuICAgICAgICByZXR1cm4gY29uZmlnW2tleV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjb250ZXh0IDJkIGZyb20gY2FudmFzXG4gICAqXG4gICAqIEByZXR1cm5zXG4gICAqXG4gICAqIEBtZW1iZXJPZiBDYXJkTWFrZXJcbiAgICovXG4gIGdldENvbnRleHQoKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29uZmlnKCdjYW52YXMnKSkgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbWFnZSBmcm9tIGNhbnZhc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0XG4gICAqIEBwYXJhbSB7ZmxvYXR9IHF1YWxpdHlcbiAgICogQHJldHVybnNcbiAgICpcbiAgICogQG1lbWJlck9mIENhcmRNYWtlclxuICAgKi9cbiAgZ2V0SW1hZ2UoZm9ybWF0ID0gJ2pwZWcnLCBxdWFsaXR5ID0gMS4wKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCdjYW52YXMnKS50b0RhdGFVUkwoYGltYWdlLyR7IGZvcm1hdCB9YCwgcXVhbGl0eSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBjYW52YXMgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAgICogQHJldHVybnNcbiAgICpcbiAgICogQG1lbWJlck9mIENhcmRNYWtlclxuICAgKi9cbiAgbWFrZUNhbnZhcyhwcm9wcyA9IHt9KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q29uZmlnKCdjYW52YXMnKSAhPSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBjYW52YXMsIFlvdVxcJ3ZlIGFscmVhZHkgc2V0IHRoZSBjYW52YXMnKTtcblxuICAgIGxldCBjYW52YXMgPSBtYWtlRWxlbWVudCgnY2FudmFzJywgcHJvcHMpO1xuICAgIHRoaXMuc2V0Q29uZmlnKCdjYW52YXMnLCBjYW52YXMpO1xuXG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXQgY2FudmFzIHRvIGVsIHJvb3RcbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQ2FyZE1ha2VyXG4gICAqL1xuICBwdXRDYW52YXMoKSB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRDb25maWcoWydlbCcsICd3aWR0aCcsICdoZWlnaHQnXSk7XG4gICAgbGV0IGVsZW0sIG5ld0NhbnZhcztcblxuICAgIG5ld0NhbnZhcyA9IHRoaXMubWFrZUNhbnZhcyh7XG4gICAgICB3aWR0aDogY29uZmlnWyd3aWR0aCddLFxuICAgICAgaGVpZ2h0OiBjb25maWdbJ2hlaWdodCddXG4gICAgfSk7XG5cbiAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWdbJ2VsJ10pO1xuXG4gICAgaWYgKGVsZW0gIT0gbnVsbCB8fCBlbGVtICE9IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVsZW0uYXBwZW5kQ2hpbGQobmV3Q2FudmFzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCAkeyBlbGVtIH0gZWxlbWVudCBpbiB5b3VyIERPTWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGFwcFxuICAgKlxuICAgKiBAcmV0dXJucyB7cHJvbWlzZXN9XG4gICAqXG4gICAqIEBtZW1iZXJPZiBDYXJkTWFrZXJcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29uZmlnID0gdGhpcy5nZXRDb25maWcoWydiYWNrZ3JvdW5kJywgJ3RlbXBsYXRlJ10pO1xuXG4gICAgLy8ganVzdCBjaGVjayBpZiBiYWNrZ3JvdW5kIHNldCBmcm9tIHRlbXBsYXRlXG4gICAgaWYgKCFjb25maWdbJ2JhY2tncm91bmQnXSAmJiBjb25maWdbJ3RlbXBsYXRlJ11bJ2JhY2tncm91bmQnXS5sZW5ndGggPiAwKSB0aGlzLnNldENvbmZpZygnYmFja2dyb3VuZCcsIGNvbmZpZ1sndGVtcGxhdGUnXVsnYmFja2dyb3VuZCddKTtcblxuICAgIGxldCBhY3Rpb25SZW5kZXIgPSBbdGhpcy5yZW5kZXJCYWNrZ3JvdW5kKCksIHRoaXMucmVuZGVySW1hZ2UoKV07XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGFjdGlvblJlbmRlcikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRleHQoKTtcbiAgICB9KTtcblxuICB9XG5cblxuICAvKipcbiAgICogUmVuZGVyIGJhY2tncm91bmQgZnJvbSB0ZW1wbGF0ZVxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQ2FyZE1ha2VyXG4gICAqL1xuICByZW5kZXJCYWNrZ3JvdW5kKCkge1xuICAgIGxldCBiYWNrZ3JvdW5kID0gdGhpcy5nZXRDb25maWcoJ2JhY2tncm91bmQnKTtcblxuICAgIGlmIChpc0NvbG9yKGJhY2tncm91bmQpKSB7XG4gICAgICB0aGlzLmNoYW5nZUJhY2tncm91bmQoJ2NvbG9yJywge1xuICAgICAgICBjb2xvcjogYmFja2dyb3VuZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChiYWNrZ3JvdW5kICE9IHVuZGVmaW5lZCAmJiBiYWNrZ3JvdW5kICE9ICcnKSB7XG4gICAgICBtYWtlSW1hZ2UoYmFja2dyb3VuZCkudGhlbigoaW1nKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlQmFja2dyb3VuZCgnaW1hZ2UnLCB7XG4gICAgICAgICAgaW1nXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VCYWNrZ3JvdW5kKCdjb2xvcicsIHtcbiAgICAgICAgY29sb3I6IGNvbG9yTmFtZVRvSGV4KCdibGFjaycpXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUud2FybihgWW91IGRvbid0IHNwZWNpZmllZCBiYWNrZ3JvdW5kIGltYWdlIG9yIGNvbG9yLCBzbyAuLiB3ZSBnaXZlIHlvdSBibGFjayBiYWNrZ3JvdW5kYCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGltYWdlIGZyb20gdGVtcGxhdGVcbiAgICpcbiAgICogQG1lbWJlck9mIENhcmRNYWtlclxuICAgKi9cbiAgcmVuZGVySW1hZ2UoKSB7XG4gICAgbGV0IGltYWdlcyA9IHRoaXMuZ2V0Q29uZmlnKCd0ZW1wbGF0ZScpWydpbWFnZXMnXTtcblxuICAgIC8vIGxldCBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5lYWNoKGltYWdlcywgKGltYWdlKSA9PiB7XG4gICAgICByZXR1cm4gbWFrZUltYWdlKGltYWdlLnZhbHVlKS50aGVuKChpbWcpID0+IHtcblxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGxldCBwcm9wID0gaW1hZ2UucHJvcHM7XG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgcHJvcC5zeCB8fCAwLCBwcm9wLnN5IHx8IDAsIHByb3Auc3dpZHRoIHx8IGltZy53aWR0aCwgcHJvcC5zaGVpZ2h0IHx8IGltZy5oZWlnaHQsIHByb3AueCB8fCAwLCBwcm9wLnkgfHwgMCwgcHJvcC53aWR0aCB8fCBpbWcud2lkdGgsIHByb3AuaGVpZ2h0IHx8IGltZy5oZWlnaHQpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICB9KVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcblxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0ZXh0IGZyb20gdGVtcGxhdGVcbiAgICpcbiAgICogQG1lbWJlck9mIENhcmRNYWtlclxuICAgKi9cbiAgcmVuZGVyVGV4dCA9ICgpID0+IHtcbiAgICBsZXQgdGV4dCA9IHRoaXMuZ2V0Q29uZmlnKCd0ZW1wbGF0ZScpWyd0ZXh0J107XG5cbiAgICB0ZXh0LmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICB0aGlzLndyaXRlVGV4dCh2YWwudmFsdWUsIHZhbC5wcm9wcyk7XG5cbiAgICB9KVxuXG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHBhcmFtc1swXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zWzFdXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqXG4gICAqIEBtZW1iZXJPZiBDYXJkTWFrZXJcbiAgICovXG4gIHNldENvbmZpZyguLi5wYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1zWzBdID09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBuZXdDb25maWcgPSBwYXJhbXNbMF07XG4gICAgICAgIGxldCBrZXlzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhuZXdDb25maWcpKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB2YWw7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoa2V5cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWdbcGFyYW1zWzBdXSA9IHBhcmFtc1sxXTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoW3BhcmFtc1swXV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBzb21lIHRleHQgdG8gY2FudmFzXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICpcbiAgICogQG1lbWJlck9mIENhcmRNYWtlclxuICAgKi9cbiAgd3JpdGVUZXh0KHRleHQsIHByb3BzID0ge30pIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKFsnY29sb3InLCAnYWxpZ24nXSk7XG5cbiAgICBpZiAodGV4dCA9PSAnJyB8fCB0ZXh0ID09IHVuZGVmaW5lZCApIGNvbnNvbGUud2FybignV2VcXCd2ZSBmb3VuZCB5b3UgaW5zZXJ0IGFuIGVtcHR5IHRleHQsIHBsZWFzZSBtYWtlIHN1cmUgeW91IG1ha2UgaXQgdmFsdWFibGUuJyk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHByb3BzLmNvbG9yIHx8IGNvbmZpZ1snY29sb3InXTtcbiAgICBjdHgudGV4dEFsaWduID0gcHJvcHMuYWxpZ24gfHwgY29uZmlnWydhbGlnbiddO1xuICAgIGN0eC5mb250ID0gYCR7IHByb3BzLnNpemUgfHwgMjAgfXB4ICR7IHByb3BzLmZhbWlseSB8fCAnQXJpYWwnIH1gO1xuICAgIGN0eC5maWxsVGV4dCggdGV4dCwgcHJvcHMueCB8fCAwICwgcHJvcHMueSB8fCAwICk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGN0eDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS5qcyIsIi8qKlxuICogTWFrZSBhbiBET00gRWxlbWVudFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbE5hbWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHM9e31dXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVsZW1lbnQoZWxOYW1lLCBwcm9wcyA9IHt9KSB7XG4gIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbE5hbWUpO1xuXG4gIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICBlbGVtW3Byb3BdID0gcHJvcHNbcHJvcF07XG4gIH1cblxuICByZXR1cm4gZWxlbTtcbn1cblxuLyoqXG4gKiBNYWtlIGFuIGltYWdlXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtzdHJpbmd9IHNyY1xuICogQHJldHVybnMge3Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSW1hZ2Uoc3JjKSB7XG5cbiAgICByZXR1cm4gdG9EYXRhVVJMKHNyYywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCksXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBjYWNoZTogJ2RlZmF1bHQnXG4gICAgfSkudGhlbigoc291cmNlKSA9PiB7XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICByZWplY3Qoc3JjICsgJyBjYW5cXCd0IGxvYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcblxuICAgICAgfSk7XG4gICAgfSk7XG5cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGNvbG9yIG5hbWUgdG8gaGV4XG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JOYW1lVG9IZXgoY29sb3IpIHtcblxuICBsZXQga2V5ID0gY29sb3IgPyBjb2xvci50b0xvd2VyQ2FzZSgpIDogJyc7XG5cbiAgY29uc3QgY29sb3JzID0ge1xuICAgIFwiYWxpY2VibHVlXCI6XCIjZjBmOGZmXCIsXCJhbnRpcXVld2hpdGVcIjpcIiNmYWViZDdcIixcImFxdWFcIjpcIiMwMGZmZmZcIixcImFxdWFtYXJpbmVcIjpcIiM3ZmZmZDRcIixcImF6dXJlXCI6XCIjZjBmZmZmXCIsXCJiZWlnZVwiOlwiI2Y1ZjVkY1wiLFwiYmlzcXVlXCI6XCIjZmZlNGM0XCIsXCJibGFja1wiOlwiIzAwMDAwMFwiLFwiYmxhbmNoZWRhbG1vbmRcIjpcIiNmZmViY2RcIixcImJsdWVcIjpcIiMwMDAwZmZcIixcImJsdWV2aW9sZXRcIjpcIiM4YTJiZTJcIixcImJyb3duXCI6XCIjYTUyYTJhXCIsXCJidXJseXdvb2RcIjpcIiNkZWI4ODdcIixcImNhZGV0Ymx1ZVwiOlwiIzVmOWVhMFwiLFwiY2hhcnRyZXVzZVwiOlwiIzdmZmYwMFwiLFwiY2hvY29sYXRlXCI6XCIjZDI2OTFlXCIsXCJjb3JhbFwiOlwiI2ZmN2Y1MFwiLFwiY29ybmZsb3dlcmJsdWVcIjpcIiM2NDk1ZWRcIixcImNvcm5zaWxrXCI6XCIjZmZmOGRjXCIsXCJjcmltc29uXCI6XCIjZGMxNDNjXCIsXCJjeWFuXCI6XCIjMDBmZmZmXCIsXCJkYXJrYmx1ZVwiOlwiIzAwMDA4YlwiLFwiZGFya2N5YW5cIjpcIiMwMDhiOGJcIixcImRhcmtnb2xkZW5yb2RcIjpcIiNiODg2MGJcIixcImRhcmtncmF5XCI6XCIjYTlhOWE5XCIsXCJkYXJrZ3JlZW5cIjpcIiMwMDY0MDBcIixcImRhcmtraGFraVwiOlwiI2JkYjc2YlwiLFwiZGFya21hZ2VudGFcIjpcIiM4YjAwOGJcIixcImRhcmtvbGl2ZWdyZWVuXCI6XCIjNTU2YjJmXCIsXCJkYXJrb3JhbmdlXCI6XCIjZmY4YzAwXCIsXCJkYXJrb3JjaGlkXCI6XCIjOTkzMmNjXCIsXCJkYXJrcmVkXCI6XCIjOGIwMDAwXCIsXCJkYXJrc2FsbW9uXCI6XCIjZTk5NjdhXCIsXCJkYXJrc2VhZ3JlZW5cIjpcIiM4ZmJjOGZcIixcImRhcmtzbGF0ZWJsdWVcIjpcIiM0ODNkOGJcIixcImRhcmtzbGF0ZWdyYXlcIjpcIiMyZjRmNGZcIixcImRhcmt0dXJxdW9pc2VcIjpcIiMwMGNlZDFcIixcImRhcmt2aW9sZXRcIjpcIiM5NDAwZDNcIixcImRlZXBwaW5rXCI6XCIjZmYxNDkzXCIsXCJkZWVwc2t5Ymx1ZVwiOlwiIzAwYmZmZlwiLFwiZGltZ3JheVwiOlwiIzY5Njk2OVwiLFwiZG9kZ2VyYmx1ZVwiOlwiIzFlOTBmZlwiLFwiZmlyZWJyaWNrXCI6XCIjYjIyMjIyXCIsXCJmbG9yYWx3aGl0ZVwiOlwiI2ZmZmFmMFwiLFwiZm9yZXN0Z3JlZW5cIjpcIiMyMjhiMjJcIixcImZ1Y2hzaWFcIjpcIiNmZjAwZmZcIixcImdhaW5zYm9yb1wiOlwiI2RjZGNkY1wiLFwiZ2hvc3R3aGl0ZVwiOlwiI2Y4ZjhmZlwiLFwiZ29sZFwiOlwiI2ZmZDcwMFwiLFwiZ29sZGVucm9kXCI6XCIjZGFhNTIwXCIsXCJncmF5XCI6XCIjODA4MDgwXCIsXCJncmVlblwiOlwiIzAwODAwMFwiLFwiZ3JlZW55ZWxsb3dcIjpcIiNhZGZmMmZcIixcImhvbmV5ZGV3XCI6XCIjZjBmZmYwXCIsXCJob3RwaW5rXCI6XCIjZmY2OWI0XCIsXCJpbmRpYW5yZWRcIjpcIiNjZDVjNWNcIixcImluZGlnb1wiOlwiIzRiMDA4MlwiLFwiaXZvcnlcIjpcIiNmZmZmZjBcIixcImtoYWtpXCI6XCIjZjBlNjhjXCIsXCJsYXZlbmRlclwiOlwiI2U2ZTZmYVwiLFwibGF2ZW5kZXJibHVzaFwiOlwiI2ZmZjBmNVwiLFwibGF3bmdyZWVuXCI6XCIjN2NmYzAwXCIsXCJsZW1vbmNoaWZmb25cIjpcIiNmZmZhY2RcIixcImxpZ2h0Ymx1ZVwiOlwiI2FkZDhlNlwiLFwibGlnaHRjb3JhbFwiOlwiI2YwODA4MFwiLFwibGlnaHRjeWFuXCI6XCIjZTBmZmZmXCIsXCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOlwiI2ZhZmFkMlwiLFwibGlnaHRncmV5XCI6XCIjZDNkM2QzXCIsXCJsaWdodGdyZWVuXCI6XCIjOTBlZTkwXCIsXCJsaWdodHBpbmtcIjpcIiNmZmI2YzFcIixcImxpZ2h0c2FsbW9uXCI6XCIjZmZhMDdhXCIsXCJsaWdodHNlYWdyZWVuXCI6XCIjMjBiMmFhXCIsXCJsaWdodHNreWJsdWVcIjpcIiM4N2NlZmFcIixcImxpZ2h0c2xhdGVncmF5XCI6XCIjNzc4ODk5XCIsXCJsaWdodHN0ZWVsYmx1ZVwiOlwiI2IwYzRkZVwiLFwibGlnaHR5ZWxsb3dcIjpcIiNmZmZmZTBcIixcImxpbWVcIjpcIiMwMGZmMDBcIixcImxpbWVncmVlblwiOlwiIzMyY2QzMlwiLFwibGluZW5cIjpcIiNmYWYwZTZcIixcIm1hZ2VudGFcIjpcIiNmZjAwZmZcIixcIm1hcm9vblwiOlwiIzgwMDAwMFwiLFwibWVkaXVtYXF1YW1hcmluZVwiOlwiIzY2Y2RhYVwiLFwibWVkaXVtYmx1ZVwiOlwiIzAwMDBjZFwiLFwibWVkaXVtb3JjaGlkXCI6XCIjYmE1NWQzXCIsXCJtZWRpdW1wdXJwbGVcIjpcIiM5MzcwZDhcIixcIm1lZGl1bXNlYWdyZWVuXCI6XCIjM2NiMzcxXCIsXCJtZWRpdW1zbGF0ZWJsdWVcIjpcIiM3YjY4ZWVcIixcIm1lZGl1bXNwcmluZ2dyZWVuXCI6XCIjMDBmYTlhXCIsXCJtZWRpdW10dXJxdW9pc2VcIjpcIiM0OGQxY2NcIixcIm1lZGl1bXZpb2xldHJlZFwiOlwiI2M3MTU4NVwiLFwibWlkbmlnaHRibHVlXCI6XCIjMTkxOTcwXCIsXCJtaW50Y3JlYW1cIjpcIiNmNWZmZmFcIixcIm1pc3R5cm9zZVwiOlwiI2ZmZTRlMVwiLFwibW9jY2FzaW5cIjpcIiNmZmU0YjVcIixcIm5hdmFqb3doaXRlXCI6XCIjZmZkZWFkXCIsXCJuYXZ5XCI6XCIjMDAwMDgwXCIsXCJvbGRsYWNlXCI6XCIjZmRmNWU2XCIsXCJvbGl2ZVwiOlwiIzgwODAwMFwiLFwib2xpdmVkcmFiXCI6XCIjNmI4ZTIzXCIsXCJvcmFuZ2VcIjpcIiNmZmE1MDBcIixcIm9yYW5nZXJlZFwiOlwiI2ZmNDUwMFwiLFwib3JjaGlkXCI6XCIjZGE3MGQ2XCIsXCJwYWxlZ29sZGVucm9kXCI6XCIjZWVlOGFhXCIsXCJwYWxlZ3JlZW5cIjpcIiM5OGZiOThcIixcInBhbGV0dXJxdW9pc2VcIjpcIiNhZmVlZWVcIixcInBhbGV2aW9sZXRyZWRcIjpcIiNkODcwOTNcIixcInBhcGF5YXdoaXBcIjpcIiNmZmVmZDVcIixcInBlYWNocHVmZlwiOlwiI2ZmZGFiOVwiLFwicGVydVwiOlwiI2NkODUzZlwiLFwicGlua1wiOlwiI2ZmYzBjYlwiLFwicGx1bVwiOlwiI2RkYTBkZFwiLFwicG93ZGVyYmx1ZVwiOlwiI2IwZTBlNlwiLFwicHVycGxlXCI6XCIjODAwMDgwXCIsXCJyZWRcIjpcIiNmZjAwMDBcIixcInJvc3licm93blwiOlwiI2JjOGY4ZlwiLFwicm95YWxibHVlXCI6XCIjNDE2OWUxXCIsXCJzYWRkbGVicm93blwiOlwiIzhiNDUxM1wiLFwic2FsbW9uXCI6XCIjZmE4MDcyXCIsXCJzYW5keWJyb3duXCI6XCIjZjRhNDYwXCIsXCJzZWFncmVlblwiOlwiIzJlOGI1N1wiLFwic2Vhc2hlbGxcIjpcIiNmZmY1ZWVcIixcInNpZW5uYVwiOlwiI2EwNTIyZFwiLFwic2lsdmVyXCI6XCIjYzBjMGMwXCIsXCJza3libHVlXCI6XCIjODdjZWViXCIsXCJzbGF0ZWJsdWVcIjpcIiM2YTVhY2RcIixcInNsYXRlZ3JheVwiOlwiIzcwODA5MFwiLFwic25vd1wiOlwiI2ZmZmFmYVwiLFwic3ByaW5nZ3JlZW5cIjpcIiMwMGZmN2ZcIixcInN0ZWVsYmx1ZVwiOlwiIzQ2ODJiNFwiLFwidGFuXCI6XCIjZDJiNDhjXCIsXCJ0ZWFsXCI6XCIjMDA4MDgwXCIsXCJ0aGlzdGxlXCI6XCIjZDhiZmQ4XCIsXCJ0b21hdG9cIjpcIiNmZjYzNDdcIixcInR1cnF1b2lzZVwiOlwiIzQwZTBkMFwiLFwidmlvbGV0XCI6XCIjZWU4MmVlXCIsXCJ3aGVhdFwiOlwiI2Y1ZGViM1wiLFwid2hpdGVcIjpcIiNmZmZmZmZcIixcIndoaXRlc21va2VcIjpcIiNmNWY1ZjVcIixcInllbGxvd1wiOlwiI2ZmZmYwMFwiLFwieWVsbG93Z3JlZW5cIjpcIiM5YWNkMzJcIlxuICB9O1xuXG4gIGlmICh0eXBlb2YgY29sb3JzW2tleV0gIT0gJ3VuZGVmaW5lZCcpIHJldHVybiBjb2xvcnNba2V5XTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2sgaGV4IGNvbG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSGV4KGNvbG9yKSB7XG4gIHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChjb2xvcik7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgc3RyaW5nIGlzIGNvbG9yIG9yIG5vdFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xvcihzdHIpIHtcblxuICBpZiAoIWNoZWNrSGV4KHN0cikpIHtcbiAgICBjb25zdCBzdHJUZXN0ID0gY29sb3JOYW1lVG9IZXgoc3RyKTtcbiAgICBpZiAoIWNoZWNrSGV4KHN0clRlc3QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcblxufVxuXG5cbi8qKlxuICogQ29udmVydCB1cmwgdG8gYmFzZTY0XG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHQ9e31dXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRhVVJMKHVybCwgb3B0ID0ge30pIHtcbiAgcmV0dXJuIGZldGNoKHVybCwgb3B0KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAudGhlbihibG9iID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgIH0pKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBjb3JlIGZyb20gJy4vY29yZSc7XG5cbndpbmRvdy5DYXJkTWFrZXIgPSBjb3JlO1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==